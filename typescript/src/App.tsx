import axios from 'axios';
import {useState  } from "react";
import './App.css';
import { Todo } from './Todo';
import { TodoType } from './types/todo';
import { Text } from './Text';

export default function App() {
  const [todos,setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };

  return (
    <div className='App'>
      {/* Text.tsxに渡す値の宣言 */}
      <Text color="red" fontSize="18px"></Text>
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}
