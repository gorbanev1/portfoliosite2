import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
            <FlexWrapper  gap={"170px"} margin={"0 auto"} padding={"50px 0"}>
                <Icon iconId={"figma"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"html5"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"ecma"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"sass"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"react"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
            </FlexWrapper>
            </Container>
        </StyledSkills>
);
};

const StyledSkills = styled.section`
  background-color: aqua;
  text-align: center;
  
`