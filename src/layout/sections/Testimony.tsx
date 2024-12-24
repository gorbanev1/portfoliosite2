import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import photoReview from '../../assets/images/reviewman.webp'
import {Icon} from "../../components/icon/Icon";
import {Text} from "../../components/Text";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper padding={"100px 122px"}>
                <Photo src={photoReview}/>
                <FlexWrapper direction={"column"}>
                    <div>“</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est
                        a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                        interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class
                        aptent taciti sociosqu ad litora torquent
                    </div>
                    <FlexWrapper>
                        <Icon iconId={"leftArrow"}/>
                        <Icon iconId={"rightArrow"}/>
                    </FlexWrapper>
                </FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <Text>Satisfaction Clients</Text>
                    <Text>100 %</Text>
                    <Text>Clients On Worldwide</Text>
                    <Text>+ 80</Text>
                    <Text>Projects Done</Text>
                    <Text>743</Text>
                </FlexWrapper>

            </FlexWrapper>

        </StyledTestimony>
    );
};
const StyledTestimony = styled.section`
`
const Photo = styled.img`
  width: 389px;
  height: 391px;
`