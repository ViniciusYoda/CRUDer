import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Post from './pages/Post/post'
import Edit from './pages/Edit/edit'
import Feed from './pages/Feed/feed'
import LerMais from './pages/LerMais/lermais'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={<Feed />}/>
        <Route path="/post" element={<Post />}/>
        <Route path="/edit/:id" element={<Edit />}/>
        <Route path="/lermais" element={<LerMais />}/>
      </Routes>
    </Router>
  )
}