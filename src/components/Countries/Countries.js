import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import { CountriesContainer } from "../styles/Container.styles";
const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div >
            <h2 className="text-success mt-3 fw-bolder">All Countries: {countries.length}</h2>
            <CountriesContainer>
                {
                    countries.map(country => <Country country={country} key={country.cca3}></Country>)
                }
            </CountriesContainer>
        </div>
    )
}

export default Countries;