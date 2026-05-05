import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route, useNavigate} from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Navbar/>

<Routes>
  <Route path='/' element= '<h2>home page</h2>' />
</Routes>


    </div>
  )
}

export default App
