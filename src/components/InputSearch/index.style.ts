import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: "search",
  size: props.size || "13px",
}))`
  border: 0;
  border-radius: 2px;
  background: #e3e3e3;
  color: #000000;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  min-width: 238px;
  ::placeholder {
    color: #7e7e7e;
  }
`;
