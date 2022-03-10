import { BidStatus, SignedBid, StoredBid, getNtpTimeSeconds, Bid } from "@connext/nxtp-utils";

import { StoreChannel } from "../entities";
import { Cache } from ".";

export class AuctionsCache extends Cache {
  /**
   * Stores bid to redis
   *
   * @param bid The signed bid we're going to store
   * @returns success - true, failure - false
   */
  public async storeBid(bid: Bid): Promise<number> {
    const txid = bid.transactionId;
    const router = bid.data.router;
    const curTimeInSecs = await getNtpTimeSeconds();

    const stored = await this.data.hset(
      `${txid}:bid:${router}`,
      "signedBid",
      JSON.stringify(bid),
      "status",
      BidStatus.Pending,
      "lastUpdate",
      curTimeInSecs,
    );

    await this.publish(StoreChannel.NewBid, bid);

    if (stored !== 1) {
      throw new Error("Failed to store bid");
    };
    // TODO: return number of bids for a txId
  }

  /**
   * Updates the status of bid
   *
   * @param bid The signed bid we're going to update
   * @param bidStatus The status of bid
   * @returns success - true, failure - false
   */
  public async updateBid(bid: SignedBid, bidStatus: BidStatus): Promise<boolean> {
    const txid = bid.bid.transactionId;
    const router = bid.bid.data.router;
    const curTimeInSecs = await getNtpTimeSeconds();

    const updated = await this.data.hset(
      `${txid}:bid:${router}`,
      "signedBid",
      JSON.stringify(bid),
      "status",
      bidStatus,
      "lastUpdate",
      curTimeInSecs,
    );

    if (updated === 1) return true;
    else return false;
  }

  /**
   * Gets the bids by transactionId
   *
   * @param transactionId The transactionId of the bids that we're going to get
   * @returns Auction bids that were stored with the status
   */
  public async getBidsByTransactionId(transactionId: string): Promise<StoredBid[]> {
    const storedBids: StoredBid[] = [];

    const bidStream = this.data.scanStream({
      match: `${transactionId}:bid:*`,
    });

    return new Promise((res, rej) => {
      bidStream.on("data", async (resultKeys: string) => {
        for (const key of resultKeys) {
          // 1 - "data" - key
          // 2 - value for the `data`
          // 3 - "status" - key
          // 4 - value for the `status`
          // 5 - `lastUpdate` - key
          // 6 - value for the `lastUpdate`
          const record = await this.data.hgetall(key);
          const bidStatus = record["status"];
          const lastUpdate = Number(record["lastUpdate"]);

          storedBids.push({
            signedBid: JSON.parse(record["signedBid"]) as SignedBid,
            status: bidStatus as BidStatus,
            lastUpdate,
          });
        }
      });
      bidStream.on("end", async () => {
        res(storedBids);
      });
      bidStream.on("error", (error: string) => {
        this.logger.debug(error);
        rej(error);
      });
    });
  }
}
