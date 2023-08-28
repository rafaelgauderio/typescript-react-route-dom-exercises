import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Subscription from './pages/Subscription'
import HomeBody from './pages/Home/HomeBody'
import Promotion from './pages/Home/Promotion'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            {/* Nagigate component para redirecionar para home*/}
            <Route index element={<Navigate to="/home"></Navigate>}></Route>
            <Route path="/home" element={<HomeBody></HomeBody>}></Route>            
            <Route path="/promotion" element={<Promotion></Promotion>}></Route>
            <Route path="/subscription" element={<Subscription></Subscription>}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
