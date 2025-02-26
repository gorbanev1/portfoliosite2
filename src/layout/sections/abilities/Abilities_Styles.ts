import styled from "styled-components";
import {font} from "../../../styles/Common";

const Experience = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: -45px 0 0 0;
  padding:0px 0 40px 0px;
  @media screen and (max-width: 1394px) {
    flex-direction: row;
    margin: 0 auto;

  }
  @media screen and (max-width: 566px) {
    p:first-child{
      margin-top: 30px;
    }
  }

`
const TextExperience = styled.p`
  display: inline-block;
  width: 207px;
  font-family: Playfair Display, sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-top: -40px;
  ${font({family: "Playfair Display, sans-serif", weight: 700, Fmin: 26, Fmax: 40, lineHeight: 1.8})};
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
  @media screen and (max-width: 1394px) {
    padding: 30px 0 0 60px ;
    max-width: fit-content;
    width: 100%;
    margin-top: 35px;
  }
  @media screen and (max-width: 1394px) {
    padding: 30px 0 0 20px
  }

  
  

`
const AbilitiesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 90px;
  @media screen and (max-width: 1394px) {
    margin: 0 auto;
  }

  h3 {
    margin: 0 0 20px 0;
    ${font({family: '"Poppins", serif', weight: 700, Fmin: 24, Fmax: 40, lineHeight: 1.8})};
    @media screen and (min-width: 1440px) {
      font-size: 40px;
    }
    @media screen and (max-width: 1394px) {
      padding: 16px 0 48px;
    }

  }

`
const StyledAbilities = styled.section`
  background-color: #222A36 !important;
  
  display: flex;
  padding: 100px 0;
  @media screen and (max-width: 600px) {
    padding: 0px 20px 0px;
  }
`
const AbilityWrapper = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  @media screen and (max-width: 1093px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px;
  }

`

export const S = {
    Experience,
    TextExperience,
    AbilitiesSection,
    StyledAbilities,
    AbilityWrapper


}