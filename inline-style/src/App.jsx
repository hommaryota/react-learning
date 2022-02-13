import {InlineStyle} from "./components/InlineStyle";
import "./App.css";
import {CssModules} from "./components/CssModules";
import {StyledJsx} from "./components/StyledJdx";
import {StyledComponents} from "./components/StyledComponents";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}
