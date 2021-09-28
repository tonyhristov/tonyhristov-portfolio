import React from 'react'
import PageLayout from '../../components/page-layout'
import styles from './index.module.css'
import computer from '../../images/computer (1).svg'

const HomePage = () => {
   return (
      <PageLayout>
         <div className={styles.container}>
            <div className={styles['text-container']}>
               <h1 className={styles.text}>
                  I am passionate about learning new things every day, trying
                  out new technologies, and developing a large variety of
                  skills. My vastest interest is the development of web
                  applications, from the Back-End to the Front-End.
               </h1>
               <h1 className={styles.text}>
                  I want to showcase my skills and become a better professional.
                  I am responsible and result-oriented. I love challenges and
                  know how to organize my work.
               </h1>
            </div>
         </div>
      </PageLayout>
   )
}

export default HomePage
