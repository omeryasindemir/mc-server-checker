import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ServerCheck from './pages/ServerCheck'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<ServerCheck/>} />
      </Routes>
    </React.Fragment>
  )
}

export default App