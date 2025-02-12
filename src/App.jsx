import { useState } from 'react'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';
import Article from './pages/Article';
import Company from './pages/Company';
// import '@mantine/core/lib/styles/index.css'; 
// import '@mantine/core/styles.css'
// import '@mantine/core/styles.layer.css'
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
