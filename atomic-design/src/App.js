import {PrimaryButton} from "./components/atoms/button/PrimaryButton";
import "./App.css";
import {SecondaryButton} from "./components/atoms/button/SecondaryButton";
import {SearchInput} from "./components/molecules/SearchInput";
import {UserCard} from "./components/organisms/user/UserCard";

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

export default function App() {
  return (
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
