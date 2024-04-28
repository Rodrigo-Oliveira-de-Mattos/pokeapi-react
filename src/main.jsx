import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/index.jsx'
import PokePage from './pages/PokePage/index.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/pokeapi-react/",
    element: <App />,
    children: [
      {
        path: "/pokeapi-react/",
        element: <Home />,
      },
      {
        path: "/pokeapi-react/poke-info/:id",
        element: <PokePage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
