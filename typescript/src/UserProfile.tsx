import { VFC } from 'react';
import { User } from './types/user';

// Userで定義した型をuserと変数に格納
type Props = {
  user: User;
}

export const UserProfile: VFC<Props> = (props) => {
  const {user} = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* userの中のhobbiesを表示する記述 */}
      {/* hobbiesは複数あった場合にjoinの記述で / で区切って表示する */}
      <dd>{user.hobbies?.join("/") }</dd>
    </dl>
  )
}
