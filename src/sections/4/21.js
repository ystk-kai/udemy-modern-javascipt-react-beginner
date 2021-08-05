/**
 * 21. 分割代入 {}
 */
export default function () {
  const name = {
    first: "ystk",
    second: "kai"
  };

  // そのまま表示
  console.log(`I'm ${name.first} ${name.second}.`);

  // オブジェクトの分割代入
  const { first, second } = name;
  console.log(`I'm ${first} ${second}.`);

  // 配列の分割代入
  const nameList = ["ystk", "kai"];
  const [first2, second2] = nameList;
  console.log(`I'm ${first2} ${second2}.`);
}
