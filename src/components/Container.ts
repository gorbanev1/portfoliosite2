import styled from "styled-components";
import {theme} from "../styles/Theme";

type containerPropsType = {
    position?: string;
    width?: string;
    maxwidth?: string;
}
export const Container = styled.div<containerPropsType>`
  
  max-width: ${props => props.maxwidth || "1196px"};;
  width: ${props => props.width || "100%"};
  min-height: 100%;
  margin: 0 auto;
  outline: 1px solid rgba(255, 0, 0, 0.43);
  position: ${props => props.position || "static"};
  color: ${theme.colors.font};
`