
import './App.css'
import Login from './component/login'
import Registration from './component/Registration'
import Home from './component/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
   <div className='App'>
   <BrowserRouter>
   <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
   </Routes>
   </BrowserRouter>
   {/* <Login/>  */}
   {/* <Registration/>   */}
  {/* <Home/> */}
   </div>
  )
}

export default App
