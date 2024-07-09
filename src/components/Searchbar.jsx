import React from 'react'

function Searchbar({setFilterByCountry, setFilterByRegion}) {

  return (
    <div className="search-filter-container">
        <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for a country..." onChange={(e) => setFilterByCountry(e.target.value)}/>
        </div>
        <select className="filter-by-region" onChange={(e) => setFilterByRegion(e.target.value)}>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
    </div>
  )
}

export default Searchbar;
