import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import styled from "styled-components";
import {Text} from "../../../components/Text"
import {Ability} from "./Ability";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from '../../../styles/Common';
import {S} from './Abilities_Styles';

export const Abilities = () => {
    return (
        <S.StyledAbilities id={"about"}>
            <Container padding={"0 0 0 0"}>
                <FlexWrapper align={"center"} wrap={"wrap"} justify={"center"}>
                    <S.Experience>
                        <Text
                            letterSpacing={"25px"} color={theme.colors.accent}
                            fontFamily={"Playfair Display, sans-serif"}
                            fontWeight={"700"} fontSize={"100px"}>4+</Text>
                        <br/>
                        <S.TextExperience>
                            Years Experience Working
                        </S.TextExperience>
                    </S.Experience>
                    <S.AbilitiesSection>
                        <h3>
                            Developer and Designer, specialized in <br/>UI/UX and Web Developer
                        </h3>
                        <S.AbilityWrapper>
                            <Ability iconId={"computer"} text={"Front End Developer"}
                                     marginPlus={window.innerWidth>600?177:44}
                                     marginText={`${window.innerWidth>600?"-3px 0 0 32px":"-3px 0 0 30px"}`}/>
                            <Ability iconId={"paint"} text={"UI/UX Designer"}
                                     marginPlus={window.innerWidth>600?172:54}
                                     marginText={`${window.innerWidth>600?"-3px 0 0 33px":"0px 0 0 30px"}`}/>
                            <Ability iconId={"thunder"} text={"Branding Designer"}
                                     marginPlus={window.innerWidth>600?168:50}
                                     marginText={`${window.innerWidth>600?"-3px 0 0 33px":"0px 0 0 30px"}`}/>
                        </S.AbilityWrapper>
                    </S.AbilitiesSection>
                </FlexWrapper>
            </Container>
        </S.StyledAbilities>
    );
};
