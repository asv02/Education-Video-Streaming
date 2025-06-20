import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Body from './components/Body.jsx'
import Watch from './components/Watch.jsx'
import MainContainer from './components/MainContainer.jsx'



const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      Component: App,
      children:
        [
          {
            path: "/",
            Component:MainContainer,
      },
      {
        path:"/watch",
        Component:Watch
      }
        ]
    }
  ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
