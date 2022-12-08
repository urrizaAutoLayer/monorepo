/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ConnextDiamond,
  ConnextDiamondInterface,
  IDiamondCut,
} from "../../../../../contracts/core/connext/helpers/ConnextDiamond";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_contractOwner",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "enum IDiamondCut.FacetCutAction",
            name: "action",
            type: "uint8",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondCut.FacetCut[]",
        name: "_diamondCut",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "initContract",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "initData",
            type: "bytes",
          },
        ],
        internalType: "struct ConnextDiamond.Initialization[]",
        name: "_initializations",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162002c6638038062002c66833981016040819052620000269162001497565b6001600160a01b038316156200004c576200004c83620000ed60201b620000b61760201c565b62000074826000604051806020016040528060008152506200017b60201b620001431760201c565b805160005b81811015620000e257620000d98382815181106200009b576200009b6200166b565b602002602001015160000151848381518110620000bc57620000bc6200166b565b602002602001015160200151620004a160201b6200041a1760201c565b60010162000079565b50505050506200187f565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205460405160008051602062002bba833981519152916001600160a01b03848116929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b60405160008051602062002bba83398151915290600090620001a690869086908690602001620016c5565b60408051601f198184030181529190528051602090910120600283015490915015620002525760008181526005830160205260409020548015801590620001ed5750428111155b6200023f5760405162461bcd60e51b815260206004820152601d60248201527f4c69624469616d6f6e643a2064656c6179206e6f7420656c617073656400000060448201526064015b60405180910390fd5b5060008181526005830160205260408120555b845160005b818110156200044f5760008782815181106200027757620002776200166b565b6020026020010151602001519050600060028111156200029b576200029b62001681565b816002811115620002b057620002b062001681565b036200030e5762000308888381518110620002cf57620002cf6200166b565b602002602001015160000151898481518110620002f057620002f06200166b565b602002602001015160400151620006c660201b60201c565b62000445565b600181600281111562000325576200032562001681565b036200037d57620003088883815181106200034457620003446200166b565b6020026020010151600001518984815181106200036557620003656200166b565b6020026020010151604001516200094360201b60201c565b600281600281111562000394576200039462001681565b03620003ec5762000308888381518110620003b357620003b36200166b565b602002602001015160000151898481518110620003d457620003d46200166b565b60200260200101516040015162000bd260201b60201c565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b606482015260840162000236565b5060010162000257565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738686866040516200048593929190620016c5565b60405180910390a1620004998585620004a1565b505050505050565b6001600160a01b0382166200052b57805115620005275760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d70747900000000606482015260840162000236565b5050565b8051600003620005a45760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f742061646472657373283029000000606482015260840162000236565b6001600160a01b0382163014620005da57620005da8260405180606001604052806028815260200162002bda6028913962000dcd565b600080836001600160a01b031683604051620005f79190620017cc565b600060405180830381855af49150503d806000811462000634576040519150601f19603f3d011682016040523d82523d6000602084013e62000639565b606091505b509150915081620006c05780511562000668578060405162461bcd60e51b8152600401620002369190620017ea565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b606482015260840162000236565b50505050565b80516000036200071c5760405162461bcd60e51b815260206004820152602b602482015260008051602062002c4683398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000236565b60008051602062002bba8339815191526001600160a01b038316620007885760405162461bcd60e51b815260206004820152602c602482015260008051602062002c0283398151915260448201526b65206164647265737328302960a01b606482015260840162000236565b6001600160a01b0383166000908152600182016020526040812054906001600160601b0382169003620007c157620007c1828562000dfe565b825160005b8181101562000499576000858281518110620007e657620007e66200166b565b6020908102919091018101516001600160e01b031981166000908152918790526040909120549091506001600160a01b031680156200088e5760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f60448201527f6e207468617420616c7265616479206578697374730000000000000000000000606482015260840162000236565b6001600160e01b0319821660008181526020888152604080832080546001600160a01b03908116600160a01b6001600160601b038d16021782558d168085526001808d0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925288905281546001600160a01b0319161790558462000932816200181c565b9550508260010192505050620007c6565b805160008190036200099b5760405162461bcd60e51b815260206004820152602b602482015260008051602062002c4683398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000236565b60008051602062002bba8339815191526001600160a01b03841662000a075760405162461bcd60e51b815260206004820152602c602482015260008051602062002c0283398151915260448201526b65206164647265737328302960a01b606482015260840162000236565b6001600160a01b0384166000908152600182016020526040812054906001600160601b038216900362000a405762000a40828662000dfe565b60005b838110156200049957600085828151811062000a635762000a636200166b565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b03908116908816810362000b105760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e0000000000000000606482015260840162000236565b62000b1d85828462000e6b565b6001600160e01b0319821660008181526020878152604080832080546001600160a01b03908116600160a01b6001600160601b038c16021782558d168085526001808c0185529285208054938401815585528385206008840401805463ffffffff60079095166004026101000a948502191660e08a901c94909402939093179092559390925287905281546001600160a01b0319161790558362000bc1816200181c565b945050826001019250505062000a43565b805160000362000c285760405162461bcd60e51b815260206004820152602b602482015260008051602062002c4683398151915260448201526a1858d95d081d1bc818dd5d60aa1b606482015260840162000236565b60008051602062002bba833981519152635df91ac760e11b6307e4c70760e21b6001600160a01b0385161562000cc75760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f7665206661636574206164647260448201527f657373206d757374206265206164647265737328302900000000000000000000606482015260840162000236565b835160005b8181101562000dc457600086828151811062000cec5762000cec6200166b565b60200260200101519050846001600160e01b031916816001600160e01b0319161415801562000d2857506001600160e01b031981811690851614155b62000d895760405162461bcd60e51b815260206004820152602a60248201527f4c69624469616d6f6e644375743a2043616e6e6f742072656d6f7665206375746044820152692073656c6563746f727360b01b606482015260840162000236565b6001600160e01b031981166000908152602087905260409020546001600160a01b031662000db987828462000e6b565b505060010162000ccc565b50505050505050565b806001600160a01b0383163b62000df95760405162461bcd60e51b8152600401620002369190620017ea565b505050565b62000e238160405180606001604052806024815260200162002c226024913962000dcd565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160a01b03821662000ee95760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e2774206578697374000000000000000000606482015260840162000236565b306001600160a01b0383160362000f5a5760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b606482015260840162000236565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b0316929162000fab916200184d565b9050808214620010a4576001600160a01b0384166000908152600186016020526040812080548390811062000fe45762000fe46200166b565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b9250829190859081106200103857620010386200166b565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480620010d057620010d062001869565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b031985168252869052604081208190558190036200124557600285015460009062001136906001906200184d565b6001600160a01b0386166000908152600180890160205260409091200154909150808214620011ec5760008760020183815481106200117957620011796200166b565b6000918252602090912001546002890180546001600160a01b039092169250829184908110620011ad57620011ad6200166b565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b8660020180548062001202576200120262001869565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505b5050505050565b80516001600160a01b03811681146200126457600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620012a457620012a462001269565b60405290565b604051606081016001600160401b0381118282101715620012a457620012a462001269565b604051601f8201601f191681016001600160401b0381118282101715620012fa57620012fa62001269565b604052919050565b60006001600160401b038211156200131e576200131e62001269565b5060051b60200190565b60005b83811015620013455781810151838201526020016200132b565b50506000910152565b6000601f83818401126200136157600080fd5b825160206200137a620013748362001302565b620012cf565b82815260059290921b850181019181810190878411156200139a57600080fd5b8287015b848110156200148b5780516001600160401b0380821115620013c05760008081fd5b908901906040601f19838d038101821315620013dc5760008081fd5b620013e66200127f565b620013f38986016200124c565b81528285015184811115620014085760008081fd5b8086019550508d603f8601126200141f5760008081fd5b888501518481111562001436576200143662001269565b620014478a848e84011601620012cf565b94508085528e848288010111156200146157600092508283fd5b62001472818b870186890162001328565b508089019390935250508452509183019183016200139e565b50979650505050505050565b600080600060608486031215620014ad57600080fd5b620014b8846200124c565b60208501519093506001600160401b0380821115620014d657600080fd5b818601915086601f830112620014eb57600080fd5b8151620014fc620013748262001302565b8082825260208201915060208360051b8601019250898311156200151f57600080fd5b602085015b8381101562001637578051858111156200153d57600080fd5b86016060818d03601f190112156200155457600080fd5b6200155e620012aa565b6200156c602083016200124c565b81526040820151600381106200158157600080fd5b60208201526060820151878111156200159957600080fd5b8083019250508c603f830112620015af57600080fd5b6020820151620015c3620013748262001302565b81815260059190911b83016040019060208101908f831115620015e557600080fd5b6040850194505b82851015620016205784516001600160e01b0319811681146200160e57600080fd5b825260209485019490910190620015ec565b604084015250508452506020928301920162001524565b50604089015190965093505050808211156200165257600080fd5b5062001661868287016200134e565b9150509250925092565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052602160045260246000fd5b60008151808452620016b181602086016020860162001328565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b848110156200179a57898403607f19018652815180516001600160a01b031685528381015189860190600381106200173657634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b80831015620017845783516001600160e01b031916825292860192600192909201919086019062001758565b50978501979550505090820190600101620016ee565b50506001600160a01b038a16908801528681036040880152620017be818962001697565b9a9950505050505050505050565b60008251620017e081846020870162001328565b9190910192915050565b602081526000620017ff602083018462001697565b9392505050565b634e487b7160e01b600052601160045260246000fd5b60006001600160601b038281166002600160601b0319810162001843576200184362001806565b6001019392505050565b8181038181111562001863576200186362001806565b92915050565b634e487b7160e01b600052603160045260246000fd5b61132b806200188f6000396000f3fe60806040523661000b57005b600080356001600160e01b031916815260008051602061128a833981519152602081905260409091205481906001600160a01b0316806100925760405162461bcd60e51b815260206004820181905260248201527f4469616d6f6e643a2046756e6374696f6e20646f6573206e6f7420657869737460448201526064015b60405180910390fd5b3660008037600080366000845af43d6000803e8080156100b1573d6000f35b3d6000fd5b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c13205460405160008051602061128a833981519152916001600160a01b03848116929116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a360040180546001600160a01b0319166001600160a01b0392909216919091179055565b60405160008051602061128a8339815191529060009061016b9086908690869060200161103b565b60408051601f19818403018152919052805160209091012060028301549091501561020f57600081815260058301602052604090205480158015906101b05750428111155b6101fc5760405162461bcd60e51b815260206004820152601d60248201527f4c69624469616d6f6e643a2064656c6179206e6f7420656c61707365640000006044820152606401610089565b5060008181526005830160205260408120555b845160005b818110156103cc5760008782815181106102305761023061113b565b60200260200101516020015190506000600281111561025157610251610fd5565b81600281111561026357610263610fd5565b036102b1576102ac88838151811061027d5761027d61113b565b60200260200101516000015189848151811061029b5761029b61113b565b60200260200101516040015161062d565b6103c3565b60018160028111156102c5576102c5610fd5565b0361030e576102ac8883815181106102df576102df61113b565b6020026020010151600001518984815181106102fd576102fd61113b565b60200260200101516040015161079e565b600281600281111561032257610322610fd5565b0361036b576102ac88838151811061033c5761033c61113b565b60200260200101516000015189848151811061035a5761035a61113b565b602002602001015160400151610927565b60405162461bcd60e51b815260206004820152602760248201527f4c69624469616d6f6e644375743a20496e636f727265637420466163657443756044820152663a20b1ba34b7b760c91b6064820152608401610089565b50600101610214565b507f8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb6738686866040516104009392919061103b565b60405180910390a1610412858561041a565b505050505050565b6001600160a01b0382166104a15780511561049d5760405162461bcd60e51b815260206004820152603c60248201527f4c69624469616d6f6e644375743a205f696e697420697320616464726573732860448201527f3029206275745f63616c6c64617461206973206e6f7420656d707479000000006064820152608401610089565b5050565b80516000036105185760405162461bcd60e51b815260206004820152603d60248201527f4c69624469616d6f6e644375743a205f63616c6c6461746120697320656d707460448201527f7920627574205f696e6974206973206e6f7420616464726573732830290000006064820152608401610089565b6001600160a01b038216301461054a5761054a826040518060600160405280602881526020016112aa60289139610ad9565b600080836001600160a01b0316836040516105659190611151565b600060405180830381855af49150503d80600081146105a0576040519150601f19603f3d011682016040523d82523d6000602084013e6105a5565b606091505b509150915081610627578051156105d0578060405162461bcd60e51b8152600401610089919061116d565b60405162461bcd60e51b815260206004820152602660248201527f4c69624469616d6f6e644375743a205f696e69742066756e6374696f6e2072656044820152651d995c9d195960d21b6064820152608401610089565b50505050565b805160000361064e5760405162461bcd60e51b815260040161008990611187565b60008051602061128a8339815191526001600160a01b0383166106835760405162461bcd60e51b8152600401610089906111d2565b6001600160a01b0383166000908152600182016020526040812054906001600160601b03821690036106b9576106b98285610b07565b825160005b818110156104125760008582815181106106da576106da61113b565b6020908102919091018101516001600160e01b031981166000908152918790526040909120549091506001600160a01b031680156107785760405162461bcd60e51b815260206004820152603560248201527f4c69624469616d6f6e644375743a2043616e2774206164642066756e6374696f6044820152746e207468617420616c72656164792065786973747360581b6064820152608401610089565b6107848683878b610b71565b8461078e81611234565b95505082600101925050506106be565b805160008190036107c15760405162461bcd60e51b815260040161008990611187565b60008051602061128a8339815191526001600160a01b0384166107f65760405162461bcd60e51b8152600401610089906111d2565b6001600160a01b0384166000908152600182016020526040812054906001600160601b038216900361082c5761082c8286610b07565b60005b8381101561041257600085828151811061084b5761084b61113b565b6020908102919091018101516001600160e01b031981166000908152918690526040909120549091506001600160a01b0390811690881681036108f65760405162461bcd60e51b815260206004820152603860248201527f4c69624469616d6f6e644375743a2043616e2774207265706c6163652066756e60448201527f6374696f6e20776974682073616d652066756e6374696f6e00000000000000006064820152608401610089565b610901858284610c11565b61090d8583868b610b71565b8361091781611234565b945050826001019250505061082f565b80516000036109485760405162461bcd60e51b815260040161008990611187565b60008051602061128a833981519152635df91ac760e11b6307e4c70760e21b6001600160a01b038516156109dd5760405162461bcd60e51b815260206004820152603660248201527f4c69624469616d6f6e644375743a2052656d6f76652066616365742061646472604482015275657373206d757374206265206164647265737328302960501b6064820152608401610089565b835160005b81811015610ad05760008682815181106109fe576109fe61113b565b60200260200101519050846001600160e01b031916816001600160e01b03191614158015610a3957506001600160e01b031981811690851614155b610a985760405162461bcd60e51b815260206004820152602a60248201527f4c69624469616d6f6e644375743a2043616e6e6f742072656d6f7665206375746044820152692073656c6563746f727360b01b6064820152608401610089565b6001600160e01b031981166000908152602087905260409020546001600160a01b0316610ac6878284610c11565b50506001016109e2565b50505050505050565b806001600160a01b0383163b610b025760405162461bcd60e51b8152600401610089919061116d565b505050565b610b29816040518060600160405280602481526020016112d260249139610ad9565b6002820180546001600160a01b0390921660008181526001948501602090815260408220860185905594840183559182529290200180546001600160a01b0319169091179055565b6001600160e01b0319831660008181526020868152604080832080546001600160601b03909716600160a01b026001600160a01b0397881617815594909516808352600180890183529583208054968701815583528183206008870401805460e09890981c60046007909816979097026101000a96870263ffffffff9097021990971695909517909555529290915281546001600160a01b031916179055565b6001600160a01b038216610c8d5760405162461bcd60e51b815260206004820152603760248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f76652066756e6360448201527f74696f6e207468617420646f65736e27742065786973740000000000000000006064820152608401610089565b306001600160a01b03831603610cfc5760405162461bcd60e51b815260206004820152602e60248201527f4c69624469616d6f6e644375743a2043616e27742072656d6f766520696d6d7560448201526d3a30b1363290333ab731ba34b7b760911b6064820152608401610089565b6001600160e01b03198116600090815260208481526040808320546001600160a01b0386168452600180880190935290832054600160a01b9091046001600160601b03169291610d4b9161125a565b9050808214610e3d576001600160a01b03841660009081526001860160205260408120805483908110610d8057610d8061113b565b600091825260208083206008830401546001600160a01b038916845260018a019091526040909220805460079092166004026101000a90920460e01b925082919085908110610dd157610dd161113b565b600091825260208083206008830401805463ffffffff60079094166004026101000a938402191660e09590951c929092029390931790556001600160e01b03199290921682528690526040902080546001600160a01b0316600160a01b6001600160601b038516021790555b6001600160a01b03841660009081526001860160205260409020805480610e6657610e66611273565b60008281526020808220600860001990940193840401805463ffffffff600460078716026101000a0219169055919092556001600160e01b03198516825286905260408120819055819003610fce576002850154600090610ec99060019061125a565b6001600160a01b0386166000908152600180890160205260409091200154909150808214610f78576000876002018381548110610f0857610f0861113b565b6000918252602090912001546002890180546001600160a01b039092169250829184908110610f3957610f3961113b565b600091825260208083209190910180546001600160a01b0319166001600160a01b03948516179055929091168152600189810190925260409020018190555b86600201805480610f8b57610f8b611273565b60008281526020808220830160001990810180546001600160a01b03191690559092019092556001600160a01b0388168252600189810190915260408220015550505b5050505050565b634e487b7160e01b600052602160045260246000fd5b60005b83811015611006578181015183820152602001610fee565b50506000910152565b60008151808452611027816020860160208601610feb565b601f01601f19169290920160200192915050565b60006060808301818452808751808352608092508286019150828160051b8701016020808b0160005b8481101561110b57898403607f19018652815180516001600160a01b031685528381015189860190600381106110aa57634e487b7160e01b600052602160045260246000fd5b868601526040918201519186018a905281519081905290840190600090898701905b808310156110f65783516001600160e01b03191682529286019260019290920191908601906110cc565b50978501979550505090820190600101611064565b50506001600160a01b038a1690880152868103604088015261112d818961100f565b9a9950505050505050505050565b634e487b7160e01b600052603260045260246000fd5b60008251611163818460208701610feb565b9190910192915050565b602081526000611180602083018461100f565b9392505050565b6020808252602b908201527f4c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e206660408201526a1858d95d081d1bc818dd5d60aa1b606082015260800190565b6020808252602c908201527f4c69624469616d6f6e644375743a204164642066616365742063616e2774206260408201526b65206164647265737328302960a01b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b60006001600160601b038083168181036112505761125061121e565b6001019392505050565b8181038181111561126d5761126d61121e565b92915050565b634e487b7160e01b600052603160045260246000fdfec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f6465a2646970667358221220c824d8e8427a62698bb18db9f4099323a52c3358ea772b24ad02d62274043c5664736f6c63430008110033c8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c4c69624469616d6f6e644375743a205f696e6974206164647265737320686173206e6f20636f64654c69624469616d6f6e644375743a204164642066616365742063616e277420624c69624469616d6f6e644375743a204e657720666163657420686173206e6f20636f64654c69624469616d6f6e644375743a204e6f2073656c6563746f727320696e2066";

type ConnextDiamondConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConnextDiamondConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConnextDiamond__factory extends ContractFactory {
  constructor(...args: ConnextDiamondConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ConnextDiamond> {
    return super.deploy(
      _contractOwner,
      _diamondCut,
      _initializations,
      overrides || {}
    ) as Promise<ConnextDiamond>;
  }
  override getDeployTransaction(
    _contractOwner: PromiseOrValue<string>,
    _diamondCut: IDiamondCut.FacetCutStruct[],
    _initializations: ConnextDiamond.InitializationStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _contractOwner,
      _diamondCut,
      _initializations,
      overrides || {}
    );
  }
  override attach(address: string): ConnextDiamond {
    return super.attach(address) as ConnextDiamond;
  }
  override connect(signer: Signer): ConnextDiamond__factory {
    return super.connect(signer) as ConnextDiamond__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConnextDiamondInterface {
    return new utils.Interface(_abi) as ConnextDiamondInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConnextDiamond {
    return new Contract(address, _abi, signerOrProvider) as ConnextDiamond;
  }
}
