import React from 'react';
import styled from 'styled-components';
import {Container} from '../../components/Container';
import {FlexWrapper} from '../../components/FlexWrapper';
import {Logo} from "../../components/logo/Logo";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {LinkButton} from "../../components/LinkButton";
import {Text} from "../../components/Text";
import {theme} from "../../styles/Theme";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import { S } from './Header_Styles';

const items = ["Home", "About", "Services"]

export const Header:React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

         return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
    return (<div>
                        {width< breakpoint ? <MobileMenu menuItems={items}/>
                                            :<DesktopMenu menuItems={items}/>}
        </div>
        )

};


