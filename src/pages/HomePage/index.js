import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import computer from '../../images/computer (1).svg'

const HomePage = () => {
   return (
      <PageLayout>
         <div className={styles.background}>
            {/* <img src={computer} alt='React Logo' className={styles.image} /> */}
         </div>
      </PageLayout>
   )
}

export default HomePage
