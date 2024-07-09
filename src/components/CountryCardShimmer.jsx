import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from "../styles/CountryCardShimmer.module.css";
import { themeContext } from '../contexts/themeContext';

function CountryCardShimmer() {
  const [isDarkMode] = useContext(themeContext);

  return (
    <Link className={[styles['country-card'], isDarkMode && styles.dark].join(' ')} to="">
        <div className={styles.flagContainer}></div>
        <div className={styles['card-text']}>
            <h3 className={styles['card-title']}></h3>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </Link>
  )
}

export default CountryCardShimmer;
