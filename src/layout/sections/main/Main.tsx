import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
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
                <FlexWrapper maxwidth={"404px"} direction={"column"} >
                    <MainTitle>
                        I’am freelance web developer based in Indonesia who loves to craft attractive design experiences
                        for the web.
                    </MainTitle>
                    <FlexWrapper direction={"row"}  margin={"30px 0 0 0"} width={"100%"} height={"64px"}>
                        <Button width={"50%"} height={"100%"}>
                            <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                            <Text padding={"20px 40px 20px 10px"} fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"400"}>Email me</Text>
                        </Button>
                        <Link>
                            <Icon iconId={"cv"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                            <Text padding={"10px 20px 10px 5px"}>
                                <a href="">Download CV</a>
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
`


const Link = styled.div`
  
  display: flex;
  align-items: center;  
  justify-content: center;
  width: 50%;
`