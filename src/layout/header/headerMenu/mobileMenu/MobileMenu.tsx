import React, {useState} from 'react';
import { LinkButton } from '../../../../components/LinkButton';
import { S } from '../HeaderMenu_Styles';
import {Menu} from "../menu/Menu";

export const MobileMenu:React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = ()=>{
        setMenuIsOpen((!menuIsOpen))
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={()=>setMenuIsOpen(false) }>
            <Menu />
                <LinkButton width={"157px"} height={"50px"} margin={"171px 0 0 0 "}>Contact me</LinkButton>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};




