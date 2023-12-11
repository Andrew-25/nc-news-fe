import { useState } from 'react'
import Header from './components/Header'
import Articles from './components/Articles'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Articles />}></Route>

      </Routes>
    </>
  )
}

export default App
