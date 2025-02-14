import styled from "styled-components";
import photo from "../../../assets/images/Face.webp";
import {font} from "../../../styles/Common";

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
    min-width: 375px;
    min-height: 450px;
    width: 100%;
    height: 100%;
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
    padding-top: 50px;
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
  @media screen and (max-width: 960px){
    padding-top: 30px;
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

type linkPropsType={
    width:string,
    height:string
}
const Link = styled.a<linkPropsType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 201px;
  padding-left: 20px;

  color: #FFF;
  line-height: 1.2;

  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-underline-position: from-font;
  width: ${props=>props.width};
  height: ${props=>props.height};
`
export const S= {
    Link,
    Name,
    MainTitle,
    MainWrapper,
    MainHWrapper,
    StyledMain,
    ButtonText,
    MainText,
    Photo,
    MainTextWrapper,
}