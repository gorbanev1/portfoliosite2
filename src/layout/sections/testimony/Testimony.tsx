import React, {Children, cloneElement, ReactChildren, useEffect, useState} from 'react';
import photoReview from '../../../assets/images/reviewman.webp'
import photoReview2 from '../../../assets/images/reviewman2.jpg'
import {Text} from "../../../components/Text";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {Carousel} from "./Carousel";
import { S } from './Testimony_Styles';


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


export const Testimony:React.FC = () => {

    // @ts-ignore
    return (
        <S.StyledTestimony>
            <Container display={"flex"}>
                <S.AllWrapper>
                    <Carousel>
                        {reviews.map((review, index) => {
                            return <S.Photo width={"390px"} height={"390px"} src={review.iconId}/>
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
                    <S.ProsWrapper>

                        {pros.map((i, index) => {
                            return <S.ProWrapper key={index}>
                                <Text   fontSize={"30px"} fontWeight={"700"} lineHeight={"1.2"} width={"100%"}>
                                    {i.field}
                                </Text>
                                <Text className={"value"} color={theme.colors.accent} fontSize={"50px"}
                                      fontWeight={"700"} lineHeight={"1.2"} whiteSpace={"nowrap"} margin={"10px 0 0 0" }>
                                    {i.value}
                                </Text>
                            </S.ProWrapper>
                        })}
                    </S.ProsWrapper>
                </S.AllWrapper>
            </Container>
        </S.StyledTestimony>
    );
};
