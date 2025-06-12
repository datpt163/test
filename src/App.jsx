import './App.css'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import NotFound from './pages/NotFound'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
