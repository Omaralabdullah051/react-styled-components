import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
`;

const HeaderContainer = styled.nav`
    margin-top: 20px;
    font-weight: 900;
    & h1{
        color: darkgreen;
        font-weight: 900;
    }
    & a {
        text-decoration: none;
        margin-right: 20px;
    }
`;


const CountriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 20px;
`;

const CountryContainer = styled.div`
    background-color: ${(props) => props.color};
    border: 3px solid red;
    border-radius: 20px;
    margin: 20px;
    padding: 20px;
    & img{
        width: 200px;
        margin-top: 8px;
        margin-bottom: 12px;
    }
`;

const FooterContainer = styled.div`
    color: darkgreen;
    font-weight: 700;
`;

export { Container, HeaderContainer, CountriesContainer, CountryContainer, FooterContainer };