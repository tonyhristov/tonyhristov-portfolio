import React from 'react'
import Header from '../header'
import Footer from '../footer'
import styles from './index.module.css'

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            {/*<div className={styles.container}>*/}
                <Header/>
                <div className={styles['inner-container']}>{props.children}</div>
                {/*<Footer/>*/}
            {/*</div>*/}
        </div>
    )
}

export default PageLayout
