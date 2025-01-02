import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Text} from "../../components/Text";


export const Footer = () => {
    return (
        <StyledFooter>
                <Text>Created by
                    <Name> Zarror </Name>
                    | All Reserved!
                </Text>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  background-color: #a1a658;
  margin: 50px auto;
  text-align: center;
`

const Name = styled.span`
  font-weight: bold;
`