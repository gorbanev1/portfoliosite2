import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Text} from "../../../components/Text";
import {Icon} from "../../../components/icon/Icon";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <Text>Let’s Connect</Text>
                    <FlexWrapper gap={"50px"}>
                        <Icon iconId={"group"}/>
                        <Icon iconId={"upwork"}/>
                        <Icon iconId={"youtube"}/>
                        <Icon iconId={"linkedin"}/>
                        <Icon iconId={"github"}/>
                    </FlexWrapper>
                </FlexWrapper>
                <StyledForm>
                    <label htmlFor="name">Your name:</label>
                    <input type={"text"} name={"name"}></input>
                    <label htmlFor="email">Your email address:</label>
                    <input type={"text"} name={"email"}></input>
                    <label htmlFor="project">Tell about the project:</label>
                    <input type={"text"} name={"project"}></input>
                    <FlexWrapper>
                        <Button display={"flex"}>Send
                            <Icon iconId={"rightArrow"}/>
                        </Button>

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

