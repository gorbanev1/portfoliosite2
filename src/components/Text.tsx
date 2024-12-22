import styled from "styled-components";

type TextPropsType = {
    padding?: string;
    display?: string;

}
export const Text = styled.text<TextPropsType>`
  padding: ${props => props.padding || "unset"};
  display: ${props => props.display || "unset"};
`