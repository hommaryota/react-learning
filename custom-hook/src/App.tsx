import "./App.css";
import {useAllUsers} from "./hooks/useAllUsers";
import {UserCard} from "./components/UserCard";

export default function App() {
  // useAllUsersでreturnしているgetUsers, userProfiles, loading, errorを読み出している
  const {getUsers, userProfiles, loading, error} = useAllUsers();

  // ボタンクリック時の関数
  const onClickFetchUser = () => {
    getUsers();
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
