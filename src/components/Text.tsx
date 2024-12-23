import styled from "styled-components";

type TextPropsType = {
    padding?: string;
    display?: string;
    margin?: string;

}
export const Text = styled.text<TextPropsType>`
  padding: ${props => props.padding || "unset"};
  display: ${props => props.display || "unset"};
  margin: ${props => props.margin || "unset"};
`