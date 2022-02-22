export type User = {
  name: string;
  // 趣味はない可能性もあるので、?でオプション型にしておく
  // オプション型は値がないことを表す場合にnullを代入する
  hobbies?: Array<string>;
}
