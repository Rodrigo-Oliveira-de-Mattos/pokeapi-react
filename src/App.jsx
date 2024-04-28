import { Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import './reset.css'

function App() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App