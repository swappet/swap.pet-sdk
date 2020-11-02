import MasterChefAbi from './abi/masterchef.json'
import SushiAbi from './abi/sushi.json'  

const contracts = {
  masterchef: {
    address: "0xc2edad668740f1aa35e4d8f227fb8e17dca888cd",
    abi: MasterChefAbi,
  }, 
  sushi: {
    address: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    abi: SushiAbi,
  }, 
};

export default contracts;
