import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <FlexWrapper maxwidth={"1180px"} gap={"170px"} margin={"0 auto"}>
                <Icon iconId={"figma"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"html5"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"ecma"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"sass"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
                <Icon iconId={"react"} width={"100"} height={"100"} viewBox={"0 0 100 100"}/>
            </FlexWrapper>
        </StyledSkills>
);
};

const StyledSkills = styled.section`
  background-color: aqua;
  text-align: center;
  
`