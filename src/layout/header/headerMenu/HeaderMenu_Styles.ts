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
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    flex-direction: column;
    align-items: center;
  }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 44;
  background-color: red;


  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    left: 40px;
    bottom: 50px;
    z-index: 100;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
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
      width: 36px;
      height: 2px;
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

  ul {
    display: flex;
    gap: 30px;

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



export const S={
    Link,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}