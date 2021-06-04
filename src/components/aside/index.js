import React from 'react'
import LinkComponent from '../link'
import getLinks from '../../utils/navigation'
import styles from './index.module.css'

const Aside = () => {
   const links = getLinks

   return (
      <aside className={styles.navigation}>
         <div className={styles['aside-links']}>
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
      </aside>
   )
}

export default Aside
