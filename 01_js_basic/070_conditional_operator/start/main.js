// 三項演算子（ ? : ）

const a = 0; //0ならfalse,0以外はtrueになる（数字の場合のみ、他の詳しい場合は次のチャプター）
let resultA = a ? 10 : -10;

// if (a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "true" : "false"; //よくreturnの後に三項演算子を用いる
}

console.log(getResult());
