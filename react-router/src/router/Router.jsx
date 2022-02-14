import {Route, Switch} from "react-router-dom";
import {Home} from "../Home";
import {Page2} from "../Page2";
import {Page1Routes} from "./Page1Routes";

export const Router = () => {
  return (
    <Switch>
      {/* exactがない場合path='/'と記述すると、/以下の全てのパスという意味になってしまう。 */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({match: {url}}) => (
          <Switch>
            {Page1Routes.map((route) => {
              <Route key={route.path} exact={route.exact} path={`${url}${route.path}`}>
                {route.children}
              </Route>;
            })}
          </Switch>
        )}
      />
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
