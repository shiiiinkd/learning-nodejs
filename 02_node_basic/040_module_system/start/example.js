// const calc = require("./calc");
// console.log(calc);
// const result = calc.plus(1, 2);

const { plus } = require("./calc"); //特定のものだけ抜け出せる
const result = plus(1, 2);
console.log(result);

//module.exportsで関数を渡すのに対してrequireで受け取って使える
//注意：exports === module.exportsだが、exportsに新しくオブジェクトを追加すると、うまく輸出できなくなる

//つまり基本的にはmodule.exportsでエクスポートしてねってこと
