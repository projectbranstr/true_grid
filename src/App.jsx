import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';
import Article from './pages/Article';
import Company from './pages/Company';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article" element={<Article />} />
            <Route path="/company" element={<Company />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
