import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `かぶ${val}`,
    image: "https://source.unsplash.com/bIhpiQA009k",
    email: "12345@example.com",
    phone: "090-1111-2222",
    company: {
      name: "テスト株式会社",
    },
    website: "https://gogole.com",
  };
});

const user = {
  name: "かぶ",
  image: "https://source.unsplash.com/bIhpiQA009k",
  email: "12345@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社",
  },
  website: "https://gogole.com",
};

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
