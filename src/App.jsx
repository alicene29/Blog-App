import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route, useNavigate} from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ResetPassword from './Pages/ResetPassword';
import CreateForm from './Pages/CreateForm';






const App = () => {
  return (
    <div>
    <Navbar/> 

<Routes>
  <Route path="/" element= '<h2>home page</h2>' />
  <Route path="/register" element={<Register/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/reset" element={<ResetPassword />} />
          <Route path='/create-post' element={<CreateForm />} />



  

</Routes>


    </div>
  )
}

export default App
