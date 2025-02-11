import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import { S } from '../HeaderMenu_Styles';

export const Menu:React.FC<{ menuItems: Array<string>}> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.Link href="src/layout/header/headerMenu/menu/Menu">
                            {item}
                            <S.Mask><span>{item}</span></S.Mask>
                            <S.Mask><span>{item}</span></S.Mask>
                        </S.Link>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};


