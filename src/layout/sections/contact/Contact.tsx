import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Icon} from "../../../components/icon/Icon";
import {LinkButton} from "../../../components/LinkButton";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <Text>Let’s Connect</Text>
                        <SocialList>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"group"}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"upwork"}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"youtube"}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"linkedin"}/>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink>
                                    <Icon iconId={"github"}/>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                </FlexWrapper>
                <StyledForm>
                    <label htmlFor="name">Your name:</label>
                    <input type={"text"} name={"name"}></input>
                    <label htmlFor="email">Your email address:</label>
                    <input type={"text"} name={"email"}></input>
                    <label htmlFor="project">Tell about the project:</label>
                    <input type={"text"} name={"project"}></input>
                    <FlexWrapper>
                        <LinkButton type={"submit"} display={"flex"}>Send
                            <Icon iconId={"rightArrow"}/>
                        </LinkButton>

                    </FlexWrapper>
                </StyledForm>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 330px;
`

const StyledContact = styled.section`
  background-color: crimson;
`

const SocialList = styled.ul`
display: flex;
  gap: 50px;
  
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
