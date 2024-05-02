import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { ThemeProvider } from './contexts/theme-context'
import { CountProvider } from './contexts/count'

import './reset.css'

function App() {

  return (
    <ThemeProvider>
      <Header />
      <CountProvider>
        <Outlet />
      </CountProvider>
    </ThemeProvider>
  )
}

export default App