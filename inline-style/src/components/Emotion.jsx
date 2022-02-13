// @jsxRuntime
// @jsx
import {jsx, css} from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = () => {
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 20px;
    padding: 8px;
    margin: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  const titleStyle = css({
    margin: 0,
    color: "#3d84a8",
  });
  return (
    <div css={containerStyle}>
      <p css={titleStyle}>- Emotion -</p>
      <button>FIGHT!!</button>
    </div>
  );
};
const Button = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 8px;
  // ＆はデフォルトでは使用できない
  &:hover {
    background-color: #392eff;
    cursor: pointer;
  }
`;
