import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/LinkButton";
import {Text} from "../../../components/Text"
import {Container} from "../../../components/Container";
export const Main = () => {
    return (
        <StyledMain>

            <Container  maxwidth={"1440px"} position={"relative"}>
                <Photo src={photo}/>
            <FlexWrapper position={"absolute"} direction={"column"} zindex={"2"} top={"175px"} left={"118px"} maxwidth={"52%"}>
                <Name>
                    Hello! <br/>
                    I’m Zarror Nibors
                </Name>
                <FlexWrapper width={"404px"} direction={"column"} >
                    <MainTitle>
                        I’am freelance <span>web developer</span> based in Indonesia who loves to craft attractive design experiences
                        for the web.
                    </MainTitle>
                    <FlexWrapper direction={"row"}  margin={"30px 0 0 0"} width={"100%"} height={"64px"}>
                        <LinkButton width={"50%"} height={"100%"} gap={"10px"}>
                            <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                            <Text display={"contents"} fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"400"}>Email me</Text>
                        </LinkButton>
                        <Link href={"www.google.com"}>
                            <Text padding={"10px 20px"} fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"400"} display={"flex"}  align={"center"} justify={"center"} gap={"5px"}>
                                <Icon iconId={"cv"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                <span> Download CV</span>
                            </Text>
                        </Link>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
            </Container>
        </StyledMain>
    );
};
const photoUrl = `url( ${photo} )`
const StyledMain = styled.section`
    /*background-image: ${photoUrl};
  background-repeat: no-repeat;
  background-position: right;*/
  //position: relative;
  height: 743px;
  background-color: darkgreen;
  display: flex;
  wrap: wrap;
`
const Photo = styled.img`
  width: 721px;
  height: 743px;
  object-fit: cover;
  position: absolute;
  right: 0;
`
const MainTitle = styled.h1`
  color: rgba(255, 255, 255, 0.50);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`
const Name = styled.h2`
  font-family: "Playfair Display", sans-serif;
  font-size: 90px;
  font-weight: 700;
  line-height: 1.2;
`


const Link = styled.a`
  display: flex;
  align-items: center;  
  justify-content: center;
  width: 50%;
  
  color: #FFF;
  line-height: 1.2;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
`