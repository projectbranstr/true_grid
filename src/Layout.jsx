import React from 'react'
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>My Header</header>
            <main>
                <Outlet />
            </main>
            <footer>My Footer</footer>
        </div>
    )
}

export default Layout
