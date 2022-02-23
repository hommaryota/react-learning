// jsonデータを取得するためのライブラリ
import axios from "axios";
import {useState} from "react";
import "./App.css";
import {UserCard} from "./components/UserCard";
import {User} from "./types/api/user";
import {UserProfile} from "./types/userProfile";

export default function App() {
  // 値の更新を行うためのuseState
  // 型を配列のUserProfileで定義した方にする
  // 初期値は空の配列のため、表示はされていない
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  // ボタンを押した際にローディングを行う
  // 初期値はboolean型でfalse
  const [loading, setLoading] = useState(false);
  // エラー時の挙動
  const [error, setError] = useState(false);

  // ボタンクリック時の関数
  const onClickFetchUser = () => {
    // ボタンクリック時にtrueにし、挙動させる
    setLoading(true);
    // ボタンクリック時はfalseで動かさない
    setError(false);

    // axiosからURL(jsonplaceholderから)の値をgetする
    // 型は配列のUserで定義した型
    // .then((res => でJsonデータの取得を行なっている
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
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
      })
      // エラーが出た場合のみ動く
      // setErrorをtrueにし、エラー表示させる
      .catch(() => {
        setError(true);
      })
      // finallyとはaxiosの実行の一番最後に動かす
      .finally(() => {
        // setLoadingをオフにする
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {/* 三項演算子でエラーがtrueの場合とfalseの場合を記述 */}
      {error ? (
        // エラーがtrueの場合は、pタグを表示
        <p style={{color: "red"}}>データの取得に失敗しました</p>
      ) : // エラーがfalseの場合にかつ、loadingの三項演算子
      loading ? (
        // errorがfalseでloadingがtrueの場合
        <p>Loading...</p>
      ) : (
        // errorがfalseでloadingがfalseの場合
        // 52行目のfinallyで最後にfalseに変えているため動く
        <>
          {userProfiles.map((user) => (
            // レンダリングのため、keyの設定は必要
            // userはUserCardに送るpropsの値
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
