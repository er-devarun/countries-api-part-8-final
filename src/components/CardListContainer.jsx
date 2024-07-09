import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard';
import CountryCardShimmerContainer from './CountryCardShimmerContainer';

function CardListContainer({filterByCountry, filterByRegion}) {

  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => setCountriesData(data));
  }, []);

  return (
    countriesData.length === 0 ? <CountryCardShimmerContainer/> : (
    <div className='countries-container'>
      {countriesData
      .filter((country) => country.name.common.toLowerCase().includes(filterByCountry.toLowerCase()) && country.region.toLowerCase().includes(filterByRegion.toLowerCase())
      )
      .map((country) => <CountryCard key={country.name.common} flagImg={country.flags.svg} name={country.name.common} population={country.population} region={country.region} capital={country.capital?.[0]} data={country}/>)}  
    </div>)
  )
}

export default CardListContainer;
