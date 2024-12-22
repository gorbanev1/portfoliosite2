import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from '../../../components/icon/Icon';
import styled from "styled-components";
import {Text} from "../../../components/Text"

export const Abilities = () => {
    return (
        <StyledAbilities>
            <FlexWrapper align={"center"}>

                <FlexWrapper direction={"column"}>
                    <span>4+</span>
                    <span>Years Experience Working</span>
                </FlexWrapper>
                <FlexWrapper direction={"column"} align={"center"}>
                    <div>
                        Developer and Designer, specialized in UI/UX and Web Developer
                    </div>
                    <FlexWrapper gap={"15px"}>
                        <Ability>
                            <IconWrapper>
                                <Icon iconId={"computer"}></Icon>
                            </IconWrapper>
                            <Text display={"block"}>Front End Developer</Text>
                        </Ability>
                        <Ability>
                            <IconWrapper>
                                <Icon iconId={"paint"}></Icon>
                            </IconWrapper>
                            <Text display={"block"}>UI/UX Designer</Text>
                        </Ability>
                        <Ability>
                            <IconWrapper>
                                <Icon iconId={"thunder"} margin={"172px 0 0 0"} display={"block"}></Icon>
                            </IconWrapper>
                            <Text display={"block"}>Branding Designer</Text>
                        </Ability>
                    </FlexWrapper>
                </FlexWrapper>
            </FlexWrapper>
        </StyledAbilities>
    );
};

const Ability = styled.div`
  width: 288px;
  height: 295px;
  background-color: brown;

`
const IconWrapper = styled.div`
  margin: 172px 0 0 10px;
`
const StyledAbilities = styled.div`
background-color: blue;
  padding: 100px 122px;
`
