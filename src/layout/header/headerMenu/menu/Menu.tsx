import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import { S } from '../HeaderMenu_Styles';

const menuItems = [
    {
        title: "Home",
    href: "home"
    },
    {
        title: "About",
        href: "about"
    },
    {
        title: "Services",
        href: "services"
    }]

export const Menu:React.FC = () => {
    return (
        <ul>
            {menuItems.map((item, index) => {
                return (
                    <S.MenuItem key={index}>
                        <S.NavLink
                            activeClass="active"
                            to={item.href}
                            smooth={true}
                            spy={true}
                        >
                            {item.title}
                            <S.Mask><span>{item.title}</span></S.Mask>
                            <S.Mask><span>{item.title}</span></S.Mask>
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
        </ul>
    );
};


