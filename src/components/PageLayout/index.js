import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from './index.module.css'

const PageLayout = (props) => {
  return (
    <div className={styles.app} >
      <Header />
      <main>
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default PageLayout;