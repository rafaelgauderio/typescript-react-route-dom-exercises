import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Promotion from './pages/Home/Promotion'
import Subscription from './pages/Subscription'
import HomeBody from './pages/Home/HomeBody'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}>
            <Route index element={<HomeBody></HomeBody>}></Route>
            <Route path="/promotion" element={<Promotion></Promotion>}></Route>
          </Route>
          {/* rota subscription vai ser no mesmo nível que rota principal, não tem cabeçalho*/}
          <Route path="/subscription" element={<Subscription></Subscription>}> </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
