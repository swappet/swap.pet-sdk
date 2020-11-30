import ERC20Abi from "./abi/ERC20.json";
import WETHAbi from "./abi/WETH.json"; 
import tL from 'swappet-token-list/build/tokenlist.json' 
console.log("tokenlist:", tL.tokens) 

var account = tL.tokens.find(v => v.keys.address === wallet.address)

var tokens = {
  ETH: { 
    website: "https://ethereum.org",
    description: "Open source platform to write and distribute decentralized applications." 
  },
  BAT: { 
    website: "https://basicattentiontoken.org",
    description: "Basic Attention Token (BAT) project is an open-source, decentralized ad exchange platform built, on the Ethereum platform." 
  },
  DAI: { 
    website: "http://augur.net",
    description: "Augur (REP) is meant to harness the wisdom of the crowd through prediction markets on a protocol owned and operated by holders of the Ethereum-based Reputation token." 
  },
  REP: { 
    website: "http://augur.net",
    description: "Augur (REP) is meant to harness the wisdom of the crowd through prediction markets on a protocol owned and operated by holders of the Ethereum-based Reputation token.", 
  },
  SAI: { 
    website: "http://makerdao.com",
    description: "Dai is a USD-pegged stablecoin built on the Ethereum blockchain, and has no centralized authority. ", 
  },
  SNX: { 
    website: "https://www.synthetix.io",
    description: "Synthetix is a derivatives liquidity protocol on Ethereum that enables the issuance and trading of synthetic assets.", 
  },
  USDC: { 
    website: "https://centre.io/usdc",
    description: "USDC is a fully collateralized US dollar stablecoin, an Ethereum powered coin and is the brainchild of CENTRE, an open source project bootstrapped by contributions from Circle and Coinbase.", 
  },
  WETH: { 
    abi: WETHAbi,
    name: "Wrapped Ethereum",
    website: "https://weth.io",
    description: "Wrapped Ethereum", 
  },
  WBTC: { 
    website: "https://wbtc.network",
    description: "Wrapped Bitcoin (WBTC) is the first ERC20 token backed 1:1 with Bitcoin.", 
  },
  ZRX: { 
    website: "https://0x.org",
    description: "0x (ZRX) is an open-source protocol that provides smart contract infrastructure and liquidity to enable the peer-to-peer exchange of tokens on the Ethereum blockchain.",  
  },
  BAL: { 
    website: "https://balancer.finance",
    description: "Balancer is a non-custodial portfolio manager, liquidity provider, and price sensor.", 
  },
  MKR: { 
    website: "https://makerdao.com",
    description: "Maker (MKR) is a utility token, governance token and recapitalization resource of the Maker system.",  
  },
  CRV: { 
    website: "https://www.curve.fi",
    description: "CRV is a governance token on the Curve platform with time-weighted voting and value accrual mechanisms.",  
  },
  COMP: { 
    website: "https://compound.finance",
    description: "Compound is the governance token for the Compound protocol.", 
  },
  UNI: { 
    website: "https://uniswap.org",
    description: "UNI is the Uniswap protocol token. Uniswap is a decentralized protocol for automated liquidity provision on Ethereum.", 
  }
};
for (var i = 0; i < tL.tokens.length; i++) {
  if (tL.tokens[i].chainId === 1) { // mainnet
    tokens[symbol] = tokens[symbol]?{...tokens[symbol], ...tL.tokens[i]}:tL.tokens[i] 
  }
}

export default tokens;
