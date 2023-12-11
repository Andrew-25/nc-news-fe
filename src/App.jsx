import { useState } from 'react'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticlePage from './components/articles/ArticlePage'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Articles />}></Route>
        <Route path='/articles/:article_id' element={<ArticlePage />}></Route>
      </Routes>
    </>
  )
}

export default App
