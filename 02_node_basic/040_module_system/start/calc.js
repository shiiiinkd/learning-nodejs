function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
module.exports = {
  plus: plus,
  minus, //オブジェクトリテラルの中でプロパティ名と関数名が同じ場合は省略して書ける
};
//module.exportsのsまで含める！
