import styled from "styled-components";

type FlexWrapperPropsType={
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    position?: string
    maxwidth?: string
    zindex?:string
    gap?:string
    margin?:string
    padding?: string
    width?: string


}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  flex-direction: ${props=>props.direction||"row"};
  justify-content: ${props=>props.justify||"flex-start"};
  align-items: ${props=>props.align||"stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  position: ${props=>props.position||"stretch"};
  max-width: ${props=>props.maxwidth||"100"};
  z-index:${props=>props.zindex||"0"} ;
  gap: ${props=>props.gap||"unset" };
  margin:  ${props=>props.margin||"unset"};
  padding: ${props=>props.padding||"unset"};
  width: ${props=>props.width||"unset"};
`