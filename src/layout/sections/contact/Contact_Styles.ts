import styled from "styled-components";
import {font} from "../../../styles/Common";

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  outline: 1px dashed rgba(229, 16, 229, 0.68);
  @media screen and (max-width: 960px) {
    justify-content: center;
    gap: 85px;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    form {
      max-width: 100%;
    }
  }

`
const LetsConnect = styled.p`
  max-width: 438px;
  ${font({family: "Poppins, sans-serif", weight: 700, Fmin: 50, Fmax: 100})};
  @media screen and (max-width: 960px) {
    max-width: 700px;
    margin-bottom: 30px;
    margin-left: 1px;

  }

`

const FieldName = styled.p`
  ${font({family: "Poppins, sans-serif", weight: 500, Fmin: 22, Fmax: 30})}
  margin: "0 0 30px 0"
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  min-width: 200px;
  width: 100%;
  outline: 1px solid rgba(255, 0, 0, 0.47);

  label {
    display: block;
  }

  input {
    margin: 10px 0 30px 0;
    font-size: 20px;
  }

  @media screen and (max-width: 900px) {

    width: 100%;
    label {
      :nth-of-type(2)    {
        padding-top: 12px;
      }
      :nth-of-type(3)    {
        padding-top: 15px;
        padding-bottom: 10px;
      }
    }
    input {
      margin: 40px 0 30px 0;
   
    }

  }

  input:focus {
    border: none;
    outline: none;
    border-bottom: 2px solid white;
    background-color: transparent;
    color: inherit;
  }

`

const StyledContact = styled.section`
  background-color: crimson;
  padding: 100px 0 50px 0;
  display: flex;
  @media screen and (max-width: 900px) {

    padding: 55px 0 50px 0;

  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 50px;

`
const SocialItem = styled.li`

`
const SocialLink = styled.a`

`
export const S = {
    LetsConnect,
    FieldName,
    StyledForm,
    ContactWrapper,
    StyledContact,
    SocialList,
    SocialItem,
    SocialLink,


}