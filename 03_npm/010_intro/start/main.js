//import cloneDeep from "lodash/cloneDeep.js"; // NodeJsにおいて./○○○のようなパスの指定がない場合はパッケージのことを指す
const cloneDeep = require("lodash/cloneDeep");
const original = { prop: { nested: "value" } };
// オブジェクトの複製
const cloned = cloneDeep(original);

cloned.prop.nested = "new value";

console.log(original, cloned);

//1.lodash/cloneDeep.jsを探す
//2.cloneDeepのエクスポートを確認する→今回は関数cloneDeepがエクスポート
//3.インポートするものを設定→今回はimport cloneDeep from...
