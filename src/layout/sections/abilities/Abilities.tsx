import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from '../../../components/icon/Icon';
import styled from "styled-components";
import {Text} from "../../../components/Text"
import {Ability} from "./Ability";

export const Abilities = () => {
    return (
        <StyledAbilities>
            <FlexWrapper align={"center"} wrap={"wrap"} >

                <FlexWrapper direction={"column"}>
                    <div>
                    <span>4+</span>
                    <span>Years Experience Working</span>
                    </div>
                </FlexWrapper>
                <FlexWrapper direction={"column"} align={"center"}>
                    <div>
                        Developer and Designer, specialized in UI/UX and Web Developer
                    </div>
                    <FlexWrapper gap={"15px"} wrap={"wrap"}>
                        <Ability iconId={"computer"} text={"Front End Developer"}/>
                        <Ability iconId={"paint"} text={"UI/UX Designer"}/>
                        <Ability iconId={"thunder"} text={"Branding Designer"}/>

                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledAbilities>
    );
};



const StyledAbilities = styled.div`
background-color: blue;
  padding: 100px 122px;
`
