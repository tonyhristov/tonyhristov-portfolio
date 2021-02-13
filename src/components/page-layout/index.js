import React from 'react'
import Header from '../header'

const PageLayout = (props) => {
   return (
      <div>
         <Header />

         <div>{props.children}</div>
      </div>
   )
}

export default PageLayout
