import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Icon} from "../../../components/icon/Icon";
import {LinkButton} from "../../../components/LinkButton";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import { S } from './Contact_Styles';


const socials = ["group", "upwork", "youtube", "linkedin", "github",]

export const Contact = () => {
    return (
        <S.StyledContact id={"contact"}>
            <Container>
                <S.ContactWrapper  >
                    <FlexWrapper  direction={"column"} gap={"30px"}>
                        <S.LetsConnect>Let’s Connect</S.LetsConnect>
                        <S.SocialList>
                            {socials.map((s, index) => {
                                return <S.SocialItem>
                                    <S.SocialLink href={"#"}>
                                        <Icon width={"25px"} height={"25px"} viewBox={"0 0 25 25"} iconId={s}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            })}
                        </S.SocialList>
                    </FlexWrapper>
                    <S.StyledForm>
                        <label htmlFor="name"><S.FieldName > Your
                            name:</S.FieldName></label>
                        <input type={"text"} name={"name"}></input>
                        <label htmlFor="email"><S.FieldName >Your email address:</S.FieldName></label>
                        <input type={"text"} name={"email"}></input>
                        <label htmlFor="project"><S.FieldName >Tell about the project:</S.FieldName></label>
                        <input type={"text"} name={"project"} ></input>
                        <FlexWrapper>
                            <LinkButton type={"submit"} display={"flex"} bgc={"transparent"}><Text fontFamily={"Poppins, sans-serif"} fontSize={"30px"} fontWeight={"500"} margin={"0 40px 0 0 "} color={theme.colors.accent}>Send</Text>
                                <Icon iconId={"rightArrow"} width={"28px"} height={"28px"}/>
                            </LinkButton>
                        </FlexWrapper>
                    </S.StyledForm>
                </S.ContactWrapper>
            </Container>
        </S.StyledContact>
    );
};

