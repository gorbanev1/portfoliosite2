import React, {Children, cloneElement, ReactChildren, useEffect, useState} from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photoReview from '../../../assets/images/reviewman.webp'
import photoReview2 from '../../../assets/images/reviewman2.jpg'
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/Text";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


const pros = [
    {
        field: "Satisfaction\n" +
            "Clients",
        value: "100 %"
    },
    {
        field: "Clients On Worldwide",
        value: "+ 80"
    },
    {
        field: "Projects Done",
        value: "743"
    }
]
const reviews = [
    {
        iconId: photoReview,
        reviewText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent",
    },
    {
        iconId: photoReview2,
        reviewText: " sadfsdafsdafsdaf  sdaf safsdaf asf sadf sadfsd fsdf sf s safdf sdaaaa                sdafafdsa sdaf asf sadf dsaf  sdfsdaf assdaf sdaf fdsaf sfsdaf sa",
    },
    {
        iconId: photoReview,
        reviewText: "  ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываыв",
    }
]


export const Testimony = () => {

    return (
        <StyledTestimony>
            <Container>
                <AllWrapper>

                    <Carousel>
                        {reviews.map((review, index) => {
                            return <Photo width={"390px"} height={"390px"} src={review.iconId}/>
                        })}
                        {reviews.map((review, index) => {
                            return <Text fontFamily={'"Poppins", sans-serif'} fontSize={"20px"} fontWeight={"700"}
                                         lineHeight={"1.8"}
                                         margin={"0 0 20px 0"}>{review.reviewText}</Text>
                        })}

                        {/*                       <img src={photoReview}/>
                        <img src={photoReview2}/>
                        <img src={photoReview}/>
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est
                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class
                            aptent taciti sociosqu ad litora torquent</div>
                        <div> asd asd as das as asd asd asd as das as asd asd asd as das as asd asd asd as das as asd asd asd as das as asd asd asd as das as asd d litora torquent</div>
                        <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est
                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class
                            aptent taciti sociosqu ad litora torquent</div>


                        <Photo width={"390px"} height={"390px"} src={photoReview}/>
                        <Photo width={"390px"} height={"390px"} src={photoReview}/>
                        <Photo width={"390px"} height={"390px"} src={photoReview}/>*/}
                    </Carousel>
                    {/*<Photo width={"390px"} height={"390px"} src={photoReview}/>*/}
                    {/*<FlexWrapper direction={"column"} margin={"0 108px   0 12px"} width={"490px"}>
                        <Text fontSize={"100px"} fontWeight={"700"} lineHeight={"0.4"} margin={"35px 0 0 "}>“</Text>
                        <Text fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"700"} lineHeight={"1.8"}
                              margin={"0 0 20px 0"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est
                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class
                            aptent taciti sociosqu ad litora torquent
                        </Text>
                        <FlexWrapper>
                            <button>
                                <Icon iconId={"leftArrow"}/></button>
                            <button>
                                <Icon iconId={"rightArrow"}/>
                            </button>
                        </FlexWrapper>
                    </FlexWrapper>*/}
                    <ProsWrapper>

                        {pros.map((i, index) => {
                            return <ProWrapper key={index}>
                                <Text fontSize={"30px"} fontWeight={"700"} lineHeight={"1.2"} width={"min-content"}>
                                    {i.field}
                                </Text>
                                <Text className={"value"} color={theme.colors.accent} fontSize={"50px"}
                                      fontWeight={"700"} lineHeight={"1.2"} whiteSpace={"nowrap"}>
                                    {i.value}
                                </Text>
                            </ProWrapper>
                        })}
                    </ProsWrapper>
                </AllWrapper>
            </Container>
        </StyledTestimony>
    );
};
const ProsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 194px;
  @media screen  and (max-width: 1210px) {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
  

  @media screen  and (max-width: 901px) {
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0px;
  }

  @media screen  and (max-width: 841px) {
    
    align-items: baseline;
    margin: 0 auto;
    flex-direction: column;
    max-width: 700px;
    padding: 70px 0 0 0;

  }

  @media screen  and (max-width: 550px) {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0 0 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

`
const ProWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen  and (max-width: 841px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    .value {
      display: inline-block;
      margin: -17px 0 0 0;
    }
  }
`

const StyledTestimony = styled.section`
  background: rgba(34, 42, 54, 0.95) !important;
`
const Photo = styled.img`
  width: 389px;
  height: 391px;
`

let PAGE1_WIDTH = 390
let PAGE2_WIDTH = 490
console.log(window.screen.width)
if (window.screen.width < 500) {
    PAGE1_WIDTH = 335
    PAGE2_WIDTH = 335
    console.log(console.log(window.screen.width < 500 ? 490 : 335 + "YYYYYYYYYYYYYYY"))
}


// @ts-ignore
export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [pages2, setPages2] = useState([])

    const [offset, setOffset] = useState(0)
    const [offset2, setOffset2] = useState(0)

    const [arrowPos, setArrowPos] = useState(0)


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE1_WIDTH
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
        setOffset2((currentOffset) => {
            const newOffset = currentOffset + PAGE2_WIDTH
            console.log(newOffset)
            if (Math.min(newOffset, 0) == 0) setArrowPos(0); else setArrowPos(1)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        console.log("dsfsdfsdfdRRRRRRRRRR")
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE1_WIDTH
            const maxOffset = -(PAGE1_WIDTH * (pages.length - 1))
            console.log(offset)
            return Math.max(newOffset, maxOffset)
        })
        setOffset2((currentOffset) => {
            const newOffset = currentOffset - PAGE2_WIDTH
            const maxOffset = -(PAGE2_WIDTH * (pages2.length - 1))
            console.log(offset)
            if (Math.max(newOffset, maxOffset) == maxOffset) setArrowPos(2); else setArrowPos(1)
            return Math.max(newOffset, maxOffset)
        })

    }
    let opacityLeft = 0;
    let opacityRight = 1;
    switch (arrowPos) {
        case 0: {
            opacityLeft = 0.4;
            opacityRight = 1
        }
            break
        case 1: {
            opacityLeft = 1;
            opacityRight = 1
        }
            break
        case 2: {
            opacityLeft = 1;
            opacityRight = 0.4
        }
            break
    }
    const filterElements = (pageWidth: number, elementType: string) => {
        return Children.map(children, (child) => {
            return cloneElement((child), {
                style: {
                    height: "100%",
                    minWidth: `${pageWidth}px`,
                    maxWidth: `${pageWidth}px`,
                }
            })
        }).filter((el: any) => el.type.target === elementType)
        //render.target
    }
    useEffect(() => {
        setPages(
            filterElements(PAGE1_WIDTH, "img")
            /* Children.map(children, (child) => {
                 return cloneElement((child), {
                     style: {
                         height: "100%",
                         minWidth: `${PAGE1_WIDTH}px`,
                         maxWidth: `${PAGE1_WIDTH}px`,
                     }
                 })
             }).filter((el: any) => el.type === "img")*/
        )
    }, [])
    useEffect(() => {
        setPages2(filterElements(PAGE2_WIDTH, "p")
            /*   Children.map(children, (child) => {
                   return cloneElement((child), {
                       style: {
                           height: "100%",
                           minWidth: `${PAGE2_WIDTH}px`,
                           maxWidth: `${PAGE2_WIDTH}px`,
                       }
                   })
               }).filter((el: any) => el.type === "div")*/
        )
    }, [])
    console.log(pages)
    console.log(pages2)
    console.log(Children + "dadasds")
    const sliderPages = [
        {
            pages: pages,
            offset,
            width: "390px"
        },
        {
            pages: pages2,
            offset,
            width: "490px"
        }
    ]
    if (window.screen.width < 550) {
        PAGE1_WIDTH = 335
        PAGE2_WIDTH = 335
        console.log(window.screen.width < 500 && PAGE2_WIDTH)
    }
    return (
        /*<>
            {sliderPages.map((page, index) => {

                return (/*<>
                    {(index===1)&&<FlexWrapper direction={"column"}>
                    <MainContainer width={page.width}>
                        <WatchWindow>
                            <AllPagesContainer style={{
                                transform: `translateX(${page.offset}px)`
                            }}>{page.pages}</AllPagesContainer>
                        </WatchWindow>
                    </MainContainer>
                    <Text fontSize={"100px"} fontWeight={"700"} lineHeight={"0.4"} margin={"35px 0 0 "}>“</Text>
                    }
                    {(index===1)&&<div>fsdDDDDDDDDDfsd</div>}
                </FlexWrapper>

            })}
        </>*/
        <ReviewWrapper>
            <MainContainer maxWidth={`${window.screen.width > 550 ? 390 : 335}px`}
                           height={`${window.screen.width > 550 ? 390 : 375}px`}>
                <WatchWindow>
                    <AllPagesContainer style={{
                        transform: `translateX(${offset}px)`
                    }}>{pages}</AllPagesContainer>
                </WatchWindow>
            </MainContainer>
            <ReviewTextWrapper>
                <ReviewText>
                    <Text fontSize={"100px"} fontWeight={"700"} lineHeight={"0.4"} margin={"35px 0 0 "}
                          color={"#C4C4C4"}>“</Text>
                    <MainContainer maxWidth={`${window.screen.width > 550 ? 490 : 335}px`}>
                        <WatchWindow>
                            <AllPagesContainer style={{
                                transform: `translateX(${offset2}px)`
                            }}>{pages2}</AllPagesContainer>
                        </WatchWindow>
                    </MainContainer>
                    <FlexWrapper gap={"15px"} margin={"0 0 0 15px"}>
                        <ArrowButton onClick={handleLeftArrowClick} style={{
                            opacity: opacityLeft,
                        }}>
                            <Icon iconId={"leftArrow"} width={"27px"} height={"24px"}/>
                        </ArrowButton>
                        <ArrowButton onClick={handleRightArrowClick} style={{
                            opacity: opacityRight
                        }}>
                            <Icon iconId={"rightArrow"} width={"27px"} height={"24px"}/>
                        </ArrowButton>
                    </FlexWrapper>
                </ReviewText>
            </ReviewTextWrapper>
        </ReviewWrapper>
    );
};

const AllWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  
  @media screen and (max-width: 901px) {
    width: min-content;
  }
  @media screen and (max-width: 500px) {
    padding: 40px 0;
  }

`

type MainContainerPropsType = {
    maxWidth: string
    height?: string
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
