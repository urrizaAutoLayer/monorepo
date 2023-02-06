// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace StableSwapMumbaiTypes {
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
  mumbai_swap_BigDecimal: any;
  BigInt: any;
  mumbai_swap_Bytes: any;
};

export type mumbai_swap_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type mumbai_swap_Block_height = {
  hash?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

/** Defines the order direction, either ascending or descending */
export type mumbai_swap_OrderDirection =
  | 'asc'
  | 'desc';

export type mumbai_swap_PooledToken = {
  id: Scalars['ID'];
  asset: Scalars['mumbai_swap_Bytes'];
};

export type mumbai_swap_PooledToken_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  asset?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  asset_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  asset_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  asset_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_PooledToken_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_PooledToken_filter>>>;
};

export type mumbai_swap_PooledToken_orderBy =
  | 'id'
  | 'asset';

export type Query = {
  mumbai_swap_systemInfo?: Maybe<mumbai_swap_SystemInfo>;
  mumbai_swap_systemInfos: Array<mumbai_swap_SystemInfo>;
  mumbai_swap_pooledToken?: Maybe<mumbai_swap_PooledToken>;
  mumbai_swap_pooledTokens: Array<mumbai_swap_PooledToken>;
  mumbai_swap_stableSwap?: Maybe<mumbai_swap_StableSwap>;
  mumbai_swap_stableSwaps: Array<mumbai_swap_StableSwap>;
  mumbai_swap_stableSwapAddLiquidityEvent?: Maybe<mumbai_swap_StableSwapAddLiquidityEvent>;
  mumbai_swap_stableSwapAddLiquidityEvents: Array<mumbai_swap_StableSwapAddLiquidityEvent>;
  mumbai_swap_stableSwapRemoveLiquidityEvent?: Maybe<mumbai_swap_StableSwapRemoveLiquidityEvent>;
  mumbai_swap_stableSwapRemoveLiquidityEvents: Array<mumbai_swap_StableSwapRemoveLiquidityEvent>;
  mumbai_swap_stableSwapExchange?: Maybe<mumbai_swap_StableSwapExchange>;
  mumbai_swap_stableSwapExchanges: Array<mumbai_swap_StableSwapExchange>;
  mumbai_swap_swapDailyVolume?: Maybe<mumbai_swap_SwapDailyVolume>;
  mumbai_swap_swapDailyVolumes: Array<mumbai_swap_SwapDailyVolume>;
  mumbai_swap_swapHourlyVolume?: Maybe<mumbai_swap_SwapHourlyVolume>;
  mumbai_swap_swapHourlyVolumes: Array<mumbai_swap_SwapHourlyVolume>;
  mumbai_swap_swapWeeklyVolume?: Maybe<mumbai_swap_SwapWeeklyVolume>;
  mumbai_swap_swapWeeklyVolumes: Array<mumbai_swap_SwapWeeklyVolume>;
  mumbai_swap_stableSwapEvent?: Maybe<mumbai_swap_StableSwapEvent>;
  mumbai_swap_stableSwapEvents: Array<mumbai_swap_StableSwapEvent>;
  mumbai_swap_swapTradeVolume?: Maybe<mumbai_swap_SwapTradeVolume>;
  mumbai_swap_swapTradeVolumes: Array<mumbai_swap_SwapTradeVolume>;
  /** Access to subgraph metadata */
  mumbai_swap__meta?: Maybe<mumbai_swap__Meta_>;
};


export type Querymumbai_swap_systemInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_systemInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SystemInfo_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SystemInfo_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_PooledToken_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_PooledToken_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwap_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwap_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapExchange_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapDailyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapHourlyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapTradeVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querymumbai_swap__metaArgs = {
  block?: InputMaybe<mumbai_swap_Block_height>;
};

export type mumbai_swap_StableSwap = {
  id: Scalars['ID'];
  isActive?: Maybe<Scalars['Boolean']>;
  key: Scalars['mumbai_swap_Bytes'];
  canonicalId?: Maybe<Scalars['mumbai_swap_Bytes']>;
  domain?: Maybe<Scalars['BigInt']>;
  swapPool?: Maybe<Scalars['mumbai_swap_Bytes']>;
  lpToken?: Maybe<Scalars['mumbai_swap_Bytes']>;
  initialA?: Maybe<Scalars['BigInt']>;
  futureA?: Maybe<Scalars['BigInt']>;
  initialATime?: Maybe<Scalars['BigInt']>;
  futureATime?: Maybe<Scalars['BigInt']>;
  swapFee?: Maybe<Scalars['BigInt']>;
  adminFee?: Maybe<Scalars['BigInt']>;
  pooledTokens: Array<Scalars['mumbai_swap_Bytes']>;
  tokenPrecisionMultipliers: Array<Scalars['BigInt']>;
  balances: Array<Scalars['BigInt']>;
  adminFees: Array<Scalars['BigInt']>;
  virtualPrice: Scalars['BigInt'];
  invariant: Scalars['BigInt'];
  lpTokenSupply: Scalars['BigInt'];
  events?: Maybe<Array<mumbai_swap_StableSwapEvent>>;
  exchanges?: Maybe<Array<mumbai_swap_StableSwapExchange>>;
  hourlyVolumes?: Maybe<Array<mumbai_swap_SwapHourlyVolume>>;
  dailyVolumes?: Maybe<Array<mumbai_swap_SwapDailyVolume>>;
  weeklyVolumes?: Maybe<Array<mumbai_swap_SwapWeeklyVolume>>;
};


export type mumbai_swap_StableSwapeventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapEvent_filter>;
};


export type mumbai_swap_StableSwapexchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapExchange_filter>;
};


export type mumbai_swap_StableSwaphourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapHourlyVolume_filter>;
};


export type mumbai_swap_StableSwapdailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapDailyVolume_filter>;
};


export type mumbai_swap_StableSwapweeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>;
};

export type mumbai_swap_StableSwapAddLiquidityEvent = mumbai_swap_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  provider: Scalars['mumbai_swap_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees: Array<Scalars['BigInt']>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  balances: Array<Scalars['BigInt']>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['mumbai_swap_Bytes'];
};

export type mumbai_swap_StableSwapAddLiquidityEvent_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  provider?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
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
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
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
  transaction?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_filter>>>;
};

export type mumbai_swap_StableSwapAddLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'balances'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type mumbai_swap_StableSwapEvent = {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['mumbai_swap_Bytes'];
};

export type mumbai_swap_StableSwapEvent_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
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
  transaction?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapEvent_filter>>>;
};

export type mumbai_swap_StableSwapEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type mumbai_swap_StableSwapExchange = {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  buyer: Scalars['mumbai_swap_Bytes'];
  boughtId: Scalars['BigInt'];
  tokensBought: Scalars['BigInt'];
  soldId: Scalars['BigInt'];
  tokensSold: Scalars['BigInt'];
  balances: Array<Scalars['BigInt']>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['mumbai_swap_Bytes'];
};

export type mumbai_swap_StableSwapExchange_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  buyer?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  buyer_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  buyer_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  buyer_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
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
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
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
  transaction?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapExchange_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapExchange_filter>>>;
};

export type mumbai_swap_StableSwapExchange_orderBy =
  | 'id'
  | 'stableSwap'
  | 'buyer'
  | 'boughtId'
  | 'tokensBought'
  | 'soldId'
  | 'tokensSold'
  | 'balances'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type mumbai_swap_StableSwapRemoveLiquidityEvent = mumbai_swap_StableSwapEvent & {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  provider: Scalars['mumbai_swap_Bytes'];
  tokenAmounts: Array<Scalars['BigInt']>;
  fees?: Maybe<Array<Scalars['BigInt']>>;
  invariant?: Maybe<Scalars['BigInt']>;
  lpTokenSupply: Scalars['BigInt'];
  balances: Array<Scalars['BigInt']>;
  block: Scalars['BigInt'];
  timestamp: Scalars['BigInt'];
  transaction: Scalars['mumbai_swap_Bytes'];
};

export type mumbai_swap_StableSwapRemoveLiquidityEvent_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  provider?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  provider_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  provider_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  provider_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
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
  balances?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains?: InputMaybe<Array<Scalars['BigInt']>>;
  balances_not_contains_nocase?: InputMaybe<Array<Scalars['BigInt']>>;
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
  transaction?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  transaction_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  transaction_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_filter>>>;
};

export type mumbai_swap_StableSwapRemoveLiquidityEvent_orderBy =
  | 'id'
  | 'stableSwap'
  | 'provider'
  | 'tokenAmounts'
  | 'fees'
  | 'invariant'
  | 'lpTokenSupply'
  | 'balances'
  | 'block'
  | 'timestamp'
  | 'transaction';

export type mumbai_swap_StableSwap_filter = {
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
  key?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  key_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  key_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  key_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_not?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_gt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_lt?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_gte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_lte?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  lpToken_not_in?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  lpToken_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
  lpToken_not_contains?: InputMaybe<Scalars['mumbai_swap_Bytes']>;
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
  pooledTokens?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  pooledTokens_not?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  pooledTokens_contains?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  pooledTokens_contains_nocase?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  pooledTokens_not_contains?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
  pooledTokens_not_contains_nocase?: InputMaybe<Array<Scalars['mumbai_swap_Bytes']>>;
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
  events_?: InputMaybe<mumbai_swap_StableSwapEvent_filter>;
  exchanges_?: InputMaybe<mumbai_swap_StableSwapExchange_filter>;
  hourlyVolumes_?: InputMaybe<mumbai_swap_SwapHourlyVolume_filter>;
  dailyVolumes_?: InputMaybe<mumbai_swap_SwapDailyVolume_filter>;
  weeklyVolumes_?: InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwap_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_StableSwap_filter>>>;
};

export type mumbai_swap_StableSwap_orderBy =
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
  mumbai_swap_systemInfo?: Maybe<mumbai_swap_SystemInfo>;
  mumbai_swap_systemInfos: Array<mumbai_swap_SystemInfo>;
  mumbai_swap_pooledToken?: Maybe<mumbai_swap_PooledToken>;
  mumbai_swap_pooledTokens: Array<mumbai_swap_PooledToken>;
  mumbai_swap_stableSwap?: Maybe<mumbai_swap_StableSwap>;
  mumbai_swap_stableSwaps: Array<mumbai_swap_StableSwap>;
  mumbai_swap_stableSwapAddLiquidityEvent?: Maybe<mumbai_swap_StableSwapAddLiquidityEvent>;
  mumbai_swap_stableSwapAddLiquidityEvents: Array<mumbai_swap_StableSwapAddLiquidityEvent>;
  mumbai_swap_stableSwapRemoveLiquidityEvent?: Maybe<mumbai_swap_StableSwapRemoveLiquidityEvent>;
  mumbai_swap_stableSwapRemoveLiquidityEvents: Array<mumbai_swap_StableSwapRemoveLiquidityEvent>;
  mumbai_swap_stableSwapExchange?: Maybe<mumbai_swap_StableSwapExchange>;
  mumbai_swap_stableSwapExchanges: Array<mumbai_swap_StableSwapExchange>;
  mumbai_swap_swapDailyVolume?: Maybe<mumbai_swap_SwapDailyVolume>;
  mumbai_swap_swapDailyVolumes: Array<mumbai_swap_SwapDailyVolume>;
  mumbai_swap_swapHourlyVolume?: Maybe<mumbai_swap_SwapHourlyVolume>;
  mumbai_swap_swapHourlyVolumes: Array<mumbai_swap_SwapHourlyVolume>;
  mumbai_swap_swapWeeklyVolume?: Maybe<mumbai_swap_SwapWeeklyVolume>;
  mumbai_swap_swapWeeklyVolumes: Array<mumbai_swap_SwapWeeklyVolume>;
  mumbai_swap_stableSwapEvent?: Maybe<mumbai_swap_StableSwapEvent>;
  mumbai_swap_stableSwapEvents: Array<mumbai_swap_StableSwapEvent>;
  mumbai_swap_swapTradeVolume?: Maybe<mumbai_swap_SwapTradeVolume>;
  mumbai_swap_swapTradeVolumes: Array<mumbai_swap_SwapTradeVolume>;
  /** Access to subgraph metadata */
  mumbai_swap__meta?: Maybe<mumbai_swap__Meta_>;
};


export type Subscriptionmumbai_swap_systemInfoArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_systemInfosArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SystemInfo_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SystemInfo_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_pooledTokenArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_pooledTokensArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_PooledToken_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_PooledToken_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwap_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwap_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapAddLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapAddLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapAddLiquidityEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapRemoveLiquidityEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapRemoveLiquidityEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapRemoveLiquidityEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapExchangeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapExchangesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapExchange_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapExchange_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapDailyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapDailyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapDailyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapDailyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapHourlyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapHourlyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapHourlyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapHourlyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapWeeklyVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapWeeklyVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapWeeklyVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapEventArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_stableSwapEventsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_StableSwapEvent_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_StableSwapEvent_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapTradeVolumeArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap_swapTradeVolumesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<mumbai_swap_SwapTradeVolume_orderBy>;
  orderDirection?: InputMaybe<mumbai_swap_OrderDirection>;
  where?: InputMaybe<mumbai_swap_SwapTradeVolume_filter>;
  block?: InputMaybe<mumbai_swap_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionmumbai_swap__metaArgs = {
  block?: InputMaybe<mumbai_swap_Block_height>;
};

export type mumbai_swap_SwapDailyVolume = mumbai_swap_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['mumbai_swap_BigDecimal'];
};

export type mumbai_swap_SwapDailyVolume_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapDailyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapDailyVolume_filter>>>;
};

export type mumbai_swap_SwapDailyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type mumbai_swap_SwapHourlyVolume = mumbai_swap_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['mumbai_swap_BigDecimal'];
};

export type mumbai_swap_SwapHourlyVolume_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapHourlyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapHourlyVolume_filter>>>;
};

export type mumbai_swap_SwapHourlyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type mumbai_swap_SwapTradeVolume = {
  stableSwap: mumbai_swap_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['mumbai_swap_BigDecimal'];
};

export type mumbai_swap_SwapTradeVolume_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapTradeVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapTradeVolume_filter>>>;
};

export type mumbai_swap_SwapTradeVolume_orderBy =
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type mumbai_swap_SwapWeeklyVolume = mumbai_swap_SwapTradeVolume & {
  id: Scalars['ID'];
  stableSwap: mumbai_swap_StableSwap;
  timestamp: Scalars['BigInt'];
  volume: Scalars['mumbai_swap_BigDecimal'];
};

export type mumbai_swap_SwapWeeklyVolume_filter = {
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
  stableSwap_?: InputMaybe<mumbai_swap_StableSwap_filter>;
  timestamp?: InputMaybe<Scalars['BigInt']>;
  timestamp_not?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  volume?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_not?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lt?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_gte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_lte?: InputMaybe<Scalars['mumbai_swap_BigDecimal']>;
  volume_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  volume_not_in?: InputMaybe<Array<Scalars['mumbai_swap_BigDecimal']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_SwapWeeklyVolume_filter>>>;
};

export type mumbai_swap_SwapWeeklyVolume_orderBy =
  | 'id'
  | 'stableSwap'
  | 'timestamp'
  | 'volume';

export type mumbai_swap_SystemInfo = {
  id: Scalars['ID'];
  exchangeCount: Scalars['BigInt'];
  swapCount: Scalars['BigInt'];
};

export type mumbai_swap_SystemInfo_filter = {
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
  _change_block?: InputMaybe<mumbai_swap_BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<mumbai_swap_SystemInfo_filter>>>;
  or?: InputMaybe<Array<InputMaybe<mumbai_swap_SystemInfo_filter>>>;
};

export type mumbai_swap_SystemInfo_orderBy =
  | 'id'
  | 'exchangeCount'
  | 'swapCount';

export type mumbai_swap__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['mumbai_swap_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type mumbai_swap__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: mumbai_swap__Block_;
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
  mumbai_swap_systemInfo: InContextSdkMethod<Query['mumbai_swap_systemInfo'], Querymumbai_swap_systemInfoArgs, MeshContext>,
  /** null **/
  mumbai_swap_systemInfos: InContextSdkMethod<Query['mumbai_swap_systemInfos'], Querymumbai_swap_systemInfosArgs, MeshContext>,
  /** null **/
  mumbai_swap_pooledToken: InContextSdkMethod<Query['mumbai_swap_pooledToken'], Querymumbai_swap_pooledTokenArgs, MeshContext>,
  /** null **/
  mumbai_swap_pooledTokens: InContextSdkMethod<Query['mumbai_swap_pooledTokens'], Querymumbai_swap_pooledTokensArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwap: InContextSdkMethod<Query['mumbai_swap_stableSwap'], Querymumbai_swap_stableSwapArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwaps: InContextSdkMethod<Query['mumbai_swap_stableSwaps'], Querymumbai_swap_stableSwapsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapAddLiquidityEvent: InContextSdkMethod<Query['mumbai_swap_stableSwapAddLiquidityEvent'], Querymumbai_swap_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapAddLiquidityEvents: InContextSdkMethod<Query['mumbai_swap_stableSwapAddLiquidityEvents'], Querymumbai_swap_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Query['mumbai_swap_stableSwapRemoveLiquidityEvent'], Querymumbai_swap_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Query['mumbai_swap_stableSwapRemoveLiquidityEvents'], Querymumbai_swap_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapExchange: InContextSdkMethod<Query['mumbai_swap_stableSwapExchange'], Querymumbai_swap_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapExchanges: InContextSdkMethod<Query['mumbai_swap_stableSwapExchanges'], Querymumbai_swap_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapDailyVolume: InContextSdkMethod<Query['mumbai_swap_swapDailyVolume'], Querymumbai_swap_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapDailyVolumes: InContextSdkMethod<Query['mumbai_swap_swapDailyVolumes'], Querymumbai_swap_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapHourlyVolume: InContextSdkMethod<Query['mumbai_swap_swapHourlyVolume'], Querymumbai_swap_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapHourlyVolumes: InContextSdkMethod<Query['mumbai_swap_swapHourlyVolumes'], Querymumbai_swap_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapWeeklyVolume: InContextSdkMethod<Query['mumbai_swap_swapWeeklyVolume'], Querymumbai_swap_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapWeeklyVolumes: InContextSdkMethod<Query['mumbai_swap_swapWeeklyVolumes'], Querymumbai_swap_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapEvent: InContextSdkMethod<Query['mumbai_swap_stableSwapEvent'], Querymumbai_swap_stableSwapEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapEvents: InContextSdkMethod<Query['mumbai_swap_stableSwapEvents'], Querymumbai_swap_stableSwapEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapTradeVolume: InContextSdkMethod<Query['mumbai_swap_swapTradeVolume'], Querymumbai_swap_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapTradeVolumes: InContextSdkMethod<Query['mumbai_swap_swapTradeVolumes'], Querymumbai_swap_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  mumbai_swap__meta: InContextSdkMethod<Query['mumbai_swap__meta'], Querymumbai_swap__metaArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** null **/
  mumbai_swap_systemInfo: InContextSdkMethod<Subscription['mumbai_swap_systemInfo'], Subscriptionmumbai_swap_systemInfoArgs, MeshContext>,
  /** null **/
  mumbai_swap_systemInfos: InContextSdkMethod<Subscription['mumbai_swap_systemInfos'], Subscriptionmumbai_swap_systemInfosArgs, MeshContext>,
  /** null **/
  mumbai_swap_pooledToken: InContextSdkMethod<Subscription['mumbai_swap_pooledToken'], Subscriptionmumbai_swap_pooledTokenArgs, MeshContext>,
  /** null **/
  mumbai_swap_pooledTokens: InContextSdkMethod<Subscription['mumbai_swap_pooledTokens'], Subscriptionmumbai_swap_pooledTokensArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwap: InContextSdkMethod<Subscription['mumbai_swap_stableSwap'], Subscriptionmumbai_swap_stableSwapArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwaps: InContextSdkMethod<Subscription['mumbai_swap_stableSwaps'], Subscriptionmumbai_swap_stableSwapsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapAddLiquidityEvent: InContextSdkMethod<Subscription['mumbai_swap_stableSwapAddLiquidityEvent'], Subscriptionmumbai_swap_stableSwapAddLiquidityEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapAddLiquidityEvents: InContextSdkMethod<Subscription['mumbai_swap_stableSwapAddLiquidityEvents'], Subscriptionmumbai_swap_stableSwapAddLiquidityEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapRemoveLiquidityEvent: InContextSdkMethod<Subscription['mumbai_swap_stableSwapRemoveLiquidityEvent'], Subscriptionmumbai_swap_stableSwapRemoveLiquidityEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapRemoveLiquidityEvents: InContextSdkMethod<Subscription['mumbai_swap_stableSwapRemoveLiquidityEvents'], Subscriptionmumbai_swap_stableSwapRemoveLiquidityEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapExchange: InContextSdkMethod<Subscription['mumbai_swap_stableSwapExchange'], Subscriptionmumbai_swap_stableSwapExchangeArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapExchanges: InContextSdkMethod<Subscription['mumbai_swap_stableSwapExchanges'], Subscriptionmumbai_swap_stableSwapExchangesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapDailyVolume: InContextSdkMethod<Subscription['mumbai_swap_swapDailyVolume'], Subscriptionmumbai_swap_swapDailyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapDailyVolumes: InContextSdkMethod<Subscription['mumbai_swap_swapDailyVolumes'], Subscriptionmumbai_swap_swapDailyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapHourlyVolume: InContextSdkMethod<Subscription['mumbai_swap_swapHourlyVolume'], Subscriptionmumbai_swap_swapHourlyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapHourlyVolumes: InContextSdkMethod<Subscription['mumbai_swap_swapHourlyVolumes'], Subscriptionmumbai_swap_swapHourlyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapWeeklyVolume: InContextSdkMethod<Subscription['mumbai_swap_swapWeeklyVolume'], Subscriptionmumbai_swap_swapWeeklyVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapWeeklyVolumes: InContextSdkMethod<Subscription['mumbai_swap_swapWeeklyVolumes'], Subscriptionmumbai_swap_swapWeeklyVolumesArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapEvent: InContextSdkMethod<Subscription['mumbai_swap_stableSwapEvent'], Subscriptionmumbai_swap_stableSwapEventArgs, MeshContext>,
  /** null **/
  mumbai_swap_stableSwapEvents: InContextSdkMethod<Subscription['mumbai_swap_stableSwapEvents'], Subscriptionmumbai_swap_stableSwapEventsArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapTradeVolume: InContextSdkMethod<Subscription['mumbai_swap_swapTradeVolume'], Subscriptionmumbai_swap_swapTradeVolumeArgs, MeshContext>,
  /** null **/
  mumbai_swap_swapTradeVolumes: InContextSdkMethod<Subscription['mumbai_swap_swapTradeVolumes'], Subscriptionmumbai_swap_swapTradeVolumesArgs, MeshContext>,
  /** Access to subgraph metadata **/
  mumbai_swap__meta: InContextSdkMethod<Subscription['mumbai_swap__meta'], Subscriptionmumbai_swap__metaArgs, MeshContext>
  };

  export type Context = {
      ["StableSwap_Mumbai"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
