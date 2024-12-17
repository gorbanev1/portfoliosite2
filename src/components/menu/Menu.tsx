import React from 'react';
import styled from "styled-components";

export const Menu= () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Services</a>
                </li>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul{
  display: flex;
  gap: 30px;
}
`