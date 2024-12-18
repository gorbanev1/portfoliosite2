import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.png'
import styled from "styled-components";
export const Main = () => {
    return (
        <StyledMain>
            <div>
                <h2>
                    Hello!
                    I’m Zarror Nibors
                </h2>
                <h1>
                    I’am freelance web developer based in Indonesia who loves to craft attractive design experiences for the web.
                </h1>
                <button>
                    <Icon iconId={"email"}/>
                </button>
                <span>
                    <Icon iconId={"cv"}/>
                    <a href=""></a></span>
            </div>
        </StyledMain>
    );
};
const photoUrl=`url( ${photo} )`
const StyledMain = styled.main`
  background-image: ${photoUrl};
  background-repeat: no-repeat;
  background-position: right;
  `
