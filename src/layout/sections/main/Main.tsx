import React, {useEffect, useState} from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/LinkButton";
import {Text} from "../../../components/Text"
import {Container} from "../../../components/Container";


export const Main = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

        };
        // console.log(windowWidth)
        window.addEventListener('resize', handleResize);

        // Очистка эффекта
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <StyledMain>

            <Container maxwidth={"1440px"}>
                <MainWrapper>
                   {/* <div style={{width: "400px",height: "400px"}}></div>*/}
                    <Photo width={`${721 * (windowWidth / 1440)}px`} height={`${743 * (windowWidth / 1440)}px`}                           src={photo}/>
                  {/*  <Photo width={"721px"} height={'743px'} src={photo}/>*/}

                     <MainTextWrapper>
                        <MainText top={`${175 * (windowWidth / 1440)}px`} left={`${118 * (windowWidth / 1440)}px`} >
                            <Name fontSize={`${90 * (windowWidth / 1440)}px`}>
                                Hello! <br/>
                                I’m Zarror Nibors
                            </Name>
                            <FlexWrapper width={"404px"} direction={"column"}>
                                <MainTitle fontSize={`${20*(windowWidth / 1440)}px`}>
                                    I’am freelance <span>web developer</span> based in Indonesia who loves to craft
                                    attractive design experiences
                                    for the web.
                                </MainTitle>
                                <FlexWrapper direction={"row"} margin={"30px 0 0 0"} width={"100%"} height={"64px"}>
                                    <LinkButton width={"50%"} height={"100%"} gap={"10px"}>
                                        <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                        <Text display={"contents"} fontFamily={"Poppins"} fontSize={"20px"}
                                              fontWeight={"400"}>Email me</Text>
                                    </LinkButton>
                                    <Link href={"www.google.com"}>
                                        <Text padding={"10px 20px"} fontFamily={"Poppins"} fontSize={"20px"}
                                              fontWeight={"400"} display={"flex"} align={"center"} justify={"center"}
                                              gap={"5px"}>
                                            <Icon iconId={"cv"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                            <span> Download CV</span>
                                        </Text>
                                    </Link>
                                </FlexWrapper>
                            </FlexWrapper>
                        </MainText>
                    </MainTextWrapper>
                </MainWrapper>
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
  height: 100%;
  background-color: darkgreen;
  display: flex;
  wrap: wrap;
  
`
type mainTextPropsType = {
    top?: string
    left?: string
}
const MainText = styled.div<mainTextPropsType>`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: ${props => props.top};
  left: ${props => props.left};
  @media screen and (max-width: 560px) {
    position: static;
  }
  
  max-width: 750px;
/*  @media screen and (max-width: 1170px){
    top: 125px;
    left: 78px;
}*/
 
`
type photoPropsType = {
    width?: string
    height?: string
}

// @ts-ignore
// @ts-ignore

const Photo = styled.img<photoPropsType>`
  width: ${props => props.width || "721px"};
  height: ${props => props.height || "743px"};
  object-fit: cover;
  float: right;
  @media screen and (max-width: 560px) {
    float: none;
  }
  @media screen and (max-width: 560px) {
    // width:   // props =>props.width*3};
    //
    // height: {props =>(Number(props.height)*2).toString()};
    width: 500px;
    height: 502px;
    margin: 0 auto;
  }
`

const MainWrapper = styled.div`
    height: fit-content;

`
const MainTextWrapper = styled.div`
  position: relative;
  @media screen and (max-width: 560px) {
    position: static;
    
  }
`
type MainTitlePropsType = {
    fontSize?: string

}
const MainTitle = styled.h1<MainTitlePropsType>`
  color: rgba(255, 255, 255, 0.50);
  font-family: Poppins;
  font-size: ${props => props.fontSize||"20px"} ;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`

type namePropsType = {
    fontSize?: string
}

const Name = styled.h2<namePropsType>`
  font-family: "Playfair Display", sans-serif;
  font-size: ${props => props.fontSize||"90px"};
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