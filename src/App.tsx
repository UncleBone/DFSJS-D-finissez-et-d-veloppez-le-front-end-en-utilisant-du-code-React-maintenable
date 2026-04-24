import { type FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.tsx'


// Anti-pattern 11 — Routing dans App.tsx — idéalement : module dédié.
export const App: FC = () => 
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )