export const Practice4 = () => {
  // tsconfig.jsonの"strict": trueにすると、引数のnumだけだとエラーになる
  // numはanyの型になっていると表示される
  // strict": trueはanyの型を許可しないため
  // そのため、numの型を指定してあげる必要がある
  const calcTotalFee = (num:number) => {
    const total = num * 1.1;
    console.log(total);
  }
  const onClickPractice = () => {
    calcTotalFee(1000);
  }
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      {/* ボタンクリックでonClickPractice関数を実行 */}
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  )
}
