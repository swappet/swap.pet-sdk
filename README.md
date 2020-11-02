# swap.pet-sdk
js SDK for swap.pet to popular DeFi protocols, include **ABIs**, **Addresses**, **constants**, **utils** ...

[![circleci](https://badgen.net/circleci/github/swappet/swap.pet-sdk)](https://app.circleci.com/pipelines/github/swappet/swap.pet-sdk)
[![npm](https://badgen.net/npm/v/@swappet/swap.pet-sdk)](https://www.npmjs.com/package/swap.pet-sdk)
![types](https://badgen.net/npm/types/swap.pet-sdk)
![minzip](https://badgen.net/bundlephobia/minzip/swap.pet-sdk)

**Now with Typescript-powered autocomplete!**

`swap.pet-sdk` is an NPM package that provides you with the **ABIs**, **Addresses**, **constants**, **utils** for popular DeFi protocols.

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
npm install swap.pet-sdk
```

## Usage

### JavaScript

```javascript
import { sdk } from "swap.pet-sdk";

// access token ABIs and addresses
sdk.tokens.dai.abi;
sdk.tokens.dai.address;

// of many popular DeFi protocols
sdk.uniswap.factory.abi;
sdk.uniswap.factory.address; 

// import only the tokens 
import tokens from "swap.pet-sdk/tokens";
tokens.dai.abi;
tokens.dai.address;

// import only the protocol you are interested in
import uniswap from "swap.pet-sdk/uniswap";
uniswap.factory.abi;
uniswap.factory.address;

// logo of DeFi app
import { uniswapLogo } from "swap.pet-sdk/logos/app.uniswap.org";
```

