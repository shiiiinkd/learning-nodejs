// const { plus } = require('./calc');
import minusFn, { plus } from "./calc.js";

const result = minusFn(1, 2);
console.log(result);

// 今回はESModuleによるexport, importの記述を使用した。この時は
// ・package.jsonにtype: moduleを記述する
// ・import, exportを記述したファイルの拡張子を.esmにする
// のどちらかを設定しなければならない
// （NodeJsは基本的にCommonJSを主な記法とするため）
