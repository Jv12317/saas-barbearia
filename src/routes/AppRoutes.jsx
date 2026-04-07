import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import Login from '../pages/Login/Login'
import AgendamentoCliente from '../pages/Cliente/AgendamentoCliente'
import PainelRecepcionista from '../pages/Recepcionista/PainelRecepcionista'
import PainelAdmin from '../pages/Admin/PainelAdmin'

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cliente" element={<AgendamentoCliente />} />
        <Route path="/recepcionista" element={<PainelRecepcionista />} />
        <Route path="/admin" element={<PainelAdmin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes