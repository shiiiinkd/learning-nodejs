// const { plus } = require('./calc');

//CJS,ESM間のモジュール連携
//OK:CJS -> ESM
//NG:ESM -> CJS

import calc from "./calc.cjs";
console.log(calc);
// const result = minusFn(1, 2);
// console.log(result);
