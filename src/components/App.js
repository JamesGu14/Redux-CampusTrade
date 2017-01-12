import React from 'react'
import MainLayout from '../containers/MainLayout'

const App = ({ children }) => (
  <div style={{ height: '100%' }}>
    <MainLayout children={children} />
  </div>
)

export default App
