// TodoTypeを読み込んでも、このファイルで全ての要素を使うわけではない
// 使わない型が使用されていないエラーが出てしまうので、TodoTypeの中から何を使うかを指定する必要がある
import { TodoType } from './types/todo';

// Pickとは型の中から何を使うかを指定する
// Omitとは型の中から何を使わないかを指定する
export const Todo = (props: Omit<TodoType,"id">) => {
  const {title,userId,completed = false} = props;
  const completeMark = completed ? "[完]" : "[未]";
  return (
    <p>{ `${completeMark} ${title}(ユーザー:${userId})`}</p>
  )
}
