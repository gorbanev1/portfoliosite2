import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">
                                {item}
                                <Mask><span>{item}</span></Mask>
                                <Mask><span>{item}</span></Mask>
                            </Link>
                        </ListItem>
                    )
                })}
            </ul>

        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    gap: 30px;
    media ${theme.media.tablet}{
      display: none;
    }
  }
`
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
    &::before{
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
