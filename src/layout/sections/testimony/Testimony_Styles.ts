import styled from "styled-components"

const ProsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 194px;
  @media screen  and (max-width: 1210px) {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    flex-direction: row;
    justify-content: space-evenly;
  }
  

  @media screen  and (max-width: 901px) {
    flex-wrap: wrap;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0px;
  }

  @media screen  and (max-width: 841px) {
    
    align-items: baseline;
    margin: 0 auto;
    flex-direction: column;
    max-width: 700px;
    padding: 70px 0 0 0;

  }

  @media screen  and (max-width: 550px) {
    max-width: 520px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 0 0 0;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
  }

`
const ProWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen  and (max-width: 841px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 30px;
    .value {
      display: inline-block;
      margin: -17px 0 0 0;
    }
  }
`

const StyledTestimony = styled.section`
  background: rgba(34, 42, 54, 0.95) !important;
`
const Photo = styled.img`
  width: 389px;
  height: 391px;
`



const AllWrapper = styled.div`
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  
  @media screen and (max-width: 901px) {
    width: min-content;
  }
  @media screen and (max-width: 500px) {
    padding: 40px 0;
  }

`

export const S= {
    ProsWrapper,
    ProWrapper,
    StyledTestimony,
    Photo,
    AllWrapper

}