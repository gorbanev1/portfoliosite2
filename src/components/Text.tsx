import styled from "styled-components";

type TextPropsType = {
    padding?: string;
    display?: string;
    margin?: string;
    fontFamily?: string;
    fontSize?:string
    fontWeight?: string
    color?: string
    width?: string
    height?: string


}
export const Text = styled.text<TextPropsType>`
  padding: ${props => props.padding || "unset"};
  display: ${props => props.display || "unset"};
  margin: ${props => props.margin || "unset"};
  font-family: ${props => props.fontFamily || "unset"};
  font-size:  ${props => props.fontSize || "initial"};
  font-weight: ${props => props.fontWeight || "initial"};
  color:  ${props => props.color || "inherit"};
  width:  ${props => props.width || "inherit"};
  height:  ${props => props.height || "inherit"};
`