import {InlineStyle} from "./components/InlineStyle";
import "./App.css";
import {CssModules} from "./components/CssModules";
import {StyledJsx} from "./components/StyledJdx";
import {StyledComponents} from "./components/StyledComponents";
import {Emotion} from "./components/Emotion";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
