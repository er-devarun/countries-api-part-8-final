import React, { useContext, useState } from 'react'
import CardListContainer from '../components/CardListContainer';
import Searchbar from '../components/Searchbar';
import { themeContext } from '../contexts/themeContext';

function Home() {
  const [filterByCountry, setFilterByCountry] = useState("");
  const [filterByRegion, setFilterByRegion] = useState("");
  const [isDarkMode] = useContext(themeContext);

  return (
    <main className={`${isDarkMode ? 'dark' : ''}`}>
        <Searchbar setFilterByCountry={setFilterByCountry} setFilterByRegion={setFilterByRegion}/>
        <CardListContainer filterByCountry={filterByCountry} filterByRegion={filterByRegion}/> 
    </main> 
  )
}

export default Home;
