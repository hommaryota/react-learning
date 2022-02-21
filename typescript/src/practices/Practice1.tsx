export const Practice1 = () => {
  // nmの値をcalcTotalFeeに渡し、コンソールに表示するといった関数
  // numにナンバーと指定する事で、数値しか受け取らないと表現する
  const calcTotalFee = (num:number) => {
    const total = num * 1.1;
    console.log(total);
  }
  // calcTotalFeeに1000を渡す処理を書いたonClickPractice関数
  const onClickPractice = () => {
    calcTotalFee(1000);
  }
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      {/* ボタンクリックでonClickPractice関数を実行 */}
      <button onClick={onClickPractice}>練習問題1を実行</button>
    </div>
  )
}
