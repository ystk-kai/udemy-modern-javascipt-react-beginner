/**
 * 20. アロー関数 =>
 */
export default function () {
  /**
   * 従来の関数定義
   */
  // function func1(str) {
  //   return str;
  // }
  const func1 = function (str) {
    return str;
  };
  console.log(func1("func1です。"));

  /**
   * アロー関数の定義
   */
  const func2 = (str) => {
    return str;
  };
  console.log(func2("func2です。"));

  // 括弧と return を省略可能
  const func3 = (num1, num2) => num1 + num2;
  console.log(func3(10, 25));
}
