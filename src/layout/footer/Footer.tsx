import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Text} from "../../components/Text";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";
import { font } from '../../styles/Common';

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterText >Created by
                    <Name> Zarror </Name>
                    | All Reserved!
                </FooterText>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
  background-color: #a1a658;
  padding: 40px 0;
  text-align: center;
`

const Name = styled.span`
  color: ${theme.colors.font};
  font-weight: 700;
  letter-spacing: 0.3px;
`
const FooterText = styled.p`
  
${font({family:'"Poppins", sans-serif', weight:500,Fmin:16, Fmax:20, color:"rgba(255, 255, 255, 0.50)" })};
`