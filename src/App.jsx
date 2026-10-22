import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Error from './pages/Error'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-fundo text-texto">
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produtos' element={<Produtos />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/login' element={<Login />} />
          {/* Qualquer endereço que não existe cai na página de erro 404 */}
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App