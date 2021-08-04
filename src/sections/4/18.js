/**
 * 18. const、let等の変数宣言
 */
export default function () {
  /**
   * val 宣言
   *
   * 値の再代入可・再定義可能
   */
  var val1 = "var宣言";
  console.log(val1);

  val1 = "var上書き";
  console.log(val1);

  var val1 = "var再宣言";
  console.log(val1);

  /**
   * let 宣言
   *
   * 値の再代入可・再定義不可
   */
  let val2 = "let宣言";
  console.log(val2);

  val2 = "let上書き";
  console.log(val2);

  // let val2 = "let再宣言";
  // console.log(val2);

  /**
   * const 宣言
   *
   * 値の再代入不可・再定義不可
   */
  const val3 = "const宣言";
  console.log(val3);

  // val3 = "const上書き";
  // console.log(val3);

  // const val3 = "const再宣言";
  // console.log(val3);
}
