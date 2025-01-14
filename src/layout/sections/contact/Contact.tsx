import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Icon} from "../../../components/icon/Icon";
import {LinkButton} from "../../../components/LinkButton";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

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
                                    <SocialLink href={"#"}>
                                        <Icon width={"25px"} height={"25px"} viewBox={"0 0 25 25"} iconId={s}/>
                                    </SocialLink>
                                </SocialItem>
                            })}
                        </SocialList>
                    </FlexWrapper>
                    <StyledForm>
                        <label htmlFor="name"><Text fontFamily={"Poppins, sans-serif"} fontSize={"30px"} fontWeight={"500"} lineHeight={"1.2"} margin={"0 0 30px 0"}> Your
                            name:</Text></label>
                        <input type={"text"} name={"name"}></input>
                        <label htmlFor="email"><Text fontFamily={"Poppins, sans-serif"} fontSize={"30px"} fontWeight={"500"} lineHeight={"1.2"} margin={"0 0 30px 0"}>Your email address:</Text></label>
                        <input type={"text"} name={"email"}></input>
                        <label htmlFor="project"><Text fontFamily={"Poppins, sans-serif"} fontSize={"30px"} fontWeight={"500"} lineHeight={"1.2"} margin={"0 0 30px 0"}>Tell about the project:</Text></label>
                        <input type={"text"} name={"project"} ></input>
                        <FlexWrapper>
                            <LinkButton type={"submit"} display={"flex"} bgc={"transparent"}><Text fontFamily={"Poppins, sans-serif"} fontSize={"30px"} fontWeight={"500"} margin={"0 40px 0 0 "} color={theme.colors.accent}>Send</Text>
                                <Icon iconId={"rightArrow"} width={"28px"} height={"28px"}/>
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
  width: 500px;
  outline: 1px solid rgba(255, 0, 0, 0.47);
  label {
    display: block;
   
  }
  input{
    margin: 10px 0 30px 0 ;
    font-size: 20px;
  }
  
  input:focus{
    border: none;
    outline: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: inherit;
  }
  
`

const StyledContact = styled.section`
  background-color: crimson;
  padding: 100px 0 50px 0 ;
  display: flex;
`

const SocialList = styled.ul`
  display: flex;
  gap: 50px;

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
