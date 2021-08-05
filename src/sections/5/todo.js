/**
 * セクション5: 素のJavaScriptだけでTODOアプリを作成してみよう
 */

export default function () {
  const onClickAdd = () => {
    const inputText = document.getElementById("add-text").nodeValue;
    alert(inputText);
  };
  document
    .getElementById("add-button")
    .addEventListener("click", () => onClickAdd());
}
