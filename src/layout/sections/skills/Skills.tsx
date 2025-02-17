import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from '../../../components/FlexWrapper';
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

const skills = [
    "figma", "html5", "ecma", "sass", "react"
]

export const Skills = () => {
    return (
        <StyledSkills>
            <Container maxwidth={"1180px"}>
                <SkillsWrapper>
                    {skills.map((s, si) => {
                        return (
                            <SkillWrapper>
                                <Icon key={si} iconId={s} width={"100px"} height={"100px"} viewBox={"0 0 100 100"}/>
                            </SkillWrapper>
                        )
                    })}

                </SkillsWrapper>
            </Container>
        </StyledSkills>
    );
};

const SkillsWrapper = styled.div`
  padding: 0 0 0 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  //outline: #c73789 10px solid;
  overflow: hidden;
  @media screen and (max-width: 600px){
    gap: 70px;
  }
`

const StyledSkills = styled.section`
  padding: 50px 0;
  display: flex;
  overflow: hidden;
  width: 100%;
  //outline: deepskyblue 5px solid;
`

const SkillWrapper = styled.div`
  width: 100px;
  height: 100px;
  :last-child {
    margin-right: 0;
  }
`