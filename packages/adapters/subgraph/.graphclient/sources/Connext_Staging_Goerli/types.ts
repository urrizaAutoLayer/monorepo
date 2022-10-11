
import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ConnextStagingGoerliTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  staginggoerli_BigDecimal: any;
  BigInt: bigint;
  staginggoerli_Bytes: any;
};

export type staginggoerli_AggregateRoot = {
  id: Scalars['ID'];
  root: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_AggregateRoot_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AggregateRoot_orderBy =
  | 'id'
  | 'root';

export type staginggoerli_Asset = {
  id: Scalars['ID'];
  key: Scalars['staginggoerli_Bytes'];
  canonicalId: Scalars['staginggoerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  adoptedAsset: Scalars['staginggoerli_Bytes'];
  localAsset: Scalars['staginggoerli_Bytes'];
  blockNumber: Scalars['BigInt'];
};

export type staginggoerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: staginggoerli_Router;
  asset: staginggoerli_Asset;
};

export type staginggoerli_AssetBalance_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  amount?: InputMaybe<Scalars['BigInt']>;
  amount_not?: InputMaybe<Scalars['BigInt']>;
  amount_gt?: InputMaybe<Scalars['BigInt']>;
  amount_lt?: InputMaybe<Scalars['BigInt']>;
  amount_gte?: InputMaybe<Scalars['BigInt']>;
  amount_lte?: InputMaybe<Scalars['BigInt']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  router?: InputMaybe<Scalars['String']>;
  router_not?: InputMaybe<Scalars['String']>;
  router_gt?: InputMaybe<Scalars['String']>;
  router_lt?: InputMaybe<Scalars['String']>;
  router_gte?: InputMaybe<Scalars['String']>;
  router_lte?: InputMaybe<Scalars['String']>;
  router_in?: InputMaybe<Array<Scalars['String']>>;
  router_not_in?: InputMaybe<Array<Scalars['String']>>;
  router_contains?: InputMaybe<Scalars['String']>;
  router_contains_nocase?: InputMaybe<Scalars['String']>;
  router_not_contains?: InputMaybe<Scalars['String']>;
  router_not_contains_nocase?: InputMaybe<Scalars['String']>;
  router_starts_with?: InputMaybe<Scalars['String']>;
  router_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_starts_with?: InputMaybe<Scalars['String']>;
  router_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  router_ends_with?: InputMaybe<Scalars['String']>;
  router_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_not_ends_with?: InputMaybe<Scalars['String']>;
  router_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  router_?: InputMaybe<staginggoerli_Router_filter>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type staginggoerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  key?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  key_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adoptedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Asset_orderBy =
  | 'id'
  | 'key'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'adoptedAsset'
  | 'localAsset'
  | 'blockNumber';

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type staginggoerli_ConnectorMeta = {
  id: Scalars['ID'];
  spokeDomain: Scalars['BigInt'];
  hubDomain: Scalars['BigInt'];
  amb: Scalars['staginggoerli_Bytes'];
  rootManager: Scalars['staginggoerli_Bytes'];
  mirrorConnector: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_ConnectorMeta_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  amb?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  amb_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  amb_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  amb_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  rootManager_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  rootManager_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootManager_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  mirrorConnector_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  mirrorConnector_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  mirrorConnector_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_ConnectorMeta_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'amb'
  | 'rootManager'
  | 'mirrorConnector';

export type staginggoerli_DestinationMessage = {
  id: Scalars['ID'];
  leaf?: Maybe<Scalars['staginggoerli_Bytes']>;
  processed?: Maybe<Scalars['Boolean']>;
  returnData?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_DestinationMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  leaf?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  processed?: InputMaybe<Scalars['Boolean']>;
  processed_not?: InputMaybe<Scalars['Boolean']>;
  processed_in?: InputMaybe<Array<Scalars['Boolean']>>;
  processed_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  returnData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  returnData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  returnData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  returnData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  returnData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  returnData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_DestinationMessage_orderBy =
  | 'id'
  | 'leaf'
  | 'processed'
  | 'returnData'
  | 'transactionHash';

export type staginggoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  delegate?: Maybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  asset?: Maybe<staginggoerli_Asset>;
  executedCaller?: Maybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type staginggoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
};

export type staginggoerli_DestinationTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<staginggoerli_Router_filter>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  executedCaller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  executedTimestamp?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  executedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  executedGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  executedBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledCaller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  reconciledTimestamp?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_not?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledGasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledGasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_not?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  reconciledBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  reconciledBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'routers'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'executedCaller'
  | 'executedTransactionHash'
  | 'executedTimestamp'
  | 'executedGasPrice'
  | 'executedGasLimit'
  | 'executedBlockNumber'
  | 'reconciledCaller'
  | 'reconciledTransactionHash'
  | 'reconciledTimestamp'
  | 'reconciledGasPrice'
  | 'reconciledGasLimit'
  | 'reconciledBlockNumber';

/** Defines the order direction, either ascending or descending */
export type staginggoerli_OrderDirection =
  | 'asc'
  | 'desc';

export type staginggoerli_OriginMessage = {
  id: Scalars['ID'];
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  leaf?: Maybe<Scalars['staginggoerli_Bytes']>;
  index?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['staginggoerli_Bytes']>;
  message?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  rootCount?: Maybe<staginggoerli_RootCount>;
};

export type staginggoerli_OriginMessage_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  leaf?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  leaf_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  leaf_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  index?: InputMaybe<Scalars['BigInt']>;
  index_not?: InputMaybe<Scalars['BigInt']>;
  index_gt?: InputMaybe<Scalars['BigInt']>;
  index_lt?: InputMaybe<Scalars['BigInt']>;
  index_gte?: InputMaybe<Scalars['BigInt']>;
  index_lte?: InputMaybe<Scalars['BigInt']>;
  index_in?: InputMaybe<Array<Scalars['BigInt']>>;
  index_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  rootCount?: InputMaybe<Scalars['String']>;
  rootCount_not?: InputMaybe<Scalars['String']>;
  rootCount_gt?: InputMaybe<Scalars['String']>;
  rootCount_lt?: InputMaybe<Scalars['String']>;
  rootCount_gte?: InputMaybe<Scalars['String']>;
  rootCount_lte?: InputMaybe<Scalars['String']>;
  rootCount_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_not_in?: InputMaybe<Array<Scalars['String']>>;
  rootCount_contains?: InputMaybe<Scalars['String']>;
  rootCount_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_contains?: InputMaybe<Scalars['String']>;
  rootCount_not_contains_nocase?: InputMaybe<Scalars['String']>;
  rootCount_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with?: InputMaybe<Scalars['String']>;
  rootCount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with?: InputMaybe<Scalars['String']>;
  rootCount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  rootCount_?: InputMaybe<staginggoerli_RootCount_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_OriginMessage_orderBy =
  | 'id'
  | 'transferId'
  | 'destinationDomain'
  | 'leaf'
  | 'index'
  | 'root'
  | 'message'
  | 'transactionHash'
  | 'rootCount';

export type staginggoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  messageHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  canonicalDomain?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  delegate?: Maybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  slippage?: Maybe<Scalars['BigInt']>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: Maybe<Scalars['BigInt']>;
  normalizedIn?: Maybe<Scalars['BigInt']>;
  canonicalId?: Maybe<Scalars['staginggoerli_Bytes']>;
  asset?: Maybe<staginggoerli_Asset>;
  message?: Maybe<staginggoerli_OriginMessage>;
  caller?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_OriginTransfer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  chainId?: InputMaybe<Scalars['BigInt']>;
  chainId_not?: InputMaybe<Scalars['BigInt']>;
  chainId_gt?: InputMaybe<Scalars['BigInt']>;
  chainId_lt?: InputMaybe<Scalars['BigInt']>;
  chainId_gte?: InputMaybe<Scalars['BigInt']>;
  chainId_lte?: InputMaybe<Scalars['BigInt']>;
  chainId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  chainId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transferId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  messageHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  messageHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  messageHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  messageHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: InputMaybe<Scalars['BigInt']>;
  originDomain_not?: InputMaybe<Scalars['BigInt']>;
  originDomain_gt?: InputMaybe<Scalars['BigInt']>;
  originDomain_lt?: InputMaybe<Scalars['BigInt']>;
  originDomain_gte?: InputMaybe<Scalars['BigInt']>;
  originDomain_lte?: InputMaybe<Scalars['BigInt']>;
  originDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_not?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lt?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_gte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_lte?: InputMaybe<Scalars['BigInt']>;
  destinationDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  destinationDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  delegate_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  delegate_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  slippage?: InputMaybe<Scalars['BigInt']>;
  slippage_not?: InputMaybe<Scalars['BigInt']>;
  slippage_gt?: InputMaybe<Scalars['BigInt']>;
  slippage_lt?: InputMaybe<Scalars['BigInt']>;
  slippage_gte?: InputMaybe<Scalars['BigInt']>;
  slippage_lte?: InputMaybe<Scalars['BigInt']>;
  slippage_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippage_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmt_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmt_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_not?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lt?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_gte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_lte?: InputMaybe<Scalars['BigInt']>;
  normalizedIn_in?: InputMaybe<Array<Scalars['BigInt']>>;
  normalizedIn_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  asset?: InputMaybe<Scalars['String']>;
  asset_not?: InputMaybe<Scalars['String']>;
  asset_gt?: InputMaybe<Scalars['String']>;
  asset_lt?: InputMaybe<Scalars['String']>;
  asset_gte?: InputMaybe<Scalars['String']>;
  asset_lte?: InputMaybe<Scalars['String']>;
  asset_in?: InputMaybe<Array<Scalars['String']>>;
  asset_not_in?: InputMaybe<Array<Scalars['String']>>;
  asset_contains?: InputMaybe<Scalars['String']>;
  asset_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_not_contains?: InputMaybe<Scalars['String']>;
  asset_not_contains_nocase?: InputMaybe<Scalars['String']>;
  asset_starts_with?: InputMaybe<Scalars['String']>;
  asset_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_starts_with?: InputMaybe<Scalars['String']>;
  asset_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  asset_ends_with?: InputMaybe<Scalars['String']>;
  asset_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_not_ends_with?: InputMaybe<Scalars['String']>;
  asset_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  asset_?: InputMaybe<staginggoerli_Asset_filter>;
  message?: InputMaybe<Scalars['String']>;
  message_not?: InputMaybe<Scalars['String']>;
  message_gt?: InputMaybe<Scalars['String']>;
  message_lt?: InputMaybe<Scalars['String']>;
  message_gte?: InputMaybe<Scalars['String']>;
  message_lte?: InputMaybe<Scalars['String']>;
  message_in?: InputMaybe<Array<Scalars['String']>>;
  message_not_in?: InputMaybe<Array<Scalars['String']>>;
  message_contains?: InputMaybe<Scalars['String']>;
  message_contains_nocase?: InputMaybe<Scalars['String']>;
  message_not_contains?: InputMaybe<Scalars['String']>;
  message_not_contains_nocase?: InputMaybe<Scalars['String']>;
  message_starts_with?: InputMaybe<Scalars['String']>;
  message_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_starts_with?: InputMaybe<Scalars['String']>;
  message_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  message_ends_with?: InputMaybe<Scalars['String']>;
  message_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_not_ends_with?: InputMaybe<Scalars['String']>;
  message_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  message_?: InputMaybe<staginggoerli_OriginMessage_filter>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'status'
  | 'messageHash'
  | 'originDomain'
  | 'destinationDomain'
  | 'canonicalDomain'
  | 'to'
  | 'delegate'
  | 'receiveLocal'
  | 'callData'
  | 'slippage'
  | 'originSender'
  | 'bridgedAmt'
  | 'normalizedIn'
  | 'canonicalId'
  | 'asset'
  | 'message'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_sequencer?: Maybe<staginggoerli_Sequencer>;
  staginggoerli_sequencers: Array<staginggoerli_Sequencer>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_destinationMessage?: Maybe<staginggoerli_DestinationMessage>;
  staginggoerli_destinationMessages: Array<staginggoerli_DestinationMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  staginggoerli_connectorMeta?: Maybe<staginggoerli_ConnectorMeta>;
  staginggoerli_connectorMetas: Array<staginggoerli_ConnectorMeta>;
  staginggoerli_rootCount?: Maybe<staginggoerli_RootCount>;
  staginggoerli_rootCounts: Array<staginggoerli_RootCount>;
  staginggoerli_rootMessageSent?: Maybe<staginggoerli_RootMessageSent>;
  staginggoerli_rootMessageSents: Array<staginggoerli_RootMessageSent>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};


export type Querystaginggoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Sequencer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Sequencer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_ConnectorMeta_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootCount_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootCount_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootMessageSent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type staginggoerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_Relayer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  relayer?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type staginggoerli_RootCount = {
  id: Scalars['ID'];
  count: Scalars['BigInt'];
};

export type staginggoerli_RootCount_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_RootCount_orderBy =
  | 'id'
  | 'count';

export type staginggoerli_RootMessageSent = {
  id: Scalars['ID'];
  spokeDomain?: Maybe<Scalars['BigInt']>;
  hubDomain?: Maybe<Scalars['BigInt']>;
  root?: Maybe<Scalars['staginggoerli_Bytes']>;
  count?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type staginggoerli_RootMessageSent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  spokeDomain?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_not?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lt?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_gte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_lte?: InputMaybe<Scalars['BigInt']>;
  spokeDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  spokeDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain?: InputMaybe<Scalars['BigInt']>;
  hubDomain_not?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lt?: InputMaybe<Scalars['BigInt']>;
  hubDomain_gte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_lte?: InputMaybe<Scalars['BigInt']>;
  hubDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hubDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  root?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  root_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  root_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  count?: InputMaybe<Scalars['BigInt']>;
  count_not?: InputMaybe<Scalars['BigInt']>;
  count_gt?: InputMaybe<Scalars['BigInt']>;
  count_lt?: InputMaybe<Scalars['BigInt']>;
  count_gte?: InputMaybe<Scalars['BigInt']>;
  count_lte?: InputMaybe<Scalars['BigInt']>;
  count_in?: InputMaybe<Array<Scalars['BigInt']>>;
  count_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice?: InputMaybe<Scalars['BigInt']>;
  gasPrice_not?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lt?: InputMaybe<Scalars['BigInt']>;
  gasPrice_gte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_lte?: InputMaybe<Scalars['BigInt']>;
  gasPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit?: InputMaybe<Scalars['BigInt']>;
  gasLimit_not?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lt?: InputMaybe<Scalars['BigInt']>;
  gasLimit_gte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_lte?: InputMaybe<Scalars['BigInt']>;
  gasLimit_in?: InputMaybe<Array<Scalars['BigInt']>>;
  gasLimit_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_RootMessageSent_orderBy =
  | 'id'
  | 'spokeDomain'
  | 'hubDomain'
  | 'root'
  | 'count'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type staginggoerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['staginggoerli_Bytes']>;
  recipient?: Maybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['staginggoerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<staginggoerli_AssetBalance>;
};


export type staginggoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
};

export type staginggoerli_Router_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  owner?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<staginggoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type staginggoerli_Sequencer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  sequencer?: Maybe<Scalars['staginggoerli_Bytes']>;
};

export type staginggoerli_Sequencer_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  isActive?: InputMaybe<Scalars['Boolean']>;
  isActive_not?: InputMaybe<Scalars['Boolean']>;
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>;
  isActive_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  sequencer?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sequencer_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sequencer_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sequencer_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Sequencer_orderBy =
  | 'id'
  | 'isActive'
  | 'sequencer';

export type staginggoerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_Setting_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  maxRoutersPerTransfer?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_not?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lt?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_gte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_lte?: InputMaybe<Scalars['BigInt']>;
  maxRoutersPerTransfer_in?: InputMaybe<Array<Scalars['BigInt']>>;
  maxRoutersPerTransfer_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type staginggoerli_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['staginggoerli_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  staginggoerli_asset?: Maybe<staginggoerli_Asset>;
  staginggoerli_assets: Array<staginggoerli_Asset>;
  staginggoerli_assetBalance?: Maybe<staginggoerli_AssetBalance>;
  staginggoerli_assetBalances: Array<staginggoerli_AssetBalance>;
  staginggoerli_router?: Maybe<staginggoerli_Router>;
  staginggoerli_routers: Array<staginggoerli_Router>;
  staginggoerli_setting?: Maybe<staginggoerli_Setting>;
  staginggoerli_settings: Array<staginggoerli_Setting>;
  staginggoerli_relayer?: Maybe<staginggoerli_Relayer>;
  staginggoerli_relayers: Array<staginggoerli_Relayer>;
  staginggoerli_sequencer?: Maybe<staginggoerli_Sequencer>;
  staginggoerli_sequencers: Array<staginggoerli_Sequencer>;
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  staginggoerli_originMessage?: Maybe<staginggoerli_OriginMessage>;
  staginggoerli_originMessages: Array<staginggoerli_OriginMessage>;
  staginggoerli_destinationMessage?: Maybe<staginggoerli_DestinationMessage>;
  staginggoerli_destinationMessages: Array<staginggoerli_DestinationMessage>;
  staginggoerli_aggregateRoot?: Maybe<staginggoerli_AggregateRoot>;
  staginggoerli_aggregateRoots: Array<staginggoerli_AggregateRoot>;
  staginggoerli_connectorMeta?: Maybe<staginggoerli_ConnectorMeta>;
  staginggoerli_connectorMetas: Array<staginggoerli_ConnectorMeta>;
  staginggoerli_rootCount?: Maybe<staginggoerli_RootCount>;
  staginggoerli_rootCounts: Array<staginggoerli_RootCount>;
  staginggoerli_rootMessageSent?: Maybe<staginggoerli_RootMessageSent>;
  staginggoerli_rootMessageSents: Array<staginggoerli_RootMessageSent>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
};


export type Subscriptionstaginggoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Asset_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AssetBalance_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Router_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Router_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Setting_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Relayer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sequencerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sequencersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_Sequencer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_Sequencer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_StableSwap_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationTransfer_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_originMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_OriginMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_OriginMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationMessageArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_destinationMessagesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_DestinationMessage_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_DestinationMessage_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_aggregateRootArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_aggregateRootsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_AggregateRoot_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_AggregateRoot_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_connectorMetaArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_connectorMetasArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_ConnectorMeta_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_ConnectorMeta_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootCountArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootCountsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootCount_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootCount_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootMessageSentArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_rootMessageSentsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_RootMessageSent_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_RootMessageSent_filter>;
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};

export type staginggoerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type staginggoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['staginggoerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type staginggoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: staginggoerli__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

}
export type QueryConnextStagingGoerliSdk = {
  /** null **/
  staginggoerli_asset: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_asset'], ConnextStagingGoerliTypes.Querystaginggoerli_assetArgs, MeshContext>,
  /** null **/
  staginggoerli_assets: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_assets'], ConnextStagingGoerliTypes.Querystaginggoerli_assetsArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalance: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_assetBalance'], ConnextStagingGoerliTypes.Querystaginggoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalances: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_assetBalances'], ConnextStagingGoerliTypes.Querystaginggoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  staginggoerli_router: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_router'], ConnextStagingGoerliTypes.Querystaginggoerli_routerArgs, MeshContext>,
  /** null **/
  staginggoerli_routers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_routers'], ConnextStagingGoerliTypes.Querystaginggoerli_routersArgs, MeshContext>,
  /** null **/
  staginggoerli_setting: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_setting'], ConnextStagingGoerliTypes.Querystaginggoerli_settingArgs, MeshContext>,
  /** null **/
  staginggoerli_settings: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_settings'], ConnextStagingGoerliTypes.Querystaginggoerli_settingsArgs, MeshContext>,
  /** null **/
  staginggoerli_relayer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_relayer'], ConnextStagingGoerliTypes.Querystaginggoerli_relayerArgs, MeshContext>,
  /** null **/
  staginggoerli_relayers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_relayers'], ConnextStagingGoerliTypes.Querystaginggoerli_relayersArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_sequencer'], ConnextStagingGoerliTypes.Querystaginggoerli_sequencerArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_sequencers'], ConnextStagingGoerliTypes.Querystaginggoerli_sequencersArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwap: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_stableSwap'], ConnextStagingGoerliTypes.Querystaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_stableSwaps'], ConnextStagingGoerliTypes.Querystaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originTransfer'], ConnextStagingGoerliTypes.Querystaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originTransfers'], ConnextStagingGoerliTypes.Querystaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationTransfer'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationTransfers'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessage: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originMessage'], ConnextStagingGoerliTypes.Querystaginggoerli_originMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessages: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originMessages'], ConnextStagingGoerliTypes.Querystaginggoerli_originMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationMessage: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationMessage'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationMessages: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationMessages'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoot: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_aggregateRoot'], ConnextStagingGoerliTypes.Querystaginggoerli_aggregateRootArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoots: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_aggregateRoots'], ConnextStagingGoerliTypes.Querystaginggoerli_aggregateRootsArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMeta: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_connectorMeta'], ConnextStagingGoerliTypes.Querystaginggoerli_connectorMetaArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMetas: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_connectorMetas'], ConnextStagingGoerliTypes.Querystaginggoerli_connectorMetasArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCount: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_rootCount'], ConnextStagingGoerliTypes.Querystaginggoerli_rootCountArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCounts: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_rootCounts'], ConnextStagingGoerliTypes.Querystaginggoerli_rootCountsArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSent: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_rootMessageSent'], ConnextStagingGoerliTypes.Querystaginggoerli_rootMessageSentArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSents: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_rootMessageSents'], ConnextStagingGoerliTypes.Querystaginggoerli_rootMessageSentsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  staginggoerli__meta: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli__meta'], ConnextStagingGoerliTypes.Querystaginggoerli__metaArgs, MeshContext>
};

export type MutationConnextStagingGoerliSdk = {

};

export type SubscriptionConnextStagingGoerliSdk = {
  /** null **/
  staginggoerli_asset: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_asset'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_assetArgs, MeshContext>,
  /** null **/
  staginggoerli_assets: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_assets'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_assetsArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalance: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_assetBalance'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  staginggoerli_assetBalances: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_assetBalances'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  staginggoerli_router: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_router'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_routerArgs, MeshContext>,
  /** null **/
  staginggoerli_routers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_routers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_routersArgs, MeshContext>,
  /** null **/
  staginggoerli_setting: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_setting'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_settingArgs, MeshContext>,
  /** null **/
  staginggoerli_settings: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_settings'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_settingsArgs, MeshContext>,
  /** null **/
  staginggoerli_relayer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_relayer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_relayerArgs, MeshContext>,
  /** null **/
  staginggoerli_relayers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_relayers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_relayersArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_sequencer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_sequencerArgs, MeshContext>,
  /** null **/
  staginggoerli_sequencers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_sequencers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_sequencersArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwap: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_stableSwap'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_stableSwaps'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originTransfer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originTransfers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationTransfer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationTransfers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessage: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originMessage'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_originMessages: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originMessages'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationMessage: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationMessage'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationMessageArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationMessages: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationMessages'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationMessagesArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoot: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_aggregateRoot'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_aggregateRootArgs, MeshContext>,
  /** null **/
  staginggoerli_aggregateRoots: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_aggregateRoots'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_aggregateRootsArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMeta: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_connectorMeta'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_connectorMetaArgs, MeshContext>,
  /** null **/
  staginggoerli_connectorMetas: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_connectorMetas'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_connectorMetasArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCount: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_rootCount'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_rootCountArgs, MeshContext>,
  /** null **/
  staginggoerli_rootCounts: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_rootCounts'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_rootCountsArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSent: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_rootMessageSent'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_rootMessageSentArgs, MeshContext>,
  /** null **/
  staginggoerli_rootMessageSents: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_rootMessageSents'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_rootMessageSentsArgs, MeshContext>,
  /** Access to subgraph metadata **/
  staginggoerli__meta: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli__meta'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli__metaArgs, MeshContext>
};
export type ConnextStagingGoerliContext = {
      ["Connext_Staging_Goerli"]: { Query: QueryConnextStagingGoerliSdk, Mutation: MutationConnextStagingGoerliSdk, Subscription: SubscriptionConnextStagingGoerliSdk },
      
    };