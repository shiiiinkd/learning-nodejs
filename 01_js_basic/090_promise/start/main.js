// 同期処理→関数が呼ばれた順に実行
// 非同期処理→コールバック関数で呼ばれたもの
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
})
  .then((b) => {
    //resolveの値が引数としてthenにわたる
    console.log(b);
    return b;
  })
  .then((b) => {
    //resolveの値が引数としてthenにわたる
    console.log(b);
  })
  .then((b) => {
    //resolveの値が引数としてthenにわたる
    console.log(b);
  })
  .catch((c) => {
    //基本的にはエラーが検知されたときの処理をcatchに記述する
    console.log("catchが実行", c);
  });
