// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StableSwapOptimismGoerliTypes {
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
  optimismgoerli_BigDecimal: any;
  BigInt: any;
  optimismgoerli_Bytes: any;
};

export type optimismgoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type optimismgoerli_Block_height = {
  hash?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type optimismgoerli_OrderDirection =
  | 'asc'
  | 'desc';

export type optimismgoerli_PooledToken = {
  id: Scalars['ID'];
  asset: Scalars['optimismgoerli_Bytes'];
};

export type optimismgoerli_PooledToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_PooledToken_orderBy =
  | 'id'
  | 'asset';

export type Query = {
  optimismgoerli_systemInfo?: Maybe<optimismgoerli_SystemInfo>;
  optimismgoerli_systemInfos: Array<optimismgoerli_SystemInfo>;
  optimismgoerli_pooledToken?: Maybe<optimismgoerli_PooledToken>;
  optimismgoerli_pooledTokens: Array<optimismgoerli_PooledToken>;
  optimismgoerli_stableSwap?: Maybe<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwaps: Array<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwapAddLiquidityEvent?: Maybe<optimismgoerli_StableSwapAddLiquidityEvent>;
  optimismgoerli_stableSwapAddLiquidityEvents: Array<optimismgoerli_StableSwapAddLiquidityEvent>;
  optimismgoerli_stableSwapRemoveLiquidityEvent?: Maybe<optimismgoerli_StableSwapRemoveLiquidityEvent>;
  optimismgoerli_stableSwapRemoveLiquidityEvents: Array<optimismgoerli_StableSwapRemoveLiquidityEvent>;
  optimismgoerli_stableSwapExchange?: Maybe<optimismgoerli_StableSwapExchange>;
  optimismgoerli_stableSwapExchanges: Array<optimismgoerli_StableSwapExchange>;
  optimismgoerli_swapDailyVolume?: Maybe<optimismgoerli_SwapDailyVolume>;
  optimismgoerli_swapDailyVolumes: Array<optimismgoerli_SwapDailyVolume>;
  optimismgoerli_swapHourlyVolume?: Maybe<optimismgoerli_SwapHourlyVolume>;
  optimismgoerli_swapHourlyVolumes: Array<optimismgoerli_SwapHourlyVolume>;
  optimismgoerli_swapWeeklyVolume?: Maybe<optimismgoerli_SwapWeeklyVolume>;
  optimismgoerli_swapWeeklyVolumes: Array<optimismgoerli_SwapWeeklyVolume>;
  optimismgoerli_stableSwapEvent?: Maybe<optimismgoerli_StableSwapEvent>;
  optimismgoerli_stableSwapEvents: Array<optimismgoerli_StableSwapEvent>;
  optimismgoerli_swapTradeVolume?: Maybe<optimismgoerli_SwapTradeVolume>;
  optimismgoerli_swapTradeVolumes: Array<optimismgoerli_SwapTradeVolume>;
  /** Access to subgraph metadata */
  optimismgoerli__meta?: Maybe<optimismgoerli__Meta_>;
};


export type Queryoptimismgoerli_systemInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_systemInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SystemInfo_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SystemInfo_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_PooledToken_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwap_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapExchange_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapDailyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapHourlyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapWeeklyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapTradeVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryoptimismgoerli__metaArgs = {
  block?: InputMaybe<optimismgoerli_Block_height>;
};

export type optimismgoerli_StableSwap = {
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  key: Scalars['optimismgoerli_Bytes'];
  canonicalId?: Maybe<Scalars['optimismgoerli_Bytes']>;
  domain?: Maybe<Scalars['BigInt']>;
  swapPool?: Maybe<Scalars['optimismgoerli_Bytes']>;
  lpToken?: Maybe<Scalars['optimismgoerli_Bytes']>;
  initialA?: Maybe<Scalars['BigInt']>;
  futureA?: Maybe<Scalars['BigInt']>;
  initialATime?: Maybe<Scalars['BigInt']>;
  futureATime?: Maybe<Scalars['BigInt']>;
  swapFee?: Maybe<Scalars['BigInt']>;
  adminFee?: Maybe<Scalars['BigInt']>;
  pooledTokens: Array<optimismgoerli_PooledToken>;
  tokenPrecisionMultipliers: Array<Scalars['BigInt']>;
  balances: Array<Scalars['BigInt']>;
  adminFees: Array<Scalars['BigInt']>;
  virtualPrice: Scalars['BigInt'];
  invariant: Scalars['BigInt'];
  lpTokenSupply: Scalars['BigInt'];
  events?: Maybe<Array<optimismgoerli_StableSwapEvent>>;
  exchanges?: Maybe<Array<optimismgoerli_StableSwapExchange>>;
  hourlyVolumes?: Maybe<Array<optimismgoerli_SwapHourlyVolume>>;
  dailyVolumes?: Maybe<Array<optimismgoerli_SwapDailyVolume>>;
  weeklyVolumes?: Maybe<Array<optimismgoerli_SwapWeeklyVolume>>;
};


export type optimismgoerli_StableSwappooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_PooledToken_filter>;
};


export type optimismgoerli_StableSwapeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapEvent_filter>;
};


export type optimismgoerli_StableSwapexchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapExchange_filter>;
};


export type optimismgoerli_StableSwaphourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapHourlyVolume_filter>;
};


export type optimismgoerli_StableSwapdailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapDailyVolume_filter>;
};


export type optimismgoerli_StableSwapweeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapWeeklyVolume_filter>;
};

export type optimismgoerli_StableSwapAddLiquidityEvent = optimismgoerli_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  provider: Scalars['optimismgoerli_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees: Array<Scalars['BigInt']>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['optimismgoerli_Bytes'];
};

export type optimismgoerli_StableSwapAddLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  provider?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  tokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_StableSwapAddLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type optimismgoerli_StableSwapEvent = {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['optimismgoerli_Bytes'];
};

export type optimismgoerli_StableSwapEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_StableSwapEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type optimismgoerli_StableSwapExchange = {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  buyer: Scalars['optimismgoerli_Bytes'];
  boughtId: Scalars['BigInt'];
  tokensBought: Scalars['BigInt'];
  soldId: Scalars['BigInt'];
  tokensSold: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['optimismgoerli_Bytes'];
};

export type optimismgoerli_StableSwapExchange_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  buyer?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  boughtId?: InputMaybe<Scalars['BigInt']>;
  boughtId_not?: InputMaybe<Scalars['BigInt']>;
  boughtId_gt?: InputMaybe<Scalars['BigInt']>;
  boughtId_lt?: InputMaybe<Scalars['BigInt']>;
  boughtId_gte?: InputMaybe<Scalars['BigInt']>;
  boughtId_lte?: InputMaybe<Scalars['BigInt']>;
  boughtId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  boughtId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensBought?: InputMaybe<Scalars['BigInt']>;
  tokensBought_not?: InputMaybe<Scalars['BigInt']>;
  tokensBought_gt?: InputMaybe<Scalars['BigInt']>;
  tokensBought_lt?: InputMaybe<Scalars['BigInt']>;
  tokensBought_gte?: InputMaybe<Scalars['BigInt']>;
  tokensBought_lte?: InputMaybe<Scalars['BigInt']>;
  tokensBought_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensBought_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldId?: InputMaybe<Scalars['BigInt']>;
  soldId_not?: InputMaybe<Scalars['BigInt']>;
  soldId_gt?: InputMaybe<Scalars['BigInt']>;
  soldId_lt?: InputMaybe<Scalars['BigInt']>;
  soldId_gte?: InputMaybe<Scalars['BigInt']>;
  soldId_lte?: InputMaybe<Scalars['BigInt']>;
  soldId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  soldId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSold?: InputMaybe<Scalars['BigInt']>;
  tokensSold_not?: InputMaybe<Scalars['BigInt']>;
  tokensSold_gt?: InputMaybe<Scalars['BigInt']>;
  tokensSold_lt?: InputMaybe<Scalars['BigInt']>;
  tokensSold_gte?: InputMaybe<Scalars['BigInt']>;
  tokensSold_lte?: InputMaybe<Scalars['BigInt']>;
  tokensSold_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokensSold_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_StableSwapExchange_orderBy =
  | 'id'
  | 'stableSwap'
  | 'buyer'
  | 'boughtId'
  | 'tokensBought'
  | 'soldId'
  | 'tokensSold'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type optimismgoerli_StableSwapRemoveLiquidityEvent = optimismgoerli_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  provider: Scalars['optimismgoerli_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees?: Maybe<Array<Scalars['BigInt']>>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['optimismgoerli_Bytes'];
};

export type optimismgoerli_StableSwapRemoveLiquidityEvent_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  provider?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  tokenAmounts?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenAmounts_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  fees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block?: InputMaybe<Scalars['BigInt']>;
  block_not?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transaction?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_StableSwapRemoveLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type optimismgoerli_StableSwap_filter = {
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
  key?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  key_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_not?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_gt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_lt?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_gte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_lte?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['optimismgoerli_Bytes']>>;
  lpToken_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  lpToken_not_contains?: InputMaybe<Scalars['optimismgoerli_Bytes']>;
  initialA?: InputMaybe<Scalars['BigInt']>;
  initialA_not?: InputMaybe<Scalars['BigInt']>;
  initialA_gt?: InputMaybe<Scalars['BigInt']>;
  initialA_lt?: InputMaybe<Scalars['BigInt']>;
  initialA_gte?: InputMaybe<Scalars['BigInt']>;
  initialA_lte?: InputMaybe<Scalars['BigInt']>;
  initialA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA?: InputMaybe<Scalars['BigInt']>;
  futureA_not?: InputMaybe<Scalars['BigInt']>;
  futureA_gt?: InputMaybe<Scalars['BigInt']>;
  futureA_lt?: InputMaybe<Scalars['BigInt']>;
  futureA_gte?: InputMaybe<Scalars['BigInt']>;
  futureA_lte?: InputMaybe<Scalars['BigInt']>;
  futureA_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureA_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime?: InputMaybe<Scalars['BigInt']>;
  initialATime_not?: InputMaybe<Scalars['BigInt']>;
  initialATime_gt?: InputMaybe<Scalars['BigInt']>;
  initialATime_lt?: InputMaybe<Scalars['BigInt']>;
  initialATime_gte?: InputMaybe<Scalars['BigInt']>;
  initialATime_lte?: InputMaybe<Scalars['BigInt']>;
  initialATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  initialATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime?: InputMaybe<Scalars['BigInt']>;
  futureATime_not?: InputMaybe<Scalars['BigInt']>;
  futureATime_gt?: InputMaybe<Scalars['BigInt']>;
  futureATime_lt?: InputMaybe<Scalars['BigInt']>;
  futureATime_gte?: InputMaybe<Scalars['BigInt']>;
  futureATime_lte?: InputMaybe<Scalars['BigInt']>;
  futureATime_in?: InputMaybe<Array<Scalars['BigInt']>>;
  futureATime_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee?: InputMaybe<Scalars['BigInt']>;
  swapFee_not?: InputMaybe<Scalars['BigInt']>;
  swapFee_gt?: InputMaybe<Scalars['BigInt']>;
  swapFee_lt?: InputMaybe<Scalars['BigInt']>;
  swapFee_gte?: InputMaybe<Scalars['BigInt']>;
  swapFee_lte?: InputMaybe<Scalars['BigInt']>;
  swapFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee?: InputMaybe<Scalars['BigInt']>;
  adminFee_not?: InputMaybe<Scalars['BigInt']>;
  adminFee_gt?: InputMaybe<Scalars['BigInt']>;
  adminFee_lt?: InputMaybe<Scalars['BigInt']>;
  adminFee_gte?: InputMaybe<Scalars['BigInt']>;
  adminFee_lte?: InputMaybe<Scalars['BigInt']>;
  adminFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  pooledTokens?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  pooledTokens_?: InputMaybe<optimismgoerli_PooledToken_filter>;
  tokenPrecisionMultipliers?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenPrecisionMultipliers_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  adminFees_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  virtualPrice?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_not?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_gt?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_lt?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_gte?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_lte?: InputMaybe<Scalars['BigInt']>;
  virtualPrice_in?: InputMaybe<Array<Scalars['BigInt']>>;
  virtualPrice_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant?: InputMaybe<Scalars['BigInt']>;
  invariant_not?: InputMaybe<Scalars['BigInt']>;
  invariant_gt?: InputMaybe<Scalars['BigInt']>;
  invariant_lt?: InputMaybe<Scalars['BigInt']>;
  invariant_gte?: InputMaybe<Scalars['BigInt']>;
  invariant_lte?: InputMaybe<Scalars['BigInt']>;
  invariant_in?: InputMaybe<Array<Scalars['BigInt']>>;
  invariant_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_not?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lt?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_gte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_lte?: InputMaybe<Scalars['BigInt']>;
  lpTokenSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  lpTokenSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  events_?: InputMaybe<optimismgoerli_StableSwapEvent_filter>;
  exchanges_?: InputMaybe<optimismgoerli_StableSwapExchange_filter>;
  hourlyVolumes_?: InputMaybe<optimismgoerli_SwapHourlyVolume_filter>;
  dailyVolumes_?: InputMaybe<optimismgoerli_SwapDailyVolume_filter>;
  weeklyVolumes_?: InputMaybe<optimismgoerli_SwapWeeklyVolume_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_StableSwap_orderBy =
  | 'id'
  | 'isActive'
  | 'key'
  | 'canonicalId'
  | 'domain'
  | 'swapPool'
  | 'lpToken'
  | 'initialA'
  | 'futureA'
  | 'initialATime'
  | 'futureATime'
  | 'swapFee'
  | 'adminFee'
  | 'pooledTokens'
  | 'tokenPrecisionMultipliers'
  | 'balances'
  | 'adminFees'
  | 'virtualPrice'
  | 'invariant'
  | 'lpTokenSupply'
  | 'events'
  | 'exchanges'
  | 'hourlyVolumes'
  | 'dailyVolumes'
  | 'weeklyVolumes';

export type Subscription = {
  optimismgoerli_systemInfo?: Maybe<optimismgoerli_SystemInfo>;
  optimismgoerli_systemInfos: Array<optimismgoerli_SystemInfo>;
  optimismgoerli_pooledToken?: Maybe<optimismgoerli_PooledToken>;
  optimismgoerli_pooledTokens: Array<optimismgoerli_PooledToken>;
  optimismgoerli_stableSwap?: Maybe<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwaps: Array<optimismgoerli_StableSwap>;
  optimismgoerli_stableSwapAddLiquidityEvent?: Maybe<optimismgoerli_StableSwapAddLiquidityEvent>;
  optimismgoerli_stableSwapAddLiquidityEvents: Array<optimismgoerli_StableSwapAddLiquidityEvent>;
  optimismgoerli_stableSwapRemoveLiquidityEvent?: Maybe<optimismgoerli_StableSwapRemoveLiquidityEvent>;
  optimismgoerli_stableSwapRemoveLiquidityEvents: Array<optimismgoerli_StableSwapRemoveLiquidityEvent>;
  optimismgoerli_stableSwapExchange?: Maybe<optimismgoerli_StableSwapExchange>;
  optimismgoerli_stableSwapExchanges: Array<optimismgoerli_StableSwapExchange>;
  optimismgoerli_swapDailyVolume?: Maybe<optimismgoerli_SwapDailyVolume>;
  optimismgoerli_swapDailyVolumes: Array<optimismgoerli_SwapDailyVolume>;
  optimismgoerli_swapHourlyVolume?: Maybe<optimismgoerli_SwapHourlyVolume>;
  optimismgoerli_swapHourlyVolumes: Array<optimismgoerli_SwapHourlyVolume>;
  optimismgoerli_swapWeeklyVolume?: Maybe<optimismgoerli_SwapWeeklyVolume>;
  optimismgoerli_swapWeeklyVolumes: Array<optimismgoerli_SwapWeeklyVolume>;
  optimismgoerli_stableSwapEvent?: Maybe<optimismgoerli_StableSwapEvent>;
  optimismgoerli_stableSwapEvents: Array<optimismgoerli_StableSwapEvent>;
  optimismgoerli_swapTradeVolume?: Maybe<optimismgoerli_SwapTradeVolume>;
  optimismgoerli_swapTradeVolumes: Array<optimismgoerli_SwapTradeVolume>;
  /** Access to subgraph metadata */
  optimismgoerli__meta?: Maybe<optimismgoerli__Meta_>;
};


export type Subscriptionoptimismgoerli_systemInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_systemInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SystemInfo_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SystemInfo_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_PooledToken_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_PooledToken_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwap_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapExchange_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapDailyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapHourlyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapWeeklyVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_StableSwapEvent_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<optimismgoerli_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<optimismgoerli_OrderDirection>;
  where?: InputMaybe<optimismgoerli_SwapTradeVolume_filter>;
  block?: InputMaybe<optimismgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionoptimismgoerli__metaArgs = {
  block?: InputMaybe<optimismgoerli_Block_height>;
};

export type optimismgoerli_SwapDailyVolume = optimismgoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['optimismgoerli_BigDecimal'];
};

export type optimismgoerli_SwapDailyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_SwapDailyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type optimismgoerli_SwapHourlyVolume = optimismgoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['optimismgoerli_BigDecimal'];
};

export type optimismgoerli_SwapHourlyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_SwapHourlyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type optimismgoerli_SwapTradeVolume = {
  stableSwap: optimismgoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['optimismgoerli_BigDecimal'];
};

export type optimismgoerli_SwapTradeVolume_filter = {
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_SwapTradeVolume_orderBy =
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type optimismgoerli_SwapWeeklyVolume = optimismgoerli_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: optimismgoerli_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['optimismgoerli_BigDecimal'];
};

export type optimismgoerli_SwapWeeklyVolume_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  stableSwap?: InputMaybe<Scalars['String']>;
  stableSwap_not?: InputMaybe<Scalars['String']>;
  stableSwap_gt?: InputMaybe<Scalars['String']>;
  stableSwap_lt?: InputMaybe<Scalars['String']>;
  stableSwap_gte?: InputMaybe<Scalars['String']>;
  stableSwap_lte?: InputMaybe<Scalars['String']>;
  stableSwap_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_not_in?: InputMaybe<Array<Scalars['String']>>;
  stableSwap_contains?: InputMaybe<Scalars['String']>;
  stableSwap_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains?: InputMaybe<Scalars['String']>;
  stableSwap_not_contains_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with?: InputMaybe<Scalars['String']>;
  stableSwap_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  stableSwap_?: InputMaybe<optimismgoerli_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['optimismgoerli_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['optimismgoerli_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_SwapWeeklyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type optimismgoerli_SystemInfo = {
  id: Scalars['ID'];
  exchangeCount: Scalars['BigInt'];
  swapCount: Scalars['BigInt'];
};

export type optimismgoerli_SystemInfo_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  exchangeCount?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_not?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_gt?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_lt?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_gte?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_lte?: InputMaybe<Scalars['BigInt']>;
  exchangeCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  exchangeCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapCount?: InputMaybe<Scalars['BigInt']>;
  swapCount_not?: InputMaybe<Scalars['BigInt']>;
  swapCount_gt?: InputMaybe<Scalars['BigInt']>;
  swapCount_lt?: InputMaybe<Scalars['BigInt']>;
  swapCount_gte?: InputMaybe<Scalars['BigInt']>;
  swapCount_lte?: InputMaybe<Scalars['BigInt']>;
  swapCount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapCount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<optimismgoerli_BlockChangedFilter>;
};

export type optimismgoerli_SystemInfo_orderBy =
  | 'id'
  | 'exchangeCount'
  | 'swapCount';

export type optimismgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['optimismgoerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type optimismgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: optimismgoerli__Block_;
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

  export type QuerySdk = {
      /** null **/
  optimismgoerli_systemInfo: InContextSdkMethod<Query['optimismgoerli_systemInfo'], Queryoptimismgoerli_systemInfoArgs, MeshContext>,
  /** null **/
  optimismgoerli_systemInfos: InContextSdkMethod<Query['optimismgoerli_systemInfos'], Queryoptimismgoerli_systemInfosArgs, MeshContext>,
  /** null **/
  optimismgoerli_pooledToken: InContextSdkMethod<Query['optimismgoerli_pooledToken'], Queryoptimismgoerli_pooledTokenArgs, MeshContext>,
  /** null **/
  optimismgoerli_pooledTokens: InContextSdkMethod<Query['optimismgoerli_pooledTokens'], Queryoptimismgoerli_pooledTokensArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwap: InContextSdkMethod<Query['optimismgoerli_stableSwap'], Queryoptimismgoerli_stableSwapArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwaps: InContextSdkMethod<Query['optimismgoerli_stableSwaps'], Queryoptimismgoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapAddLiquidityEvent: InContextSdkMethod<Query['optimismgoerli_stableSwapAddLiquidityEvent'], Queryoptimismgoerli_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapAddLiquidityEvents: InContextSdkMethod<Query['optimismgoerli_stableSwapAddLiquidityEvents'], Queryoptimismgoerli_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Query['optimismgoerli_stableSwapRemoveLiquidityEvent'], Queryoptimismgoerli_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Query['optimismgoerli_stableSwapRemoveLiquidityEvents'], Queryoptimismgoerli_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapExchange: InContextSdkMethod<Query['optimismgoerli_stableSwapExchange'], Queryoptimismgoerli_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapExchanges: InContextSdkMethod<Query['optimismgoerli_stableSwapExchanges'], Queryoptimismgoerli_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapDailyVolume: InContextSdkMethod<Query['optimismgoerli_swapDailyVolume'], Queryoptimismgoerli_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapDailyVolumes: InContextSdkMethod<Query['optimismgoerli_swapDailyVolumes'], Queryoptimismgoerli_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapHourlyVolume: InContextSdkMethod<Query['optimismgoerli_swapHourlyVolume'], Queryoptimismgoerli_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapHourlyVolumes: InContextSdkMethod<Query['optimismgoerli_swapHourlyVolumes'], Queryoptimismgoerli_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapWeeklyVolume: InContextSdkMethod<Query['optimismgoerli_swapWeeklyVolume'], Queryoptimismgoerli_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapWeeklyVolumes: InContextSdkMethod<Query['optimismgoerli_swapWeeklyVolumes'], Queryoptimismgoerli_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapEvent: InContextSdkMethod<Query['optimismgoerli_stableSwapEvent'], Queryoptimismgoerli_stableSwapEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapEvents: InContextSdkMethod<Query['optimismgoerli_stableSwapEvents'], Queryoptimismgoerli_stableSwapEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapTradeVolume: InContextSdkMethod<Query['optimismgoerli_swapTradeVolume'], Queryoptimismgoerli_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapTradeVolumes: InContextSdkMethod<Query['optimismgoerli_swapTradeVolumes'], Queryoptimismgoerli_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  optimismgoerli__meta: InContextSdkMethod<Query['optimismgoerli__meta'], Queryoptimismgoerli__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  optimismgoerli_systemInfo: InContextSdkMethod<Subscription['optimismgoerli_systemInfo'], Subscriptionoptimismgoerli_systemInfoArgs, MeshContext>,
  /** null **/
  optimismgoerli_systemInfos: InContextSdkMethod<Subscription['optimismgoerli_systemInfos'], Subscriptionoptimismgoerli_systemInfosArgs, MeshContext>,
  /** null **/
  optimismgoerli_pooledToken: InContextSdkMethod<Subscription['optimismgoerli_pooledToken'], Subscriptionoptimismgoerli_pooledTokenArgs, MeshContext>,
  /** null **/
  optimismgoerli_pooledTokens: InContextSdkMethod<Subscription['optimismgoerli_pooledTokens'], Subscriptionoptimismgoerli_pooledTokensArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwap: InContextSdkMethod<Subscription['optimismgoerli_stableSwap'], Subscriptionoptimismgoerli_stableSwapArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwaps: InContextSdkMethod<Subscription['optimismgoerli_stableSwaps'], Subscriptionoptimismgoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapAddLiquidityEvent: InContextSdkMethod<Subscription['optimismgoerli_stableSwapAddLiquidityEvent'], Subscriptionoptimismgoerli_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapAddLiquidityEvents: InContextSdkMethod<Subscription['optimismgoerli_stableSwapAddLiquidityEvents'], Subscriptionoptimismgoerli_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Subscription['optimismgoerli_stableSwapRemoveLiquidityEvent'], Subscriptionoptimismgoerli_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Subscription['optimismgoerli_stableSwapRemoveLiquidityEvents'], Subscriptionoptimismgoerli_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapExchange: InContextSdkMethod<Subscription['optimismgoerli_stableSwapExchange'], Subscriptionoptimismgoerli_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapExchanges: InContextSdkMethod<Subscription['optimismgoerli_stableSwapExchanges'], Subscriptionoptimismgoerli_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapDailyVolume: InContextSdkMethod<Subscription['optimismgoerli_swapDailyVolume'], Subscriptionoptimismgoerli_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapDailyVolumes: InContextSdkMethod<Subscription['optimismgoerli_swapDailyVolumes'], Subscriptionoptimismgoerli_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapHourlyVolume: InContextSdkMethod<Subscription['optimismgoerli_swapHourlyVolume'], Subscriptionoptimismgoerli_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapHourlyVolumes: InContextSdkMethod<Subscription['optimismgoerli_swapHourlyVolumes'], Subscriptionoptimismgoerli_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapWeeklyVolume: InContextSdkMethod<Subscription['optimismgoerli_swapWeeklyVolume'], Subscriptionoptimismgoerli_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapWeeklyVolumes: InContextSdkMethod<Subscription['optimismgoerli_swapWeeklyVolumes'], Subscriptionoptimismgoerli_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapEvent: InContextSdkMethod<Subscription['optimismgoerli_stableSwapEvent'], Subscriptionoptimismgoerli_stableSwapEventArgs, MeshContext>,
  /** null **/
  optimismgoerli_stableSwapEvents: InContextSdkMethod<Subscription['optimismgoerli_stableSwapEvents'], Subscriptionoptimismgoerli_stableSwapEventsArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapTradeVolume: InContextSdkMethod<Subscription['optimismgoerli_swapTradeVolume'], Subscriptionoptimismgoerli_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  optimismgoerli_swapTradeVolumes: InContextSdkMethod<Subscription['optimismgoerli_swapTradeVolumes'], Subscriptionoptimismgoerli_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  optimismgoerli__meta: InContextSdkMethod<Subscription['optimismgoerli__meta'], Subscriptionoptimismgoerli__metaArgs, MeshContext>
  };

  export type Context = {
      ["StableSwap_OptimismGoerli"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
