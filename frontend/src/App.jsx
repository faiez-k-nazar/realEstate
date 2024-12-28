import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Signin from './Pages/Signin'
import About from './Pages/About'
import Profile from './Pages/Profile'
import Header from "./Components/Header"
import SignUp from "./Pages/SignUp"
import PrivateRoute from "./Components/PrivateRoute"


function App() {
  return(
<BrowserRouter>

  <Header/>
  <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path='/sign-in' element={<Signin/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route element={<PrivateRoute/>}>
    <Route path='/profile' element={<Profile/>}/>
    </Route>
    
  </Routes>

  </BrowserRouter>
  )
  
}

export default App