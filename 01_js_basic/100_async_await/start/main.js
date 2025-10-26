// // 非同期処理（Promise）
// let a = 0;

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         a = 1;
//         resolve(a)
//     }, 2000);
// }).then((b) => {
//     console.log(b);
//     return b;
// }).then((b) => {
//     console.log(b);
// }).catch((c) => {
//     console.log('catchが実行', c)
// })

// 非同期処理（Await/Async）
let a = 0;
init();

async function init() {
  //awaitを使う関数にはasyncを付ける
  try {
    const result = await new Promise((resolve, reject) => {
      //2 await→Promiseが完了するまで待って、その解決値（resolveに渡された値）を受け取る→resultに入る

      setTimeout(() => {
        a = 1;
        reject(a);
        // resolve(a);
        // 1 非同期処理が成功した場合、その結果をresolveに格納し、Promiseに知らせている→awaitの説明へ
      }, 2000);
    });
    console.log(result);
  } catch (e) {
    //e:errorを慣習的に使うことが多い
    console.log("catchが実行", e);
  }

  // .catch((c) => {
  //   console.log("catchが実行", c);
  // });
}
