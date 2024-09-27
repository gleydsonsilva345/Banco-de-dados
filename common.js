import { getCSS } from "./common.js";
const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  };
  
  export {getCSS}