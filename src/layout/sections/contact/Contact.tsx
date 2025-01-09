import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Icon} from "../../../components/icon/Icon";
import {LinkButton} from "../../../components/LinkButton";
import {Container} from "../../../components/Container";

const socials = ["group", "upwork", "youtube", "linkedin", "github",]

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <FlexWrapper gap={"256px"} wrap={"wrap"}>
                    <FlexWrapper direction={"column"} gap={"30px"}>
                        <Text fontFamily={"Poppins"} fontSize={"100px"} lineHeight={"1.2"} fontWeight={"700"}>Let’s <br/> Connect</Text>
                        <SocialList>
                            {socials.map((s, index) => {
                                return <SocialItem>
                                    <SocialLink>
                                        <Icon iconId={s}/>
                                    </SocialLink>
                                </SocialItem>
                            })}
                        </SocialList>
                    </FlexWrapper>
                    <StyledForm>
                        <label htmlFor="name"><Text fontSize={"30px"} fontWeight={"500"} lineHeight={"1.2"}> Your
                            name:</Text></label>
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
            </Container>
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
