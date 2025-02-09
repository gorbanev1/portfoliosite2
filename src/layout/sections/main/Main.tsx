import React, {useEffect, useState} from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/LinkButton";
import {Text} from "../../../components/Text"
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";


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

            <Container maxwidth={"1440px"} padding={"0"}>
                <MainWrapper>
                   {/* <div style={{width: "400px",height: "400px"}}></div>*/}
                    <Photo width={`${721 * (Math.min(windowWidth,1440) / 1440)}px`} height={`${721 * (Math.min(windowWidth,1440) / 1440)}px`}                           src={photo}/>
                  {/*  <Photo width={"721px"} height={'743px'} src={photo}/>*/}

                     <MainTextWrapper>
                        <MainText top={`${175 * (Math.min(windowWidth,1440) / 1440)}px`} left={`${118 * (Math.min(windowWidth,1440) / 1440)}px`} >
                            <Name >
                                Hello! <br/>
                                I’m Zarror Nibors
                            </Name>
                            <MainHWrapper >
                                <MainTitle>
                                    I’am freelance <span>web developer</span> based in Indonesia who loves to craft
                                    attractive design experiences
                                    for the web.
                                </MainTitle>
                                <FlexWrapper direction={"row"} margin={"30px 0 0 0"} width={"100%"} height={"64px"}>
                                    <LinkButton width={"203px"} height={"64px"} gap={"10px"}>
                                        <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                        <ButtonText>Email me</ButtonText>
                                    </LinkButton>
                                    <Link href={"www.google.com"} width={`${721 * (Math.min(windowWidth,1440) / 1440)}px`}>
                                        <ButtonText>
                                            <Icon iconId={"cv"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                            <span> Download CV</span>
                                        </ButtonText>
                                    </Link>
                                </FlexWrapper>
                            </MainHWrapper>
                        </MainText>
                    </MainTextWrapper>
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};

const MainHWrapper = styled.div`
 max-width: 404px;
  @media screen and (max-width: 960px) {
    max-width: 100%;
  }
  
`
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
const ButtonText = styled.p`
   ${font({family: "Poppins", weight: 400, Fmin: 16, Fmax: 20})};

  
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
  @media screen and (max-width: 960px) {
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
  @media screen and (max-width: 960px) {
    float: none;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
  }
  @media screen and (max-width: 560px) {
    // width:   // props =>props.width*3};
    //
    // height: {props =>(Number(props.height)*2).toString()};
    max-width: 500px;
    max-height: 502px;
    margin: 0 auto;
  }
`

const MainWrapper = styled.div`
    height: fit-content;

`
const MainTextWrapper = styled.div`
  position: relative;
  padding-bottom: 70px;
  @media screen and (max-width: 960px) {
    position: static;
    padding-top: 0;
    padding-left: 20px;
    
    
  }
  //padding-top: 100%;
`
type MainTitlePropsType = {
    fontSize?: string

}
const MainTitle = styled.h1<MainTitlePropsType>`

  ${font({family: "'Poppins', sans-serif", weight:400, Fmax: 20, Fmin: 16 , color: "#FFFFFF80", lineHeight: 1.8})};

  @media screen and (min-width: 1440px){
    font-size: 20px;
  }

`

type namePropsType = {
    fontSize?: string
}

const Name = styled.h2`
  
  
 ${font({family: "'Playfair Display', sans-serif",weight:700, Fmax: 90, Fmin: 50 })};
  @media screen and (min-width: 1440px){
    font-size: 90px;
  }
`
type linkPropsType = {
    width?: string
}

const Link = styled.a<linkPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 201px;

  color: #FFF;
  line-height: 1.2;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
`