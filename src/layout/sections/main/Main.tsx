import React, {useEffect, useState} from 'react';
import {Icon} from "../../../components/icon/Icon";
import photo from '../../../assets/images/Face.webp'
import photo2 from '../../../assets/images/Face2.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {LinkButton} from "../../../components/LinkButton";
import {Container} from "../../../components/Container";
import { S } from './Main_Styles';


export const Main:React.FC = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);

        };
        // console.log(windowWidth)
        window.addEventListener('resize', handleResize);

        // Очистка эффекта
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <S.StyledMain>

            <Container maxwidth={"1440px"} padding={"0"}>
                <S.MainWrapper>
                   {/* <div style={{width: "400px",height: "400px"}}></div>*/}
                    {windowWidth>400&&<S.Photo width={`${721 * (Math.min(windowWidth,1440) / 1440)}px`} height={`${721 * (Math.min(windowWidth,1440) / 1440)}px`}                           src={photo}/>}
                    {windowWidth<=400&&<S.Photo width={`375px`} height={`450px`} src={photo2} />}

                     <S.MainTextWrapper>
                        <S.MainText top={`${175 * (Math.min(windowWidth,1440) / 1440)}px`} left={`${118 * (Math.min(windowWidth,1440) / 1440)}px`} >
                            <S.Name >
                                Hello! <br/>
                                I’m Zarror Nibors
                            </S.Name>
                            <S.MainHWrapper >
                                <S.MainTitle>
                                    I’am freelance <span>web developer</span> based in Indonesia who loves to craft
                                    attractive design experiences
                                    for the web.
                                </S.MainTitle>
                                <FlexWrapper direction={"row"} margin={"40px 0 0 0"} width={"100%"} height={"64px"}>
                                    <LinkButton width={`${160+43*((windowWidth-375)/(1440-375))}px`} height={`${50+14*((windowWidth-375)/(1440-375))}px`} gap={"10px"}>
                                        <Icon iconId={"email"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                        <S.ButtonText>Email me</S.ButtonText>
                                    </LinkButton>
                                    <S.Link href={"www.google.com"} width={`${160+43*((windowWidth-375)/(1440-375))}px`} height={`${50+14*((windowWidth-375)/(1440-375))}px`}>
                                        <S.ButtonText >
                                            <Icon iconId={"cv"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"}/>
                                            <span> Download CV</span>
                                        </S.ButtonText>
                                    </S.Link>
                                </FlexWrapper>
                            </S.MainHWrapper>
                        </S.MainText>
                    </S.MainTextWrapper>
                </S.MainWrapper>
            </Container>
        </S.StyledMain>
    );
};

