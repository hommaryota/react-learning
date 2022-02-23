// jsonデータを取得するためのライブラリ
import axios from "axios";
import {useState} from "react";
import "./App.css";
import {UserCard} from "./components/UserCard";
import {User} from "./types/api/user";
import {UserProfile} from "./types/userProfile";

function App() {
  // 値の更新を行うためのuseState
  // 型を配列のUserProfileで定義した方にする
  // 初期値は空の配列のため、表示はされていない
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  // ボタンクリック時の関数
  const onClickFetchUser = () => {
    // axiosからURL(jsonplaceholderから)の値をgetする
    // 型は配列のUserで定義した型
    // .then((res => でJsonデータの取得を行なっている
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users").then((res) => {
      // 変数に引数に入れているresultに入ってるデータをmap関数でレンダリング
      // 引数にuserを定義
      // userの中の該当する値を書き出す
      const data = res.data.map((user) => ({
        id: user.id,
        name: `${user.name}(${user.username})`,
        email: user.email,
        address: `${user.address.city}${user.address.suite}${user.address.street}`,
      }));
      // 初期値の空の配列をsetUserProfilesで書き換える
      setUserProfiles(data);
    });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      {userProfiles.map((user) => (
        // レンダリングのため、keyの設定は必要
        // userはUserCardに送るpropsの値
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default App;
