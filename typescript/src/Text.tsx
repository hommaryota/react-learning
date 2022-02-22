import { VFC } from 'react'

type Props = {
  color: string;
  fontSize: string;
}

// props: Propsでpropsの型を指定
// reactの中でFCという関数コンポーネントを指定する記述がある
// ただし、FCはデフォルトでchildrenが入っている（アップデートでこの仕様は亡くなる予定）
// 暫定的にVFCをしようする
export const Text: VFC<Props> = (props) => {
  // propsとして渡す変数を定義
  const { color, fontSize } = props;
  return (
    // App.tsxから渡ってくる値でstyleを割り当てる
    <p style={{color,fontSize}}>aaaa</p>
  )
}
