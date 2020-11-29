import ERC20Abi from "./abi/ERC20.json";
import WETHAbi from "./abi/WETH.json"; 
const tokens = {
  eth: {
    symbol: "ETH",
    decimals: 18,
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    name: "Ethereum",
    website: "https://ethereum.org",
    description: "Open source platform to write and distribute decentralized applications.", 
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png", 
  },
  bat: {
    symbol: "BAT",
    decimals: 18,
    address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
    name: "Basic Attention Token",
    website: "https://basicattentiontoken.org",
    description: "Basic Attention Token (BAT) project is an open-source, decentralized ad exchange platform built, on the Ethereum platform.", 
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0D8775F648430679A709E98d2b0Cb6250d2887EF/logo.png",
  },
  dai: {
    symbol: "DAI",
    decimals: 18,
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    name: "Dai Stablecoin",
    website: "http://augur.net",
    description: "Augur (REP) is meant to harness the wisdom of the crowd through prediction markets on a protocol owned and operated by holders of the Ethereum-based Reputation token.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
  },
  rep: {
    symbol: "REP",
    decimals: 18,
    address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
    name: "Augur",
    website: "http://augur.net",
    description: "Augur (REP) is meant to harness the wisdom of the crowd through prediction markets on a protocol owned and operated by holders of the Ethereum-based Reputation token.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1985365e9f78359a9B6AD760e32412f4a445E862/logo.png",
  },
  sai: {
    symbol: "SAI",
    decimals: 18,
    address: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359", 
    name: "Dai Stablecoin v1.0 SAI(Single Collateral DAI)",
    website: "http://makerdao.com",
    description: "Dai is a USD-pegged stablecoin built on the Ethereum blockchain, and has no centralized authority. ",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359/logo.png",
  },
  snx: {
    symbol: "SNX",
    decimals: 18,
    address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    name: "Synthetix Network Token",
    website: "https://www.synthetix.io",
    description: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F/logo.png",
  },
  usdc: {
    symbol: "USDC",
    decimals: 6,
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    website: "https://centre.io/usdc",
    description: "USDC is a fully collateralized US dollar stablecoin, an Ethereum powered coin and is the brainchild of CENTRE, an open source project bootstrapped by contributions from Circle and Coinbase.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
  },
  weth: {
    symbol: "WETH",
    decimals: 18,
    address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    abi: WETHAbi,
    name: "Wrapped Ethereum",
    website: "https://weth.io",
    description: "Wrapped Ethereum",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
  },
  wbtc: {
    symbol: "WBTC",
    decimals: 8,
    address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    name: "Wrapped Bitcoin",
    website: "https://wbtc.network",
    description: "Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png",
  },
  zrx: {
    symbol: "ZRX",
    decimals: 18,
    address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
    name: "0x",
    website: "https://0x.org",
    description: "0x (ZRX) is an open-source protocol that provides smart contract infrastructure and liquidity to enable the peer-to-peer exchange of tokens on the Ethereum blockchain.", 
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE41d2489571d322189246DaFA5ebDe1F4699F498/logo.png",
  },
  bal: {
    symbol: "BAL",
    decimals: 18,
    address: "0xba100000625a3754423978a60c9317c58a424e3D",
    name: "Balancer",
    website: "https://balancer.finance",
    description: "Balancer is a non-custodial portfolio manager, liquidity provider, and price sensor.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png",
  },
  mkr: {
    symbol: "MKR",
    decimals: 18,
    address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 
    name: "Maker",
    website: "https://makerdao.com",
    description: "Maker (MKR) is a utility token, governance token and recapitalization resource of the Maker system.", 
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png",
  },
  crv: {
    symbol: "CRV",
    decimals: 18,
    address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    name: "Curve DAO Token",
    website: "https://www.curve.fi",
    description: "CRV is a governance token on the Curve platform with time-weighted voting and value accrual mechanisms.", 
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png",
  },
  comp: {
    symbol: "COMP",
    decimals: 18,
    address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    name: "Compound",
    website: "https://compound.finance",
    description: "Compound is the governance token for the Compound protocol.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png",
  },
  uni: {
    symbol: "UNI",
    decimals: 18,
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    name: "Uniswap",
    website: "https://uniswap.org",
    description: "UNI is the Uniswap protocol token. Uniswap is a decentralized protocol for automated liquidity provision on Ethereum.",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png",
  },
  adai: {
    symbol: "aDAI",
    decimals: 18,
    address: "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
    name: "Aave Interest bearing DAI",
    website: '',
    description: "Aave Interest bearing DAI",
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d/logo.png",
  },
  amn: {
    symbol: "AMN",
    decimals: 18,
    address: "0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c",
    name: "Amon",
    website: '',
    description: 'Amon',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c/logo.png",
  },
  ampl: {
    symbol: "AMPL",
    decimals: 9,
    address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
    name: 'Ampleforth',
    website: '',
    description: 'Ampleforth',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD46bA6D942050d489DBd938a2C909A5d5039A161/logo.png",
  },
  anj: {
    symbol: "ANJ",
    decimals: 18,
    address: "0xcD62b1C403fa761BAadFC74C525ce2B51780b184",
    name: 'Aragon Network Juror',
    website: '',
    description: 'Aragon Network Juror',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xcD62b1C403fa761BAadFC74C525ce2B51780b184/logo.png",
  },
  ant: {
    symbol: "ANT",
    decimals: 18,
    address: "0x960b236A07cf122663c4303350609A66A7B288C0",
    name: 'Aragon Network Token',
    website: '',
    description: 'Aragon Network Token',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x960b236A07cf122663c4303350609A66A7B288C0/logo.png",
  },
  ast: {
    symbol: "AST",
    decimals: 4,
    address: "0x27054b13b1B798B345b591a4d22e6562d47eA75a",
    name: 'AirSwap Token',
    website: '',
    description: 'AirSwap Token',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x27054b13b1B798B345b591a4d22e6562d47eA75a/logo.png",
  },
  band: {
    symbol: "BAND",
    decimals: 18,
    address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
    name: 'BandToken',
    website: '',
    description: 'BandToken',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55/logo.png",
  },
  usdt: {
    symbol: "USDT",
    decimals: 6,
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    name: 'Tether USD',
    website: '',
    description: 'Tether USD',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
  },
  tusd: {
    symbol: "TUSD",
    decimals: 18,
    address: "0x0000000000085d4780B73119b644AE5ecd22b376",
    name: 'TrueUSD',
    website: '',
    description: 'TrueUSD',
    logoURI:"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000000000085d4780B73119b644AE5ecd22b376/logo.png",
  },   
  blt: {
    name: "Bloom Token",
    address: "0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e",
    symbol: "BLT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e/logo.png"
  },
  bnt: {
    name: "Bancor Network Token",
    address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
    symbol: "BNT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C/logo.png"
  },
  bzrx: {
    name: "bZx Protocol Token",
    address: "0x56d811088235F11C8920698a204A5010a788f4b3",
    symbol: "BZRX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x56d811088235F11C8920698a204A5010a788f4b3/logo.png"
  },
  celr: {
    name: "CelerToken",
    address: "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
    symbol: "CELR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4F9254C83EB525f9FCf346490bbb3ed28a81C667/logo.png"
  },
  csai: {
    name: "Compound Dai v1.0 SAI",
    address: "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
    symbol: "cSAI",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF5DCe57282A584D2746FaF1593d3121Fcac444dC/logo.png"
  },
  cdai: {
    name: "Compound Dai",
    address: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    symbol: "cDAI",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643/logo.png"
  },
  cusdc: {
    name: "Compound USD Coin",
    address: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
    symbol: "cUSDC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x39AA39c021dfbaE8faC545936693aC917d5E7563/logo.png"
  },
  cel: {
    name: "Celsius",
    address: "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
    symbol: "CEL",
    decimals: 4,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d/logo.png"
  },
  chai: {
    name: "Chai",
    address: "0x06AF07097C9Eeb7fD685c692751D5C66dB49c215",
    symbol: "CHAI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x06AF07097C9Eeb7fD685c692751D5C66dB49c215/logo.png"
  },   
  data: {
    name: "Streamr DATAcoin",
    address: "0x0Cf0Ee63788A0849fE5297F3407f701E122cC023",
    symbol: "DATA",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0Cf0Ee63788A0849fE5297F3407f701E122cC023/logo.png"
  },
  dgd: {
    name: "DigixDAO",
    address: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
    symbol: "DGD",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A/logo.png"
  },
  dgx: {
    name: "Digix Gold Token",
    address: "0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF",
    symbol: "DGX",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF/logo.png"
  },
  dip: {
    name: "Decentralized Insurance Protocol",
    address: "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
    symbol: "DIP",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc719d010B63E5bbF2C0551872CD5316ED26AcD83/logo.png"
  },
  donut: {
    name: "Donut",
    address: "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9",
    symbol: "DONUT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9/logo.png"
  },
  ebase: {
    name: "EURBASE Stablecoin",
    address: "0x86FADb80d8D2cff3C3680819E4da99C10232Ba0F",
    symbol: "EBASE",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x86FADb80d8D2cff3C3680819E4da99C10232Ba0F/logo.png"
  },
  enj: {
    name: "Enjin Coin",
    address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
    symbol: "ENJ",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c/logo.png"
  },
  fame: {
    name: "SAINT FAME Genesis Shirt",
    address: "0x06f65b8CfCb13a9FE37d836fE9708dA38Ecb29B2",
    symbol: "FAME",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x06f65b8CfCb13a9FE37d836fE9708dA38Ecb29B2/logo.png"
  },
  foam: {
    name: "FOAM Token",
    address: "0x4946Fcea7C692606e8908002e55A582af44AC121",
    symbol: "FOAM",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4946Fcea7C692606e8908002e55A582af44AC121/logo.png"
  },
  fun: {
    name: "FunFair",
    address: "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
    symbol: "FUN",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b/logo.png"
  },
  fxc: {
    name: "Flexacoin",
    address: "0x4a57E687b9126435a9B19E4A802113e266AdeBde",
    symbol: "FXC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4a57E687b9126435a9B19E4A802113e266AdeBde/logo.png"
  },
  gen: {
    name: "DAOstack",
    address: "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf",
    symbol: "GEN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf/logo.png"
  },
  gno: {
    name: "Gnosis Token",
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    symbol: "GNO",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png"
  },
  grid: {
    name: "GRID Token",
    address: "0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD",
    symbol: "GRID",
    decimals: 12,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD/logo.png"
  },
  gst2: {
    name: "Gastoken.io",
    address: "0x0000000000b3F879cb30FE243b4Dfee438691c04",
    symbol: "GST2",
    decimals: 2,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000000000b3F879cb30FE243b4Dfee438691c04/logo.png"
  },
  hedg: {
    name: "HedgeTrade",
    address: "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F",
    symbol: "HEDG",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF1290473E210b2108A85237fbCd7b6eb42Cc654F/logo.png"
  },
  hot: {
    name: "HoloToken",
    address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
    symbol: "HOT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6c6EE5e31d828De241282B9606C8e98Ea48526E2/logo.png"
  },
  husd: {
    name: "HUSD",
    address: "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
    symbol: "HUSD",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdF574c24545E5FfEcb9a659c229253D4111d87e1/logo.png"
  },
  idai: {
    name: "Fulcrum DAI iToken",
    address: "0x493C57C4763932315A328269E1ADaD09653B9081",
    symbol: "iDAI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x493C57C4763932315A328269E1ADaD09653B9081/logo.png"
  },
  isai: {
    name: "Fulcrum SAI iToken ",
    address: "0x14094949152EDDBFcd073717200DA82fEd8dC960",
    symbol: "iSAI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x14094949152EDDBFcd073717200DA82fEd8dC960/logo.png"
  },
  iotx: {
    name: "IoTeX Network",
    address: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
    symbol: "IOTX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69/logo.png"
  },
  key: {
    name: "KEY",
    address: "0x4Cd988AfBad37289BAAf53C13e98E2BD46aAEa8c",
    symbol: "KEY",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Cd988AfBad37289BAAf53C13e98E2BD46aAEa8c/logo.png"
  },
  knc: {
    name: "Kyber Network Crystal",
    address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
    symbol: "KNC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdd974D5C2e2928deA5F71b9825b8b646686BD200/logo.png"
  },
  link: {
    name: "ChainLink Token",
    address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    symbol: "LINK",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png"
  },
  lrc: {
    name: "LoopringCoin V2",
    address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
    symbol: "LRC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD/logo.png"
  },
  lend: {
    name: "EthLend Token",
    address: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
    symbol: "LEND",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x80fB784B7eD66730e8b1DBd9820aFD29931aab03/logo.png"
  },
  loom: {
    name: "LoomToken",
    address: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
    symbol: "LOOM",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0/logo.png"
  },
  lpt: {
    name: "Livepeer Token",
    address: "0x58b6A8A3302369DAEc383334672404Ee733aB239",
    symbol: "LPT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x58b6A8A3302369DAEc383334672404Ee733aB239/logo.png"
  },
  lqd: {
    name: "Liquidity.Network Token",
    address: "0xD29F0b5b3F50b07Fe9a9511F7d86F4f4bAc3f8c4",
    symbol: "LQD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD29F0b5b3F50b07Fe9a9511F7d86F4f4bAc3f8c4/logo.png"
  },
  mana: {
    name: "Decentraland MANA",
    address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
    symbol: "MANA",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0F5D2fB29fb7d3CFeE444a200298f468908cC942/logo.png"
  },
  matic: {
    name: "Matic Token",
    address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
    symbol: "MATIC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png"
  },
  mbc: {
    name: "Marblecoin",
    address: "0x8888889213DD4dA823EbDD1e235b09590633C150",
    symbol: "MBC",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8888889213DD4dA823EbDD1e235b09590633C150/logo.png"
  },
  mcx: {
    name: "MachiX Token",
    address: "0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8",
    symbol: "MCX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8/logo.png"
  },
  met: {
    name: "Metronome",
    address: "0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e",
    symbol: "MET",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e/logo.png"
  },
  mgn: {
    name: "Magnolia Token",
    address: "0x80f222a749a2e18Eb7f676D371F19ad7EFEEe3b7",
    symbol: "MGN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x80f222a749a2e18Eb7f676D371F19ad7EFEEe3b7/logo.png"
  }, 
  mln: {
    name: "Melon Token",
    address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
    symbol: "MLN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xec67005c4E498Ec7f55E092bd1d35cbC47C91892/logo.png"
  },
  mod: {
    name: "Modum Token",
    address: "0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e",
    symbol: "MOD",
    decimals: 0,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e/logo.png"
  },
  musd: {
    name: "mStable USD",
    address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
    symbol: "mUSD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xe2f2a5C287993345a840Db3B0845fbC70f5935a5/logo.png"
  },
  nexo: {
    name: "Nexo",
    address: "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
    symbol: "NEXO",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206/logo.png"
  },
  nmr: {
    name: "Numeraire",
    address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
    symbol: "NMR",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671/logo.png"
  },
  ocean: {
    name: "Ocean Token",
    address: "0x7AFeBBB46fDb47ed17b22ed075Cde2447694fB9e",
    symbol: "OCEAN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7AFeBBB46fDb47ed17b22ed075Cde2447694fB9e/logo.png"
  },
  oxt: {
    name: "Orchid",
    address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
    symbol: "OXT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4575f41308EC1483f3d399aa9a2826d74Da13Deb/logo.png"
  },
  pan: {
    name: "Panvala pan",
    address: "0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44",
    symbol: "PAN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44/logo.png"
  },
  pax: {
    name: "PAX",
    address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
    symbol: "PAX",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8E870D67F660D95d5be530380D0eC0bd388289E1/logo.png"
  },
  paxg: {
    name: "Paxos Gold",
    address: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
    symbol: "PAXG",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x45804880De22913dAFE09f4980848ECE6EcbAf78/logo.png"
  },
  pnk: {
    name: "Pinakion",
    address: "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
    symbol: "PNK",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d/logo.png"
  },
  poa20: {
    name: "POA ERC20 on Foundation",
    address: "0x6758B7d441a9739b98552B373703d8d3d14f9e62",
    symbol: "POA20",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6758B7d441a9739b98552B373703d8d3d14f9e62/logo.png"
  },
  qch: {
    name: "QChi",
    address: "0x687BfC3E73f6af55F0CccA8450114D107E781a0e",
    symbol: "QCH",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x687BfC3E73f6af55F0CccA8450114D107E781a0e/logo.png"
  },
  qnt: {
    name: "Quant",
    address: "0x4a220E6096B25EADb88358cb44068A3248254675",
    symbol: "QNT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4a220E6096B25EADb88358cb44068A3248254675/logo.png"
  },
  qsp: {
    name: "Quantstamp Token",
    address: "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
    symbol: "QSP",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d/logo.png"
  },
  rcn: {
    name: "Ripio Credit Network Token",
    address: "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6",
    symbol: "RCN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6/logo.png"
  },
  rdn: {
    name: "Raiden Token",
    address: "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
    symbol: "RDN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6/logo.png"
  },
  ren: {
    name: "Republic Token",
    address: "0x408e41876cCCDC0F92210600ef50372656052a38",
    symbol: "REN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x408e41876cCCDC0F92210600ef50372656052a38/logo.png"
  },
  renbch: {
    name: "renBCH",
    address: "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",
    symbol: "renBCH",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf/logo.png"
  },
  renbtc: {
    name: "renBTC",
    address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
    symbol: "renBTC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png"
  },
  renzec: {
    name: "renZEC",
    address: "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",
    symbol: "renZEC",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2/logo.png"
  },
  repv2: {
    name: "Reputation Augur v2",
    address: "0x221657776846890989a759BA2973e427DfF5C9bB",
    symbol: "REPv2",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x221657776846890989a759BA2973e427DfF5C9bB/logo.png"
  },
  ring: {
    name: "Darwinia Network Native Token",
    address: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
    symbol: "RING",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9469D013805bFfB7D3DEBe5E7839237e535ec483/logo.png"
  },
  rlc: {
    name: "iEx.ec Network Token",
    address: "0x607F4C5BB672230e8672085532f7e901544a7375",
    symbol: "RLC",
    decimals: 9,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x607F4C5BB672230e8672085532f7e901544a7375/logo.png"
  },
  rpl: {
    name: "Rocket Pool",
    address: "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
    symbol: "RPL",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB4EFd85c19999D84251304bDA99E90B92300Bd93/logo.png"
  },
  salt: {
    name: "Salt",
    address: "0x4156D3342D5c385a87D264F90653733592000581",
    symbol: "SALT",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4156D3342D5c385a87D264F90653733592000581/logo.png"
  },
  san: {
    name: "SANtiment network token",
    address: "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
    symbol: "SAN",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098/logo.png"
  },
  seth: {
    name: "Synth sETH",
    address: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
    symbol: "sETH",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb/logo.png"
  },
  shuf: {
    name: "Shuffle.Monster V3",
    address: "0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E",
    symbol: "SHUF",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E/logo.png"
  },
  snt: {
    name: "Status Network Token",
    address: "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
    symbol: "SNT",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x744d70FDBE2Ba4CF95131626614a1763DF805B9E/logo.png"
  }, 
  socks: {
    name: "Unisocks Edition 0",
    address: "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
    symbol: "SOCKS",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x23B608675a2B2fB1890d3ABBd85c5775c51691d5/logo.png"
  },
  spank: {
    name: "SPANK",
    address: "0x42d6622deCe394b54999Fbd73D108123806f6a18",
    symbol: "SPANK",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x42d6622deCe394b54999Fbd73D108123806f6a18/logo.png"
  },
  stake: {
    name: "STAKE",
    address: "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
    symbol: "STAKE",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0Ae055097C6d159879521C384F1D2123D1f195e6/logo.png"
  },
  storj: {
    name: "StorjToken",
    address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
    symbol: "STORJ",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC/logo.png"
  },
  susd: {
    name: "Synth sUSD",
    address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    symbol: "sUSD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x57Ab1ec28D129707052df4dF418D58a2D46d5f51/logo.png"
  },
  sxau: {
    name: "Synth sXAU",
    address: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
    symbol: "sXAU",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x261EfCdD24CeA98652B9700800a13DfBca4103fF/logo.png"
  },
  sxp: {
    name: "Swipe",
    address: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
    symbol: "SXP",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9/logo.png"
  },
  taud: {
    name: "TrueAUD",
    address: "0x00006100F7090010005F1bd7aE6122c3C2CF0090",
    symbol: "TAUD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00006100F7090010005F1bd7aE6122c3C2CF0090/logo.png"
  },
  tcad: {
    name: "TrueCAD",
    address: "0x00000100F2A2bd000715001920eB70D229700085",
    symbol: "TCAD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000100F2A2bd000715001920eB70D229700085/logo.png"
  },
  tgbp: {
    name: "TrueGBP",
    address: "0x00000000441378008EA67F4284A57932B1c000a5",
    symbol: "TGBP",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x00000000441378008EA67F4284A57932B1c000a5/logo.png"
  },
  thkd: {
    name: "TrueHKD",
    address: "0x0000852600CEB001E08e00bC008be620d60031F2",
    symbol: "THKD",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0000852600CEB001E08e00bC008be620d60031F2/logo.png"
  },
  tkn: {
    name: "Monolith TKN",
    address: "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
    symbol: "TKN",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a/logo.png"
  },
  trb: {
    name: "Tellor Tributes",
    address: "0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5",
    symbol: "TRB",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5/logo.png"
  },
  trst: {
    name: "Trustcoin",
    address: "0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B",
    symbol: "TRST",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B/logo.png"
  },
  tryb: {
    name: "BiLira",
    address: "0x2C537E5624e4af88A7ae4060C022609376C8D0EB",
    symbol: "TRYB",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2C537E5624e4af88A7ae4060C022609376C8D0EB/logo.png"
  }, 
  ubt: {
    name: "UniBright",
    address: "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
    symbol: "UBT",
    decimals: 8,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e/logo.png"
  },
  uma: {
    name: "UMA Voting Token v1",
    address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
    symbol: "UMA",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png"
  }, 
  usds: {
    name: "StableUSD",
    address: "0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe",
    symbol: "USDS",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe/logo.png"
  }, 
  usdx: {
    name: "dForce",
    address: "0xeb269732ab75A6fD61Ea60b06fE994cD32a83549",
    symbol: "USDx",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xeb269732ab75A6fD61Ea60b06fE994cD32a83549/logo.png"
  }, 
  veri: {
    name: "Veritaseum",
    address: "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
    symbol: "VERI",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374/logo.png"
  }, 
  wck: {
    name: "Wrapped CryptoKitties",
    address: "0x09fE5f0236F0Ea5D930197DCE254d77B04128075",
    symbol: "WCK",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x09fE5f0236F0Ea5D930197DCE254d77B04128075/logo.png"
  },
  xchf: {
    name: "CryptoFranc",
    address: "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
    symbol: "XCHF",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xB4272071eCAdd69d933AdcD19cA99fe80664fc08/logo.png"
  },
  xio: {
    name: "XIO Network",
    address: "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
    symbol: "XIO",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704/logo.png"
  },
  mta: {
    name: "Meta",
    address: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
    symbol: "MTA",
    decimals: 18,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png"
  },
  srm: {
    name: "Serum",
    address: "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
    symbol: "SRM",
    decimals: 6,
    logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x476c5E26a75bd202a9683ffD34359C0CC15be0fF/logo.png"
  }
};

export default tokens;
