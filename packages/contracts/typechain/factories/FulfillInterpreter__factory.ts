/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FulfillInterpreter,
  FulfillInterpreterInterface,
} from "../FulfillInterpreter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "transactionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "fallbackAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "returnData",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "Executed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x96d668da",
        type: "bytes32",
      },
    ],
    name: "c_0x96d668da",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "transactionId",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "callTo",
        type: "address",
      },
      {
        internalType: "address",
        name: "assetId",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "fallbackAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200235638038062002356833981810160405281019062000037919062000133565b6001600081905550620000737f080ec13ced45e40dd96b3650f7b6e2d0c722f053684c917f5f74de408de1b4c960001b6200011960201b60201c565b620000a77f42ac8e672a622069be0756561060086631a65463d4e1920b35c4ddfb9e61ddae60001b6200011960201b60201c565b620000db7f6d1c1c05a7a2e54f7b64f2b5af8f0882c3e61f962004f3a1bdbb2469b1c3e29d60001b6200011960201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050620001ad565b50565b6000815190506200012d8162000193565b92915050565b6000602082840312156200014657600080fd5b600062000156848285016200011c565b91505092915050565b60006200016c8262000173565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6200019e816200015f565b8114620001aa57600080fd5b50565b60805160601c612183620001d360003960008181610149015261022301526121836000f3fe6080604052600436106100345760003560e01c80635c19b1711461003957806396f32fb814610062578063cf9a36041461008d575b600080fd5b34801561004557600080fd5b50610060600480360381019061005b91906117b6565b6100be565b005b34801561006e57600080fd5b506100776100c1565b6040516100849190611b60565b60405180910390f35b6100a760048036038101906100a291906117df565b61016d565b6040516100b5929190611c4c565b60405180910390f35b50565b60006100ef7f1d25e1ecbc99a48de538f90741e983f9e3864268ca7da887ccac0e4a75c7ecd560001b6100be565b61011b7f347a37fa2562c0192a735a133fc83433c48738a8f87d226d73346625d1ec22fe60001b6100be565b6101477f01d6689e1163c4e3edb83db59c93b17c51771cbecd512b5e326253c39beaf45860001b6100be565b7f0000000000000000000000000000000000000000000000000000000000000000905090565b6000606061019d7f82354a3faa4e892ed533eb7b0c029e1b4dbf1bc0f9ef97b47f9b3c9c3933ead260001b6100be565b6101c97f47fecc3c9231ccddc1d86e088e2810d21ad8f8dd10f7d97de2592c5e8f28d03960001b6100be565b6101f57f2419b35ce4950d13892172bcb7caae32e40fc89dadea38544a34da76922fe16060001b6100be565b6102217f6683b9f9396910eafb93d6f340f00b5b3aa59fb40aee48cec299c35dc57c487360001b6100be565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146102af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a690611d3e565b60405180910390fd5b6102db7fd0b6986cf13ca4d99fd56c844ad34c0a093339d79546f3bdcdcec8908de411dd60001b6100be565b6103077f4cdb898e4a01dc1ca238c3ef02fe192ff44eb7a59d63f2c18a7b2a7b002ebc1760001b6100be565b6103337f57bcaff3e7a17f0a2af020f41a6f2a7cc405cf8fde84073fedf64e479aa9d08760001b6100be565b61035f7f93d7e32bac34b9e5ee481818893de7eed2a748a01a415103f70b855821e9cb5660001b6100be565b61038b7fa300e1554c0991d21fa2ee7b970b2d8f06c43cd958d8427ea8cb7a9000693b1160001b6100be565b600061039688610a4d565b90506103c47f44132b3f7805de8e041557bace98ba8c5ea43437bc7b555fd254a4de6db970eb60001b6100be565b6103f07fbaf41f686317494e0da59e5ddafb35a912a1cd3888adf0f4b00d4b3e8276ccaa60001b6100be565b80610489576104217f6939b9e4f5a137e1ee5afdcb2745c84d57deb20bc8a7a474aca17a8840fc87e460001b6100be565b61044d7f69445b6dc91ab0981f5c7f9bb5613aff44a7e97b8c5ccb9d3ab80c6275c1041f60001b6100be565b6104797f9c617389c253d5d1389b6345b26482b5beeabdba3ffb88d8b3b484a66f15bd3660001b6100be565b610484888a88610b0a565b6104b6565b6104b57f5f91bc707db1b1522a7d12a1c6237e87d049b14aac7488d1e582f7402737115060001b6100be565b5b6104e27f0309e0d32c49aaac9e9cfda06e17f291fecc113785ed5c02e87bbd2fe3b6623760001b6100be565b61050e7f10c076396ec1438703134b9f301a54969f7b591bffcefe85f1848e6b82fae33960001b6100be565b600061053c7fac1a281fd8d4f030f8cb97f46c975c99053beb20c3b5092452f4cab37ae3a53e60001b6100be565b6105687f9968bc3200ac430adaba820a082319f01aab463abd77299d50c2259e974cb43160001b6100be565b60606105967fbee18106f974dde15cf090c6f5a6813687bff178eede9d7265d4351df3a1c97660001b6100be565b6105c27fd995d0f4358a47097f62199624fde2cab85f971dbae723324689cf331d943abc60001b6100be565b6105cb8b610c97565b156106d9576105fc7f5028af3abc4f312051c3fa98eb8da5f9dff45e5f13553d0985d3aad46b50f70d60001b6100be565b6106287f9d4b5a583f96955cbdea011a447e3f39e1ba0afeaad11a3eb80bb2d4dbe0e98260001b6100be565b6106547f3f9b5ff994058c308f8db5418d72f27a5b21f918a665aa474ee45de07e19b58e60001b6100be565b8a73ffffffffffffffffffffffffffffffffffffffff1683610677576000610679565b885b8888604051610689929190611b1b565b60006040518083038185875af1925050503d80600081146106c6576040519150601f19603f3d011682016040523d82523d6000602084013e6106cb565b606091505b508092508193505050610706565b6107057f4da36766f41f962b4a8d9208588da356210a53ebdc6f8cfde8f6d3ecac41ab7a60001b6100be565b5b6107327ff76cc371b206e790074e07789b6c03d41d260a8990a23294881053a06333acd160001b6100be565b61075e7f787e92bf93f4a65c8da421a777be60abe7827abb6378db380708146115b89e0d60001b6100be565b816109155761078f7f980b7f41c95f59bdf17b93ff9ea470f0167f298897d4bc9e68a63b6d284ec7c060001b6100be565b6107bb7ffa4559cfeac1906d39f469e3d0da23e980e254e27b9ada3c960e504f5e7b3f0760001b6100be565b6107e77f9fb8f46850dfcdedfb4f2451f569b589db57fc82bd8751abba8dcb78e58132c360001b6100be565b6107f28a8a8a610caa565b61081e7f847694e10bb423888d42e25f0da1a9bfb5d182e0fe81f7b719f19bcd1369a61260001b6100be565b61084a7f7c89a754228305d64c29259c69e9462369d13ec35ae4afbd60bb2d5ebaea140060001b6100be565b826108e35761087b7fe0176c6bcd43d170e646c33be219f881dc4fdaa39f4a5bb2f5513978954a1e6460001b6100be565b6108a77fb41e02dced4c32ff283b4fa9b0cea6e85104d6c68bc6d1ccdce2ea512d56dcfa60001b6100be565b6108d37fd2c03906a3762930e16837a0320f512bb2cbddc3225e0b70df7d449f3ad94bd360001b6100be565b6108de8a8c8a610d5b565b610910565b61090f7f7072c97478931ad490a8023fef09690787c6485a2d81f3ec5eff34076c8b885460001b6100be565b5b610942565b6109417f5e3fa505cd30214492a2a176b7c95aeff0046a7c98cb2273cee0256fd924ddeb60001b6100be565b5b61096e7f895480497ff3e0d5d7e4541f15a846d194821768e19da0f64971b5c3fc52732d60001b6100be565b61099a7f8c193bf194ff3475bbe6e9079eacf0edabb734985da8275cef7beee026af6c5260001b6100be565b8b7fbf49bd2de448d90a19e0510ab1030fead50ebfc64a4f112ca42535ae79fbab798c8c8c8c8c8c888a6040516109d8989796959493929190611b7b565b60405180910390a2610a0c7f9c37d0b93dc98d5caf5a8e8aa20a1fc7ba644b2c9d2379e2fd316719b643018d60001b6100be565b610a387fc2e8d875a049b59556326caf32872c8d58600473b5f9ca908fc6083e8f04b26960001b6100be565b81819450945050505097509795505050505050565b6000610a7b7f23780349a764e1b11256e2d3447907ecf2e95c32f7aa77b4b94928fff33d2dba60001b610ee8565b610aa77fae0d5bf4d0cf70bd93905e6375ce33837224d4e541291f09cc95d44af483b8b160001b610ee8565b610ad37ffbe1ba188a75dbe04f2fde56077d4f5213bd0f2bb6c738479357fa5b0048629160001b610ee8565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16149050919050565b610b367f03336fb919a878568e5a496b95e7b8757ec5cb202073a466816f8e8d24f86c5460001b610ee8565b610b627f6956b782f9304dfee0940bbe6d84a1059291916028027362eaa79bb3393baa8e60001b610ee8565b610b8e7f3b390444eeee15f8403fb254937d816cd8765f2dd691ff0344db8748dbdfa0c960001b610ee8565b610bba7f7805234080dbcf05e867725fb98f004cb68ba0315f5d6e01958760184fad948460001b610ee8565b610bc383610a4d565b15610c03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bfa90611cfe565b60405180910390fd5b610c2f7f68fa0bfcd39801e86c4265ca5a0c40b8ef44277c656b22d2bb2005a1c1afc3e560001b610ee8565b610c5b7f418f3b0c514b774d2a6026761b9df6f6721ee61eea837091afc469437cc3553f60001b610ee8565b610c877fd2874bd3dff4f9fdba2c4194bca428a7ca2e842df1685d89fb5f64a651360eed60001b610ee8565b610c92838383610eeb565b505050565b600080823b905060008111915050919050565b610cd67f86d37e0858c4abc5478d359cb4362e7b0982d6501ee798c5065ddd0fab4e1e8560001b610ee8565b610d027f86349478ce4795e49174ae35ad3a9b80499032692a5a6385f79c0cfc356779a760001b610ee8565b610d2e7f9955fc13e264956b12f35081dd139c3cb2a97a193b7a34baba7322e1b38a305e60001b610ee8565b610d3783610a4d565b610d4b57610d4683838361100c565b610d56565b610d5582826110a0565b5b505050565b610d877f98e15c717e8887b5b532976810656a2574094818fa21ca343d383c1c2f11f12360001b610ee8565b610db37fa689bff3e308d431a315f9f7894fee9045a19b7d6b85ae7c6e3efd0714a86dc460001b610ee8565b610ddf7f61a2a98a398c98a7d30e5191bc9aac1ff384204235e03c48057d47b9d17a0d6060001b610ee8565b610e0b7fdfbbfc24c4363805aee1a04161ccdde5df5d1f3b4dbab19c2839721361d2001d60001b610ee8565b610e1483610a4d565b15610e54576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4b90611d1e565b60405180910390fd5b610e807fe87c52fc420fa5060d4dc2b2fc3d46803189de3cba3f5520bd95c2d5abf95d7460001b610ee8565b610eac7f0c1b49f94746d3fc8b6564b04ef9b56e95089398c4a13f4ef4e4017b2affca6460001b610ee8565b610ed87fa593329602996df54fb87f1acc7c3f3a94d0743020bb0893e0781a2a76be0d7f60001b610ee8565b610ee3838383611284565b505050565b50565b6000818473ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30866040518363ffffffff1660e01b8152600401610f29929190611bfa565b60206040518083038186803b158015610f4157600080fd5b505afa158015610f55573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f799190611886565b610f839190611de1565b90506110068463095ea7b360e01b8584604051602401610fa4929190611c23565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113e5565b50505050565b6110387f6178c63d1985a8af5ca2381b4c9f745df2e3388bcff890d133707aedb8dda15f60001b610ee8565b6110647fac920e3578ec8df9f38bd1a13592b05189f5daae394a5785d0f373b376ee494160001b610ee8565b6110907f3ccb5be04ea0a479d6329726573c55258937c25e1070c728a1d3ff54ea5ddd9760001b610ee8565b61109b8383836114ac565b505050565b6110cc7f9a499abcb57371525438ab84eaca9b59318fa462e16ebb094288e081ee34922260001b610ee8565b6110f87f1c5ab1777a098c744f93c4f9414b2a0ca9a20d12c8ba92905f38b641a017db3d60001b610ee8565b6111247f6f9fe0d82ba97ee337236bd7ef93cb07a74c9ebcfe4ec3908db6e1c7afe93c1660001b610ee8565b60008273ffffffffffffffffffffffffffffffffffffffff168260405161114a90611b4b565b60006040518083038185875af1925050503d8060008114611187576040519150601f19603f3d011682016040523d82523d6000602084013e61118c565b606091505b505090506111bc7f5022497f2f7499f29c2f40885e4fe04afb1f85d587554e069c55e40f4eab593660001b610ee8565b6111e87fcb357cda1f674df9cb3fed6507467737f6e9ea78e1feccb3ba32900026ce4a1860001b610ee8565b6112147fcfff6d2fd9e9bc05241a9198151fc0ece49c3ae594d3867f452c7dd53ea88adb60001b610ee8565b80611254576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161124b90611cde565b60405180910390fd5b61127f7eee8207d0669b1ec180a758a00014e4a46a350552aa6325ef7900344554420660001b610ee8565b505050565b60008373ffffffffffffffffffffffffffffffffffffffff1663dd62ed3e30856040518363ffffffff1660e01b81526004016112c1929190611bfa565b60206040518083038186803b1580156112d957600080fd5b505afa1580156112ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113119190611886565b905081811015611356576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134d90611c9e565b60405180910390fd5b600082820390506113de8563095ea7b360e01b868460405160240161137c929190611c23565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113e5565b5050505050565b6000611447826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166115329092919063ffffffff16565b90506000815111156114a75780806020019051810190611467919061178d565b6114a6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149d90611d7e565b60405180910390fd5b5b505050565b61152d8363a9059cbb60e01b84846040516024016114cb929190611c23565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506113e5565b505050565b6060611541848460008561154a565b90509392505050565b60608247101561158f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158690611cbe565b60405180910390fd5b61159885610c97565b6115d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016115ce90611d5e565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516116009190611b34565b60006040518083038185875af1925050503d806000811461163d576040519150601f19603f3d011682016040523d82523d6000602084013e611642565b606091505b509150915061165282828661165e565b92505050949350505050565b6060831561166e578290506116be565b6000835111156116815782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116b59190611c7c565b60405180910390fd5b9392505050565b6000813590506116d4816120da565b92915050565b6000813590506116e9816120f1565b92915050565b6000815190506116fe81612108565b92915050565b6000813590506117138161211f565b92915050565b60008083601f84011261172b57600080fd5b8235905067ffffffffffffffff81111561174457600080fd5b60208301915083600182028301111561175c57600080fd5b9250929050565b60008135905061177281612136565b92915050565b60008151905061178781612136565b92915050565b60006020828403121561179f57600080fd5b60006117ad848285016116ef565b91505092915050565b6000602082840312156117c857600080fd5b60006117d684828501611704565b91505092915050565b600080600080600080600060c0888a0312156117fa57600080fd5b60006118088a828b01611704565b97505060206118198a828b016116da565b965050604061182a8a828b016116c5565b955050606061183b8a828b016116da565b945050608061184c8a828b01611763565b93505060a088013567ffffffffffffffff81111561186957600080fd5b6118758a828b01611719565b925092505092959891949750929550565b60006020828403121561189857600080fd5b60006118a684828501611778565b91505092915050565b6118b881611e49565b82525050565b6118c781611e37565b82525050565b6118d681611e5b565b82525050565b60006118e88385611db4565b93506118f5838584611e9b565b6118fe83611f0c565b840190509392505050565b60006119158385611dc5565b9350611922838584611e9b565b82840190509392505050565b600061193982611d9e565b6119438185611db4565b9350611953818560208601611eaa565b61195c81611f0c565b840191505092915050565b600061197282611d9e565b61197c8185611dc5565b935061198c818560208601611eaa565b80840191505092915050565b60006119a382611da9565b6119ad8185611dd0565b93506119bd818560208601611eaa565b6119c681611f0c565b840191505092915050565b60006119de602983611dd0565b91506119e982611f1d565b604082019050919050565b6000611a01602683611dd0565b9150611a0c82611f6c565b604082019050919050565b6000611a24600783611dd0565b9150611a2f82611fbb565b602082019050919050565b6000611a47600783611dd0565b9150611a5282611fe4565b602082019050919050565b6000611a6a600783611dd0565b9150611a758261200d565b602082019050919050565b6000611a8d600883611dd0565b9150611a9882612036565b602082019050919050565b6000611ab0600083611dc5565b9150611abb8261205f565b600082019050919050565b6000611ad3601d83611dd0565b9150611ade82612062565b602082019050919050565b6000611af6602a83611dd0565b9150611b018261208b565b604082019050919050565b611b1581611e91565b82525050565b6000611b28828486611909565b91508190509392505050565b6000611b408284611967565b915081905092915050565b6000611b5682611aa3565b9150819050919050565b6000602082019050611b7560008301846118be565b92915050565b600060e082019050611b90600083018b6118af565b611b9d602083018a6118be565b611baa60408301896118af565b611bb76060830188611b0c565b8181036080830152611bca8186886118dc565b905081810360a0830152611bde818561192e565b9050611bed60c08301846118cd565b9998505050505050505050565b6000604082019050611c0f60008301856118be565b611c1c60208301846118be565b9392505050565b6000604082019050611c3860008301856118be565b611c456020830184611b0c565b9392505050565b6000604082019050611c6160008301856118cd565b8181036020830152611c73818461192e565b90509392505050565b60006020820190508181036000830152611c968184611998565b905092915050565b60006020820190508181036000830152611cb7816119d1565b9050919050565b60006020820190508181036000830152611cd7816119f4565b9050919050565b60006020820190508181036000830152611cf781611a17565b9050919050565b60006020820190508181036000830152611d1781611a3a565b9050919050565b60006020820190508181036000830152611d3781611a5d565b9050919050565b60006020820190508181036000830152611d5781611a80565b9050919050565b60006020820190508181036000830152611d7781611ac6565b9050919050565b60006020820190508181036000830152611d9781611ae9565b9050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b6000611dec82611e91565b9150611df783611e91565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611e2c57611e2b611edd565b5b828201905092915050565b6000611e4282611e71565b9050919050565b6000611e5482611e71565b9050919050565b60008115159050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611ec8578082015181840152602081019050611ead565b83811115611ed7576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f8301169050919050565b7f5361666545524332303a2064656372656173656420616c6c6f77616e6365206260008201527f656c6f77207a65726f0000000000000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f2354453a30323800000000000000000000000000000000000000000000000000600082015250565b7f2349413a30333400000000000000000000000000000000000000000000000000600082015250565b7f2344413a30333400000000000000000000000000000000000000000000000000600082015250565b7f234f544d3a303237000000000000000000000000000000000000000000000000600082015250565b50565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6120e381611e37565b81146120ee57600080fd5b50565b6120fa81611e49565b811461210557600080fd5b50565b61211181611e5b565b811461211c57600080fd5b50565b61212881611e67565b811461213357600080fd5b50565b61213f81611e91565b811461214a57600080fd5b5056fea264697066735822122019c4a98e62116344c179d3ae56df4e4743188b6c64934909b7b20267b67a0ab964736f6c63430008040033";

export class FulfillInterpreter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FulfillInterpreter> {
    return super.deploy(
      transactionManager,
      overrides || {}
    ) as Promise<FulfillInterpreter>;
  }
  getDeployTransaction(
    transactionManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(transactionManager, overrides || {});
  }
  attach(address: string): FulfillInterpreter {
    return super.attach(address) as FulfillInterpreter;
  }
  connect(signer: Signer): FulfillInterpreter__factory {
    return super.connect(signer) as FulfillInterpreter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FulfillInterpreterInterface {
    return new utils.Interface(_abi) as FulfillInterpreterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FulfillInterpreter {
    return new Contract(address, _abi, signerOrProvider) as FulfillInterpreter;
  }
}
