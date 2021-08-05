/**
 * 19. テンプレート文字列 ``
 */

// テンプレートリテラル (テンプレート文字列)
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Template_literals

export default function () {
  const first_name = "ystk";
  const second_name = "kai";

  /**
   * ES2015 以前
   */
  console.log("I'm " + first_name + " " + second_name + ".");

  /**
   * ES2015 以降
   */
  console.log(`I'm ${first_name} ${second_name}.`);
}
