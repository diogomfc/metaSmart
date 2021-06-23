
import React from 'react'

//styles global
import '../styles/global.scss';
import styles from '../styles/app.module.scss';

//Componetes
import Header from '../components/Header';


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.wrapper}>
      <main>
        <Header title="Página Geral" />
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp





