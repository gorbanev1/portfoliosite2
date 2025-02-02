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
                <FlexWrapper align={"center"} wrap={"wrap"} justify={"center"} >
                    <FlexWrapper direction={"column"} margin={"0 auto"} align={"center"} justify={"center"}>
                        <Experience>
                            <Text color={theme.colors.accent} fontFamily={"Playfair Display, sans-serif"}
                                  fontWeight={"700"} fontSize={"100px"}>4+</Text>
                            <br/>
                            <TextExperience >
                                Years Experience Working
                            </TextExperience>
                        </Experience>
                    </FlexWrapper>
                    <AbilitiesSection >
                        <h3>
                            Developer and Designer, specialized in <br/>UI/UX and Web Developer
                        </h3>
                        <AbilityWrapper >
                            <Ability iconId={"computer"} text={"Front End Developer"}/>
                            <Ability iconId={"paint"} text={"UI/UX Designer"}/>
                            <Ability iconId={"thunder"} text={"Branding Designer"}/>
                        </AbilityWrapper>
                    </AbilitiesSection>
                </FlexWrapper>
            </Container>
        </StyledAbilities>
    );
};
const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1394px){
     flex-direction: row;
    margin: 0 auto;
  
}
`
const TextExperience = styled.p`
  display: inline-block;
  width:207px;
  font-family: Playfair Display, sans-serif;
  font-size: 40px;
  font-weight:700;
  @media screen and (max-width: 1394px){
    padding: 30px 0 0 20px ;
    max-width: fit-content;
    width: 100%;
    
  }
`
const AbilitiesSection = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 94px;
  @media screen and (max-width: 1394px){
    
    margin: 0 auto;
  }
  
`
const StyledAbilities = styled.section`
  background-color: #222A36!important;
  padding: 100px;
  display: flex;
`
const AbilityWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  @media screen and (max-width: 1093px){
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
`