import React from 'react'

import { Header, Footer } from './HeaderFooter'
import Home from './pages/Home'
import Users from './pages/Users'

const BodyLayout = ({ children }) => {
  return (
    <div className="layout-main">
      <Header />
      { children || <Home /> }
      <Footer />
    </div>
  )
}

export default BodyLayout
