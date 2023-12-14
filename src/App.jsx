import { useState } from 'react'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Header from './components/Header'
import Articles from './components/Articles'
import ArticlePage from './components/articles/ArticlePage'
import Topics from './components/Topics'
import Users from './components/Users'
import Filters from './components/Filters'
import Error from './components/Error'

function App() {
  return (
    <>
      <Header />
      <Topics />
      <div className='page'>
        <Routes>
          <Route path='/' element={<><Articles /><Filters /></>} ></Route>
          <Route path='/articles' element={<><Articles /><Filters /></>}></Route>
          <Route path='/articles/:article_id' element={<ArticlePage />}></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/*' element={<Error msg={'Invalid path'}/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
