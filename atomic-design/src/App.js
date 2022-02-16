import {BrowserRouter} from "react-router-dom";
import {PrimaryButton} from "./components/atoms/button/PrimaryButton";
import {SecondaryButton} from "./components/atoms/button/SecondaryButton";
import {SearchInput} from "./components/molecules/SearchInput";
import {UserCard} from "./components/organisms/user/UserCard";
import {HeaderOnly} from "./components/templates/HeaderOnly";
import "./App.css";
import {DefaultLayout} from "./components/templates/DefaultLayout";

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
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}
