// jsonデータを取得するためのライブラリ
import axios from "axios";
import {useState} from "react";
import {User} from "../types/api/user";
import {UserProfile} from "../types/userProfile";

// 全ユーザー一覧を取得するカスタムフック

export const useAllUsers = () => {
  // 値の更新を行うためのuseState
  // 型を配列のUserProfileで定義した方にする
  // 初期値は空の配列のため、表示はされていない
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);

  // ボタンを押した際にローディングを行う
  // 初期値はboolean型でfalse
  const [loading, setLoading] = useState(false);
  // エラー時の挙動
  const [error, setError] = useState(false);

  const getUsers = () => {
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

  // 配列で返す
  return {getUsers, userProfiles, loading, error};
};
