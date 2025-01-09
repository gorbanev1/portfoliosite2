import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import photoReview from '../../../assets/images/reviewman.webp'
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

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper padding={"100px 0"} wrap={"wrap"}>
                    <Photo width={"390px"} height={"390px"} src={photoReview}/>
                    <FlexWrapper direction={"column"} margin={"0 108px   0 12px"} width={"490px"}>
                        <Text fontSize={"100px"} fontWeight={"700"} lineHeight={"0.4"} margin={"35px 0 0 "}>“</Text>
                        <Text fontFamily={"Poppins"} fontSize={"20px"} fontWeight={"700"} lineHeight={"1.8"} margin={"0 0 20px 0"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum
                            est
                            a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus,
                            ut
                            interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                            Class
                            aptent taciti sociosqu ad litora torquent
                        </Text>
                        <FlexWrapper>
                            <Icon iconId={"leftArrow"}/>
                            <Icon iconId={"rightArrow"}/>
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