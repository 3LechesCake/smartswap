import BNBLOGO from "../../assets/BNB.svg";
import ETHLOGO from "../../assets/eth.svg";
import MATICLOGO from "../../assets/Matic.svg";
import PHXLOGO from "../../assets/phx2.png";
import DOGELOGO from "../../assets/dogechain.png";
import TRESLOGO from "../../assets/treschain.png";
export const SupportedChainSymbols: { [key: string]: string } = {
  "1": "ETH",
  "3": "ETH",
  "4": "ETH",
  "56": "BNB",
  "97": "BNB",
  "137": "MATIC",
  "80001": "MATIC",
  "13381": "PHX",
  "2000": "DOGE",
  "6066": "TRES",
  "6065": "TRES",

};

export const SupportedChainName: { [key: string]: string } = {
  "1": "Ether",
  "3": "Ether",
  "4": "Ether",
  "56": "Binance Coin",
  "97": "Binance Coin",
  "137": "Matic",
  "80001": "Matic",
  "13381": "PHX",
  "2000": "DOGE",
  "6066": "TRES",
  "6065": "TRES",

};

export const SupportedChainLogo: { [key: string]: string } = {
  "1": ETHLOGO,
  "3": ETHLOGO,
  "4": ETHLOGO,
  "56": BNBLOGO,
  "97": BNBLOGO,
  "137": MATICLOGO,
  "80001": MATICLOGO,
  "13381": PHXLOGO,
  "2000": DOGELOGO,
  "6066": TRESLOGO,
  "6065": TRESLOGO,

};

export const WrappedSymbols: { [key: string]: string } = {
  "1": "WETH",
  "3": "WETH",
  "4": "WETH",
  "56": "WBNB",
  "97": "WBNB",
  "80001": "WMATIC",
  "137": "WMATIC",
  "13381": "WPHX",
  "2000": "WDOGE",
  "6066": "WTRES",
  "6065": "WTRES",

};
