import React from 'react'
import CountryCardShimmer from './CountryCardShimmer';
import styles from "../styles/CountryCardShimmer.module.css";

function CountryCardShimmerContainer() {
  // let arr = new Array(10).fill(1);
  return (
    <div className={styles['countries-container']}>
      {Array.from({length:12}).map((el, idx) => <CountryCardShimmer key={idx}/>)}
    </div>
  )
}

export default CountryCardShimmerContainer;
