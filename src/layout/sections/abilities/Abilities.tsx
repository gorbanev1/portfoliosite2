import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Text} from "../../../components/Text"
import {Ability} from "./Ability";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import { font } from '../../../styles/Common';
import { S } from './Abilities_Styles';

export const Abilities = () => {
    return (
        <S.StyledAbilities>
            <Container>
                <FlexWrapper align={"center"} wrap={"wrap"} justify={"center"} >
                    <FlexWrapper direction={"column"} margin={"0 auto"} align={"center"} justify={"center"}>
                        <S.Experience>
                            <Text color={theme.colors.accent} fontFamily={"Playfair Display, sans-serif"}
                                  fontWeight={"700"} fontSize={"100px"}>4+</Text>
                            <br/>
                            <S.TextExperience >
                                Years Experience Working
                            </S.TextExperience>
                        </S.Experience>
                    </FlexWrapper>
                    <S.AbilitiesSection >
                        <h3>
                            Developer and Designer, specialized in <br/>UI/UX and Web Developer
                        </h3>
                        <S.AbilityWrapper >
                            <Ability iconId={"computer"} text={"Front End Developer"}/>
                            <Ability iconId={"paint"} text={"UI/UX Designer"}/>
                            <Ability iconId={"thunder"} text={"Branding Designer"}/>
                        </S.AbilityWrapper>
                    </S.AbilitiesSection>
                </FlexWrapper>
            </Container>
        </S.StyledAbilities>
    );
};
