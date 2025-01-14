import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

const skills= [
    "figma", "html5", "ecma", "sass", "react"
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <FlexWrapper  gap={"170px"} margin={"0 auto"} padding={"50px 0"}>
                {skills.map((s, si)=>{
                    return <Icon key={si} iconId={s} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
            })}

            </FlexWrapper>
            </Container>
        </StyledSkills>
);
};

const StyledSkills = styled.section`
  display: flex;
  background-color: aqua;
  text-align: center;
  
`