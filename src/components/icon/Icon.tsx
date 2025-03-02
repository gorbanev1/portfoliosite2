import React from 'react';
import iconsSprite from "./../../assets/images/icons-sprite.svg"
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
    display?: string
    margin?: string
    onClick?: Function
}

export const Icon = (props: IconPropsType) => {
    return (

        <svg  width={props.width || "50px"} height={props.height || "50px"} viewBox={props.viewBox || "0 0 30 30"}
             fill="none" xmlns="http://www.w3.org/2000/svg" >
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};

