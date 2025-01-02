import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from '../../../components/icon/Icon';
import styled from "styled-components";
import {Text} from "../../../components/Text"
import {Ability} from "./Ability";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Abilities = () => {
    return (
        <StyledAbilities>
            <Container>
            <FlexWrapper align={"center"} wrap={"wrap"} >
                <FlexWrapper direction={"column"}>
                    <div>
                    <Text color={theme.colors.accent} fontFamily={"Playfair Display, sans-serif"} fontWeight={"700"} fontSize={"100px"} >4+</Text>
                    <br/>
                    <Text display={"inline-block"} width={"207px"} height={"216px"} fontFamily={"Playfair Display, sans-serif"} fontSize={"40px"} fontWeight={"700"}> Years Experience Working</Text>
                    </div>
                </FlexWrapper>
                <FlexWrapper direction={"column"} align={"center"} margin={" 0 0 0 94px"}>
                    <Text fontFamily={"Poppins"} fontSize={"40px"} fontWeight={"700"}>
                        Developer and Designer, specialized in <br/>UI/UX and Web Developer
                    </Text>
                    <FlexWrapper gap={"15px"} wrap={"wrap"}>
                        <Ability iconId={"computer"} text={"Front End Developer"}/>
                        <Ability iconId={"paint"} text={"UI/UX Designer"}/>
                        <Ability iconId={"thunder"} text={"Branding Designer"}/>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            </Container>
        </StyledAbilities>
    );
};



const StyledAbilities = styled.section`
background-color: blue;
  padding: 100px 122px;
`
