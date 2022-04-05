import React from 'react';
import { CountryContainer } from '../styles/Container.styles';
import { Area, Region } from '../styles/Element.styles';

const Country = (props) => {
    const { name, population, region, area, flags } = props.country;
    return (
        <CountryContainer color='bisque'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h5>Population:{population}</h5>
            <Area>Area: {area}</Area>
            <Region>Region: {region}</Region>
        </CountryContainer>
    );
};

export default Country;