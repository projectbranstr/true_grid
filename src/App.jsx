import { useState } from 'react'
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Layout from './Layout';
import Article from './pages/Article';
import Company from './pages/Company';
import Loader from './component/atom/Loader/Loader';
import Loader2 from './component/atom/Loader2/Loader2';
import Loader3 from './component/atom/Loader3/Loader3';
import Loader4 from './component/atom/Loader3/Loader4';
// import '@mantine/core/lib/styles/index.css'; 
// import '@mantine/core/styles.css'
// import '@mantine/core/styles.layer.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Layout />}> */}
          <Route path="/" element={<Loader />} />
          <Route path="/home" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/company" element={<Company />} />
          <Route path="/loader2" element={<Loader2 />} />
          <Route path="/loader3" element={<Loader3 />} />
          <Route path="/loader4" element={<Loader4 />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
