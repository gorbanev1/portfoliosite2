import styled from "styled-components"

type MainContainerPropsType = {
    maxWidth: string
    height?: string
    margin?: string
}

const MainContainer = styled.div<MainContainerPropsType>`
  max-width: ${props => props.maxWidth};
  width: 100%;
  height: ${props => props.height || "unset"};
  @media screen and (max-width: 1193px) {
    //margin: 0 auto;
  }
  @media screen and (max-width: 500px) {
    //margin: 0 auto;
  }
  margin: ${props => props.margin || "unset"};
`
const WatchWindow = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`
const AllPagesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  transition: translate;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

`

const ReviewTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  //margin: 0 auto;

`
const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 108px 0 12px;
  max-width: 490px;
  width: 100%;
  @media screen and (max-width: 1193px) {
    margin: 0 10px 0 12px
  }
  @media screen and (max-width: 901px) {
    margin: 0;
  }

  //direction={"column"} margin={"0 108px   0 12px"} width={"490px"}
`
const ReviewWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  @media screen and (max-width: 901px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`
const ArrowButton = styled.button`
  cursor: pointer;
  color: darkgreen;
`
export const S={
    MainContainer,
    WatchWindow,
    AllPagesContainer,
    ReviewTextWrapper,
    ReviewText,
    ReviewWrapper,
    ArrowButton
    ,
}