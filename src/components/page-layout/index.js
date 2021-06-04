import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Aside from '../aside'
import styles from './index.module.css'

const PageLayout = (props) => {
   return (
      <div className={styles.app}>
         <div className={styles.container}>
            <Aside />
            <div className={styles['inner-container']}>{props.children}</div>
         </div>
      </div>
   )
}

export default PageLayout
