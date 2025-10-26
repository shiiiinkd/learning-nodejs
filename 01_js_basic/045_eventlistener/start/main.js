const h1Element = document.querySelector("h1");
console.dir(h1Element); //dirで対象をオブジェクト形式で取得できる
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";

const btnEl = document.querySelector("button");
btnEl.addEventListener("click", (e) => {
  //event,ev,eと名付けられ、イベントに関する情報を取得できる
  // addEventListenerで関数が実行されたときに引数としてeventが渡ってくる
  console.dir(e.target.textContent);
  console.log("hello");
});
