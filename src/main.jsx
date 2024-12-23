import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom"

import ROUTER from "./router/Router"
import "./App.css"
import "./Responsive.css"
import "./style/Style.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={ROUTER} />
  </StrictMode>,
)
