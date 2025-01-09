import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Styles/App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './Styles/Styles.css'
import { View } from './Components/View'
import { Header } from './Components/Header'
import { Signup } from './Components/Signup'
import { Login } from './Components/Login'
import { Admin } from './Components/Admin'
import { Home } from './Components/Home'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='/signup'element={<Signup></Signup>} ></Route>
        <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
  //   <div className="container">
  //   <h1>LMS Project</h1>
  //   <View></View>
  // </div>
  )
}

export default App
