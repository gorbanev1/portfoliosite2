import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.png'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper position={"absolute"} direction={"column"} zindex={"100"}>

                <h2>
                    Hello!
                    I’m Zarror Nibors
                </h2>

                <h1>
                    I’am freelance web developer based in Indonesia who loves to craft attractive design experiences for the web.
                </h1>
                <FlexWrapper direction={"row"}>
                <Button>
                    <Icon iconId={"email"}/>Email me
                </Button>
                <span>
                    <Icon iconId={"cv"}/>
                    <a href="">Download CV</a>
                </span>
                </FlexWrapper>

            </FlexWrapper>
            <Photo src={photo}/>
        </StyledMain>
    );
};
const photoUrl=`url( ${photo} )`
const StyledMain = styled.main`
  /*background-image: ${photoUrl};
  background-repeat: no-repeat;
  background-position: right;*/
  position: relative;
  `
const Photo= styled.img`
  width: 721px;
  height: 743px;
  object-fit: cover;
  position: absolute;
  right: 0;

  
`