import React from 'react'
import LinkComponent from '../link'
import getLinks from '../../utils/navigation'
import styles from './index.module.css'

const Aside = () => {
   const links = getLinks

   return (
      <header className={styles.navigation}>
         <div className={styles['header-links']}>
            {links.map((navElement) => {
               return (
                  <LinkComponent
                     key={navElement.title}
                     href={navElement.link}
                     title={navElement.title}
                     type={'aside'}
                  />
               )
            })}
         </div>
      </header>
   )
}

export default Aside
