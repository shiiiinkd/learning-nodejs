// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = 0;
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));

// 論理積 (&&) について
// 左、右の順番に確認していき、falsyなら返す。falsyがなければ右を返す。
const resultA = "" && "foo"; //左がfalsy→空文字を返す
const resultB = 2 && 1 && 0 && 3; //truthy,truthy,falsy→0を返す
const resultC = "foo" && 4; //truthy,truthy→右側の4を返す

// console.log(resultA);
console.log(resultB, "!");
// console.log(resultC);

// 理論和 (||) について
// 左、右の順番に確認していき、truthyなら返す。truthyがなければ右を返す。
const resultD = "" || "foo"; // f,t→fooを返す
const resultE = 0 || 2 || 0; // f,t,f→2を返す
const resultF = "foo" || 4; //　t,t→fooを返す

// console.log(resultD);
// console.log(resultE);
// console.log(resultF);
