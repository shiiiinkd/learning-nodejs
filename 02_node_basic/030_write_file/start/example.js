//ファイルへの書き込み
//__dirname,__filename（基本的にdirnameを使用する）
//__dirnameは絶対パスをとってくる

//__dirname=>そのファイルが存在するディレクトリの絶対パスをとってくる
//__filename=>そのファイル自身の絶対パスをとってくる
//つまり「__filename = __dirname + ファイル名」
const { dir } = require("console");
const fs = require("fs");
//path
const path = require("path");
// const { dirname } = require("path");

//親のパスを経由する際はresolveを使うのが安全
const distPath = path.resolve(__dirname, "../dist/test.txt");
console.log(distPath);
// console.log(__filename);
// fs.writeFileSync(__dirname + "/test.txt", "hello,node.js!!!");
// console.log("hello, node.js");
