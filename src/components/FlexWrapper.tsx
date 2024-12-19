import styled from "styled-components";

type FlexWrapperPropsType={
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    position?: string
    width?: string
    zindex?:string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
  flex-direction: ${props=>props.direction||"row"};
  justify-content: ${props=>props.justify||"flex-start"};
  align-items: ${props=>props.align||"stretch"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  position: ${props=>props.position||"stretch"};
  width: ${props=>props.width||"auto"};
  z-index:${props=>props.zindex||"0"} ;
`