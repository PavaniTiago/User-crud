import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from './home/Home'
import  Users  from './users/Users'

export default props => 
   (
    <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/' element={<Home />}/>
    </Routes>
  )

