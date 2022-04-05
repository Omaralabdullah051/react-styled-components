import React from 'react';
import { HeaderContainer } from '../styles/Container.styles';
import { StyledTitle } from '../styles/Element.styles';


const Header = () => {
    return (
        <HeaderContainer>
            <StyledTitle text="Welcome To Everyone" color="orange"></StyledTitle>
            <h1>Welcome To MY Rest Countries</h1>
            <a href="/home">Home</a>
            <a href="/contact">Contact</a>
            <a href="/about">About Us</a>
        </HeaderContainer>
    );
};

export default Header;