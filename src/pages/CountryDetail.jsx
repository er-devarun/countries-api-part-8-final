import React, { useContext, useEffect, useState } from 'react'
import "../styles/CountryDetail.css";
import { Link, useLocation, useParams } from 'react-router-dom';
import { themeContext } from '../contexts/themeContext';
import CountryDetailShimmer from '../components/CountryDetailShimmer';


function CountryDetail() {
  // const countryName = new URLSearchParams(window.location.search).get("name");
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [isCountryFound, setIsCountryFound] = useState(false);
  const location = useLocation();
  const [isDarkMode] = useContext(themeContext);
  function updateCountryDetail(data){
    setCountryData({
      name: data.name.common || data.name,
      flag: data.flags.svg,
      nativeName: Object.values(data.name.nativeName || {})[0]?.common,
      population: data.population,
      region: data.region,
      subRegion: data.subregion,
      capital: data.capital,
      tld: data.tld,
      currencies: Object.values(data.currencies || {}).map((currency) => currency.name).join(", "),
      languages: Object.values(data.languages || {}).join(", "),
      // borders: data.hasOwnProperty("borders") ? data.borders.join(", ") : "--",
      borders: [],
    })

    if(!data.borders){
      data.borders = [];
    }

    Promise.all(data.borders.map((border) => {
      return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => borderCountry.name.common);
    }))
    .then((data) => {
      setCountryData((preData) => ({...preData, borders: data}))
    })
  }

  useEffect(() => {

    if(location.state){
      updateCountryDetail(location.state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then(res => res.json())
    .then(([data]) => {
      updateCountryDetail(data);
    })
    .catch((err) => {
      // console.log(err);
      setIsCountryFound(true);
    })
  }, [countryName]);

  console.log(countryData?.borders);

  if(isCountryFound){
    return <p>Country Not Found!! or Failed to Fetch!!</p>
  }

  return (
    <main className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        {
          countryData === null ? <CountryDetailShimmer/> : (
          <div className="country-details">
            <img src={countryData.flag} alt={countryData.name} />
            <div className="details-text-container">
              <h1>{countryData.name}</h1>
              <div className="details-text">
                <p><b>Native Name: </b><span className="native-name">{countryData.nativeName || countryData.name}</span></p>
                <p><b>Population: </b><span className="population">{countryData.population.toLocaleString("en-IN")}</span></p>
                <p><b>Region: </b><span className="region">{countryData.region}</span></p>
                <p><b>Sub Region: </b><span className="sub-region">{countryData.subRegion}</span></p>
                <p><b>Capital: </b><span className="capital">{countryData.capital?.join(", ")}</span></p>
                <p>
                  <b>Top Level Domain: </b><span className="top-level-domain">{countryData.tld}</span>
                </p>
                <p><b>Currencies: </b><span className="currencies">{countryData.currencies}</span></p>
                <p><b>Languages: </b><span className="languages">{countryData.languages}</span></p>
              </div>
              {
                countryData.borders.length !==0 && <div className="border-countries"><b>Border Countries: </b>&nbsp;{countryData.borders.map((border) => <Link to={`/${border}`}>{border}</Link>)}</div>
              }
            </div>
          </div>
          )
        }
        
      </div>
    </main>
  )
}

export default CountryDetail;
