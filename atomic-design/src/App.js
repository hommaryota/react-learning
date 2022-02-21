import React from "react";
import {Router} from "./router/Router";
import "./App.css";
import {UserProvider} from "./providers/UserProvider";
import {RecoilRoot} from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
