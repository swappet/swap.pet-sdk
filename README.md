# swappet-sdk
js SDK for swap.pet to popular DeFi protocols, include **ABIs**, **Addresses**, **constants**, **utils** ...

[![circleci](https://badgen.net/circleci/github/swappet/swappet-sdk)](https://app.circleci.com/pipelines/github/swappet/swappet-sdk)
[![npm](https://badgen.net/npm/v/swappet-sdk)](https://www.npmjs.com/package/swappet-sdk)
![types](https://badgen.net/npm/types/swappet-sdk)
![minzip](https://badgen.net/bundlephobia/minzip/swappet-sdk)

**Now with Typescript-powered autocomplete!**

`swappet-sdk` is an NPM package that provides you with the **ABIs**, **Addresses**, **constants**, **utils** for popular DeFi protocols.

### Click [here](https://docs.swap.pet) for docs and visit our Discord [here](https://discord.gg/CDCrXy2)!

Protocols supported: 
- 1inch
- AAVE
- ampl
- augur
- Balancer
- bancor
- band
- barnbridge
- bzx
- chainlink
- Compound
- Curve Finance
- DappSys
- ddex
- dfi
- dforce
- dodo
- DyDx
- ERC20
- Idle V3
- Kyber.Network
- MakerDAO
- OneSplit
- renbtc
- sushiswap
- Synthetix
- UMA Protocol
- Uniswap V2
- Uniswap v1
- wbtc
- mStable
- yearn
- yam

## Install

```bash
npm install swappet-sdk
```

## Usage

### JavaScript

```javascript
import { sdk } from "swappet-sdk";

// access token ABIs and addresses
sdk.tokens.dai.abi;
sdk.tokens.dai.address;

// of many popular DeFi protocols
sdk.uniswap.factory.abi;
sdk.uniswap.factory.address; 

// import only the tokens 
import tokens from "swappet-sdk/tokens";
tokens.dai.abi;
tokens.dai.address;

// import only the protocol you are interested in
import uniswap from "swappet-sdk/uniswap";
uniswap.factory.abi;
uniswap.factory.address;

// logo of DeFi app
import { uniswapLogo } from "swappet-sdk/logos/app.uniswap.org";
```

