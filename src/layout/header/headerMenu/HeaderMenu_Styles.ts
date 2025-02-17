import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.font};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const MenuItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0)
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: /*skewX(12deg)*/ translateX(1px);
      color: ${theme.colors.accent};

      & + ${Mask} {
        transform: /*skewX(-12deg)*/ translateX(-1px);
      }
    }

  }
`

const Link = styled.a`
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.font};
  color: transparent;

`


//mob menu
const MobileMenu = styled.nav`

`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: none;
  background-color: rgba(16, 2, 2, 0.89);

  ${props => props.isOpen && css<{ isOpen: boolean }>`
   
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 40px;
    flex-direction: column;
    align-items: center;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: 34px;
  right: 18px;
  width: 60px;
  height: 60px;
  z-index: 44;
  background-color: #2D3540;
  border-radius: 10px;


  span {
    display: block;
    width: 34px;
    height: 4px;
    border-radius: 4px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 14px;
    bottom: 30px;
    z-index: 100;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 34px;
      height: 4px;
      border-radius: 4px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}

    }

    &::after {
      content: "";
      display: block;
      width: 34px;
      height: 4px;
      border-radius: 4px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);
      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
      `}
    }
  }
`

//Desktop menu
const DesktopMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 0 0 30px;
  ul {
    display: flex;
    gap: 40px;

  }


`
/*
const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow-y: hidden;
  //outline: 1px solid red;
  color: ${theme.colors.font};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`
const ListItem = styled.li`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.accent};
    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0)
  }

  &:hover {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: /!*skewX(12deg)*!/ translateX(1px);
      color: ${theme.colors.accent};

      & + ${Mask} {
        transform: /!*skewX(-12deg)*!/ translateX(-1px);
      }
    }

  }
`

const Link = styled.a`
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 500;
  color: ${theme.colors.font};
  color: transparent;

`
*/


const HeaderWrapper = styled.div`
  max-width: 1193px;
  width: 90%;
  margin: 0 auto;
  outline: 2px solid rgb(43, 236, 14);
`

const Header = styled.header`
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  position: fixed;
  top: 17px;
  left: 0;
  right: 0;
  z-index: 3;
  margin: 0 auto;
`

export const S={
    Link,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
    HeaderWrapper,
    Header
}