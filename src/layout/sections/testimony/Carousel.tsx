import React, {useEffect, useState, Children, cloneElement} from 'react';
import styled from "styled-components";
import {Text} from "../../../components/Text";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import { S } from './Carousel_Styles';



let PAGE1_WIDTH = 390
let PAGE2_WIDTH = 490
console.log(window.screen.width)



// @ts-ignore
export const Carousel = ({children}) => {
    const [page1Width, setPage1Width] = useState(window.screen.width > 550 ? 390 : 335)
    const [page2Width, setPage2Width] = useState(window.screen.width > 550 ? 490 : 335)
    const [page1Height, setPage1Height] = useState(window.screen.width > 550 ? 390 : 373)

    useEffect(()=>{
        window.addEventListener('resize', ()=>{
            setPage1Width(window.screen.width > 550 ? 390 : 335)
            setPage2Width(window.screen.width > 550 ? 490 : 335)
            setPage1Height(window.screen.width > 550 ? 390 : 375)


        })
    }, [])


    const [pages, setPages] = useState([])
    const [pages2, setPages2] = useState([])

    const [offset, setOffset] = useState(0)
    const [offset2, setOffset2] = useState(0)

    const [arrowPos, setArrowPos] = useState(0)


    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + page1Width
            console.log(newOffset)
            return Math.min(newOffset, 0)
        })
        setOffset2((currentOffset) => {
            const newOffset = currentOffset + page2Width
            console.log(newOffset)
            if (Math.min(newOffset, 0) == 0) setArrowPos(0); else setArrowPos(1)
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {
        console.log("dsfsdfsdfdRRRRRRRRRR")
        setOffset((currentOffset) => {
            const newOffset = currentOffset - page1Width
            const maxOffset = -(page1Width * (pages.length - 1))
            console.log(offset)
            return Math.max(newOffset, maxOffset)
        })
        setOffset2((currentOffset) => {
            const newOffset = currentOffset - page2Width
            const maxOffset = -(page2Width * (pages2.length - 1))
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
            filterElements(page1Width, "img")
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
        setPages2(filterElements(page2Width, "p")
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
        <S.ReviewWrapper>
            <S.MainContainer maxWidth={`${page1Width}px`} height={`${page1Height}px`}>

                {/*// maxWidth={`${window.screen.width > 550 ? 390 : 335}px`}*/}
                {/*//            height={`${window.screen.width > 550 ? 390 : 375}px`}>*/}
                <S.WatchWindow>
                    <S.AllPagesContainer style={{
                        transform: `translateX(${offset}px)`
                    }}>{pages}</S.AllPagesContainer>
                </S.WatchWindow>
            </S.MainContainer>
            <S.ReviewTextWrapper>
                <S.ReviewText maxWidth={`${page2Width}`}>
                    <Text fontSize={"100px"} fontWeight={"700"} lineHeight={"0.4"} margin={"43px 0 0 "}
                          color={"#C4C4C4"}>“</Text>
                    <S.MainContainer maxWidth={`${page2Width}px`} margin={"-5px 0 0"} >
                        <S.WatchWindow>
                            <S.AllPagesContainer style={{
                                transform: `translateX(${offset2}px)`
                            }}>{pages2}</S.AllPagesContainer>
                        </S.WatchWindow>
                    </S.MainContainer>
                    <FlexWrapper gap={"28px"} margin={"5px 0 0 15px"}>
                        <S.ArrowButton onClick={handleLeftArrowClick} style={{
                            opacity: opacityLeft,
                        }}>
                            <Icon iconId={"leftArrow"} width={"30px"} height={"30px"} viewBox={"0 0 30 27"}/>
                        </S.ArrowButton>
                        <S.ArrowButton onClick={handleRightArrowClick} style={{
                            opacity: opacityRight
                        }}>
                            <Icon iconId={"rightArrow"} width={"30px"} height={"30px"} viewBox={"0 0 30 27"}/>
                        </S.ArrowButton>
                    </FlexWrapper>
                </S.ReviewText>
            </S.ReviewTextWrapper>
        </S.ReviewWrapper>
    );
};