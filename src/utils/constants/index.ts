import JSBI from "jsbi";
import { useActiveWeb3React } from "../hooks/useActiveWeb3React";

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.exponentiate(
  JSBI.BigInt(10),
  JSBI.BigInt(16)
); // .01 BNB
export const checkNetVersion = () => {
  if (window.ethereum && window.ethereum.chainId !== null) {
    return window.ethereum.chainId.toString();
  }
  return null;
};
export const INITIAL_ALLOWED_SLIPPAGE = 100;
export const INITIAL_GASPRICE_INCREASE = (): number => {
  if (checkNetVersion() == "0x89") {
    return 40;
  } else {
    return 0;
  }
};

export const INITIAL_GAS = checkNetVersion() == "0x89" ?15 : 0;

const BSC_MAIN_NET_ID =
  window.ethereum !== undefined && window.ethereum.isTrust ? "56" : "0x38";

const BSCMainnet = {
  SmartFactory: "0x51cdBbed695a6179bbD97b6105Ef1907E61a403e",
  SMART_SWAPPING: "0x4169Db906fcBFB8b12DbD20d98850Aee05B7D889",
  ETHRGPSMARTSWAPPAIR: "0xfc7b09d4f52CE56a03c3a14dAF4441667eC63de1",
  specialPool: "0x100514759DCD6e2Ccbb9EB87481b96de28C4b77F",
  SmartSwap_LP_Token: "0xfc7b09d4f52CE56a03c3a14dAF4441667eC63de1",
  RigelSmartContract: "0x66bc84b4270cA0F056E27e5cD77B2401522191c6",
  masterChef: "0x7d59AAD43Cef13Cd077308D37C3A39D3b4B6C924",
  masterChefV2: "0xE1ECCCcb46755a38D218Bf7Fdcd6f26C2cd7671f",
  masterChefPoolOne: "0x7f91f8B8Dac13DAc386058C12113936987F6Be9d",
  masterChefV2PoolOne: "0x7f91f8B8Dac13DAc386058C12113936987F6Be9d",
  masterChefPoolTwo: "0x9218BFB996A9385C3b9633f87e9D68304Ef5a1e5",
  masterChefPoolThree: "0xC8e6305376404Df37b9D231511cD27184fa8f10A",
  masterChefV2PoolFour: "0x3b087F8a582090A51BED1BCa1A5Ad1859ea14cA4",
  masterChefV2PoolFive: "0xF69f02FD07173CEB87808088e791F192fCCf1187",
  masterChefV2PoolSix: "0xF69f02FD07173CEB87808088e791F192fCCf1187",
  BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
  ETH: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  AXS: "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0",
};

const BSCTestnet = {
  SmartFactory: "0x51cdBbed695a6179bbD97b6105Ef1907E61a403e",
  SMART_SWAPPING: "0x4169Db906fcBFB8b12DbD20d98850Aee05B7D889",
  ETHRGPSMARTSWAPPAIR: "0xC395e7a809D2a15C1A93BC18f5C14C5d0EeACD01",
  specialPool: "0x7fE2Ec631716FeF3657BcB8d80CffBB2A34F7617",
  RigelSmartContract: "0x66bc84b4270cA0F056E27e5cD77B2401522191c6",
  masterChef: "0x71C07230dF8b60aef6e3821CA2Dee530966EFc2D",
  masterChefV2: "0x1F5DABb92Aba96928d12e405D66275E20c53D846",
  masterChefPoolOne: "0x0B0a1E07931bD7991a104218eE15BAA682c05e01",
  masterChefV2PoolOne: "0x0B0a1E07931bD7991a104218eE15BAA682c05e01",
  masterChefPoolTwo: "0xca01606438556b299005b36B86B38Fe506eadF9F",
  masterChefPoolThree: "0x120f3E6908899Af930715ee598BE013016cde8A5",
  masterChefV2PoolFour: "0x30d8621d919b69c0D7920A7dC8936d457F3f8965",
  masterChefV2PoolFive: "0x816b823d9C7F30327B2c626DEe4aD731Dc9D3641",
  masterChefV2PoolSix: "0x816b823d9C7F30327B2c626DEe4aD731Dc9D3641",
  BNB: "0x1eBaCfaF0D159eE94DdC3e3b085A6345679F6AC2",
  BUSD: "0x889A3674923027f019a15BE386A8472174FA16eC",
  ETH: "0x1eBaCfaF0D159eE94DdC3e3b085A6345679F6AC2",
  AXS: "0x18009Ca624CD4f21958E33A23a08316D3B78Ac20",
};
export const SMART_SWAP =
  checkNetVersion() === BSC_MAIN_NET_ID.toString() ? BSCMainnet : BSCTestnet;
