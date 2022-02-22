export const Practice3 = () => {
  // getTotalFeeをhoverすると型のタイプの確認もできる
  // 引数に:numberと記述することによって、引数の型を明示的に指定できる
  const getTotalFee = (num:number) => {
    const total = num * 1.1;
    // totalの値をtoStringで文字列に変更する
    return total.toString();
  }
  const onClickPractice = () => {
    // total変数に数字の0を代入
    // totalの型はnumberと定義している
    let total: number = 0;
    // getTotalFeeの引数は数字だけど、totalは数値を扱うからエラーがでる
    // total = getTotalFee(1000);
    console.log(total);

  }
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      {/* ボタンクリックでonClickPractice関数を実行 */}
      <button onClick={onClickPractice}>練習問題3を実行</button>
    </div>
  )
}
