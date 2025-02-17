import styled from "styled-components";
import {theme} from "../styles/Theme";

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
    align?: string
    justify?: string
    gap?:string
    lineHeight?: string
    whiteSpace?: string
    letterSpacing?: string


}
export const Text = styled.p<TextPropsType>`
  padding: ${props => props.padding || "unset"};
  display: ${props => props.display || "block"};
  margin: ${props => props.margin || "unset"};
  font-family: ${props => props.fontFamily || "unset"};
  font-size:  ${props => props.fontSize || "initial"};
  font-weight: ${props => props.fontWeight || "initial"};
  color:  ${props => props.color || theme.colors.font};
  width:  ${props => props.width || "unset"};
  height:  ${props => props.height || "unset"};
  align-items:  ${props => props.align || "unset"};
  justify-content:  ${props => props.justify || "unset"};
  gap:  ${props => props.gap || "unset"};
  line-height:  ${props => props.lineHeight || "initial"};
  white-space: ${props => props.whiteSpace ||"unset"};
  letter-spacing:  ${props => props.letterSpacing ||"unset"};;
`