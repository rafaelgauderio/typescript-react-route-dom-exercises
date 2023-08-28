import { BrowserRouter, Route, Routes } from 'react-router-dom'
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
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path="/promotion" element={<Promotion></Promotion>}></Route>
            <Route path="/subscription" element={<Subscription></Subscription>}> </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
