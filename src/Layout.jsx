import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './component/molecule/Header/Header.jsx';
import Footer from './component/molecule/Footer/Footer.jsx';
 
function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

export default Layout
