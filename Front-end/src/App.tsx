import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Login,Index,SignUp } from './Routes'

function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Index />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
  </Routes>
    </BrowserRouter>
     
  )
}

export default App
