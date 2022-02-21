export const Practice2 = () => {
  // getTotalFeeをhoverすると型のタイプの確認もできる
  // 引数に:numberと記述することによって、引数の型を明示的に指定できる
  const getTotalFee = (num:number):number => {
    const total = num * 1.1;
    return total;
  }
  const onClickPractice = () => {
    console.log(
        getTotalFee(1000)
    );

  }
  return (
    <div>
      <p>練習問題:引数の型指定</p>
      {/* ボタンクリックでonClickPractice関数を実行 */}
      <button onClick={onClickPractice}>練習問題2を実行</button>
    </div>
  )
}
