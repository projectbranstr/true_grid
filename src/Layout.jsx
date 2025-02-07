import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './component/molecule/Header/Header';

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>My Footer</footer>
        </>
    )
}

export default Layout
