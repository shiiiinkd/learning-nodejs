import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 }); //headless: falseだと実際にブラウザで操作される
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  //cssセレクターで要素を取得
  const pageTitleLocater = page.locator(".navbar-brand"); //セレクタ文字列を引数にすると、その情報を取得できる(.->クラス指定 #->id指定)
  const pageTitle = await pageTitleLocater.innerText();
  //   console.log(pageTitle);

  //文字列で要素を取得
  const textLocater = page.locator("text = 名刺管理アプリ");
  const pageText = await textLocater.innerText();
  //    console.log(pageText);
  await browser.close();

  //xpathで要素を取得(クラスやidが振られていない要素の取得に使用)
  //'""'というようにシングルクォーテーションの中にダブルクォーテーションを入れ込むと外側と内側で一つの文字列とみなされてエラーがなくなる
  const xpathLocater = page.locator('xpath = //*[@id="__next"]/nav/div/a');
  const xpathText = await xpathLocater.innerText();
  console.log(xpathText);
  await browser.close();
})();
