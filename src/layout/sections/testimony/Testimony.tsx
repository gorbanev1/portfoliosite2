import React, {Children, cloneElement, ReactChildren, useEffect, useState} from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photoReview from '../../../assets/images/reviewman.webp'
import photoReview2 from '../../../assets/images/reviewman2.jpg'
import {Icon} from "../../../components/icon/Icon";
import {Text} from "../../../components/Text";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";


const arr = [
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
        reviewText: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum\n" +
            "                            est\n" +
            "                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,\n" +
            "                            ut\n" +
            "                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.\n" +
            "                            Class\n" +
            "                            aptent taciti sociosqu ad litora torquent",
    },
    {
        iconId: photoReview2,
        reviewText: " sadfsdafsdafsdaf  sdaf safsdaf asf sadf sadfsd fsdf sf s safdf sdaaaa                sdafafdsa sdaf asf sadf dsaf  sdfsdaf assdaf sdaf fdsaf sfsdaf sa",
    },
    {
        iconId: photoReview,
        reviewText: " ываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываывываыва ыва ываыв авыа ыв аыва авыаыва ываыв",
    }
]


export const Testimony = () => {

    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper padding={"100px 0"} wrap={"wrap"}>

                    <Carousel>
                        {reviews.map((review, index) => {
                            return <Photo width={"390px"} height={"390px"} src={review.iconId}/>
                        })}
                        {reviews.map((review, index) => {
                            return <Text fontSize={"20px"} fontWeight={"700"} lineHeight={"1.8"}
                                         margin={"35px 0 0 "}>{review.reviewText}</Text>
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
                    <FlexWrapper direction={"column"} margin={"0 108px   0 12px"} width={"490px"}>
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
                    </FlexWrapper>
                    <FlexWrapper direction={"column"} gap={"30px"} width={"194px"}>
                        {arr.map((i, index) => {
                            return <div key={index}>
                                <Text fontSize={"30px"} fontWeight={"700"} lineHeight={"1.2"}>
                                    {i.field}
                                </Text>
                                <Text color={theme.colors.accent} fontSize={"50px"}
                                      fontWeight={"700"} lineHeight={"1.2"}>
                                    {i.value}
                                </Text>
                            </div>
                        })}

                    </FlexWrapper>

                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
  background: rgba(34, 42, 54, 0.95) !important;
`
const Photo = styled.img`
  width: 389px;
  height: 391px;
`
const PAGE1_WIDTH = 390
const PAGE2_WIDTH = 490
// @ts-ignore
export const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const [pages2, setPages2] = useState([])

    const [offset, setOffset] = useState(0)
    const [offset2, setOffset2] = useState(0)


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE1_WIDTH
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
        setOffset2((currentOffset) => {
            const newOffset = currentOffset + PAGE2_WIDTH
            console.log(newOffset)
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
            return Math.max(newOffset, maxOffset)
        })

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
    return (/*<>
            {sliderPages.map((page, index) => {

                return <>
                    <MainContainer width={page.width}>
                        <WatchWindow>
                            <AllPagesContainer style={{
                                transform: `translateX(${page.offset}px)`
                            }}>{page.pages}</AllPagesContainer>
                        </WatchWindow>
                    </MainContainer>
                    {(index===1)&&<div>fsdDDDDDDDDDfsd</div>}
                </>

            })}
        </>*/
         <>
             <MainContainer width={"390px"}>
                 <WatchWindow>
                     <AllPagesContainer style={{
                         transform: `translateX(${offset}px)`
                     }}>{pages}</AllPagesContainer>
                 </WatchWindow>
             </MainContainer>
             <FlexWrapper direction={"column"}>
             <MainContainer width={"490px"}>
                 <WatchWindow>
                     <AllDivsContainer style={{
                         transform: `translateX(${offset2}px)`
                     }}>{pages2}</AllDivsContainer>
                 </WatchWindow>
             </MainContainer >
                 <FlexWrapper>
             <button onClick={handleLeftArrowClick}>
                 <Icon iconId={"leftArrow"}/></button>
             <button onClick={handleRightArrowClick}>
                 <Icon iconId={"rightArrow"}/>
             </button>
                 </FlexWrapper>
             </FlexWrapper>
         </>
    );
};
type MainContainerPropsType = {
    width: string
    height?: string
}

const MainContainer = styled.div<MainContainerPropsType>`
  width: 390px;
  height: 390px;
`
const MainContainer2 = styled.div`
  width: 490px;

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
`
const AllDivsContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
`