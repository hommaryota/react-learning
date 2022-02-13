import {BrowserRouter, Route, Link, Switch} from "react-router-dom";
import "./App.css";
import {Home} from "./Home";
import {Page1} from "./Page1";
import {Page2} from "./Page2";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hello React Router v6</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Switch>
        {/* exactがない場合path='/'と記述すると、/以下の全てのパスという意味になってしまう。 */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/page1">
          <Page1 />
        </Route>
        <Route path="/page2">
          <Page2 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
