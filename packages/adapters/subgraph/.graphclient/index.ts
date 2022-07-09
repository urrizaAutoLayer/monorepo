// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { gql } from '@graphql-mesh/utils';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  testgoerli_BigDecimal: any;
  BigInt: any;
  testgoerli_Bytes: any;
  rinkeby_BigDecimal: any;
  rinkeby_Bytes: any;
  goerli_BigDecimal: any;
  goerli_Bytes: any;
  staginggoerli_BigDecimal: any;
  staginggoerli_Bytes: any;
  testrinkeby_BigDecimal: any;
  testrinkeby_Bytes: any;
  stagingrinkeby_BigDecimal: any;
  stagingrinkeby_Bytes: any;
};

export type Query = {
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
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
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
  testrinkeby_asset?: Maybe<testrinkeby_Asset>;
  testrinkeby_assets: Array<testrinkeby_Asset>;
  testrinkeby_assetBalance?: Maybe<testrinkeby_AssetBalance>;
  testrinkeby_assetBalances: Array<testrinkeby_AssetBalance>;
  testrinkeby_router?: Maybe<testrinkeby_Router>;
  testrinkeby_routers: Array<testrinkeby_Router>;
  testrinkeby_setting?: Maybe<testrinkeby_Setting>;
  testrinkeby_settings: Array<testrinkeby_Setting>;
  testrinkeby_relayer?: Maybe<testrinkeby_Relayer>;
  testrinkeby_relayers: Array<testrinkeby_Relayer>;
  testrinkeby_stableSwap?: Maybe<testrinkeby_StableSwap>;
  testrinkeby_stableSwaps: Array<testrinkeby_StableSwap>;
  testrinkeby_sponsorVault?: Maybe<testrinkeby_SponsorVault>;
  testrinkeby_sponsorVaults: Array<testrinkeby_SponsorVault>;
  testrinkeby_originTransfer?: Maybe<testrinkeby_OriginTransfer>;
  testrinkeby_originTransfers: Array<testrinkeby_OriginTransfer>;
  testrinkeby_destinationTransfer?: Maybe<testrinkeby_DestinationTransfer>;
  testrinkeby_destinationTransfers: Array<testrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  testrinkeby__meta?: Maybe<testrinkeby__Meta_>;
  stagingrinkeby_asset?: Maybe<stagingrinkeby_Asset>;
  stagingrinkeby_assets: Array<stagingrinkeby_Asset>;
  stagingrinkeby_assetBalance?: Maybe<stagingrinkeby_AssetBalance>;
  stagingrinkeby_assetBalances: Array<stagingrinkeby_AssetBalance>;
  stagingrinkeby_router?: Maybe<stagingrinkeby_Router>;
  stagingrinkeby_routers: Array<stagingrinkeby_Router>;
  stagingrinkeby_setting?: Maybe<stagingrinkeby_Setting>;
  stagingrinkeby_settings: Array<stagingrinkeby_Setting>;
  stagingrinkeby_relayer?: Maybe<stagingrinkeby_Relayer>;
  stagingrinkeby_relayers: Array<stagingrinkeby_Relayer>;
  stagingrinkeby_stableSwap?: Maybe<stagingrinkeby_StableSwap>;
  stagingrinkeby_stableSwaps: Array<stagingrinkeby_StableSwap>;
  stagingrinkeby_sponsorVault?: Maybe<stagingrinkeby_SponsorVault>;
  stagingrinkeby_sponsorVaults: Array<stagingrinkeby_SponsorVault>;
  stagingrinkeby_originTransfer?: Maybe<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_originTransfers: Array<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_destinationTransfer?: Maybe<stagingrinkeby_DestinationTransfer>;
  stagingrinkeby_destinationTransfers: Array<stagingrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  stagingrinkeby__meta?: Maybe<stagingrinkeby__Meta_>;
};


export type Querytestgoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Asset_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Setting_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Relayer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};


export type Queryrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};


export type Querygoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Asset_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Asset_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Setting_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Setting_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Relayer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_StableSwap_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_SponsorVault_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
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


export type Querystaginggoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
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


export type Querystaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};


export type Querytestrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Asset_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Setting_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Relayer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_StableSwap_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_SponsorVault_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby__metaArgs = {
  block?: InputMaybe<testrinkeby_Block_height>;
};


export type Querystagingrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Asset_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Setting_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Relayer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_StableSwap_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_SponsorVault_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby__metaArgs = {
  block?: InputMaybe<stagingrinkeby_Block_height>;
};

export type Subscription = {
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
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
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  staginggoerli__meta?: Maybe<staginggoerli__Meta_>;
  testrinkeby_asset?: Maybe<testrinkeby_Asset>;
  testrinkeby_assets: Array<testrinkeby_Asset>;
  testrinkeby_assetBalance?: Maybe<testrinkeby_AssetBalance>;
  testrinkeby_assetBalances: Array<testrinkeby_AssetBalance>;
  testrinkeby_router?: Maybe<testrinkeby_Router>;
  testrinkeby_routers: Array<testrinkeby_Router>;
  testrinkeby_setting?: Maybe<testrinkeby_Setting>;
  testrinkeby_settings: Array<testrinkeby_Setting>;
  testrinkeby_relayer?: Maybe<testrinkeby_Relayer>;
  testrinkeby_relayers: Array<testrinkeby_Relayer>;
  testrinkeby_stableSwap?: Maybe<testrinkeby_StableSwap>;
  testrinkeby_stableSwaps: Array<testrinkeby_StableSwap>;
  testrinkeby_sponsorVault?: Maybe<testrinkeby_SponsorVault>;
  testrinkeby_sponsorVaults: Array<testrinkeby_SponsorVault>;
  testrinkeby_originTransfer?: Maybe<testrinkeby_OriginTransfer>;
  testrinkeby_originTransfers: Array<testrinkeby_OriginTransfer>;
  testrinkeby_destinationTransfer?: Maybe<testrinkeby_DestinationTransfer>;
  testrinkeby_destinationTransfers: Array<testrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  testrinkeby__meta?: Maybe<testrinkeby__Meta_>;
  stagingrinkeby_asset?: Maybe<stagingrinkeby_Asset>;
  stagingrinkeby_assets: Array<stagingrinkeby_Asset>;
  stagingrinkeby_assetBalance?: Maybe<stagingrinkeby_AssetBalance>;
  stagingrinkeby_assetBalances: Array<stagingrinkeby_AssetBalance>;
  stagingrinkeby_router?: Maybe<stagingrinkeby_Router>;
  stagingrinkeby_routers: Array<stagingrinkeby_Router>;
  stagingrinkeby_setting?: Maybe<stagingrinkeby_Setting>;
  stagingrinkeby_settings: Array<stagingrinkeby_Setting>;
  stagingrinkeby_relayer?: Maybe<stagingrinkeby_Relayer>;
  stagingrinkeby_relayers: Array<stagingrinkeby_Relayer>;
  stagingrinkeby_stableSwap?: Maybe<stagingrinkeby_StableSwap>;
  stagingrinkeby_stableSwaps: Array<stagingrinkeby_StableSwap>;
  stagingrinkeby_sponsorVault?: Maybe<stagingrinkeby_SponsorVault>;
  stagingrinkeby_sponsorVaults: Array<stagingrinkeby_SponsorVault>;
  stagingrinkeby_originTransfer?: Maybe<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_originTransfers: Array<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_destinationTransfer?: Maybe<stagingrinkeby_DestinationTransfer>;
  stagingrinkeby_destinationTransfers: Array<stagingrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  stagingrinkeby__meta?: Maybe<stagingrinkeby__Meta_>;
};


export type Subscriptiontestgoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Asset_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Setting_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Relayer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};


export type Subscriptionrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};


export type Subscriptiongoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Asset_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Asset_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Setting_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Setting_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Relayer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_StableSwap_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_SponsorVault_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
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


export type Subscriptionstaginggoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
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


export type Subscriptionstaginggoerli__metaArgs = {
  block?: InputMaybe<staginggoerli_Block_height>;
};


export type Subscriptiontestrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Asset_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Setting_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Relayer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_StableSwap_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_SponsorVault_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby__metaArgs = {
  block?: InputMaybe<testrinkeby_Block_height>;
};


export type Subscriptionstagingrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Asset_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Setting_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Relayer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_StableSwap_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_SponsorVault_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby__metaArgs = {
  block?: InputMaybe<stagingrinkeby_Block_height>;
};

export type testgoerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['testgoerli_Bytes'];
  adoptedAsset: Scalars['testgoerli_Bytes'];
  canonicalId: Scalars['testgoerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type testgoerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: testgoerli_Router;
  asset: testgoerli_Asset;
};

export type testgoerli_AssetBalance_filter = {
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
  router_?: InputMaybe<testgoerli_Router_filter>;
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
  asset_?: InputMaybe<testgoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type testgoerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type testgoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type testgoerli_Block_height = {
  hash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type testgoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testgoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testgoerli_Bytes']>;
  callData?: Maybe<Scalars['testgoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testgoerli_Bytes']>;
  recovery?: Maybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testgoerli_TransferStatus>;
  routers?: Maybe<Array<testgoerli_Router>>;
  originSender?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type testgoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
};

export type testgoerli_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<testgoerli_Router_filter>;
  originSender?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type testgoerli_OrderDirection =
  | 'asc'
  | 'desc';

export type testgoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testgoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testgoerli_Bytes']>;
  callData?: Maybe<Scalars['testgoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testgoerli_Bytes']>;
  recovery?: Maybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testgoerli_TransferStatus>;
  message?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['testgoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type testgoerli_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  message?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type testgoerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['testgoerli_Bytes']>;
};

export type testgoerli_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type testgoerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['testgoerli_Bytes']>;
  recipient?: Maybe<Scalars['testgoerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['testgoerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<testgoerli_AssetBalance>;
};


export type testgoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
};

export type testgoerli_Router_filter = {
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
  owner?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<testgoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type testgoerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['testgoerli_Bytes'];
};

export type testgoerli_Setting_filter = {
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
  caller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type testgoerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['testgoerli_Bytes'];
};

export type testgoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type testgoerli_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['testgoerli_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['testgoerli_Bytes'];
};

export type testgoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type testgoerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type testgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['testgoerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type testgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testgoerli__Block_;
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

export type rinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['rinkeby_Bytes'];
  adoptedAsset: Scalars['rinkeby_Bytes'];
  canonicalId: Scalars['rinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type rinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: rinkeby_Router;
  asset: rinkeby_Asset;
};

export type rinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<rinkeby_Router_filter>;
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
  asset_?: InputMaybe<rinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type rinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type rinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type rinkeby_Block_height = {
  hash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type rinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['rinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['rinkeby_Bytes']>;
  callData?: Maybe<Scalars['rinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['rinkeby_Bytes']>;
  recovery?: Maybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<rinkeby_TransferStatus>;
  routers?: Maybe<Array<rinkeby_Router>>;
  originSender?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type rinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
};

export type rinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<rinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type rinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type rinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['rinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['rinkeby_Bytes']>;
  callData?: Maybe<Scalars['rinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['rinkeby_Bytes']>;
  recovery?: Maybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<rinkeby_TransferStatus>;
  message?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['rinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type rinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type rinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['rinkeby_Bytes']>;
};

export type rinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type rinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['rinkeby_Bytes']>;
  recipient?: Maybe<Scalars['rinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['rinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<rinkeby_AssetBalance>;
};


export type rinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
};

export type rinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<rinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type rinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['rinkeby_Bytes'];
};

export type rinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type rinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['rinkeby_Bytes'];
};

export type rinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type rinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['rinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['rinkeby_Bytes'];
};

export type rinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type rinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type rinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['rinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type rinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: rinkeby__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type goerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['goerli_Bytes'];
  adoptedAsset: Scalars['goerli_Bytes'];
  canonicalId: Scalars['goerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type goerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: goerli_Router;
  asset: goerli_Asset;
};

export type goerli_AssetBalance_filter = {
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
  router_?: InputMaybe<goerli_Router_filter>;
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
  asset_?: InputMaybe<goerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type goerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['goerli_Bytes']>;
  local_not?: InputMaybe<Scalars['goerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type goerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type goerli_Block_height = {
  hash?: InputMaybe<Scalars['goerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type goerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['goerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['goerli_Bytes']>;
  callData?: Maybe<Scalars['goerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['goerli_Bytes']>;
  recovery?: Maybe<Scalars['goerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['goerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<goerli_TransferStatus>;
  routers?: Maybe<Array<goerli_Router>>;
  originSender?: Maybe<Scalars['goerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['goerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['goerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['goerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['goerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['goerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type goerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
};

export type goerli_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not?: InputMaybe<Scalars['goerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<goerli_Router_filter>;
  originSender?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type goerli_OrderDirection =
  | 'asc'
  | 'desc';

export type goerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['goerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['goerli_Bytes']>;
  callData?: Maybe<Scalars['goerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['goerli_Bytes']>;
  recovery?: Maybe<Scalars['goerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['goerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<goerli_TransferStatus>;
  message?: Maybe<Scalars['goerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['goerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['goerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['goerli_Bytes']>;
  transactionHash?: Maybe<Scalars['goerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type goerli_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not?: InputMaybe<Scalars['goerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  message?: InputMaybe<Scalars['goerli_Bytes']>;
  message_not?: InputMaybe<Scalars['goerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type goerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['goerli_Bytes']>;
};

export type goerli_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type goerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['goerli_Bytes']>;
  recipient?: Maybe<Scalars['goerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['goerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<goerli_AssetBalance>;
};


export type goerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
};

export type goerli_Router_filter = {
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
  owner?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<goerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type goerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['goerli_Bytes'];
};

export type goerli_Setting_filter = {
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
  caller?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type goerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['goerli_Bytes'];
};

export type goerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type goerli_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['goerli_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['goerli_Bytes'];
};

export type goerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type goerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type goerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['goerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type goerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: goerli__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type staginggoerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['staginggoerli_Bytes'];
  adoptedAsset: Scalars['staginggoerli_Bytes'];
  canonicalId: Scalars['staginggoerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
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
  local?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type staginggoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['staginggoerli_Bytes']>;
  recovery?: Maybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
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
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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

export type staginggoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['staginggoerli_Bytes']>;
  recovery?: Maybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  message?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
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
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  message?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

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

export type staginggoerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

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

export type testrinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['testrinkeby_Bytes'];
  adoptedAsset: Scalars['testrinkeby_Bytes'];
  canonicalId: Scalars['testrinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type testrinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: testrinkeby_Router;
  asset: testrinkeby_Asset;
};

export type testrinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<testrinkeby_Router_filter>;
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
  asset_?: InputMaybe<testrinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type testrinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type testrinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type testrinkeby_Block_height = {
  hash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type testrinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testrinkeby_Bytes']>;
  callData?: Maybe<Scalars['testrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testrinkeby_TransferStatus>;
  routers?: Maybe<Array<testrinkeby_Router>>;
  originSender?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type testrinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
};

export type testrinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testrinkeby_TransferStatus>;
  status_not?: InputMaybe<testrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<testrinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type testrinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type testrinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testrinkeby_Bytes']>;
  callData?: Maybe<Scalars['testrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testrinkeby_TransferStatus>;
  message?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type testrinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testrinkeby_TransferStatus>;
  status_not?: InputMaybe<testrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type testrinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['testrinkeby_Bytes']>;
};

export type testrinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type testrinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['testrinkeby_Bytes']>;
  recipient?: Maybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['testrinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<testrinkeby_AssetBalance>;
};


export type testrinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
};

export type testrinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<testrinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type testrinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type testrinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type testrinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['testrinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type testrinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type testrinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['testrinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type testrinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testrinkeby__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type stagingrinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['stagingrinkeby_Bytes'];
  adoptedAsset: Scalars['stagingrinkeby_Bytes'];
  canonicalId: Scalars['stagingrinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type stagingrinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: stagingrinkeby_Router;
  asset: stagingrinkeby_Asset;
};

export type stagingrinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<stagingrinkeby_Router_filter>;
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
  asset_?: InputMaybe<stagingrinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type stagingrinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type stagingrinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type stagingrinkeby_Block_height = {
  hash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type stagingrinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingrinkeby_TransferStatus>;
  routers?: Maybe<Array<stagingrinkeby_Router>>;
  originSender?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type stagingrinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
};

export type stagingrinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_not?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<stagingrinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type stagingrinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type stagingrinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingrinkeby_TransferStatus>;
  message?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type stagingrinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_not?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type stagingrinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['stagingrinkeby_Bytes']>;
};

export type stagingrinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type stagingrinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recipient?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<stagingrinkeby_AssetBalance>;
};


export type stagingrinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
};

export type stagingrinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type stagingrinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type stagingrinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type stagingrinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['stagingrinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type stagingrinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type stagingrinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type stagingrinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: stagingrinkeby__Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  testgoerli_Asset: ResolverTypeWrapper<testgoerli_Asset>;
  testgoerli_AssetBalance: ResolverTypeWrapper<testgoerli_AssetBalance>;
  testgoerli_AssetBalance_filter: testgoerli_AssetBalance_filter;
  testgoerli_AssetBalance_orderBy: testgoerli_AssetBalance_orderBy;
  testgoerli_Asset_filter: testgoerli_Asset_filter;
  testgoerli_Asset_orderBy: testgoerli_Asset_orderBy;
  testgoerli_BigDecimal: ResolverTypeWrapper<Scalars['testgoerli_BigDecimal']>;
  BigInt: ResolverTypeWrapper<Scalars['BigInt']>;
  testgoerli_BlockChangedFilter: testgoerli_BlockChangedFilter;
  testgoerli_Block_height: testgoerli_Block_height;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  testgoerli_Bytes: ResolverTypeWrapper<Scalars['testgoerli_Bytes']>;
  testgoerli_DestinationTransfer: ResolverTypeWrapper<testgoerli_DestinationTransfer>;
  testgoerli_DestinationTransfer_filter: testgoerli_DestinationTransfer_filter;
  testgoerli_DestinationTransfer_orderBy: testgoerli_DestinationTransfer_orderBy;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  testgoerli_OrderDirection: testgoerli_OrderDirection;
  testgoerli_OriginTransfer: ResolverTypeWrapper<testgoerli_OriginTransfer>;
  testgoerli_OriginTransfer_filter: testgoerli_OriginTransfer_filter;
  testgoerli_OriginTransfer_orderBy: testgoerli_OriginTransfer_orderBy;
  testgoerli_Relayer: ResolverTypeWrapper<testgoerli_Relayer>;
  testgoerli_Relayer_filter: testgoerli_Relayer_filter;
  testgoerli_Relayer_orderBy: testgoerli_Relayer_orderBy;
  testgoerli_Router: ResolverTypeWrapper<testgoerli_Router>;
  testgoerli_Router_filter: testgoerli_Router_filter;
  testgoerli_Router_orderBy: testgoerli_Router_orderBy;
  testgoerli_Setting: ResolverTypeWrapper<testgoerli_Setting>;
  testgoerli_Setting_filter: testgoerli_Setting_filter;
  testgoerli_Setting_orderBy: testgoerli_Setting_orderBy;
  testgoerli_SponsorVault: ResolverTypeWrapper<testgoerli_SponsorVault>;
  testgoerli_SponsorVault_filter: testgoerli_SponsorVault_filter;
  testgoerli_SponsorVault_orderBy: testgoerli_SponsorVault_orderBy;
  testgoerli_StableSwap: ResolverTypeWrapper<testgoerli_StableSwap>;
  testgoerli_StableSwap_filter: testgoerli_StableSwap_filter;
  testgoerli_StableSwap_orderBy: testgoerli_StableSwap_orderBy;
  String: ResolverTypeWrapper<Scalars['String']>;
  testgoerli_TransferStatus: testgoerli_TransferStatus;
  testgoerli__Block_: ResolverTypeWrapper<testgoerli__Block_>;
  testgoerli__Meta_: ResolverTypeWrapper<testgoerli__Meta_>;
  _SubgraphErrorPolicy_: _SubgraphErrorPolicy_;
  rinkeby_Asset: ResolverTypeWrapper<rinkeby_Asset>;
  rinkeby_AssetBalance: ResolverTypeWrapper<rinkeby_AssetBalance>;
  rinkeby_AssetBalance_filter: rinkeby_AssetBalance_filter;
  rinkeby_AssetBalance_orderBy: rinkeby_AssetBalance_orderBy;
  rinkeby_Asset_filter: rinkeby_Asset_filter;
  rinkeby_Asset_orderBy: rinkeby_Asset_orderBy;
  rinkeby_BigDecimal: ResolverTypeWrapper<Scalars['rinkeby_BigDecimal']>;
  rinkeby_BlockChangedFilter: rinkeby_BlockChangedFilter;
  rinkeby_Block_height: rinkeby_Block_height;
  rinkeby_Bytes: ResolverTypeWrapper<Scalars['rinkeby_Bytes']>;
  rinkeby_DestinationTransfer: ResolverTypeWrapper<rinkeby_DestinationTransfer>;
  rinkeby_DestinationTransfer_filter: rinkeby_DestinationTransfer_filter;
  rinkeby_DestinationTransfer_orderBy: rinkeby_DestinationTransfer_orderBy;
  rinkeby_OrderDirection: rinkeby_OrderDirection;
  rinkeby_OriginTransfer: ResolverTypeWrapper<rinkeby_OriginTransfer>;
  rinkeby_OriginTransfer_filter: rinkeby_OriginTransfer_filter;
  rinkeby_OriginTransfer_orderBy: rinkeby_OriginTransfer_orderBy;
  rinkeby_Relayer: ResolverTypeWrapper<rinkeby_Relayer>;
  rinkeby_Relayer_filter: rinkeby_Relayer_filter;
  rinkeby_Relayer_orderBy: rinkeby_Relayer_orderBy;
  rinkeby_Router: ResolverTypeWrapper<rinkeby_Router>;
  rinkeby_Router_filter: rinkeby_Router_filter;
  rinkeby_Router_orderBy: rinkeby_Router_orderBy;
  rinkeby_Setting: ResolverTypeWrapper<rinkeby_Setting>;
  rinkeby_Setting_filter: rinkeby_Setting_filter;
  rinkeby_Setting_orderBy: rinkeby_Setting_orderBy;
  rinkeby_SponsorVault: ResolverTypeWrapper<rinkeby_SponsorVault>;
  rinkeby_SponsorVault_filter: rinkeby_SponsorVault_filter;
  rinkeby_SponsorVault_orderBy: rinkeby_SponsorVault_orderBy;
  rinkeby_StableSwap: ResolverTypeWrapper<rinkeby_StableSwap>;
  rinkeby_StableSwap_filter: rinkeby_StableSwap_filter;
  rinkeby_StableSwap_orderBy: rinkeby_StableSwap_orderBy;
  rinkeby_TransferStatus: rinkeby_TransferStatus;
  rinkeby__Block_: ResolverTypeWrapper<rinkeby__Block_>;
  rinkeby__Meta_: ResolverTypeWrapper<rinkeby__Meta_>;
  goerli_Asset: ResolverTypeWrapper<goerli_Asset>;
  goerli_AssetBalance: ResolverTypeWrapper<goerli_AssetBalance>;
  goerli_AssetBalance_filter: goerli_AssetBalance_filter;
  goerli_AssetBalance_orderBy: goerli_AssetBalance_orderBy;
  goerli_Asset_filter: goerli_Asset_filter;
  goerli_Asset_orderBy: goerli_Asset_orderBy;
  goerli_BigDecimal: ResolverTypeWrapper<Scalars['goerli_BigDecimal']>;
  goerli_BlockChangedFilter: goerli_BlockChangedFilter;
  goerli_Block_height: goerli_Block_height;
  goerli_Bytes: ResolverTypeWrapper<Scalars['goerli_Bytes']>;
  goerli_DestinationTransfer: ResolverTypeWrapper<goerli_DestinationTransfer>;
  goerli_DestinationTransfer_filter: goerli_DestinationTransfer_filter;
  goerli_DestinationTransfer_orderBy: goerli_DestinationTransfer_orderBy;
  goerli_OrderDirection: goerli_OrderDirection;
  goerli_OriginTransfer: ResolverTypeWrapper<goerli_OriginTransfer>;
  goerli_OriginTransfer_filter: goerli_OriginTransfer_filter;
  goerli_OriginTransfer_orderBy: goerli_OriginTransfer_orderBy;
  goerli_Relayer: ResolverTypeWrapper<goerli_Relayer>;
  goerli_Relayer_filter: goerli_Relayer_filter;
  goerli_Relayer_orderBy: goerli_Relayer_orderBy;
  goerli_Router: ResolverTypeWrapper<goerli_Router>;
  goerli_Router_filter: goerli_Router_filter;
  goerli_Router_orderBy: goerli_Router_orderBy;
  goerli_Setting: ResolverTypeWrapper<goerli_Setting>;
  goerli_Setting_filter: goerli_Setting_filter;
  goerli_Setting_orderBy: goerli_Setting_orderBy;
  goerli_SponsorVault: ResolverTypeWrapper<goerli_SponsorVault>;
  goerli_SponsorVault_filter: goerli_SponsorVault_filter;
  goerli_SponsorVault_orderBy: goerli_SponsorVault_orderBy;
  goerli_StableSwap: ResolverTypeWrapper<goerli_StableSwap>;
  goerli_StableSwap_filter: goerli_StableSwap_filter;
  goerli_StableSwap_orderBy: goerli_StableSwap_orderBy;
  goerli_TransferStatus: goerli_TransferStatus;
  goerli__Block_: ResolverTypeWrapper<goerli__Block_>;
  goerli__Meta_: ResolverTypeWrapper<goerli__Meta_>;
  staginggoerli_Asset: ResolverTypeWrapper<staginggoerli_Asset>;
  staginggoerli_AssetBalance: ResolverTypeWrapper<staginggoerli_AssetBalance>;
  staginggoerli_AssetBalance_filter: staginggoerli_AssetBalance_filter;
  staginggoerli_AssetBalance_orderBy: staginggoerli_AssetBalance_orderBy;
  staginggoerli_Asset_filter: staginggoerli_Asset_filter;
  staginggoerli_Asset_orderBy: staginggoerli_Asset_orderBy;
  staginggoerli_BigDecimal: ResolverTypeWrapper<Scalars['staginggoerli_BigDecimal']>;
  staginggoerli_BlockChangedFilter: staginggoerli_BlockChangedFilter;
  staginggoerli_Block_height: staginggoerli_Block_height;
  staginggoerli_Bytes: ResolverTypeWrapper<Scalars['staginggoerli_Bytes']>;
  staginggoerli_DestinationTransfer: ResolverTypeWrapper<staginggoerli_DestinationTransfer>;
  staginggoerli_DestinationTransfer_filter: staginggoerli_DestinationTransfer_filter;
  staginggoerli_DestinationTransfer_orderBy: staginggoerli_DestinationTransfer_orderBy;
  staginggoerli_OrderDirection: staginggoerli_OrderDirection;
  staginggoerli_OriginTransfer: ResolverTypeWrapper<staginggoerli_OriginTransfer>;
  staginggoerli_OriginTransfer_filter: staginggoerli_OriginTransfer_filter;
  staginggoerli_OriginTransfer_orderBy: staginggoerli_OriginTransfer_orderBy;
  staginggoerli_Relayer: ResolverTypeWrapper<staginggoerli_Relayer>;
  staginggoerli_Relayer_filter: staginggoerli_Relayer_filter;
  staginggoerli_Relayer_orderBy: staginggoerli_Relayer_orderBy;
  staginggoerli_Router: ResolverTypeWrapper<staginggoerli_Router>;
  staginggoerli_Router_filter: staginggoerli_Router_filter;
  staginggoerli_Router_orderBy: staginggoerli_Router_orderBy;
  staginggoerli_Setting: ResolverTypeWrapper<staginggoerli_Setting>;
  staginggoerli_Setting_filter: staginggoerli_Setting_filter;
  staginggoerli_Setting_orderBy: staginggoerli_Setting_orderBy;
  staginggoerli_SponsorVault: ResolverTypeWrapper<staginggoerli_SponsorVault>;
  staginggoerli_SponsorVault_filter: staginggoerli_SponsorVault_filter;
  staginggoerli_SponsorVault_orderBy: staginggoerli_SponsorVault_orderBy;
  staginggoerli_StableSwap: ResolverTypeWrapper<staginggoerli_StableSwap>;
  staginggoerli_StableSwap_filter: staginggoerli_StableSwap_filter;
  staginggoerli_StableSwap_orderBy: staginggoerli_StableSwap_orderBy;
  staginggoerli_TransferStatus: staginggoerli_TransferStatus;
  staginggoerli__Block_: ResolverTypeWrapper<staginggoerli__Block_>;
  staginggoerli__Meta_: ResolverTypeWrapper<staginggoerli__Meta_>;
  testrinkeby_Asset: ResolverTypeWrapper<testrinkeby_Asset>;
  testrinkeby_AssetBalance: ResolverTypeWrapper<testrinkeby_AssetBalance>;
  testrinkeby_AssetBalance_filter: testrinkeby_AssetBalance_filter;
  testrinkeby_AssetBalance_orderBy: testrinkeby_AssetBalance_orderBy;
  testrinkeby_Asset_filter: testrinkeby_Asset_filter;
  testrinkeby_Asset_orderBy: testrinkeby_Asset_orderBy;
  testrinkeby_BigDecimal: ResolverTypeWrapper<Scalars['testrinkeby_BigDecimal']>;
  testrinkeby_BlockChangedFilter: testrinkeby_BlockChangedFilter;
  testrinkeby_Block_height: testrinkeby_Block_height;
  testrinkeby_Bytes: ResolverTypeWrapper<Scalars['testrinkeby_Bytes']>;
  testrinkeby_DestinationTransfer: ResolverTypeWrapper<testrinkeby_DestinationTransfer>;
  testrinkeby_DestinationTransfer_filter: testrinkeby_DestinationTransfer_filter;
  testrinkeby_DestinationTransfer_orderBy: testrinkeby_DestinationTransfer_orderBy;
  testrinkeby_OrderDirection: testrinkeby_OrderDirection;
  testrinkeby_OriginTransfer: ResolverTypeWrapper<testrinkeby_OriginTransfer>;
  testrinkeby_OriginTransfer_filter: testrinkeby_OriginTransfer_filter;
  testrinkeby_OriginTransfer_orderBy: testrinkeby_OriginTransfer_orderBy;
  testrinkeby_Relayer: ResolverTypeWrapper<testrinkeby_Relayer>;
  testrinkeby_Relayer_filter: testrinkeby_Relayer_filter;
  testrinkeby_Relayer_orderBy: testrinkeby_Relayer_orderBy;
  testrinkeby_Router: ResolverTypeWrapper<testrinkeby_Router>;
  testrinkeby_Router_filter: testrinkeby_Router_filter;
  testrinkeby_Router_orderBy: testrinkeby_Router_orderBy;
  testrinkeby_Setting: ResolverTypeWrapper<testrinkeby_Setting>;
  testrinkeby_Setting_filter: testrinkeby_Setting_filter;
  testrinkeby_Setting_orderBy: testrinkeby_Setting_orderBy;
  testrinkeby_SponsorVault: ResolverTypeWrapper<testrinkeby_SponsorVault>;
  testrinkeby_SponsorVault_filter: testrinkeby_SponsorVault_filter;
  testrinkeby_SponsorVault_orderBy: testrinkeby_SponsorVault_orderBy;
  testrinkeby_StableSwap: ResolverTypeWrapper<testrinkeby_StableSwap>;
  testrinkeby_StableSwap_filter: testrinkeby_StableSwap_filter;
  testrinkeby_StableSwap_orderBy: testrinkeby_StableSwap_orderBy;
  testrinkeby_TransferStatus: testrinkeby_TransferStatus;
  testrinkeby__Block_: ResolverTypeWrapper<testrinkeby__Block_>;
  testrinkeby__Meta_: ResolverTypeWrapper<testrinkeby__Meta_>;
  stagingrinkeby_Asset: ResolverTypeWrapper<stagingrinkeby_Asset>;
  stagingrinkeby_AssetBalance: ResolverTypeWrapper<stagingrinkeby_AssetBalance>;
  stagingrinkeby_AssetBalance_filter: stagingrinkeby_AssetBalance_filter;
  stagingrinkeby_AssetBalance_orderBy: stagingrinkeby_AssetBalance_orderBy;
  stagingrinkeby_Asset_filter: stagingrinkeby_Asset_filter;
  stagingrinkeby_Asset_orderBy: stagingrinkeby_Asset_orderBy;
  stagingrinkeby_BigDecimal: ResolverTypeWrapper<Scalars['stagingrinkeby_BigDecimal']>;
  stagingrinkeby_BlockChangedFilter: stagingrinkeby_BlockChangedFilter;
  stagingrinkeby_Block_height: stagingrinkeby_Block_height;
  stagingrinkeby_Bytes: ResolverTypeWrapper<Scalars['stagingrinkeby_Bytes']>;
  stagingrinkeby_DestinationTransfer: ResolverTypeWrapper<stagingrinkeby_DestinationTransfer>;
  stagingrinkeby_DestinationTransfer_filter: stagingrinkeby_DestinationTransfer_filter;
  stagingrinkeby_DestinationTransfer_orderBy: stagingrinkeby_DestinationTransfer_orderBy;
  stagingrinkeby_OrderDirection: stagingrinkeby_OrderDirection;
  stagingrinkeby_OriginTransfer: ResolverTypeWrapper<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_OriginTransfer_filter: stagingrinkeby_OriginTransfer_filter;
  stagingrinkeby_OriginTransfer_orderBy: stagingrinkeby_OriginTransfer_orderBy;
  stagingrinkeby_Relayer: ResolverTypeWrapper<stagingrinkeby_Relayer>;
  stagingrinkeby_Relayer_filter: stagingrinkeby_Relayer_filter;
  stagingrinkeby_Relayer_orderBy: stagingrinkeby_Relayer_orderBy;
  stagingrinkeby_Router: ResolverTypeWrapper<stagingrinkeby_Router>;
  stagingrinkeby_Router_filter: stagingrinkeby_Router_filter;
  stagingrinkeby_Router_orderBy: stagingrinkeby_Router_orderBy;
  stagingrinkeby_Setting: ResolverTypeWrapper<stagingrinkeby_Setting>;
  stagingrinkeby_Setting_filter: stagingrinkeby_Setting_filter;
  stagingrinkeby_Setting_orderBy: stagingrinkeby_Setting_orderBy;
  stagingrinkeby_SponsorVault: ResolverTypeWrapper<stagingrinkeby_SponsorVault>;
  stagingrinkeby_SponsorVault_filter: stagingrinkeby_SponsorVault_filter;
  stagingrinkeby_SponsorVault_orderBy: stagingrinkeby_SponsorVault_orderBy;
  stagingrinkeby_StableSwap: ResolverTypeWrapper<stagingrinkeby_StableSwap>;
  stagingrinkeby_StableSwap_filter: stagingrinkeby_StableSwap_filter;
  stagingrinkeby_StableSwap_orderBy: stagingrinkeby_StableSwap_orderBy;
  stagingrinkeby_TransferStatus: stagingrinkeby_TransferStatus;
  stagingrinkeby__Block_: ResolverTypeWrapper<stagingrinkeby__Block_>;
  stagingrinkeby__Meta_: ResolverTypeWrapper<stagingrinkeby__Meta_>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Subscription: {};
  testgoerli_Asset: testgoerli_Asset;
  testgoerli_AssetBalance: testgoerli_AssetBalance;
  testgoerli_AssetBalance_filter: testgoerli_AssetBalance_filter;
  testgoerli_Asset_filter: testgoerli_Asset_filter;
  testgoerli_BigDecimal: Scalars['testgoerli_BigDecimal'];
  BigInt: Scalars['BigInt'];
  testgoerli_BlockChangedFilter: testgoerli_BlockChangedFilter;
  testgoerli_Block_height: testgoerli_Block_height;
  Boolean: Scalars['Boolean'];
  testgoerli_Bytes: Scalars['testgoerli_Bytes'];
  testgoerli_DestinationTransfer: testgoerli_DestinationTransfer;
  testgoerli_DestinationTransfer_filter: testgoerli_DestinationTransfer_filter;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  testgoerli_OriginTransfer: testgoerli_OriginTransfer;
  testgoerli_OriginTransfer_filter: testgoerli_OriginTransfer_filter;
  testgoerli_Relayer: testgoerli_Relayer;
  testgoerli_Relayer_filter: testgoerli_Relayer_filter;
  testgoerli_Router: testgoerli_Router;
  testgoerli_Router_filter: testgoerli_Router_filter;
  testgoerli_Setting: testgoerli_Setting;
  testgoerli_Setting_filter: testgoerli_Setting_filter;
  testgoerli_SponsorVault: testgoerli_SponsorVault;
  testgoerli_SponsorVault_filter: testgoerli_SponsorVault_filter;
  testgoerli_StableSwap: testgoerli_StableSwap;
  testgoerli_StableSwap_filter: testgoerli_StableSwap_filter;
  String: Scalars['String'];
  testgoerli__Block_: testgoerli__Block_;
  testgoerli__Meta_: testgoerli__Meta_;
  rinkeby_Asset: rinkeby_Asset;
  rinkeby_AssetBalance: rinkeby_AssetBalance;
  rinkeby_AssetBalance_filter: rinkeby_AssetBalance_filter;
  rinkeby_Asset_filter: rinkeby_Asset_filter;
  rinkeby_BigDecimal: Scalars['rinkeby_BigDecimal'];
  rinkeby_BlockChangedFilter: rinkeby_BlockChangedFilter;
  rinkeby_Block_height: rinkeby_Block_height;
  rinkeby_Bytes: Scalars['rinkeby_Bytes'];
  rinkeby_DestinationTransfer: rinkeby_DestinationTransfer;
  rinkeby_DestinationTransfer_filter: rinkeby_DestinationTransfer_filter;
  rinkeby_OriginTransfer: rinkeby_OriginTransfer;
  rinkeby_OriginTransfer_filter: rinkeby_OriginTransfer_filter;
  rinkeby_Relayer: rinkeby_Relayer;
  rinkeby_Relayer_filter: rinkeby_Relayer_filter;
  rinkeby_Router: rinkeby_Router;
  rinkeby_Router_filter: rinkeby_Router_filter;
  rinkeby_Setting: rinkeby_Setting;
  rinkeby_Setting_filter: rinkeby_Setting_filter;
  rinkeby_SponsorVault: rinkeby_SponsorVault;
  rinkeby_SponsorVault_filter: rinkeby_SponsorVault_filter;
  rinkeby_StableSwap: rinkeby_StableSwap;
  rinkeby_StableSwap_filter: rinkeby_StableSwap_filter;
  rinkeby__Block_: rinkeby__Block_;
  rinkeby__Meta_: rinkeby__Meta_;
  goerli_Asset: goerli_Asset;
  goerli_AssetBalance: goerli_AssetBalance;
  goerli_AssetBalance_filter: goerli_AssetBalance_filter;
  goerli_Asset_filter: goerli_Asset_filter;
  goerli_BigDecimal: Scalars['goerli_BigDecimal'];
  goerli_BlockChangedFilter: goerli_BlockChangedFilter;
  goerli_Block_height: goerli_Block_height;
  goerli_Bytes: Scalars['goerli_Bytes'];
  goerli_DestinationTransfer: goerli_DestinationTransfer;
  goerli_DestinationTransfer_filter: goerli_DestinationTransfer_filter;
  goerli_OriginTransfer: goerli_OriginTransfer;
  goerli_OriginTransfer_filter: goerli_OriginTransfer_filter;
  goerli_Relayer: goerli_Relayer;
  goerli_Relayer_filter: goerli_Relayer_filter;
  goerli_Router: goerli_Router;
  goerli_Router_filter: goerli_Router_filter;
  goerli_Setting: goerli_Setting;
  goerli_Setting_filter: goerli_Setting_filter;
  goerli_SponsorVault: goerli_SponsorVault;
  goerli_SponsorVault_filter: goerli_SponsorVault_filter;
  goerli_StableSwap: goerli_StableSwap;
  goerli_StableSwap_filter: goerli_StableSwap_filter;
  goerli__Block_: goerli__Block_;
  goerli__Meta_: goerli__Meta_;
  staginggoerli_Asset: staginggoerli_Asset;
  staginggoerli_AssetBalance: staginggoerli_AssetBalance;
  staginggoerli_AssetBalance_filter: staginggoerli_AssetBalance_filter;
  staginggoerli_Asset_filter: staginggoerli_Asset_filter;
  staginggoerli_BigDecimal: Scalars['staginggoerli_BigDecimal'];
  staginggoerli_BlockChangedFilter: staginggoerli_BlockChangedFilter;
  staginggoerli_Block_height: staginggoerli_Block_height;
  staginggoerli_Bytes: Scalars['staginggoerli_Bytes'];
  staginggoerli_DestinationTransfer: staginggoerli_DestinationTransfer;
  staginggoerli_DestinationTransfer_filter: staginggoerli_DestinationTransfer_filter;
  staginggoerli_OriginTransfer: staginggoerli_OriginTransfer;
  staginggoerli_OriginTransfer_filter: staginggoerli_OriginTransfer_filter;
  staginggoerli_Relayer: staginggoerli_Relayer;
  staginggoerli_Relayer_filter: staginggoerli_Relayer_filter;
  staginggoerli_Router: staginggoerli_Router;
  staginggoerli_Router_filter: staginggoerli_Router_filter;
  staginggoerli_Setting: staginggoerli_Setting;
  staginggoerli_Setting_filter: staginggoerli_Setting_filter;
  staginggoerli_SponsorVault: staginggoerli_SponsorVault;
  staginggoerli_SponsorVault_filter: staginggoerli_SponsorVault_filter;
  staginggoerli_StableSwap: staginggoerli_StableSwap;
  staginggoerli_StableSwap_filter: staginggoerli_StableSwap_filter;
  staginggoerli__Block_: staginggoerli__Block_;
  staginggoerli__Meta_: staginggoerli__Meta_;
  testrinkeby_Asset: testrinkeby_Asset;
  testrinkeby_AssetBalance: testrinkeby_AssetBalance;
  testrinkeby_AssetBalance_filter: testrinkeby_AssetBalance_filter;
  testrinkeby_Asset_filter: testrinkeby_Asset_filter;
  testrinkeby_BigDecimal: Scalars['testrinkeby_BigDecimal'];
  testrinkeby_BlockChangedFilter: testrinkeby_BlockChangedFilter;
  testrinkeby_Block_height: testrinkeby_Block_height;
  testrinkeby_Bytes: Scalars['testrinkeby_Bytes'];
  testrinkeby_DestinationTransfer: testrinkeby_DestinationTransfer;
  testrinkeby_DestinationTransfer_filter: testrinkeby_DestinationTransfer_filter;
  testrinkeby_OriginTransfer: testrinkeby_OriginTransfer;
  testrinkeby_OriginTransfer_filter: testrinkeby_OriginTransfer_filter;
  testrinkeby_Relayer: testrinkeby_Relayer;
  testrinkeby_Relayer_filter: testrinkeby_Relayer_filter;
  testrinkeby_Router: testrinkeby_Router;
  testrinkeby_Router_filter: testrinkeby_Router_filter;
  testrinkeby_Setting: testrinkeby_Setting;
  testrinkeby_Setting_filter: testrinkeby_Setting_filter;
  testrinkeby_SponsorVault: testrinkeby_SponsorVault;
  testrinkeby_SponsorVault_filter: testrinkeby_SponsorVault_filter;
  testrinkeby_StableSwap: testrinkeby_StableSwap;
  testrinkeby_StableSwap_filter: testrinkeby_StableSwap_filter;
  testrinkeby__Block_: testrinkeby__Block_;
  testrinkeby__Meta_: testrinkeby__Meta_;
  stagingrinkeby_Asset: stagingrinkeby_Asset;
  stagingrinkeby_AssetBalance: stagingrinkeby_AssetBalance;
  stagingrinkeby_AssetBalance_filter: stagingrinkeby_AssetBalance_filter;
  stagingrinkeby_Asset_filter: stagingrinkeby_Asset_filter;
  stagingrinkeby_BigDecimal: Scalars['stagingrinkeby_BigDecimal'];
  stagingrinkeby_BlockChangedFilter: stagingrinkeby_BlockChangedFilter;
  stagingrinkeby_Block_height: stagingrinkeby_Block_height;
  stagingrinkeby_Bytes: Scalars['stagingrinkeby_Bytes'];
  stagingrinkeby_DestinationTransfer: stagingrinkeby_DestinationTransfer;
  stagingrinkeby_DestinationTransfer_filter: stagingrinkeby_DestinationTransfer_filter;
  stagingrinkeby_OriginTransfer: stagingrinkeby_OriginTransfer;
  stagingrinkeby_OriginTransfer_filter: stagingrinkeby_OriginTransfer_filter;
  stagingrinkeby_Relayer: stagingrinkeby_Relayer;
  stagingrinkeby_Relayer_filter: stagingrinkeby_Relayer_filter;
  stagingrinkeby_Router: stagingrinkeby_Router;
  stagingrinkeby_Router_filter: stagingrinkeby_Router_filter;
  stagingrinkeby_Setting: stagingrinkeby_Setting;
  stagingrinkeby_Setting_filter: stagingrinkeby_Setting_filter;
  stagingrinkeby_SponsorVault: stagingrinkeby_SponsorVault;
  stagingrinkeby_SponsorVault_filter: stagingrinkeby_SponsorVault_filter;
  stagingrinkeby_StableSwap: stagingrinkeby_StableSwap;
  stagingrinkeby_StableSwap_filter: stagingrinkeby_StableSwap_filter;
  stagingrinkeby__Block_: stagingrinkeby__Block_;
  stagingrinkeby__Meta_: stagingrinkeby__Meta_;
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  testgoerli_asset?: Resolver<Maybe<ResolversTypes['testgoerli_Asset']>, ParentType, ContextType, RequireFields<Querytestgoerli_assetArgs, 'id' | 'subgraphError'>>;
  testgoerli_assets?: Resolver<Array<ResolversTypes['testgoerli_Asset']>, ParentType, ContextType, RequireFields<Querytestgoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_assetBalance?: Resolver<Maybe<ResolversTypes['testgoerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querytestgoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  testgoerli_assetBalances?: Resolver<Array<ResolversTypes['testgoerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querytestgoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_router?: Resolver<Maybe<ResolversTypes['testgoerli_Router']>, ParentType, ContextType, RequireFields<Querytestgoerli_routerArgs, 'id' | 'subgraphError'>>;
  testgoerli_routers?: Resolver<Array<ResolversTypes['testgoerli_Router']>, ParentType, ContextType, RequireFields<Querytestgoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_setting?: Resolver<Maybe<ResolversTypes['testgoerli_Setting']>, ParentType, ContextType, RequireFields<Querytestgoerli_settingArgs, 'id' | 'subgraphError'>>;
  testgoerli_settings?: Resolver<Array<ResolversTypes['testgoerli_Setting']>, ParentType, ContextType, RequireFields<Querytestgoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_relayer?: Resolver<Maybe<ResolversTypes['testgoerli_Relayer']>, ParentType, ContextType, RequireFields<Querytestgoerli_relayerArgs, 'id' | 'subgraphError'>>;
  testgoerli_relayers?: Resolver<Array<ResolversTypes['testgoerli_Relayer']>, ParentType, ContextType, RequireFields<Querytestgoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_stableSwap?: Resolver<Maybe<ResolversTypes['testgoerli_StableSwap']>, ParentType, ContextType, RequireFields<Querytestgoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  testgoerli_stableSwaps?: Resolver<Array<ResolversTypes['testgoerli_StableSwap']>, ParentType, ContextType, RequireFields<Querytestgoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_sponsorVault?: Resolver<Maybe<ResolversTypes['testgoerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querytestgoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  testgoerli_sponsorVaults?: Resolver<Array<ResolversTypes['testgoerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querytestgoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_originTransfer?: Resolver<Maybe<ResolversTypes['testgoerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querytestgoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  testgoerli_originTransfers?: Resolver<Array<ResolversTypes['testgoerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querytestgoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_destinationTransfer?: Resolver<Maybe<ResolversTypes['testgoerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querytestgoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  testgoerli_destinationTransfers?: Resolver<Array<ResolversTypes['testgoerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querytestgoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli__meta?: Resolver<Maybe<ResolversTypes['testgoerli__Meta_']>, ParentType, ContextType, Partial<Querytestgoerli__metaArgs>>;
  rinkeby_asset?: Resolver<Maybe<ResolversTypes['rinkeby_Asset']>, ParentType, ContextType, RequireFields<Queryrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  rinkeby_assets?: Resolver<Array<ResolversTypes['rinkeby_Asset']>, ParentType, ContextType, RequireFields<Queryrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_assetBalance?: Resolver<Maybe<ResolversTypes['rinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Queryrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  rinkeby_assetBalances?: Resolver<Array<ResolversTypes['rinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Queryrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_router?: Resolver<Maybe<ResolversTypes['rinkeby_Router']>, ParentType, ContextType, RequireFields<Queryrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  rinkeby_routers?: Resolver<Array<ResolversTypes['rinkeby_Router']>, ParentType, ContextType, RequireFields<Queryrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_setting?: Resolver<Maybe<ResolversTypes['rinkeby_Setting']>, ParentType, ContextType, RequireFields<Queryrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  rinkeby_settings?: Resolver<Array<ResolversTypes['rinkeby_Setting']>, ParentType, ContextType, RequireFields<Queryrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_relayer?: Resolver<Maybe<ResolversTypes['rinkeby_Relayer']>, ParentType, ContextType, RequireFields<Queryrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  rinkeby_relayers?: Resolver<Array<ResolversTypes['rinkeby_Relayer']>, ParentType, ContextType, RequireFields<Queryrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_stableSwap?: Resolver<Maybe<ResolversTypes['rinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Queryrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  rinkeby_stableSwaps?: Resolver<Array<ResolversTypes['rinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Queryrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_sponsorVault?: Resolver<Maybe<ResolversTypes['rinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Queryrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  rinkeby_sponsorVaults?: Resolver<Array<ResolversTypes['rinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Queryrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_originTransfer?: Resolver<Maybe<ResolversTypes['rinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Queryrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  rinkeby_originTransfers?: Resolver<Array<ResolversTypes['rinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Queryrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_destinationTransfer?: Resolver<Maybe<ResolversTypes['rinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Queryrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  rinkeby_destinationTransfers?: Resolver<Array<ResolversTypes['rinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Queryrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby__meta?: Resolver<Maybe<ResolversTypes['rinkeby__Meta_']>, ParentType, ContextType, Partial<Queryrinkeby__metaArgs>>;
  goerli_asset?: Resolver<Maybe<ResolversTypes['goerli_Asset']>, ParentType, ContextType, RequireFields<Querygoerli_assetArgs, 'id' | 'subgraphError'>>;
  goerli_assets?: Resolver<Array<ResolversTypes['goerli_Asset']>, ParentType, ContextType, RequireFields<Querygoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_assetBalance?: Resolver<Maybe<ResolversTypes['goerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querygoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  goerli_assetBalances?: Resolver<Array<ResolversTypes['goerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querygoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_router?: Resolver<Maybe<ResolversTypes['goerli_Router']>, ParentType, ContextType, RequireFields<Querygoerli_routerArgs, 'id' | 'subgraphError'>>;
  goerli_routers?: Resolver<Array<ResolversTypes['goerli_Router']>, ParentType, ContextType, RequireFields<Querygoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_setting?: Resolver<Maybe<ResolversTypes['goerli_Setting']>, ParentType, ContextType, RequireFields<Querygoerli_settingArgs, 'id' | 'subgraphError'>>;
  goerli_settings?: Resolver<Array<ResolversTypes['goerli_Setting']>, ParentType, ContextType, RequireFields<Querygoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_relayer?: Resolver<Maybe<ResolversTypes['goerli_Relayer']>, ParentType, ContextType, RequireFields<Querygoerli_relayerArgs, 'id' | 'subgraphError'>>;
  goerli_relayers?: Resolver<Array<ResolversTypes['goerli_Relayer']>, ParentType, ContextType, RequireFields<Querygoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_stableSwap?: Resolver<Maybe<ResolversTypes['goerli_StableSwap']>, ParentType, ContextType, RequireFields<Querygoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  goerli_stableSwaps?: Resolver<Array<ResolversTypes['goerli_StableSwap']>, ParentType, ContextType, RequireFields<Querygoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_sponsorVault?: Resolver<Maybe<ResolversTypes['goerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querygoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  goerli_sponsorVaults?: Resolver<Array<ResolversTypes['goerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querygoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_originTransfer?: Resolver<Maybe<ResolversTypes['goerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querygoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  goerli_originTransfers?: Resolver<Array<ResolversTypes['goerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querygoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_destinationTransfer?: Resolver<Maybe<ResolversTypes['goerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querygoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  goerli_destinationTransfers?: Resolver<Array<ResolversTypes['goerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querygoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli__meta?: Resolver<Maybe<ResolversTypes['goerli__Meta_']>, ParentType, ContextType, Partial<Querygoerli__metaArgs>>;
  staginggoerli_asset?: Resolver<Maybe<ResolversTypes['staginggoerli_Asset']>, ParentType, ContextType, RequireFields<Querystaginggoerli_assetArgs, 'id' | 'subgraphError'>>;
  staginggoerli_assets?: Resolver<Array<ResolversTypes['staginggoerli_Asset']>, ParentType, ContextType, RequireFields<Querystaginggoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_assetBalance?: Resolver<Maybe<ResolversTypes['staginggoerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querystaginggoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  staginggoerli_assetBalances?: Resolver<Array<ResolversTypes['staginggoerli_AssetBalance']>, ParentType, ContextType, RequireFields<Querystaginggoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_router?: Resolver<Maybe<ResolversTypes['staginggoerli_Router']>, ParentType, ContextType, RequireFields<Querystaginggoerli_routerArgs, 'id' | 'subgraphError'>>;
  staginggoerli_routers?: Resolver<Array<ResolversTypes['staginggoerli_Router']>, ParentType, ContextType, RequireFields<Querystaginggoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_setting?: Resolver<Maybe<ResolversTypes['staginggoerli_Setting']>, ParentType, ContextType, RequireFields<Querystaginggoerli_settingArgs, 'id' | 'subgraphError'>>;
  staginggoerli_settings?: Resolver<Array<ResolversTypes['staginggoerli_Setting']>, ParentType, ContextType, RequireFields<Querystaginggoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_relayer?: Resolver<Maybe<ResolversTypes['staginggoerli_Relayer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_relayerArgs, 'id' | 'subgraphError'>>;
  staginggoerli_relayers?: Resolver<Array<ResolversTypes['staginggoerli_Relayer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_stableSwap?: Resolver<Maybe<ResolversTypes['staginggoerli_StableSwap']>, ParentType, ContextType, RequireFields<Querystaginggoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  staginggoerli_stableSwaps?: Resolver<Array<ResolversTypes['staginggoerli_StableSwap']>, ParentType, ContextType, RequireFields<Querystaginggoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_sponsorVault?: Resolver<Maybe<ResolversTypes['staginggoerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querystaginggoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  staginggoerli_sponsorVaults?: Resolver<Array<ResolversTypes['staginggoerli_SponsorVault']>, ParentType, ContextType, RequireFields<Querystaginggoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_originTransfer?: Resolver<Maybe<ResolversTypes['staginggoerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  staginggoerli_originTransfers?: Resolver<Array<ResolversTypes['staginggoerli_OriginTransfer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_destinationTransfer?: Resolver<Maybe<ResolversTypes['staginggoerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  staginggoerli_destinationTransfers?: Resolver<Array<ResolversTypes['staginggoerli_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querystaginggoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli__meta?: Resolver<Maybe<ResolversTypes['staginggoerli__Meta_']>, ParentType, ContextType, Partial<Querystaginggoerli__metaArgs>>;
  testrinkeby_asset?: Resolver<Maybe<ResolversTypes['testrinkeby_Asset']>, ParentType, ContextType, RequireFields<Querytestrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  testrinkeby_assets?: Resolver<Array<ResolversTypes['testrinkeby_Asset']>, ParentType, ContextType, RequireFields<Querytestrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_assetBalance?: Resolver<Maybe<ResolversTypes['testrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Querytestrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  testrinkeby_assetBalances?: Resolver<Array<ResolversTypes['testrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Querytestrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_router?: Resolver<Maybe<ResolversTypes['testrinkeby_Router']>, ParentType, ContextType, RequireFields<Querytestrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  testrinkeby_routers?: Resolver<Array<ResolversTypes['testrinkeby_Router']>, ParentType, ContextType, RequireFields<Querytestrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_setting?: Resolver<Maybe<ResolversTypes['testrinkeby_Setting']>, ParentType, ContextType, RequireFields<Querytestrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  testrinkeby_settings?: Resolver<Array<ResolversTypes['testrinkeby_Setting']>, ParentType, ContextType, RequireFields<Querytestrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_relayer?: Resolver<Maybe<ResolversTypes['testrinkeby_Relayer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  testrinkeby_relayers?: Resolver<Array<ResolversTypes['testrinkeby_Relayer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_stableSwap?: Resolver<Maybe<ResolversTypes['testrinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Querytestrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  testrinkeby_stableSwaps?: Resolver<Array<ResolversTypes['testrinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Querytestrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_sponsorVault?: Resolver<Maybe<ResolversTypes['testrinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Querytestrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  testrinkeby_sponsorVaults?: Resolver<Array<ResolversTypes['testrinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Querytestrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_originTransfer?: Resolver<Maybe<ResolversTypes['testrinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  testrinkeby_originTransfers?: Resolver<Array<ResolversTypes['testrinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_destinationTransfer?: Resolver<Maybe<ResolversTypes['testrinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  testrinkeby_destinationTransfers?: Resolver<Array<ResolversTypes['testrinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querytestrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby__meta?: Resolver<Maybe<ResolversTypes['testrinkeby__Meta_']>, ParentType, ContextType, Partial<Querytestrinkeby__metaArgs>>;
  stagingrinkeby_asset?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Asset']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_assets?: Resolver<Array<ResolversTypes['stagingrinkeby_Asset']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_assetBalance?: Resolver<Maybe<ResolversTypes['stagingrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_assetBalances?: Resolver<Array<ResolversTypes['stagingrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_router?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Router']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_routers?: Resolver<Array<ResolversTypes['stagingrinkeby_Router']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_setting?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Setting']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_settings?: Resolver<Array<ResolversTypes['stagingrinkeby_Setting']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_relayer?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Relayer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_relayers?: Resolver<Array<ResolversTypes['stagingrinkeby_Relayer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_stableSwap?: Resolver<Maybe<ResolversTypes['stagingrinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_stableSwaps?: Resolver<Array<ResolversTypes['stagingrinkeby_StableSwap']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_sponsorVault?: Resolver<Maybe<ResolversTypes['stagingrinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_sponsorVaults?: Resolver<Array<ResolversTypes['stagingrinkeby_SponsorVault']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_originTransfer?: Resolver<Maybe<ResolversTypes['stagingrinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_originTransfers?: Resolver<Array<ResolversTypes['stagingrinkeby_OriginTransfer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_destinationTransfer?: Resolver<Maybe<ResolversTypes['stagingrinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_destinationTransfers?: Resolver<Array<ResolversTypes['stagingrinkeby_DestinationTransfer']>, ParentType, ContextType, RequireFields<Querystagingrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby__meta?: Resolver<Maybe<ResolversTypes['stagingrinkeby__Meta_']>, ParentType, ContextType, Partial<Querystagingrinkeby__metaArgs>>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  testgoerli_asset?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_Asset']>, "testgoerli_asset", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_assetArgs, 'id' | 'subgraphError'>>;
  testgoerli_assets?: SubscriptionResolver<Array<ResolversTypes['testgoerli_Asset']>, "testgoerli_assets", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_AssetBalance']>, "testgoerli_assetBalance", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  testgoerli_assetBalances?: SubscriptionResolver<Array<ResolversTypes['testgoerli_AssetBalance']>, "testgoerli_assetBalances", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_router?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_Router']>, "testgoerli_router", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_routerArgs, 'id' | 'subgraphError'>>;
  testgoerli_routers?: SubscriptionResolver<Array<ResolversTypes['testgoerli_Router']>, "testgoerli_routers", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_setting?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_Setting']>, "testgoerli_setting", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_settingArgs, 'id' | 'subgraphError'>>;
  testgoerli_settings?: SubscriptionResolver<Array<ResolversTypes['testgoerli_Setting']>, "testgoerli_settings", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_relayer?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_Relayer']>, "testgoerli_relayer", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_relayerArgs, 'id' | 'subgraphError'>>;
  testgoerli_relayers?: SubscriptionResolver<Array<ResolversTypes['testgoerli_Relayer']>, "testgoerli_relayers", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_StableSwap']>, "testgoerli_stableSwap", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  testgoerli_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['testgoerli_StableSwap']>, "testgoerli_stableSwaps", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_SponsorVault']>, "testgoerli_sponsorVault", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  testgoerli_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['testgoerli_SponsorVault']>, "testgoerli_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_OriginTransfer']>, "testgoerli_originTransfer", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  testgoerli_originTransfers?: SubscriptionResolver<Array<ResolversTypes['testgoerli_OriginTransfer']>, "testgoerli_originTransfers", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli_DestinationTransfer']>, "testgoerli_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  testgoerli_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['testgoerli_DestinationTransfer']>, "testgoerli_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptiontestgoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testgoerli__meta?: SubscriptionResolver<Maybe<ResolversTypes['testgoerli__Meta_']>, "testgoerli__meta", ParentType, ContextType, Partial<Subscriptiontestgoerli__metaArgs>>;
  rinkeby_asset?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_Asset']>, "rinkeby_asset", ParentType, ContextType, RequireFields<Subscriptionrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  rinkeby_assets?: SubscriptionResolver<Array<ResolversTypes['rinkeby_Asset']>, "rinkeby_assets", ParentType, ContextType, RequireFields<Subscriptionrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_AssetBalance']>, "rinkeby_assetBalance", ParentType, ContextType, RequireFields<Subscriptionrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  rinkeby_assetBalances?: SubscriptionResolver<Array<ResolversTypes['rinkeby_AssetBalance']>, "rinkeby_assetBalances", ParentType, ContextType, RequireFields<Subscriptionrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_router?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_Router']>, "rinkeby_router", ParentType, ContextType, RequireFields<Subscriptionrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  rinkeby_routers?: SubscriptionResolver<Array<ResolversTypes['rinkeby_Router']>, "rinkeby_routers", ParentType, ContextType, RequireFields<Subscriptionrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_setting?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_Setting']>, "rinkeby_setting", ParentType, ContextType, RequireFields<Subscriptionrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  rinkeby_settings?: SubscriptionResolver<Array<ResolversTypes['rinkeby_Setting']>, "rinkeby_settings", ParentType, ContextType, RequireFields<Subscriptionrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_relayer?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_Relayer']>, "rinkeby_relayer", ParentType, ContextType, RequireFields<Subscriptionrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  rinkeby_relayers?: SubscriptionResolver<Array<ResolversTypes['rinkeby_Relayer']>, "rinkeby_relayers", ParentType, ContextType, RequireFields<Subscriptionrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_StableSwap']>, "rinkeby_stableSwap", ParentType, ContextType, RequireFields<Subscriptionrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  rinkeby_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['rinkeby_StableSwap']>, "rinkeby_stableSwaps", ParentType, ContextType, RequireFields<Subscriptionrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_SponsorVault']>, "rinkeby_sponsorVault", ParentType, ContextType, RequireFields<Subscriptionrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  rinkeby_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['rinkeby_SponsorVault']>, "rinkeby_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptionrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_OriginTransfer']>, "rinkeby_originTransfer", ParentType, ContextType, RequireFields<Subscriptionrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  rinkeby_originTransfers?: SubscriptionResolver<Array<ResolversTypes['rinkeby_OriginTransfer']>, "rinkeby_originTransfers", ParentType, ContextType, RequireFields<Subscriptionrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby_DestinationTransfer']>, "rinkeby_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptionrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  rinkeby_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['rinkeby_DestinationTransfer']>, "rinkeby_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptionrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  rinkeby__meta?: SubscriptionResolver<Maybe<ResolversTypes['rinkeby__Meta_']>, "rinkeby__meta", ParentType, ContextType, Partial<Subscriptionrinkeby__metaArgs>>;
  goerli_asset?: SubscriptionResolver<Maybe<ResolversTypes['goerli_Asset']>, "goerli_asset", ParentType, ContextType, RequireFields<Subscriptiongoerli_assetArgs, 'id' | 'subgraphError'>>;
  goerli_assets?: SubscriptionResolver<Array<ResolversTypes['goerli_Asset']>, "goerli_assets", ParentType, ContextType, RequireFields<Subscriptiongoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['goerli_AssetBalance']>, "goerli_assetBalance", ParentType, ContextType, RequireFields<Subscriptiongoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  goerli_assetBalances?: SubscriptionResolver<Array<ResolversTypes['goerli_AssetBalance']>, "goerli_assetBalances", ParentType, ContextType, RequireFields<Subscriptiongoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_router?: SubscriptionResolver<Maybe<ResolversTypes['goerli_Router']>, "goerli_router", ParentType, ContextType, RequireFields<Subscriptiongoerli_routerArgs, 'id' | 'subgraphError'>>;
  goerli_routers?: SubscriptionResolver<Array<ResolversTypes['goerli_Router']>, "goerli_routers", ParentType, ContextType, RequireFields<Subscriptiongoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_setting?: SubscriptionResolver<Maybe<ResolversTypes['goerli_Setting']>, "goerli_setting", ParentType, ContextType, RequireFields<Subscriptiongoerli_settingArgs, 'id' | 'subgraphError'>>;
  goerli_settings?: SubscriptionResolver<Array<ResolversTypes['goerli_Setting']>, "goerli_settings", ParentType, ContextType, RequireFields<Subscriptiongoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_relayer?: SubscriptionResolver<Maybe<ResolversTypes['goerli_Relayer']>, "goerli_relayer", ParentType, ContextType, RequireFields<Subscriptiongoerli_relayerArgs, 'id' | 'subgraphError'>>;
  goerli_relayers?: SubscriptionResolver<Array<ResolversTypes['goerli_Relayer']>, "goerli_relayers", ParentType, ContextType, RequireFields<Subscriptiongoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['goerli_StableSwap']>, "goerli_stableSwap", ParentType, ContextType, RequireFields<Subscriptiongoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  goerli_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['goerli_StableSwap']>, "goerli_stableSwaps", ParentType, ContextType, RequireFields<Subscriptiongoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['goerli_SponsorVault']>, "goerli_sponsorVault", ParentType, ContextType, RequireFields<Subscriptiongoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  goerli_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['goerli_SponsorVault']>, "goerli_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptiongoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['goerli_OriginTransfer']>, "goerli_originTransfer", ParentType, ContextType, RequireFields<Subscriptiongoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  goerli_originTransfers?: SubscriptionResolver<Array<ResolversTypes['goerli_OriginTransfer']>, "goerli_originTransfers", ParentType, ContextType, RequireFields<Subscriptiongoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['goerli_DestinationTransfer']>, "goerli_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptiongoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  goerli_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['goerli_DestinationTransfer']>, "goerli_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptiongoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  goerli__meta?: SubscriptionResolver<Maybe<ResolversTypes['goerli__Meta_']>, "goerli__meta", ParentType, ContextType, Partial<Subscriptiongoerli__metaArgs>>;
  staginggoerli_asset?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_Asset']>, "staginggoerli_asset", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_assetArgs, 'id' | 'subgraphError'>>;
  staginggoerli_assets?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_Asset']>, "staginggoerli_assets", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_AssetBalance']>, "staginggoerli_assetBalance", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_assetBalanceArgs, 'id' | 'subgraphError'>>;
  staginggoerli_assetBalances?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_AssetBalance']>, "staginggoerli_assetBalances", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_router?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_Router']>, "staginggoerli_router", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_routerArgs, 'id' | 'subgraphError'>>;
  staginggoerli_routers?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_Router']>, "staginggoerli_routers", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_setting?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_Setting']>, "staginggoerli_setting", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_settingArgs, 'id' | 'subgraphError'>>;
  staginggoerli_settings?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_Setting']>, "staginggoerli_settings", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_relayer?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_Relayer']>, "staginggoerli_relayer", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_relayerArgs, 'id' | 'subgraphError'>>;
  staginggoerli_relayers?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_Relayer']>, "staginggoerli_relayers", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_StableSwap']>, "staginggoerli_stableSwap", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_stableSwapArgs, 'id' | 'subgraphError'>>;
  staginggoerli_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_StableSwap']>, "staginggoerli_stableSwaps", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_SponsorVault']>, "staginggoerli_sponsorVault", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  staginggoerli_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_SponsorVault']>, "staginggoerli_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_OriginTransfer']>, "staginggoerli_originTransfer", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_originTransferArgs, 'id' | 'subgraphError'>>;
  staginggoerli_originTransfers?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_OriginTransfer']>, "staginggoerli_originTransfers", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli_DestinationTransfer']>, "staginggoerli_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_destinationTransferArgs, 'id' | 'subgraphError'>>;
  staginggoerli_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['staginggoerli_DestinationTransfer']>, "staginggoerli_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptionstaginggoerli_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  staginggoerli__meta?: SubscriptionResolver<Maybe<ResolversTypes['staginggoerli__Meta_']>, "staginggoerli__meta", ParentType, ContextType, Partial<Subscriptionstaginggoerli__metaArgs>>;
  testrinkeby_asset?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_Asset']>, "testrinkeby_asset", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  testrinkeby_assets?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_Asset']>, "testrinkeby_assets", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_AssetBalance']>, "testrinkeby_assetBalance", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  testrinkeby_assetBalances?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_AssetBalance']>, "testrinkeby_assetBalances", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_router?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_Router']>, "testrinkeby_router", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  testrinkeby_routers?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_Router']>, "testrinkeby_routers", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_setting?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_Setting']>, "testrinkeby_setting", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  testrinkeby_settings?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_Setting']>, "testrinkeby_settings", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_relayer?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_Relayer']>, "testrinkeby_relayer", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  testrinkeby_relayers?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_Relayer']>, "testrinkeby_relayers", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_StableSwap']>, "testrinkeby_stableSwap", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  testrinkeby_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_StableSwap']>, "testrinkeby_stableSwaps", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_SponsorVault']>, "testrinkeby_sponsorVault", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  testrinkeby_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_SponsorVault']>, "testrinkeby_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_OriginTransfer']>, "testrinkeby_originTransfer", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  testrinkeby_originTransfers?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_OriginTransfer']>, "testrinkeby_originTransfers", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby_DestinationTransfer']>, "testrinkeby_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  testrinkeby_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['testrinkeby_DestinationTransfer']>, "testrinkeby_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptiontestrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  testrinkeby__meta?: SubscriptionResolver<Maybe<ResolversTypes['testrinkeby__Meta_']>, "testrinkeby__meta", ParentType, ContextType, Partial<Subscriptiontestrinkeby__metaArgs>>;
  stagingrinkeby_asset?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_Asset']>, "stagingrinkeby_asset", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_assetArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_assets?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_Asset']>, "stagingrinkeby_assets", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_assetsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_assetBalance?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_AssetBalance']>, "stagingrinkeby_assetBalance", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_assetBalanceArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_assetBalances?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_AssetBalance']>, "stagingrinkeby_assetBalances", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_assetBalancesArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_router?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_Router']>, "stagingrinkeby_router", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_routerArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_routers?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_Router']>, "stagingrinkeby_routers", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_routersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_setting?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_Setting']>, "stagingrinkeby_setting", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_settingArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_settings?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_Setting']>, "stagingrinkeby_settings", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_settingsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_relayer?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_Relayer']>, "stagingrinkeby_relayer", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_relayerArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_relayers?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_Relayer']>, "stagingrinkeby_relayers", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_relayersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_stableSwap?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_StableSwap']>, "stagingrinkeby_stableSwap", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_stableSwapArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_stableSwaps?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_StableSwap']>, "stagingrinkeby_stableSwaps", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_stableSwapsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_sponsorVault?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_SponsorVault']>, "stagingrinkeby_sponsorVault", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_sponsorVaultArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_sponsorVaults?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_SponsorVault']>, "stagingrinkeby_sponsorVaults", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_sponsorVaultsArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_originTransfer?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_OriginTransfer']>, "stagingrinkeby_originTransfer", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_originTransferArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_originTransfers?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_OriginTransfer']>, "stagingrinkeby_originTransfers", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_originTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby_destinationTransfer?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby_DestinationTransfer']>, "stagingrinkeby_destinationTransfer", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_destinationTransferArgs, 'id' | 'subgraphError'>>;
  stagingrinkeby_destinationTransfers?: SubscriptionResolver<Array<ResolversTypes['stagingrinkeby_DestinationTransfer']>, "stagingrinkeby_destinationTransfers", ParentType, ContextType, RequireFields<Subscriptionstagingrinkeby_destinationTransfersArgs, 'skip' | 'first' | 'subgraphError'>>;
  stagingrinkeby__meta?: SubscriptionResolver<Maybe<ResolversTypes['stagingrinkeby__Meta_']>, "stagingrinkeby__meta", ParentType, ContextType, Partial<Subscriptionstagingrinkeby__metaArgs>>;
}>;

export type testgoerli_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_Asset'] = ResolversParentTypes['testgoerli_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_AssetBalance'] = ResolversParentTypes['testgoerli_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['testgoerli_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['testgoerli_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface testgoerli_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['testgoerli_BigDecimal'], any> {
  name: 'testgoerli_BigDecimal';
}

export interface BigIntScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInt'], any> {
  name: 'BigInt';
}

export interface testgoerli_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['testgoerli_Bytes'], any> {
  name: 'testgoerli_Bytes';
}

export type testgoerli_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_DestinationTransfer'] = ResolversParentTypes['testgoerli_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['testgoerli_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['testgoerli_Router']>>, ParentType, ContextType, RequireFields<testgoerli_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_OriginTransfer'] = ResolversParentTypes['testgoerli_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['testgoerli_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_Relayer'] = ResolversParentTypes['testgoerli_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_Router'] = ResolversParentTypes['testgoerli_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['testgoerli_AssetBalance']>, ParentType, ContextType, RequireFields<testgoerli_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_Setting'] = ResolversParentTypes['testgoerli_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_SponsorVault'] = ResolversParentTypes['testgoerli_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli_StableSwap'] = ResolversParentTypes['testgoerli_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['testgoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli__Block_'] = ResolversParentTypes['testgoerli__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['testgoerli_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testgoerli__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testgoerli__Meta_'] = ResolversParentTypes['testgoerli__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['testgoerli__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_Asset'] = ResolversParentTypes['rinkeby_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_AssetBalance'] = ResolversParentTypes['rinkeby_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['rinkeby_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['rinkeby_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface rinkeby_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['rinkeby_BigDecimal'], any> {
  name: 'rinkeby_BigDecimal';
}

export interface rinkeby_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['rinkeby_Bytes'], any> {
  name: 'rinkeby_Bytes';
}

export type rinkeby_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_DestinationTransfer'] = ResolversParentTypes['rinkeby_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['rinkeby_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['rinkeby_Router']>>, ParentType, ContextType, RequireFields<rinkeby_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_OriginTransfer'] = ResolversParentTypes['rinkeby_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['rinkeby_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_Relayer'] = ResolversParentTypes['rinkeby_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_Router'] = ResolversParentTypes['rinkeby_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['rinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<rinkeby_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_Setting'] = ResolversParentTypes['rinkeby_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_SponsorVault'] = ResolversParentTypes['rinkeby_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby_StableSwap'] = ResolversParentTypes['rinkeby_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['rinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby__Block_'] = ResolversParentTypes['rinkeby__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['rinkeby_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type rinkeby__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['rinkeby__Meta_'] = ResolversParentTypes['rinkeby__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['rinkeby__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_Asset'] = ResolversParentTypes['goerli_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_AssetBalance'] = ResolversParentTypes['goerli_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['goerli_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['goerli_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface goerli_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['goerli_BigDecimal'], any> {
  name: 'goerli_BigDecimal';
}

export interface goerli_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['goerli_Bytes'], any> {
  name: 'goerli_Bytes';
}

export type goerli_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_DestinationTransfer'] = ResolversParentTypes['goerli_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['goerli_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['goerli_Router']>>, ParentType, ContextType, RequireFields<goerli_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_OriginTransfer'] = ResolversParentTypes['goerli_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['goerli_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_Relayer'] = ResolversParentTypes['goerli_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_Router'] = ResolversParentTypes['goerli_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['goerli_AssetBalance']>, ParentType, ContextType, RequireFields<goerli_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_Setting'] = ResolversParentTypes['goerli_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_SponsorVault'] = ResolversParentTypes['goerli_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli_StableSwap'] = ResolversParentTypes['goerli_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['goerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli__Block_'] = ResolversParentTypes['goerli__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['goerli_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type goerli__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['goerli__Meta_'] = ResolversParentTypes['goerli__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['goerli__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_Asset'] = ResolversParentTypes['staginggoerli_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_AssetBalance'] = ResolversParentTypes['staginggoerli_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['staginggoerli_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['staginggoerli_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface staginggoerli_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['staginggoerli_BigDecimal'], any> {
  name: 'staginggoerli_BigDecimal';
}

export interface staginggoerli_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['staginggoerli_Bytes'], any> {
  name: 'staginggoerli_Bytes';
}

export type staginggoerli_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_DestinationTransfer'] = ResolversParentTypes['staginggoerli_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['staginggoerli_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['staginggoerli_Router']>>, ParentType, ContextType, RequireFields<staginggoerli_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_OriginTransfer'] = ResolversParentTypes['staginggoerli_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['staginggoerli_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_Relayer'] = ResolversParentTypes['staginggoerli_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_Router'] = ResolversParentTypes['staginggoerli_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['staginggoerli_AssetBalance']>, ParentType, ContextType, RequireFields<staginggoerli_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_Setting'] = ResolversParentTypes['staginggoerli_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_SponsorVault'] = ResolversParentTypes['staginggoerli_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli_StableSwap'] = ResolversParentTypes['staginggoerli_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['staginggoerli_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli__Block_'] = ResolversParentTypes['staginggoerli__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['staginggoerli_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type staginggoerli__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['staginggoerli__Meta_'] = ResolversParentTypes['staginggoerli__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['staginggoerli__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_Asset'] = ResolversParentTypes['testrinkeby_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_AssetBalance'] = ResolversParentTypes['testrinkeby_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['testrinkeby_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['testrinkeby_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface testrinkeby_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['testrinkeby_BigDecimal'], any> {
  name: 'testrinkeby_BigDecimal';
}

export interface testrinkeby_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['testrinkeby_Bytes'], any> {
  name: 'testrinkeby_Bytes';
}

export type testrinkeby_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_DestinationTransfer'] = ResolversParentTypes['testrinkeby_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['testrinkeby_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['testrinkeby_Router']>>, ParentType, ContextType, RequireFields<testrinkeby_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_OriginTransfer'] = ResolversParentTypes['testrinkeby_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['testrinkeby_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_Relayer'] = ResolversParentTypes['testrinkeby_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_Router'] = ResolversParentTypes['testrinkeby_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['testrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<testrinkeby_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_Setting'] = ResolversParentTypes['testrinkeby_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_SponsorVault'] = ResolversParentTypes['testrinkeby_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby_StableSwap'] = ResolversParentTypes['testrinkeby_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['testrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby__Block_'] = ResolversParentTypes['testrinkeby__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['testrinkeby_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type testrinkeby__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['testrinkeby__Meta_'] = ResolversParentTypes['testrinkeby__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['testrinkeby__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_AssetResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_Asset'] = ResolversParentTypes['stagingrinkeby_Asset']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  local?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  adoptedAsset?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  canonicalDomain?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  blockNumber?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_AssetBalanceResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_AssetBalance'] = ResolversParentTypes['stagingrinkeby_AssetBalance']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  amount?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  router?: Resolver<ResolversTypes['stagingrinkeby_Router'], ParentType, ContextType>;
  asset?: Resolver<ResolversTypes['stagingrinkeby_Asset'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface stagingrinkeby_BigDecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['stagingrinkeby_BigDecimal'], any> {
  name: 'stagingrinkeby_BigDecimal';
}

export interface stagingrinkeby_BytesScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['stagingrinkeby_Bytes'], any> {
  name: 'stagingrinkeby_Bytes';
}

export type stagingrinkeby_DestinationTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_DestinationTransfer'] = ResolversParentTypes['stagingrinkeby_DestinationTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['stagingrinkeby_TransferStatus']>, ParentType, ContextType>;
  routers?: Resolver<Maybe<Array<ResolversTypes['stagingrinkeby_Router']>>, ParentType, ContextType, RequireFields<stagingrinkeby_DestinationTransferroutersArgs, 'skip' | 'first'>>;
  originSender?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  localAsset?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  localAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  sponsorVaultRelayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedCaller?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  executedTransactionHash?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  executedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  executedBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledCaller?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTransactionHash?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  reconciledTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledGasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  reconciledBlockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_OriginTransferResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_OriginTransfer'] = ResolversParentTypes['stagingrinkeby_OriginTransfer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  chainId?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  transferId?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  nonce?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  to?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  callData?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  originDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  destinationDomain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  agent?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  recovery?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  forceSlow?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  receiveLocal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  callback?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  callbackFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  relayerFee?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  slippageTol?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['stagingrinkeby_TransferStatus']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAsset?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  transactingAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  bridgedAsset?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  bridgedAmount?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  caller?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  transactionHash?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasPrice?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  gasLimit?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  blockNumber?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_RelayerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_Relayer'] = ResolversParentTypes['stagingrinkeby_Relayer']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  relayer?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_RouterResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_Router'] = ResolversParentTypes['stagingrinkeby_Router']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  recipient?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  proposedOwner?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  proposedTimestamp?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  assetBalances?: Resolver<Array<ResolversTypes['stagingrinkeby_AssetBalance']>, ParentType, ContextType, RequireFields<stagingrinkeby_RouterassetBalancesArgs, 'skip' | 'first'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_SettingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_Setting'] = ResolversParentTypes['stagingrinkeby_Setting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  maxRoutersPerTransfer?: Resolver<ResolversTypes['BigInt'], ParentType, ContextType>;
  caller?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_SponsorVaultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_SponsorVault'] = ResolversParentTypes['stagingrinkeby_SponsorVault']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  sponsorVault?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby_StableSwapResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby_StableSwap'] = ResolversParentTypes['stagingrinkeby_StableSwap']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  canonicalId?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  domain?: Resolver<Maybe<ResolversTypes['BigInt']>, ParentType, ContextType>;
  swapPool?: Resolver<ResolversTypes['stagingrinkeby_Bytes'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby__Block_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby__Block_'] = ResolversParentTypes['stagingrinkeby__Block_']> = ResolversObject<{
  hash?: Resolver<Maybe<ResolversTypes['stagingrinkeby_Bytes']>, ParentType, ContextType>;
  number?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type stagingrinkeby__Meta_Resolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['stagingrinkeby__Meta_'] = ResolversParentTypes['stagingrinkeby__Meta_']> = ResolversObject<{
  block?: Resolver<ResolversTypes['stagingrinkeby__Block_'], ParentType, ContextType>;
  deployment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasIndexingErrors?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  testgoerli_Asset?: testgoerli_AssetResolvers<ContextType>;
  testgoerli_AssetBalance?: testgoerli_AssetBalanceResolvers<ContextType>;
  testgoerli_BigDecimal?: GraphQLScalarType;
  BigInt?: GraphQLScalarType;
  testgoerli_Bytes?: GraphQLScalarType;
  testgoerli_DestinationTransfer?: testgoerli_DestinationTransferResolvers<ContextType>;
  testgoerli_OriginTransfer?: testgoerli_OriginTransferResolvers<ContextType>;
  testgoerli_Relayer?: testgoerli_RelayerResolvers<ContextType>;
  testgoerli_Router?: testgoerli_RouterResolvers<ContextType>;
  testgoerli_Setting?: testgoerli_SettingResolvers<ContextType>;
  testgoerli_SponsorVault?: testgoerli_SponsorVaultResolvers<ContextType>;
  testgoerli_StableSwap?: testgoerli_StableSwapResolvers<ContextType>;
  testgoerli__Block_?: testgoerli__Block_Resolvers<ContextType>;
  testgoerli__Meta_?: testgoerli__Meta_Resolvers<ContextType>;
  rinkeby_Asset?: rinkeby_AssetResolvers<ContextType>;
  rinkeby_AssetBalance?: rinkeby_AssetBalanceResolvers<ContextType>;
  rinkeby_BigDecimal?: GraphQLScalarType;
  rinkeby_Bytes?: GraphQLScalarType;
  rinkeby_DestinationTransfer?: rinkeby_DestinationTransferResolvers<ContextType>;
  rinkeby_OriginTransfer?: rinkeby_OriginTransferResolvers<ContextType>;
  rinkeby_Relayer?: rinkeby_RelayerResolvers<ContextType>;
  rinkeby_Router?: rinkeby_RouterResolvers<ContextType>;
  rinkeby_Setting?: rinkeby_SettingResolvers<ContextType>;
  rinkeby_SponsorVault?: rinkeby_SponsorVaultResolvers<ContextType>;
  rinkeby_StableSwap?: rinkeby_StableSwapResolvers<ContextType>;
  rinkeby__Block_?: rinkeby__Block_Resolvers<ContextType>;
  rinkeby__Meta_?: rinkeby__Meta_Resolvers<ContextType>;
  goerli_Asset?: goerli_AssetResolvers<ContextType>;
  goerli_AssetBalance?: goerli_AssetBalanceResolvers<ContextType>;
  goerli_BigDecimal?: GraphQLScalarType;
  goerli_Bytes?: GraphQLScalarType;
  goerli_DestinationTransfer?: goerli_DestinationTransferResolvers<ContextType>;
  goerli_OriginTransfer?: goerli_OriginTransferResolvers<ContextType>;
  goerli_Relayer?: goerli_RelayerResolvers<ContextType>;
  goerli_Router?: goerli_RouterResolvers<ContextType>;
  goerli_Setting?: goerli_SettingResolvers<ContextType>;
  goerli_SponsorVault?: goerli_SponsorVaultResolvers<ContextType>;
  goerli_StableSwap?: goerli_StableSwapResolvers<ContextType>;
  goerli__Block_?: goerli__Block_Resolvers<ContextType>;
  goerli__Meta_?: goerli__Meta_Resolvers<ContextType>;
  staginggoerli_Asset?: staginggoerli_AssetResolvers<ContextType>;
  staginggoerli_AssetBalance?: staginggoerli_AssetBalanceResolvers<ContextType>;
  staginggoerli_BigDecimal?: GraphQLScalarType;
  staginggoerli_Bytes?: GraphQLScalarType;
  staginggoerli_DestinationTransfer?: staginggoerli_DestinationTransferResolvers<ContextType>;
  staginggoerli_OriginTransfer?: staginggoerli_OriginTransferResolvers<ContextType>;
  staginggoerli_Relayer?: staginggoerli_RelayerResolvers<ContextType>;
  staginggoerli_Router?: staginggoerli_RouterResolvers<ContextType>;
  staginggoerli_Setting?: staginggoerli_SettingResolvers<ContextType>;
  staginggoerli_SponsorVault?: staginggoerli_SponsorVaultResolvers<ContextType>;
  staginggoerli_StableSwap?: staginggoerli_StableSwapResolvers<ContextType>;
  staginggoerli__Block_?: staginggoerli__Block_Resolvers<ContextType>;
  staginggoerli__Meta_?: staginggoerli__Meta_Resolvers<ContextType>;
  testrinkeby_Asset?: testrinkeby_AssetResolvers<ContextType>;
  testrinkeby_AssetBalance?: testrinkeby_AssetBalanceResolvers<ContextType>;
  testrinkeby_BigDecimal?: GraphQLScalarType;
  testrinkeby_Bytes?: GraphQLScalarType;
  testrinkeby_DestinationTransfer?: testrinkeby_DestinationTransferResolvers<ContextType>;
  testrinkeby_OriginTransfer?: testrinkeby_OriginTransferResolvers<ContextType>;
  testrinkeby_Relayer?: testrinkeby_RelayerResolvers<ContextType>;
  testrinkeby_Router?: testrinkeby_RouterResolvers<ContextType>;
  testrinkeby_Setting?: testrinkeby_SettingResolvers<ContextType>;
  testrinkeby_SponsorVault?: testrinkeby_SponsorVaultResolvers<ContextType>;
  testrinkeby_StableSwap?: testrinkeby_StableSwapResolvers<ContextType>;
  testrinkeby__Block_?: testrinkeby__Block_Resolvers<ContextType>;
  testrinkeby__Meta_?: testrinkeby__Meta_Resolvers<ContextType>;
  stagingrinkeby_Asset?: stagingrinkeby_AssetResolvers<ContextType>;
  stagingrinkeby_AssetBalance?: stagingrinkeby_AssetBalanceResolvers<ContextType>;
  stagingrinkeby_BigDecimal?: GraphQLScalarType;
  stagingrinkeby_Bytes?: GraphQLScalarType;
  stagingrinkeby_DestinationTransfer?: stagingrinkeby_DestinationTransferResolvers<ContextType>;
  stagingrinkeby_OriginTransfer?: stagingrinkeby_OriginTransferResolvers<ContextType>;
  stagingrinkeby_Relayer?: stagingrinkeby_RelayerResolvers<ContextType>;
  stagingrinkeby_Router?: stagingrinkeby_RouterResolvers<ContextType>;
  stagingrinkeby_Setting?: stagingrinkeby_SettingResolvers<ContextType>;
  stagingrinkeby_SponsorVault?: stagingrinkeby_SponsorVaultResolvers<ContextType>;
  stagingrinkeby_StableSwap?: stagingrinkeby_StableSwapResolvers<ContextType>;
  stagingrinkeby__Block_?: stagingrinkeby__Block_Resolvers<ContextType>;
  stagingrinkeby__Meta_?: stagingrinkeby__Meta_Resolvers<ContextType>;
}>;


import { MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';

import { InContextSdkMethod } from '@graphql-mesh/types';


    export namespace ConnextTestGoerliTypes {
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
  testgoerli_BigDecimal: any;
  BigInt: any;
  testgoerli_Bytes: any;
};

export type testgoerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['testgoerli_Bytes'];
  adoptedAsset: Scalars['testgoerli_Bytes'];
  canonicalId: Scalars['testgoerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type testgoerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: testgoerli_Router;
  asset: testgoerli_Asset;
};

export type testgoerli_AssetBalance_filter = {
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
  router_?: InputMaybe<testgoerli_Router_filter>;
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
  asset_?: InputMaybe<testgoerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type testgoerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type testgoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type testgoerli_Block_height = {
  hash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type testgoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testgoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testgoerli_Bytes']>;
  callData?: Maybe<Scalars['testgoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testgoerli_Bytes']>;
  recovery?: Maybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testgoerli_TransferStatus>;
  routers?: Maybe<Array<testgoerli_Router>>;
  originSender?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type testgoerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
};

export type testgoerli_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<testgoerli_Router_filter>;
  originSender?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type testgoerli_OrderDirection =
  | 'asc'
  | 'desc';

export type testgoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testgoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testgoerli_Bytes']>;
  callData?: Maybe<Scalars['testgoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testgoerli_Bytes']>;
  recovery?: Maybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testgoerli_TransferStatus>;
  message?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['testgoerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['testgoerli_Bytes']>;
  transactionHash?: Maybe<Scalars['testgoerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type testgoerli_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testgoerli_TransferStatus>;
  status_not?: InputMaybe<testgoerli_TransferStatus>;
  status_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testgoerli_TransferStatus>>;
  message?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
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
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
};


export type Querytestgoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Asset_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Setting_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Relayer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};

export type testgoerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['testgoerli_Bytes']>;
};

export type testgoerli_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type testgoerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['testgoerli_Bytes']>;
  recipient?: Maybe<Scalars['testgoerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['testgoerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<testgoerli_AssetBalance>;
};


export type testgoerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
};

export type testgoerli_Router_filter = {
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
  owner?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<testgoerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type testgoerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['testgoerli_Bytes'];
};

export type testgoerli_Setting_filter = {
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
  caller?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type testgoerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['testgoerli_Bytes'];
};

export type testgoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type testgoerli_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['testgoerli_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['testgoerli_Bytes'];
};

export type testgoerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['testgoerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['testgoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testgoerli_BlockChangedFilter>;
};

export type testgoerli_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  testgoerli_asset?: Maybe<testgoerli_Asset>;
  testgoerli_assets: Array<testgoerli_Asset>;
  testgoerli_assetBalance?: Maybe<testgoerli_AssetBalance>;
  testgoerli_assetBalances: Array<testgoerli_AssetBalance>;
  testgoerli_router?: Maybe<testgoerli_Router>;
  testgoerli_routers: Array<testgoerli_Router>;
  testgoerli_setting?: Maybe<testgoerli_Setting>;
  testgoerli_settings: Array<testgoerli_Setting>;
  testgoerli_relayer?: Maybe<testgoerli_Relayer>;
  testgoerli_relayers: Array<testgoerli_Relayer>;
  testgoerli_stableSwap?: Maybe<testgoerli_StableSwap>;
  testgoerli_stableSwaps: Array<testgoerli_StableSwap>;
  testgoerli_sponsorVault?: Maybe<testgoerli_SponsorVault>;
  testgoerli_sponsorVaults: Array<testgoerli_SponsorVault>;
  testgoerli_originTransfer?: Maybe<testgoerli_OriginTransfer>;
  testgoerli_originTransfers: Array<testgoerli_OriginTransfer>;
  testgoerli_destinationTransfer?: Maybe<testgoerli_DestinationTransfer>;
  testgoerli_destinationTransfers: Array<testgoerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  testgoerli__meta?: Maybe<testgoerli__Meta_>;
};


export type Subscriptiontestgoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Asset_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Asset_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_AssetBalance_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Router_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Router_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Setting_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Setting_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_Relayer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_StableSwap_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_SponsorVault_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_OriginTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testgoerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testgoerli_OrderDirection>;
  where?: InputMaybe<testgoerli_DestinationTransfer_filter>;
  block?: InputMaybe<testgoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestgoerli__metaArgs = {
  block?: InputMaybe<testgoerli_Block_height>;
};

export type testgoerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type testgoerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['testgoerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type testgoerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testgoerli__Block_;
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
    export type QueryConnextTestGoerliSdk = {
  /** null **/
  testgoerli_asset: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_asset'], ConnextTestGoerliTypes.Querytestgoerli_assetArgs, MeshContext>,
  /** null **/
  testgoerli_assets: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_assets'], ConnextTestGoerliTypes.Querytestgoerli_assetsArgs, MeshContext>,
  /** null **/
  testgoerli_assetBalance: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_assetBalance'], ConnextTestGoerliTypes.Querytestgoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  testgoerli_assetBalances: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_assetBalances'], ConnextTestGoerliTypes.Querytestgoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  testgoerli_router: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_router'], ConnextTestGoerliTypes.Querytestgoerli_routerArgs, MeshContext>,
  /** null **/
  testgoerli_routers: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_routers'], ConnextTestGoerliTypes.Querytestgoerli_routersArgs, MeshContext>,
  /** null **/
  testgoerli_setting: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_setting'], ConnextTestGoerliTypes.Querytestgoerli_settingArgs, MeshContext>,
  /** null **/
  testgoerli_settings: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_settings'], ConnextTestGoerliTypes.Querytestgoerli_settingsArgs, MeshContext>,
  /** null **/
  testgoerli_relayer: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_relayer'], ConnextTestGoerliTypes.Querytestgoerli_relayerArgs, MeshContext>,
  /** null **/
  testgoerli_relayers: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_relayers'], ConnextTestGoerliTypes.Querytestgoerli_relayersArgs, MeshContext>,
  /** null **/
  testgoerli_stableSwap: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_stableSwap'], ConnextTestGoerliTypes.Querytestgoerli_stableSwapArgs, MeshContext>,
  /** null **/
  testgoerli_stableSwaps: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_stableSwaps'], ConnextTestGoerliTypes.Querytestgoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  testgoerli_sponsorVault: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_sponsorVault'], ConnextTestGoerliTypes.Querytestgoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  testgoerli_sponsorVaults: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_sponsorVaults'], ConnextTestGoerliTypes.Querytestgoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  testgoerli_originTransfer: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_originTransfer'], ConnextTestGoerliTypes.Querytestgoerli_originTransferArgs, MeshContext>,
  /** null **/
  testgoerli_originTransfers: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_originTransfers'], ConnextTestGoerliTypes.Querytestgoerli_originTransfersArgs, MeshContext>,
  /** null **/
  testgoerli_destinationTransfer: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_destinationTransfer'], ConnextTestGoerliTypes.Querytestgoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  testgoerli_destinationTransfers: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli_destinationTransfers'], ConnextTestGoerliTypes.Querytestgoerli_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  testgoerli__meta: InContextSdkMethod<ConnextTestGoerliTypes.Query['testgoerli__meta'], ConnextTestGoerliTypes.Querytestgoerli__metaArgs, MeshContext>
};

export type MutationConnextTestGoerliSdk = {

};

export type SubscriptionConnextTestGoerliSdk = {
  /** null **/
  testgoerli_asset: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_asset'], ConnextTestGoerliTypes.Subscriptiontestgoerli_assetArgs, MeshContext>,
  /** null **/
  testgoerli_assets: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_assets'], ConnextTestGoerliTypes.Subscriptiontestgoerli_assetsArgs, MeshContext>,
  /** null **/
  testgoerli_assetBalance: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_assetBalance'], ConnextTestGoerliTypes.Subscriptiontestgoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  testgoerli_assetBalances: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_assetBalances'], ConnextTestGoerliTypes.Subscriptiontestgoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  testgoerli_router: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_router'], ConnextTestGoerliTypes.Subscriptiontestgoerli_routerArgs, MeshContext>,
  /** null **/
  testgoerli_routers: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_routers'], ConnextTestGoerliTypes.Subscriptiontestgoerli_routersArgs, MeshContext>,
  /** null **/
  testgoerli_setting: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_setting'], ConnextTestGoerliTypes.Subscriptiontestgoerli_settingArgs, MeshContext>,
  /** null **/
  testgoerli_settings: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_settings'], ConnextTestGoerliTypes.Subscriptiontestgoerli_settingsArgs, MeshContext>,
  /** null **/
  testgoerli_relayer: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_relayer'], ConnextTestGoerliTypes.Subscriptiontestgoerli_relayerArgs, MeshContext>,
  /** null **/
  testgoerli_relayers: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_relayers'], ConnextTestGoerliTypes.Subscriptiontestgoerli_relayersArgs, MeshContext>,
  /** null **/
  testgoerli_stableSwap: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_stableSwap'], ConnextTestGoerliTypes.Subscriptiontestgoerli_stableSwapArgs, MeshContext>,
  /** null **/
  testgoerli_stableSwaps: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_stableSwaps'], ConnextTestGoerliTypes.Subscriptiontestgoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  testgoerli_sponsorVault: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_sponsorVault'], ConnextTestGoerliTypes.Subscriptiontestgoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  testgoerli_sponsorVaults: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_sponsorVaults'], ConnextTestGoerliTypes.Subscriptiontestgoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  testgoerli_originTransfer: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_originTransfer'], ConnextTestGoerliTypes.Subscriptiontestgoerli_originTransferArgs, MeshContext>,
  /** null **/
  testgoerli_originTransfers: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_originTransfers'], ConnextTestGoerliTypes.Subscriptiontestgoerli_originTransfersArgs, MeshContext>,
  /** null **/
  testgoerli_destinationTransfer: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_destinationTransfer'], ConnextTestGoerliTypes.Subscriptiontestgoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  testgoerli_destinationTransfers: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli_destinationTransfers'], ConnextTestGoerliTypes.Subscriptiontestgoerli_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  testgoerli__meta: InContextSdkMethod<ConnextTestGoerliTypes.Subscription['testgoerli__meta'], ConnextTestGoerliTypes.Subscriptiontestgoerli__metaArgs, MeshContext>
};


    export namespace ConnextRinkebyTypes {
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
  rinkeby_BigDecimal: any;
  BigInt: any;
  rinkeby_Bytes: any;
};

export type rinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['rinkeby_Bytes'];
  adoptedAsset: Scalars['rinkeby_Bytes'];
  canonicalId: Scalars['rinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type rinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: rinkeby_Router;
  asset: rinkeby_Asset;
};

export type rinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<rinkeby_Router_filter>;
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
  asset_?: InputMaybe<rinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type rinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type rinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type rinkeby_Block_height = {
  hash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type rinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['rinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['rinkeby_Bytes']>;
  callData?: Maybe<Scalars['rinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['rinkeby_Bytes']>;
  recovery?: Maybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<rinkeby_TransferStatus>;
  routers?: Maybe<Array<rinkeby_Router>>;
  originSender?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type rinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
};

export type rinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<rinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type rinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type rinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['rinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['rinkeby_Bytes']>;
  callData?: Maybe<Scalars['rinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['rinkeby_Bytes']>;
  recovery?: Maybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<rinkeby_TransferStatus>;
  message?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['rinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['rinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['rinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type rinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<rinkeby_TransferStatus>;
  status_not?: InputMaybe<rinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<rinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
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
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
};


export type Queryrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Queryrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};

export type rinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['rinkeby_Bytes']>;
};

export type rinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type rinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['rinkeby_Bytes']>;
  recipient?: Maybe<Scalars['rinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['rinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<rinkeby_AssetBalance>;
};


export type rinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
};

export type rinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<rinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type rinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['rinkeby_Bytes'];
};

export type rinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type rinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['rinkeby_Bytes'];
};

export type rinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type rinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['rinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['rinkeby_Bytes'];
};

export type rinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['rinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['rinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<rinkeby_BlockChangedFilter>;
};

export type rinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  rinkeby_asset?: Maybe<rinkeby_Asset>;
  rinkeby_assets: Array<rinkeby_Asset>;
  rinkeby_assetBalance?: Maybe<rinkeby_AssetBalance>;
  rinkeby_assetBalances: Array<rinkeby_AssetBalance>;
  rinkeby_router?: Maybe<rinkeby_Router>;
  rinkeby_routers: Array<rinkeby_Router>;
  rinkeby_setting?: Maybe<rinkeby_Setting>;
  rinkeby_settings: Array<rinkeby_Setting>;
  rinkeby_relayer?: Maybe<rinkeby_Relayer>;
  rinkeby_relayers: Array<rinkeby_Relayer>;
  rinkeby_stableSwap?: Maybe<rinkeby_StableSwap>;
  rinkeby_stableSwaps: Array<rinkeby_StableSwap>;
  rinkeby_sponsorVault?: Maybe<rinkeby_SponsorVault>;
  rinkeby_sponsorVaults: Array<rinkeby_SponsorVault>;
  rinkeby_originTransfer?: Maybe<rinkeby_OriginTransfer>;
  rinkeby_originTransfers: Array<rinkeby_OriginTransfer>;
  rinkeby_destinationTransfer?: Maybe<rinkeby_DestinationTransfer>;
  rinkeby_destinationTransfers: Array<rinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  rinkeby__meta?: Maybe<rinkeby__Meta_>;
};


export type Subscriptionrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Asset_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_AssetBalance_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Router_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Setting_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_Relayer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_StableSwap_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_SponsorVault_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_OriginTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<rinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<rinkeby_OrderDirection>;
  where?: InputMaybe<rinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<rinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionrinkeby__metaArgs = {
  block?: InputMaybe<rinkeby_Block_height>;
};

export type rinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type rinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['rinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type rinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: rinkeby__Block_;
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
    export type QueryConnextRinkebySdk = {
  /** null **/
  rinkeby_asset: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_asset'], ConnextRinkebyTypes.Queryrinkeby_assetArgs, MeshContext>,
  /** null **/
  rinkeby_assets: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_assets'], ConnextRinkebyTypes.Queryrinkeby_assetsArgs, MeshContext>,
  /** null **/
  rinkeby_assetBalance: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_assetBalance'], ConnextRinkebyTypes.Queryrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  rinkeby_assetBalances: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_assetBalances'], ConnextRinkebyTypes.Queryrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  rinkeby_router: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_router'], ConnextRinkebyTypes.Queryrinkeby_routerArgs, MeshContext>,
  /** null **/
  rinkeby_routers: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_routers'], ConnextRinkebyTypes.Queryrinkeby_routersArgs, MeshContext>,
  /** null **/
  rinkeby_setting: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_setting'], ConnextRinkebyTypes.Queryrinkeby_settingArgs, MeshContext>,
  /** null **/
  rinkeby_settings: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_settings'], ConnextRinkebyTypes.Queryrinkeby_settingsArgs, MeshContext>,
  /** null **/
  rinkeby_relayer: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_relayer'], ConnextRinkebyTypes.Queryrinkeby_relayerArgs, MeshContext>,
  /** null **/
  rinkeby_relayers: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_relayers'], ConnextRinkebyTypes.Queryrinkeby_relayersArgs, MeshContext>,
  /** null **/
  rinkeby_stableSwap: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_stableSwap'], ConnextRinkebyTypes.Queryrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  rinkeby_stableSwaps: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_stableSwaps'], ConnextRinkebyTypes.Queryrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  rinkeby_sponsorVault: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_sponsorVault'], ConnextRinkebyTypes.Queryrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  rinkeby_sponsorVaults: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_sponsorVaults'], ConnextRinkebyTypes.Queryrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  rinkeby_originTransfer: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_originTransfer'], ConnextRinkebyTypes.Queryrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  rinkeby_originTransfers: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_originTransfers'], ConnextRinkebyTypes.Queryrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  rinkeby_destinationTransfer: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_destinationTransfer'], ConnextRinkebyTypes.Queryrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  rinkeby_destinationTransfers: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby_destinationTransfers'], ConnextRinkebyTypes.Queryrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  rinkeby__meta: InContextSdkMethod<ConnextRinkebyTypes.Query['rinkeby__meta'], ConnextRinkebyTypes.Queryrinkeby__metaArgs, MeshContext>
};

export type MutationConnextRinkebySdk = {

};

export type SubscriptionConnextRinkebySdk = {
  /** null **/
  rinkeby_asset: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_asset'], ConnextRinkebyTypes.Subscriptionrinkeby_assetArgs, MeshContext>,
  /** null **/
  rinkeby_assets: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_assets'], ConnextRinkebyTypes.Subscriptionrinkeby_assetsArgs, MeshContext>,
  /** null **/
  rinkeby_assetBalance: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_assetBalance'], ConnextRinkebyTypes.Subscriptionrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  rinkeby_assetBalances: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_assetBalances'], ConnextRinkebyTypes.Subscriptionrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  rinkeby_router: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_router'], ConnextRinkebyTypes.Subscriptionrinkeby_routerArgs, MeshContext>,
  /** null **/
  rinkeby_routers: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_routers'], ConnextRinkebyTypes.Subscriptionrinkeby_routersArgs, MeshContext>,
  /** null **/
  rinkeby_setting: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_setting'], ConnextRinkebyTypes.Subscriptionrinkeby_settingArgs, MeshContext>,
  /** null **/
  rinkeby_settings: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_settings'], ConnextRinkebyTypes.Subscriptionrinkeby_settingsArgs, MeshContext>,
  /** null **/
  rinkeby_relayer: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_relayer'], ConnextRinkebyTypes.Subscriptionrinkeby_relayerArgs, MeshContext>,
  /** null **/
  rinkeby_relayers: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_relayers'], ConnextRinkebyTypes.Subscriptionrinkeby_relayersArgs, MeshContext>,
  /** null **/
  rinkeby_stableSwap: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_stableSwap'], ConnextRinkebyTypes.Subscriptionrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  rinkeby_stableSwaps: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_stableSwaps'], ConnextRinkebyTypes.Subscriptionrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  rinkeby_sponsorVault: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_sponsorVault'], ConnextRinkebyTypes.Subscriptionrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  rinkeby_sponsorVaults: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_sponsorVaults'], ConnextRinkebyTypes.Subscriptionrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  rinkeby_originTransfer: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_originTransfer'], ConnextRinkebyTypes.Subscriptionrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  rinkeby_originTransfers: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_originTransfers'], ConnextRinkebyTypes.Subscriptionrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  rinkeby_destinationTransfer: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_destinationTransfer'], ConnextRinkebyTypes.Subscriptionrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  rinkeby_destinationTransfers: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby_destinationTransfers'], ConnextRinkebyTypes.Subscriptionrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  rinkeby__meta: InContextSdkMethod<ConnextRinkebyTypes.Subscription['rinkeby__meta'], ConnextRinkebyTypes.Subscriptionrinkeby__metaArgs, MeshContext>
};


    export namespace ConnextGoerliTypes {
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
  goerli_BigDecimal: any;
  BigInt: any;
  goerli_Bytes: any;
};

export type goerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['goerli_Bytes'];
  adoptedAsset: Scalars['goerli_Bytes'];
  canonicalId: Scalars['goerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type goerli_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: goerli_Router;
  asset: goerli_Asset;
};

export type goerli_AssetBalance_filter = {
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
  router_?: InputMaybe<goerli_Router_filter>;
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
  asset_?: InputMaybe<goerli_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type goerli_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['goerli_Bytes']>;
  local_not?: InputMaybe<Scalars['goerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type goerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type goerli_Block_height = {
  hash?: InputMaybe<Scalars['goerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type goerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['goerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['goerli_Bytes']>;
  callData?: Maybe<Scalars['goerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['goerli_Bytes']>;
  recovery?: Maybe<Scalars['goerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['goerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<goerli_TransferStatus>;
  routers?: Maybe<Array<goerli_Router>>;
  originSender?: Maybe<Scalars['goerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['goerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['goerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['goerli_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['goerli_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['goerli_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type goerli_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
};

export type goerli_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not?: InputMaybe<Scalars['goerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<goerli_Router_filter>;
  originSender?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type goerli_OrderDirection =
  | 'asc'
  | 'desc';

export type goerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['goerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['goerli_Bytes']>;
  callData?: Maybe<Scalars['goerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['goerli_Bytes']>;
  recovery?: Maybe<Scalars['goerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['goerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<goerli_TransferStatus>;
  message?: Maybe<Scalars['goerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['goerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['goerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['goerli_Bytes']>;
  transactionHash?: Maybe<Scalars['goerli_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type goerli_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not?: InputMaybe<Scalars['goerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<goerli_TransferStatus>;
  status_not?: InputMaybe<goerli_TransferStatus>;
  status_in?: InputMaybe<Array<goerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<goerli_TransferStatus>>;
  message?: InputMaybe<Scalars['goerli_Bytes']>;
  message_not?: InputMaybe<Scalars['goerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
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
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
};


export type Querygoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Asset_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Asset_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Setting_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Setting_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Relayer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_StableSwap_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_SponsorVault_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querygoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
};

export type goerli_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['goerli_Bytes']>;
};

export type goerli_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_not?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type goerli_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['goerli_Bytes']>;
  recipient?: Maybe<Scalars['goerli_Bytes']>;
  proposedOwner?: Maybe<Scalars['goerli_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<goerli_AssetBalance>;
};


export type goerli_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
};

export type goerli_Router_filter = {
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
  owner?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_not?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_not?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<goerli_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type goerli_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['goerli_Bytes'];
};

export type goerli_Setting_filter = {
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
  caller?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type goerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['goerli_Bytes'];
};

export type goerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type goerli_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['goerli_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['goerli_Bytes'];
};

export type goerli_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['goerli_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['goerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<goerli_BlockChangedFilter>;
};

export type goerli_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  goerli_asset?: Maybe<goerli_Asset>;
  goerli_assets: Array<goerli_Asset>;
  goerli_assetBalance?: Maybe<goerli_AssetBalance>;
  goerli_assetBalances: Array<goerli_AssetBalance>;
  goerli_router?: Maybe<goerli_Router>;
  goerli_routers: Array<goerli_Router>;
  goerli_setting?: Maybe<goerli_Setting>;
  goerli_settings: Array<goerli_Setting>;
  goerli_relayer?: Maybe<goerli_Relayer>;
  goerli_relayers: Array<goerli_Relayer>;
  goerli_stableSwap?: Maybe<goerli_StableSwap>;
  goerli_stableSwaps: Array<goerli_StableSwap>;
  goerli_sponsorVault?: Maybe<goerli_SponsorVault>;
  goerli_sponsorVaults: Array<goerli_SponsorVault>;
  goerli_originTransfer?: Maybe<goerli_OriginTransfer>;
  goerli_originTransfers: Array<goerli_OriginTransfer>;
  goerli_destinationTransfer?: Maybe<goerli_DestinationTransfer>;
  goerli_destinationTransfers: Array<goerli_DestinationTransfer>;
  /** Access to subgraph metadata */
  goerli__meta?: Maybe<goerli__Meta_>;
};


export type Subscriptiongoerli_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Asset_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Asset_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_AssetBalance_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Router_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Router_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Setting_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Setting_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_Relayer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_Relayer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_StableSwap_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_StableSwap_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_SponsorVault_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_OriginTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<goerli_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<goerli_OrderDirection>;
  where?: InputMaybe<goerli_DestinationTransfer_filter>;
  block?: InputMaybe<goerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiongoerli__metaArgs = {
  block?: InputMaybe<goerli_Block_height>;
};

export type goerli_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type goerli__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['goerli_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type goerli__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: goerli__Block_;
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
    export type QueryConnextGoerliSdk = {
  /** null **/
  goerli_asset: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_asset'], ConnextGoerliTypes.Querygoerli_assetArgs, MeshContext>,
  /** null **/
  goerli_assets: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_assets'], ConnextGoerliTypes.Querygoerli_assetsArgs, MeshContext>,
  /** null **/
  goerli_assetBalance: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_assetBalance'], ConnextGoerliTypes.Querygoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  goerli_assetBalances: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_assetBalances'], ConnextGoerliTypes.Querygoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  goerli_router: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_router'], ConnextGoerliTypes.Querygoerli_routerArgs, MeshContext>,
  /** null **/
  goerli_routers: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_routers'], ConnextGoerliTypes.Querygoerli_routersArgs, MeshContext>,
  /** null **/
  goerli_setting: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_setting'], ConnextGoerliTypes.Querygoerli_settingArgs, MeshContext>,
  /** null **/
  goerli_settings: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_settings'], ConnextGoerliTypes.Querygoerli_settingsArgs, MeshContext>,
  /** null **/
  goerli_relayer: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_relayer'], ConnextGoerliTypes.Querygoerli_relayerArgs, MeshContext>,
  /** null **/
  goerli_relayers: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_relayers'], ConnextGoerliTypes.Querygoerli_relayersArgs, MeshContext>,
  /** null **/
  goerli_stableSwap: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_stableSwap'], ConnextGoerliTypes.Querygoerli_stableSwapArgs, MeshContext>,
  /** null **/
  goerli_stableSwaps: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_stableSwaps'], ConnextGoerliTypes.Querygoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  goerli_sponsorVault: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_sponsorVault'], ConnextGoerliTypes.Querygoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  goerli_sponsorVaults: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_sponsorVaults'], ConnextGoerliTypes.Querygoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  goerli_originTransfer: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_originTransfer'], ConnextGoerliTypes.Querygoerli_originTransferArgs, MeshContext>,
  /** null **/
  goerli_originTransfers: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_originTransfers'], ConnextGoerliTypes.Querygoerli_originTransfersArgs, MeshContext>,
  /** null **/
  goerli_destinationTransfer: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_destinationTransfer'], ConnextGoerliTypes.Querygoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  goerli_destinationTransfers: InContextSdkMethod<ConnextGoerliTypes.Query['goerli_destinationTransfers'], ConnextGoerliTypes.Querygoerli_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  goerli__meta: InContextSdkMethod<ConnextGoerliTypes.Query['goerli__meta'], ConnextGoerliTypes.Querygoerli__metaArgs, MeshContext>
};

export type MutationConnextGoerliSdk = {

};

export type SubscriptionConnextGoerliSdk = {
  /** null **/
  goerli_asset: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_asset'], ConnextGoerliTypes.Subscriptiongoerli_assetArgs, MeshContext>,
  /** null **/
  goerli_assets: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_assets'], ConnextGoerliTypes.Subscriptiongoerli_assetsArgs, MeshContext>,
  /** null **/
  goerli_assetBalance: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_assetBalance'], ConnextGoerliTypes.Subscriptiongoerli_assetBalanceArgs, MeshContext>,
  /** null **/
  goerli_assetBalances: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_assetBalances'], ConnextGoerliTypes.Subscriptiongoerli_assetBalancesArgs, MeshContext>,
  /** null **/
  goerli_router: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_router'], ConnextGoerliTypes.Subscriptiongoerli_routerArgs, MeshContext>,
  /** null **/
  goerli_routers: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_routers'], ConnextGoerliTypes.Subscriptiongoerli_routersArgs, MeshContext>,
  /** null **/
  goerli_setting: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_setting'], ConnextGoerliTypes.Subscriptiongoerli_settingArgs, MeshContext>,
  /** null **/
  goerli_settings: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_settings'], ConnextGoerliTypes.Subscriptiongoerli_settingsArgs, MeshContext>,
  /** null **/
  goerli_relayer: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_relayer'], ConnextGoerliTypes.Subscriptiongoerli_relayerArgs, MeshContext>,
  /** null **/
  goerli_relayers: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_relayers'], ConnextGoerliTypes.Subscriptiongoerli_relayersArgs, MeshContext>,
  /** null **/
  goerli_stableSwap: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_stableSwap'], ConnextGoerliTypes.Subscriptiongoerli_stableSwapArgs, MeshContext>,
  /** null **/
  goerli_stableSwaps: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_stableSwaps'], ConnextGoerliTypes.Subscriptiongoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  goerli_sponsorVault: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_sponsorVault'], ConnextGoerliTypes.Subscriptiongoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  goerli_sponsorVaults: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_sponsorVaults'], ConnextGoerliTypes.Subscriptiongoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  goerli_originTransfer: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_originTransfer'], ConnextGoerliTypes.Subscriptiongoerli_originTransferArgs, MeshContext>,
  /** null **/
  goerli_originTransfers: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_originTransfers'], ConnextGoerliTypes.Subscriptiongoerli_originTransfersArgs, MeshContext>,
  /** null **/
  goerli_destinationTransfer: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_destinationTransfer'], ConnextGoerliTypes.Subscriptiongoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  goerli_destinationTransfers: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli_destinationTransfers'], ConnextGoerliTypes.Subscriptiongoerli_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  goerli__meta: InContextSdkMethod<ConnextGoerliTypes.Subscription['goerli__meta'], ConnextGoerliTypes.Subscriptiongoerli__metaArgs, MeshContext>
};


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
  BigInt: any;
  staginggoerli_Bytes: any;
};

export type staginggoerli_Asset = {
  id: Scalars['ID'];
  local: Scalars['staginggoerli_Bytes'];
  adoptedAsset: Scalars['staginggoerli_Bytes'];
  canonicalId: Scalars['staginggoerli_Bytes'];
  canonicalDomain: Scalars['BigInt'];
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
  local?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  local_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type staginggoerli_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type staginggoerli_Block_height = {
  hash?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type staginggoerli_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['staginggoerli_Bytes']>;
  recovery?: Maybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  routers?: Maybe<Array<staginggoerli_Router>>;
  originSender?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
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
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  originSender?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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

export type staginggoerli_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['staginggoerli_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['staginggoerli_Bytes']>;
  callData?: Maybe<Scalars['staginggoerli_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['staginggoerli_Bytes']>;
  recovery?: Maybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<staginggoerli_TransferStatus>;
  message?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
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
  to?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  to_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
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
  agent?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<staginggoerli_TransferStatus>;
  status_not?: InputMaybe<staginggoerli_TransferStatus>;
  status_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  status_not_in?: InputMaybe<Array<staginggoerli_TransferStatus>>;
  message?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  message_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
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
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
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
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
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


export type Querystaginggoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
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

export type staginggoerli_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['staginggoerli_Bytes'];
};

export type staginggoerli_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['staginggoerli_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['staginggoerli_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<staginggoerli_BlockChangedFilter>;
};

export type staginggoerli_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

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
  staginggoerli_stableSwap?: Maybe<staginggoerli_StableSwap>;
  staginggoerli_stableSwaps: Array<staginggoerli_StableSwap>;
  staginggoerli_sponsorVault?: Maybe<staginggoerli_SponsorVault>;
  staginggoerli_sponsorVaults: Array<staginggoerli_SponsorVault>;
  staginggoerli_originTransfer?: Maybe<staginggoerli_OriginTransfer>;
  staginggoerli_originTransfers: Array<staginggoerli_OriginTransfer>;
  staginggoerli_destinationTransfer?: Maybe<staginggoerli_DestinationTransfer>;
  staginggoerli_destinationTransfers: Array<staginggoerli_DestinationTransfer>;
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


export type Subscriptionstaginggoerli_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<staginggoerli_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstaginggoerli_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<staginggoerli_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<staginggoerli_OrderDirection>;
  where?: InputMaybe<staginggoerli_SponsorVault_filter>;
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
  staginggoerli_stableSwap: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_stableSwap'], ConnextStagingGoerliTypes.Querystaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_stableSwaps'], ConnextStagingGoerliTypes.Querystaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_sponsorVault: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_sponsorVault'], ConnextStagingGoerliTypes.Querystaginggoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  staginggoerli_sponsorVaults: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_sponsorVaults'], ConnextStagingGoerliTypes.Querystaginggoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originTransfer'], ConnextStagingGoerliTypes.Querystaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_originTransfers'], ConnextStagingGoerliTypes.Querystaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationTransfer'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Query['staginggoerli_destinationTransfers'], ConnextStagingGoerliTypes.Querystaginggoerli_destinationTransfersArgs, MeshContext>,
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
  staginggoerli_stableSwap: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_stableSwap'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_stableSwapArgs, MeshContext>,
  /** null **/
  staginggoerli_stableSwaps: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_stableSwaps'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_stableSwapsArgs, MeshContext>,
  /** null **/
  staginggoerli_sponsorVault: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_sponsorVault'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_sponsorVaultArgs, MeshContext>,
  /** null **/
  staginggoerli_sponsorVaults: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_sponsorVaults'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_sponsorVaultsArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originTransfer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_originTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_originTransfers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_originTransfersArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfer: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationTransfer'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationTransferArgs, MeshContext>,
  /** null **/
  staginggoerli_destinationTransfers: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli_destinationTransfers'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  staginggoerli__meta: InContextSdkMethod<ConnextStagingGoerliTypes.Subscription['staginggoerli__meta'], ConnextStagingGoerliTypes.Subscriptionstaginggoerli__metaArgs, MeshContext>
};


    export namespace ConnextTestRinkebyTypes {
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
  testrinkeby_BigDecimal: any;
  BigInt: any;
  testrinkeby_Bytes: any;
};

export type testrinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['testrinkeby_Bytes'];
  adoptedAsset: Scalars['testrinkeby_Bytes'];
  canonicalId: Scalars['testrinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type testrinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: testrinkeby_Router;
  asset: testrinkeby_Asset;
};

export type testrinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<testrinkeby_Router_filter>;
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
  asset_?: InputMaybe<testrinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type testrinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type testrinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type testrinkeby_Block_height = {
  hash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type testrinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testrinkeby_Bytes']>;
  callData?: Maybe<Scalars['testrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testrinkeby_TransferStatus>;
  routers?: Maybe<Array<testrinkeby_Router>>;
  originSender?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type testrinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
};

export type testrinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testrinkeby_TransferStatus>;
  status_not?: InputMaybe<testrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<testrinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type testrinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type testrinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['testrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['testrinkeby_Bytes']>;
  callData?: Maybe<Scalars['testrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['testrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<testrinkeby_TransferStatus>;
  message?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['testrinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['testrinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['testrinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type testrinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<testrinkeby_TransferStatus>;
  status_not?: InputMaybe<testrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<testrinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  testrinkeby_asset?: Maybe<testrinkeby_Asset>;
  testrinkeby_assets: Array<testrinkeby_Asset>;
  testrinkeby_assetBalance?: Maybe<testrinkeby_AssetBalance>;
  testrinkeby_assetBalances: Array<testrinkeby_AssetBalance>;
  testrinkeby_router?: Maybe<testrinkeby_Router>;
  testrinkeby_routers: Array<testrinkeby_Router>;
  testrinkeby_setting?: Maybe<testrinkeby_Setting>;
  testrinkeby_settings: Array<testrinkeby_Setting>;
  testrinkeby_relayer?: Maybe<testrinkeby_Relayer>;
  testrinkeby_relayers: Array<testrinkeby_Relayer>;
  testrinkeby_stableSwap?: Maybe<testrinkeby_StableSwap>;
  testrinkeby_stableSwaps: Array<testrinkeby_StableSwap>;
  testrinkeby_sponsorVault?: Maybe<testrinkeby_SponsorVault>;
  testrinkeby_sponsorVaults: Array<testrinkeby_SponsorVault>;
  testrinkeby_originTransfer?: Maybe<testrinkeby_OriginTransfer>;
  testrinkeby_originTransfers: Array<testrinkeby_OriginTransfer>;
  testrinkeby_destinationTransfer?: Maybe<testrinkeby_DestinationTransfer>;
  testrinkeby_destinationTransfers: Array<testrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  testrinkeby__meta?: Maybe<testrinkeby__Meta_>;
};


export type Querytestrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Asset_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Setting_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Relayer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_StableSwap_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_SponsorVault_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querytestrinkeby__metaArgs = {
  block?: InputMaybe<testrinkeby_Block_height>;
};

export type testrinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['testrinkeby_Bytes']>;
};

export type testrinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type testrinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['testrinkeby_Bytes']>;
  recipient?: Maybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['testrinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<testrinkeby_AssetBalance>;
};


export type testrinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
};

export type testrinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<testrinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type testrinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type testrinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type testrinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['testrinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['testrinkeby_Bytes'];
};

export type testrinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['testrinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['testrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<testrinkeby_BlockChangedFilter>;
};

export type testrinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  testrinkeby_asset?: Maybe<testrinkeby_Asset>;
  testrinkeby_assets: Array<testrinkeby_Asset>;
  testrinkeby_assetBalance?: Maybe<testrinkeby_AssetBalance>;
  testrinkeby_assetBalances: Array<testrinkeby_AssetBalance>;
  testrinkeby_router?: Maybe<testrinkeby_Router>;
  testrinkeby_routers: Array<testrinkeby_Router>;
  testrinkeby_setting?: Maybe<testrinkeby_Setting>;
  testrinkeby_settings: Array<testrinkeby_Setting>;
  testrinkeby_relayer?: Maybe<testrinkeby_Relayer>;
  testrinkeby_relayers: Array<testrinkeby_Relayer>;
  testrinkeby_stableSwap?: Maybe<testrinkeby_StableSwap>;
  testrinkeby_stableSwaps: Array<testrinkeby_StableSwap>;
  testrinkeby_sponsorVault?: Maybe<testrinkeby_SponsorVault>;
  testrinkeby_sponsorVaults: Array<testrinkeby_SponsorVault>;
  testrinkeby_originTransfer?: Maybe<testrinkeby_OriginTransfer>;
  testrinkeby_originTransfers: Array<testrinkeby_OriginTransfer>;
  testrinkeby_destinationTransfer?: Maybe<testrinkeby_DestinationTransfer>;
  testrinkeby_destinationTransfers: Array<testrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  testrinkeby__meta?: Maybe<testrinkeby__Meta_>;
};


export type Subscriptiontestrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Asset_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_AssetBalance_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Router_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Setting_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_Relayer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_StableSwap_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_SponsorVault_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<testrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<testrinkeby_OrderDirection>;
  where?: InputMaybe<testrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<testrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptiontestrinkeby__metaArgs = {
  block?: InputMaybe<testrinkeby_Block_height>;
};

export type testrinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type testrinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['testrinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type testrinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: testrinkeby__Block_;
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
    export type QueryConnextTestRinkebySdk = {
  /** null **/
  testrinkeby_asset: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_asset'], ConnextTestRinkebyTypes.Querytestrinkeby_assetArgs, MeshContext>,
  /** null **/
  testrinkeby_assets: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_assets'], ConnextTestRinkebyTypes.Querytestrinkeby_assetsArgs, MeshContext>,
  /** null **/
  testrinkeby_assetBalance: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_assetBalance'], ConnextTestRinkebyTypes.Querytestrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  testrinkeby_assetBalances: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_assetBalances'], ConnextTestRinkebyTypes.Querytestrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  testrinkeby_router: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_router'], ConnextTestRinkebyTypes.Querytestrinkeby_routerArgs, MeshContext>,
  /** null **/
  testrinkeby_routers: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_routers'], ConnextTestRinkebyTypes.Querytestrinkeby_routersArgs, MeshContext>,
  /** null **/
  testrinkeby_setting: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_setting'], ConnextTestRinkebyTypes.Querytestrinkeby_settingArgs, MeshContext>,
  /** null **/
  testrinkeby_settings: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_settings'], ConnextTestRinkebyTypes.Querytestrinkeby_settingsArgs, MeshContext>,
  /** null **/
  testrinkeby_relayer: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_relayer'], ConnextTestRinkebyTypes.Querytestrinkeby_relayerArgs, MeshContext>,
  /** null **/
  testrinkeby_relayers: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_relayers'], ConnextTestRinkebyTypes.Querytestrinkeby_relayersArgs, MeshContext>,
  /** null **/
  testrinkeby_stableSwap: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_stableSwap'], ConnextTestRinkebyTypes.Querytestrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  testrinkeby_stableSwaps: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_stableSwaps'], ConnextTestRinkebyTypes.Querytestrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  testrinkeby_sponsorVault: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_sponsorVault'], ConnextTestRinkebyTypes.Querytestrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  testrinkeby_sponsorVaults: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_sponsorVaults'], ConnextTestRinkebyTypes.Querytestrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  testrinkeby_originTransfer: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_originTransfer'], ConnextTestRinkebyTypes.Querytestrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  testrinkeby_originTransfers: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_originTransfers'], ConnextTestRinkebyTypes.Querytestrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  testrinkeby_destinationTransfer: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_destinationTransfer'], ConnextTestRinkebyTypes.Querytestrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  testrinkeby_destinationTransfers: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby_destinationTransfers'], ConnextTestRinkebyTypes.Querytestrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  testrinkeby__meta: InContextSdkMethod<ConnextTestRinkebyTypes.Query['testrinkeby__meta'], ConnextTestRinkebyTypes.Querytestrinkeby__metaArgs, MeshContext>
};

export type MutationConnextTestRinkebySdk = {

};

export type SubscriptionConnextTestRinkebySdk = {
  /** null **/
  testrinkeby_asset: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_asset'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_assetArgs, MeshContext>,
  /** null **/
  testrinkeby_assets: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_assets'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_assetsArgs, MeshContext>,
  /** null **/
  testrinkeby_assetBalance: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_assetBalance'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  testrinkeby_assetBalances: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_assetBalances'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  testrinkeby_router: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_router'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_routerArgs, MeshContext>,
  /** null **/
  testrinkeby_routers: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_routers'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_routersArgs, MeshContext>,
  /** null **/
  testrinkeby_setting: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_setting'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_settingArgs, MeshContext>,
  /** null **/
  testrinkeby_settings: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_settings'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_settingsArgs, MeshContext>,
  /** null **/
  testrinkeby_relayer: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_relayer'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_relayerArgs, MeshContext>,
  /** null **/
  testrinkeby_relayers: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_relayers'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_relayersArgs, MeshContext>,
  /** null **/
  testrinkeby_stableSwap: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_stableSwap'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  testrinkeby_stableSwaps: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_stableSwaps'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  testrinkeby_sponsorVault: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_sponsorVault'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  testrinkeby_sponsorVaults: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_sponsorVaults'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  testrinkeby_originTransfer: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_originTransfer'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  testrinkeby_originTransfers: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_originTransfers'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  testrinkeby_destinationTransfer: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_destinationTransfer'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  testrinkeby_destinationTransfers: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby_destinationTransfers'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  testrinkeby__meta: InContextSdkMethod<ConnextTestRinkebyTypes.Subscription['testrinkeby__meta'], ConnextTestRinkebyTypes.Subscriptiontestrinkeby__metaArgs, MeshContext>
};


    export namespace ConnextStagingRinkebyTypes {
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
  stagingrinkeby_BigDecimal: any;
  BigInt: any;
  stagingrinkeby_Bytes: any;
};

export type stagingrinkeby_Asset = {
  id: Scalars['ID'];
  local: Scalars['stagingrinkeby_Bytes'];
  adoptedAsset: Scalars['stagingrinkeby_Bytes'];
  canonicalId: Scalars['stagingrinkeby_Bytes'];
  canonicalDomain: Scalars['BigInt'];
  blockNumber: Scalars['BigInt'];
};

export type stagingrinkeby_AssetBalance = {
  id: Scalars['ID'];
  amount: Scalars['BigInt'];
  router: stagingrinkeby_Router;
  asset: stagingrinkeby_Asset;
};

export type stagingrinkeby_AssetBalance_filter = {
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
  router_?: InputMaybe<stagingrinkeby_Router_filter>;
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
  asset_?: InputMaybe<stagingrinkeby_Asset_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_AssetBalance_orderBy =
  | 'id'
  | 'amount'
  | 'router'
  | 'asset';

export type stagingrinkeby_Asset_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  local?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  local_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  local_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  local_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  adoptedAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  adoptedAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  adoptedAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalDomain?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_not?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lt?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_gte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_lte?: InputMaybe<Scalars['BigInt']>;
  canonicalDomain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  canonicalDomain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Asset_orderBy =
  | 'id'
  | 'local'
  | 'adoptedAsset'
  | 'canonicalId'
  | 'canonicalDomain'
  | 'blockNumber';

export type stagingrinkeby_BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type stagingrinkeby_Block_height = {
  hash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type stagingrinkeby_DestinationTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingrinkeby_TransferStatus>;
  routers?: Maybe<Array<stagingrinkeby_Router>>;
  originSender?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  localAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  localAmount?: Maybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee?: Maybe<Scalars['BigInt']>;
  executedCaller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  executedTimestamp?: Maybe<Scalars['BigInt']>;
  executedGasPrice?: Maybe<Scalars['BigInt']>;
  executedGasLimit?: Maybe<Scalars['BigInt']>;
  executedBlockNumber?: Maybe<Scalars['BigInt']>;
  reconciledCaller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTimestamp?: Maybe<Scalars['BigInt']>;
  reconciledGasPrice?: Maybe<Scalars['BigInt']>;
  reconciledGasLimit?: Maybe<Scalars['BigInt']>;
  reconciledBlockNumber?: Maybe<Scalars['BigInt']>;
};


export type stagingrinkeby_DestinationTransferroutersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
};

export type stagingrinkeby_DestinationTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_not?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  routers?: InputMaybe<Array<Scalars['String']>>;
  routers_not?: InputMaybe<Array<Scalars['String']>>;
  routers_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains?: InputMaybe<Array<Scalars['String']>>;
  routers_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
  routers_?: InputMaybe<stagingrinkeby_Router_filter>;
  originSender?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  originSender_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  originSender_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  originSender_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  localAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  localAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  localAmount?: InputMaybe<Scalars['BigInt']>;
  localAmount_not?: InputMaybe<Scalars['BigInt']>;
  localAmount_gt?: InputMaybe<Scalars['BigInt']>;
  localAmount_lt?: InputMaybe<Scalars['BigInt']>;
  localAmount_gte?: InputMaybe<Scalars['BigInt']>;
  localAmount_lte?: InputMaybe<Scalars['BigInt']>;
  localAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  localAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_not?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  sponsorVaultRelayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  sponsorVaultRelayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  executedCaller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedCaller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedCaller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedCaller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  executedTransactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  executedTransactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  reconciledCaller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledCaller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledCaller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledCaller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledTransactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  reconciledTransactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  reconciledTransactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_DestinationTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'routers'
  | 'originSender'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'localAsset'
  | 'localAmount'
  | 'sponsorVaultRelayerFee'
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
export type stagingrinkeby_OrderDirection =
  | 'asc'
  | 'desc';

export type stagingrinkeby_OriginTransfer = {
  id: Scalars['ID'];
  chainId?: Maybe<Scalars['BigInt']>;
  transferId?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: Maybe<Scalars['BigInt']>;
  to?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  originDomain?: Maybe<Scalars['BigInt']>;
  destinationDomain?: Maybe<Scalars['BigInt']>;
  agent?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: Maybe<Scalars['Boolean']>;
  receiveLocal?: Maybe<Scalars['Boolean']>;
  callback?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: Maybe<Scalars['BigInt']>;
  relayerFee?: Maybe<Scalars['BigInt']>;
  slippageTol?: Maybe<Scalars['BigInt']>;
  status?: Maybe<stagingrinkeby_TransferStatus>;
  message?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: Maybe<Scalars['BigInt']>;
  bridgedAsset?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAmount?: Maybe<Scalars['BigInt']>;
  caller?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  gasPrice?: Maybe<Scalars['BigInt']>;
  gasLimit?: Maybe<Scalars['BigInt']>;
  blockNumber?: Maybe<Scalars['BigInt']>;
};

export type stagingrinkeby_OriginTransfer_filter = {
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
  transferId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transferId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transferId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  nonce?: InputMaybe<Scalars['BigInt']>;
  nonce_not?: InputMaybe<Scalars['BigInt']>;
  nonce_gt?: InputMaybe<Scalars['BigInt']>;
  nonce_lt?: InputMaybe<Scalars['BigInt']>;
  nonce_gte?: InputMaybe<Scalars['BigInt']>;
  nonce_lte?: InputMaybe<Scalars['BigInt']>;
  nonce_in?: InputMaybe<Array<Scalars['BigInt']>>;
  nonce_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  to_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  to_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callData_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callData_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  agent?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  agent_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  agent_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recovery_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recovery_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  forceSlow?: InputMaybe<Scalars['Boolean']>;
  forceSlow_not?: InputMaybe<Scalars['Boolean']>;
  forceSlow_in?: InputMaybe<Array<Scalars['Boolean']>>;
  forceSlow_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_not?: InputMaybe<Scalars['Boolean']>;
  receiveLocal_in?: InputMaybe<Array<Scalars['Boolean']>>;
  receiveLocal_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
  callback?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  callback_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callback_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  callbackFee?: InputMaybe<Scalars['BigInt']>;
  callbackFee_not?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lt?: InputMaybe<Scalars['BigInt']>;
  callbackFee_gte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_lte?: InputMaybe<Scalars['BigInt']>;
  callbackFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  callbackFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee?: InputMaybe<Scalars['BigInt']>;
  relayerFee_not?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lt?: InputMaybe<Scalars['BigInt']>;
  relayerFee_gte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_lte?: InputMaybe<Scalars['BigInt']>;
  relayerFee_in?: InputMaybe<Array<Scalars['BigInt']>>;
  relayerFee_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol?: InputMaybe<Scalars['BigInt']>;
  slippageTol_not?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lt?: InputMaybe<Scalars['BigInt']>;
  slippageTol_gte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_lte?: InputMaybe<Scalars['BigInt']>;
  slippageTol_in?: InputMaybe<Array<Scalars['BigInt']>>;
  slippageTol_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  status?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_not?: InputMaybe<stagingrinkeby_TransferStatus>;
  status_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  status_not_in?: InputMaybe<Array<stagingrinkeby_TransferStatus>>;
  message?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  message_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  message_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  message_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactingAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactingAmount?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_not?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lt?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_gte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_lte?: InputMaybe<Scalars['BigInt']>;
  transactingAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactingAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAsset?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  bridgedAsset_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  bridgedAsset_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAsset_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  bridgedAmount?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_not?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lt?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_gte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_lte?: InputMaybe<Scalars['BigInt']>;
  bridgedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>;
  bridgedAmount_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  caller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  transactionHash_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  transactionHash_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
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
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_OriginTransfer_orderBy =
  | 'id'
  | 'chainId'
  | 'transferId'
  | 'nonce'
  | 'to'
  | 'callData'
  | 'originDomain'
  | 'destinationDomain'
  | 'agent'
  | 'recovery'
  | 'forceSlow'
  | 'receiveLocal'
  | 'callback'
  | 'callbackFee'
  | 'relayerFee'
  | 'slippageTol'
  | 'status'
  | 'message'
  | 'transactingAsset'
  | 'transactingAmount'
  | 'bridgedAsset'
  | 'bridgedAmount'
  | 'caller'
  | 'transactionHash'
  | 'timestamp'
  | 'gasPrice'
  | 'gasLimit'
  | 'blockNumber';

export type Query = {
  stagingrinkeby_asset?: Maybe<stagingrinkeby_Asset>;
  stagingrinkeby_assets: Array<stagingrinkeby_Asset>;
  stagingrinkeby_assetBalance?: Maybe<stagingrinkeby_AssetBalance>;
  stagingrinkeby_assetBalances: Array<stagingrinkeby_AssetBalance>;
  stagingrinkeby_router?: Maybe<stagingrinkeby_Router>;
  stagingrinkeby_routers: Array<stagingrinkeby_Router>;
  stagingrinkeby_setting?: Maybe<stagingrinkeby_Setting>;
  stagingrinkeby_settings: Array<stagingrinkeby_Setting>;
  stagingrinkeby_relayer?: Maybe<stagingrinkeby_Relayer>;
  stagingrinkeby_relayers: Array<stagingrinkeby_Relayer>;
  stagingrinkeby_stableSwap?: Maybe<stagingrinkeby_StableSwap>;
  stagingrinkeby_stableSwaps: Array<stagingrinkeby_StableSwap>;
  stagingrinkeby_sponsorVault?: Maybe<stagingrinkeby_SponsorVault>;
  stagingrinkeby_sponsorVaults: Array<stagingrinkeby_SponsorVault>;
  stagingrinkeby_originTransfer?: Maybe<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_originTransfers: Array<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_destinationTransfer?: Maybe<stagingrinkeby_DestinationTransfer>;
  stagingrinkeby_destinationTransfers: Array<stagingrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  stagingrinkeby__meta?: Maybe<stagingrinkeby__Meta_>;
};


export type Querystagingrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Asset_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Setting_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Relayer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_StableSwap_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_SponsorVault_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Querystagingrinkeby__metaArgs = {
  block?: InputMaybe<stagingrinkeby_Block_height>;
};

export type stagingrinkeby_Relayer = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  relayer?: Maybe<Scalars['stagingrinkeby_Bytes']>;
};

export type stagingrinkeby_Relayer_filter = {
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
  relayer?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  relayer_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  relayer_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  relayer_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Relayer_orderBy =
  | 'id'
  | 'isActive'
  | 'relayer';

export type stagingrinkeby_Router = {
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  recipient?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  proposedTimestamp?: Maybe<Scalars['BigInt']>;
  assetBalances: Array<stagingrinkeby_AssetBalance>;
};


export type stagingrinkeby_RouterassetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
};

export type stagingrinkeby_Router_filter = {
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
  owner?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  owner_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  owner_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  owner_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recipient_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  recipient_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  recipient_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  proposedOwner_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  proposedOwner_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedOwner_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  proposedTimestamp?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_not?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lt?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_gte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_lte?: InputMaybe<Scalars['BigInt']>;
  proposedTimestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  proposedTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetBalances_?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Router_orderBy =
  | 'id'
  | 'isActive'
  | 'owner'
  | 'recipient'
  | 'proposedOwner'
  | 'proposedTimestamp'
  | 'assetBalances';

export type stagingrinkeby_Setting = {
  id: Scalars['ID'];
  maxRoutersPerTransfer: Scalars['BigInt'];
  caller: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_Setting_filter = {
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
  caller?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  caller_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  caller_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_Setting_orderBy =
  | 'id'
  | 'maxRoutersPerTransfer'
  | 'caller';

export type stagingrinkeby_SponsorVault = {
  id: Scalars['ID'];
  sponsorVault: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_SponsorVault_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  sponsorVault?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  sponsorVault_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  sponsorVault_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  sponsorVault_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_SponsorVault_orderBy =
  | 'id'
  | 'sponsorVault';

export type stagingrinkeby_StableSwap = {
  id: Scalars['ID'];
  canonicalId: Scalars['stagingrinkeby_Bytes'];
  domain?: Maybe<Scalars['BigInt']>;
  swapPool: Scalars['stagingrinkeby_Bytes'];
};

export type stagingrinkeby_StableSwap_filter = {
  id?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  canonicalId?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  canonicalId_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  canonicalId_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  domain?: InputMaybe<Scalars['BigInt']>;
  domain_not?: InputMaybe<Scalars['BigInt']>;
  domain_gt?: InputMaybe<Scalars['BigInt']>;
  domain_lt?: InputMaybe<Scalars['BigInt']>;
  domain_gte?: InputMaybe<Scalars['BigInt']>;
  domain_lte?: InputMaybe<Scalars['BigInt']>;
  domain_in?: InputMaybe<Array<Scalars['BigInt']>>;
  domain_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  swapPool?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_not?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  swapPool_not_in?: InputMaybe<Array<Scalars['stagingrinkeby_Bytes']>>;
  swapPool_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  swapPool_not_contains?: InputMaybe<Scalars['stagingrinkeby_Bytes']>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<stagingrinkeby_BlockChangedFilter>;
};

export type stagingrinkeby_StableSwap_orderBy =
  | 'id'
  | 'canonicalId'
  | 'domain'
  | 'swapPool';

export type Subscription = {
  stagingrinkeby_asset?: Maybe<stagingrinkeby_Asset>;
  stagingrinkeby_assets: Array<stagingrinkeby_Asset>;
  stagingrinkeby_assetBalance?: Maybe<stagingrinkeby_AssetBalance>;
  stagingrinkeby_assetBalances: Array<stagingrinkeby_AssetBalance>;
  stagingrinkeby_router?: Maybe<stagingrinkeby_Router>;
  stagingrinkeby_routers: Array<stagingrinkeby_Router>;
  stagingrinkeby_setting?: Maybe<stagingrinkeby_Setting>;
  stagingrinkeby_settings: Array<stagingrinkeby_Setting>;
  stagingrinkeby_relayer?: Maybe<stagingrinkeby_Relayer>;
  stagingrinkeby_relayers: Array<stagingrinkeby_Relayer>;
  stagingrinkeby_stableSwap?: Maybe<stagingrinkeby_StableSwap>;
  stagingrinkeby_stableSwaps: Array<stagingrinkeby_StableSwap>;
  stagingrinkeby_sponsorVault?: Maybe<stagingrinkeby_SponsorVault>;
  stagingrinkeby_sponsorVaults: Array<stagingrinkeby_SponsorVault>;
  stagingrinkeby_originTransfer?: Maybe<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_originTransfers: Array<stagingrinkeby_OriginTransfer>;
  stagingrinkeby_destinationTransfer?: Maybe<stagingrinkeby_DestinationTransfer>;
  stagingrinkeby_destinationTransfers: Array<stagingrinkeby_DestinationTransfer>;
  /** Access to subgraph metadata */
  stagingrinkeby__meta?: Maybe<stagingrinkeby__Meta_>;
};


export type Subscriptionstagingrinkeby_assetArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Asset_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Asset_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetBalanceArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_assetBalancesArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_AssetBalance_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_AssetBalance_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_routerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_routersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Router_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Router_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_settingArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_settingsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Setting_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Setting_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_relayerArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_relayersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_Relayer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_Relayer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_stableSwapArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_stableSwapsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_StableSwap_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_StableSwap_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_sponsorVaultArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_sponsorVaultsArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_SponsorVault_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_SponsorVault_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_originTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_originTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_OriginTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_OriginTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_destinationTransferArgs = {
  id: Scalars['ID'];
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby_destinationTransfersArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<stagingrinkeby_DestinationTransfer_orderBy>;
  orderDirection?: InputMaybe<stagingrinkeby_OrderDirection>;
  where?: InputMaybe<stagingrinkeby_DestinationTransfer_filter>;
  block?: InputMaybe<stagingrinkeby_Block_height>;
  subgraphError?: _SubgraphErrorPolicy_;
};


export type Subscriptionstagingrinkeby__metaArgs = {
  block?: InputMaybe<stagingrinkeby_Block_height>;
};

export type stagingrinkeby_TransferStatus =
  | 'XCalled'
  | 'Executed'
  | 'Reconciled'
  | 'CompletedSlow'
  | 'CompletedFast';

export type stagingrinkeby__Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['stagingrinkeby_Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type stagingrinkeby__Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: stagingrinkeby__Block_;
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
    export type QueryConnextStagingRinkebySdk = {
  /** null **/
  stagingrinkeby_asset: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_asset'], ConnextStagingRinkebyTypes.Querystagingrinkeby_assetArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assets: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_assets'], ConnextStagingRinkebyTypes.Querystagingrinkeby_assetsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assetBalance: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_assetBalance'], ConnextStagingRinkebyTypes.Querystagingrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assetBalances: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_assetBalances'], ConnextStagingRinkebyTypes.Querystagingrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  stagingrinkeby_router: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_router'], ConnextStagingRinkebyTypes.Querystagingrinkeby_routerArgs, MeshContext>,
  /** null **/
  stagingrinkeby_routers: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_routers'], ConnextStagingRinkebyTypes.Querystagingrinkeby_routersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_setting: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_setting'], ConnextStagingRinkebyTypes.Querystagingrinkeby_settingArgs, MeshContext>,
  /** null **/
  stagingrinkeby_settings: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_settings'], ConnextStagingRinkebyTypes.Querystagingrinkeby_settingsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_relayer: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_relayer'], ConnextStagingRinkebyTypes.Querystagingrinkeby_relayerArgs, MeshContext>,
  /** null **/
  stagingrinkeby_relayers: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_relayers'], ConnextStagingRinkebyTypes.Querystagingrinkeby_relayersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_stableSwap: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_stableSwap'], ConnextStagingRinkebyTypes.Querystagingrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  stagingrinkeby_stableSwaps: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_stableSwaps'], ConnextStagingRinkebyTypes.Querystagingrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_sponsorVault: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_sponsorVault'], ConnextStagingRinkebyTypes.Querystagingrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  stagingrinkeby_sponsorVaults: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_sponsorVaults'], ConnextStagingRinkebyTypes.Querystagingrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_originTransfer: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_originTransfer'], ConnextStagingRinkebyTypes.Querystagingrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  stagingrinkeby_originTransfers: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_originTransfers'], ConnextStagingRinkebyTypes.Querystagingrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_destinationTransfer: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_destinationTransfer'], ConnextStagingRinkebyTypes.Querystagingrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  stagingrinkeby_destinationTransfers: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby_destinationTransfers'], ConnextStagingRinkebyTypes.Querystagingrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  stagingrinkeby__meta: InContextSdkMethod<ConnextStagingRinkebyTypes.Query['stagingrinkeby__meta'], ConnextStagingRinkebyTypes.Querystagingrinkeby__metaArgs, MeshContext>
};

export type MutationConnextStagingRinkebySdk = {

};

export type SubscriptionConnextStagingRinkebySdk = {
  /** null **/
  stagingrinkeby_asset: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_asset'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_assetArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assets: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_assets'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_assetsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assetBalance: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_assetBalance'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_assetBalanceArgs, MeshContext>,
  /** null **/
  stagingrinkeby_assetBalances: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_assetBalances'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_assetBalancesArgs, MeshContext>,
  /** null **/
  stagingrinkeby_router: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_router'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_routerArgs, MeshContext>,
  /** null **/
  stagingrinkeby_routers: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_routers'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_routersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_setting: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_setting'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_settingArgs, MeshContext>,
  /** null **/
  stagingrinkeby_settings: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_settings'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_settingsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_relayer: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_relayer'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_relayerArgs, MeshContext>,
  /** null **/
  stagingrinkeby_relayers: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_relayers'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_relayersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_stableSwap: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_stableSwap'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_stableSwapArgs, MeshContext>,
  /** null **/
  stagingrinkeby_stableSwaps: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_stableSwaps'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_stableSwapsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_sponsorVault: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_sponsorVault'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_sponsorVaultArgs, MeshContext>,
  /** null **/
  stagingrinkeby_sponsorVaults: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_sponsorVaults'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_sponsorVaultsArgs, MeshContext>,
  /** null **/
  stagingrinkeby_originTransfer: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_originTransfer'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_originTransferArgs, MeshContext>,
  /** null **/
  stagingrinkeby_originTransfers: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_originTransfers'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_originTransfersArgs, MeshContext>,
  /** null **/
  stagingrinkeby_destinationTransfer: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_destinationTransfer'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_destinationTransferArgs, MeshContext>,
  /** null **/
  stagingrinkeby_destinationTransfers: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby_destinationTransfers'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby_destinationTransfersArgs, MeshContext>,
  /** Access to subgraph metadata **/
  stagingrinkeby__meta: InContextSdkMethod<ConnextStagingRinkebyTypes.Subscription['stagingrinkeby__meta'], ConnextStagingRinkebyTypes.Subscriptionstagingrinkeby__metaArgs, MeshContext>
};

export type ConnextTestGoerliContext = {
      ["Connext_Test_Goerli"]: { Query: QueryConnextTestGoerliSdk, Mutation: MutationConnextTestGoerliSdk, Subscription: SubscriptionConnextTestGoerliSdk },
    };

export type ConnextRinkebyContext = {
      ["Connext_Rinkeby"]: { Query: QueryConnextRinkebySdk, Mutation: MutationConnextRinkebySdk, Subscription: SubscriptionConnextRinkebySdk },
    };

export type ConnextGoerliContext = {
      ["Connext_Goerli"]: { Query: QueryConnextGoerliSdk, Mutation: MutationConnextGoerliSdk, Subscription: SubscriptionConnextGoerliSdk },
    };

export type ConnextStagingGoerliContext = {
      ["Connext_Staging_Goerli"]: { Query: QueryConnextStagingGoerliSdk, Mutation: MutationConnextStagingGoerliSdk, Subscription: SubscriptionConnextStagingGoerliSdk },
    };

export type ConnextTestRinkebyContext = {
      ["Connext_Test_Rinkeby"]: { Query: QueryConnextTestRinkebySdk, Mutation: MutationConnextTestRinkebySdk, Subscription: SubscriptionConnextTestRinkebySdk },
    };

export type ConnextStagingRinkebyContext = {
      ["Connext_Staging_Rinkeby"]: { Query: QueryConnextStagingRinkebySdk, Mutation: MutationConnextStagingRinkebySdk, Subscription: SubscriptionConnextStagingRinkebySdk },
    };

export type MeshContext = ConnextTestGoerliContext & ConnextRinkebyContext & ConnextGoerliContext & ConnextStagingGoerliContext & ConnextTestRinkebyContext & ConnextStagingRinkebyContext & BaseMeshContext;


import { getMesh, ExecuteMeshFn, SubscribeMeshFn } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';

const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn = (moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".graphclient/sources/Connext_Test_Goerli/introspectionSchema":
      return import("./sources/Connext_Test_Goerli/introspectionSchema");
    
    case ".graphclient/sources/Connext_Rinkeby/introspectionSchema":
      return import("./sources/Connext_Rinkeby/introspectionSchema");
    
    case ".graphclient/sources/Connext_Goerli/introspectionSchema":
      return import("./sources/Connext_Goerli/introspectionSchema");
    
    case ".graphclient/sources/Connext_Staging_Goerli/introspectionSchema":
      return import("./sources/Connext_Staging_Goerli/introspectionSchema");
    
    case ".graphclient/sources/Connext_Test_Rinkeby/introspectionSchema":
      return import("./sources/Connext_Test_Rinkeby/introspectionSchema");
    
    case ".graphclient/sources/Connext_Staging_Rinkeby/introspectionSchema":
      return import("./sources/Connext_Staging_Rinkeby/introspectionSchema");
    
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.graphclient', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { DefaultLogger } from '@graphql-mesh/utils';
import GraphqlHandler from "@graphql-mesh/graphql"
import StitchingMerger from "@graphql-mesh/merger-stitching";
import PrefixTransform from "@graphql-mesh/transform-prefix";
import AutoPaginationTransform from "@graphprotocol/client-auto-pagination";
import { printWithCache } from '@graphql-mesh/utils';
export const rawServeConfig: YamlConfig.Config['serve'] = undefined as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
    } as any)
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger('🕸️  Mesh');
const sources = [];
const transforms = [];
const additionalEnvelopPlugins = [];
const connextRinkebyTransforms = [];
const connextStagingRinkebyTransforms = [];
const connextTestRinkebyTransforms = [];
const connextGoerliTransforms = [];
const connextStagingGoerliTransforms = [];
const connextTestGoerliTransforms = [];
const additionalTypeDefs = [] as any[];
const connextRinkebyHandler = new GraphqlHandler({
              name: "Connext_Rinkeby",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-v0-rinkeby","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Rinkeby"),
              logger: logger.child("Connext_Rinkeby"),
              importFn
            });
const connextStagingRinkebyHandler = new GraphqlHandler({
              name: "Connext_Staging_Rinkeby",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-staging-rinkeby","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Staging_Rinkeby"),
              logger: logger.child("Connext_Staging_Rinkeby"),
              importFn
            });
const connextTestRinkebyHandler = new GraphqlHandler({
              name: "Connext_Test_Rinkeby",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-test-rinkeby","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Test_Rinkeby"),
              logger: logger.child("Connext_Test_Rinkeby"),
              importFn
            });
const connextGoerliHandler = new GraphqlHandler({
              name: "Connext_Goerli",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-v0-goerli","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Goerli"),
              logger: logger.child("Connext_Goerli"),
              importFn
            });
const connextStagingGoerliHandler = new GraphqlHandler({
              name: "Connext_Staging_Goerli",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-staging-goerli","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Staging_Goerli"),
              logger: logger.child("Connext_Staging_Goerli"),
              importFn
            });
const connextTestGoerliHandler = new GraphqlHandler({
              name: "Connext_Test_Goerli",
              config: {"endpoint":"https://api.thegraph.com/subgraphs/name/connext/nxtp-amarok-runtime-test-goerli","retry":5,"timeout":30000},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Connext_Test_Goerli"),
              logger: logger.child("Connext_Test_Goerli"),
              importFn
            });
const merger = new(StitchingMerger as any)({
        cache,
        pubsub,
        logger: logger.child('stitchingMerger'),
        store: rootStore.child('stitchingMerger')
      })
connextRinkebyTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Rinkeby",
                  config: {"value":"rinkeby_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextStagingRinkebyTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Staging_Rinkeby",
                  config: {"value":"stagingrinkeby_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextTestRinkebyTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Test_Rinkeby",
                  config: {"value":"testrinkeby_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextGoerliTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Goerli",
                  config: {"value":"goerli_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextStagingGoerliTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Staging_Goerli",
                  config: {"value":"staginggoerli_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextTestGoerliTransforms.push(
                new PrefixTransform({
                  apiName: "Connext_Test_Goerli",
                  config: {"value":"testgoerli_","includeRootOperations":true,"ignore":["_SubgraphErrorPolicy_"]},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextRinkebyTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Rinkeby",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextStagingRinkebyTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Staging_Rinkeby",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextTestRinkebyTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Test_Rinkeby",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextGoerliTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Goerli",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextStagingGoerliTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Staging_Goerli",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
connextTestGoerliTransforms.push(
                new AutoPaginationTransform({
                  apiName: "Connext_Test_Goerli",
                  config: {"validateSchema":true,"limitOfRecords":250},
                  baseDir,
                  cache,
                  pubsub,
                  importFn
                })
              );
sources.push({
          name: 'Connext_Rinkeby',
          handler: connextRinkebyHandler,
          transforms: connextRinkebyTransforms
        })
sources.push({
          name: 'Connext_Staging_Rinkeby',
          handler: connextStagingRinkebyHandler,
          transforms: connextStagingRinkebyTransforms
        })
sources.push({
          name: 'Connext_Test_Rinkeby',
          handler: connextTestRinkebyHandler,
          transforms: connextTestRinkebyTransforms
        })
sources.push({
          name: 'Connext_Goerli',
          handler: connextGoerliHandler,
          transforms: connextGoerliTransforms
        })
sources.push({
          name: 'Connext_Staging_Goerli',
          handler: connextStagingGoerliHandler,
          transforms: connextStagingGoerliTransforms
        })
sources.push({
          name: 'Connext_Test_Goerli',
          handler: connextTestGoerliHandler,
          transforms: connextTestGoerliTransforms
        })
const additionalResolvers = [] as any[]

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      {
        document: ExampleQueryDocument,
        get rawSDL() {
          return printWithCache(ExampleQueryDocument);
        },
        location: 'ExampleQueryDocument.graphql'
      }
    ];
    },
  };
}

let meshInstance$: Promise<MeshInstance<MeshContext>>;

export function getBuiltGraphClient(): Promise<MeshInstance<MeshContext>> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh<MeshContext>(meshOptions)).then(mesh => {
      const id$ = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        id$.then(id => mesh.pubsub.unsubscribe(id)).catch(err => console.error(err));
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltGraphClient().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltGraphClient().then(({ subscribe }) => subscribe(...args));
export function getBuiltGraphSDK<TGlobalContext = any, TOperationContext = any>(globalContext?: TGlobalContext) {
  const sdkRequester$ = getBuiltGraphClient().then(({ sdkRequesterFactory }) => sdkRequesterFactory(globalContext));
  return getSdk<TOperationContext>((...args) => sdkRequester$.then(sdkRequester => sdkRequester(...args)));
}
export type ExampleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ExampleQueryQuery = { rinkeby_assets: Array<Pick<rinkeby_Asset, 'id' | 'local' | 'adoptedAsset' | 'canonicalId' | 'canonicalDomain' | 'blockNumber'>> };


export const ExampleQueryDocument = gql`
    query ExampleQuery {
  rinkeby_assets(first: 1) {
    id
    local
    adoptedAsset
    canonicalId
    canonicalDomain
    blockNumber
  }
}
    ` as unknown as DocumentNode<ExampleQueryQuery, ExampleQueryQueryVariables>;


export type Requester<C= {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    ExampleQuery(variables?: ExampleQueryQueryVariables, options?: C): Promise<ExampleQueryQuery> {
      return requester<ExampleQueryQuery, ExampleQueryQueryVariables>(ExampleQueryDocument, variables, options);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;