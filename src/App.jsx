import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticlePage from './components/articles/ArticlePage'
import Topics from './components/Topics'
import Users from './components/Users'

function App() {

  return (
    <>
      <Header />
      <Topics />
      <div className='page'>
        <Routes>
          <Route path='/' element={<Articles />}></Route>
          <Route path='/articles/:article_id' element={<ArticlePage />}></Route>
          <Route path='/users' element={<Users />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
