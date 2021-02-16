import React from 'react'
import LinkComponent from '../link'
import getLinks from '../../utils/navigation'
import styles from './index.module.css'

const Header = () => {
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
                     type={'header'}
                  />
               )
            })}
         </div>
      </header>
   )
}

export default Header
