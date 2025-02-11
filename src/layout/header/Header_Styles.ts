import styled from "styled-components";
import {theme} from "../../styles/Theme";

const HeaderWrapper = styled.div`
  // display: flex;
  // justify-content: space-between;
  // padding: 0 0 0 15px;
    // color=${theme.colors.font}
  nav:last-child {

  }

  @media ${theme.media.tablet} {
    div:first-child {
      display: none;
    }
  }

`

const Header = styled.header`
  background-color: ${theme.colors.primaryBgO};
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 3;
  margin: 0 auto;
`
export const S = {
    Header,
    HeaderWrapper
}