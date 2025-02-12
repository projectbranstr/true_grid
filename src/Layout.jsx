import React, { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import Header from './component/molecule/Header/Header.jsx';
import Footer from './component/molecule/Footer/Footer.jsx';
import Loader from './component/atom/Loader/Loader.jsx';
import NestedTable from './component/sectiontemplate/NestedTable/NestedTable.jsx';

function Layout() {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {

    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     });

    //     return () => clearTimeout(timer);
    // }, []);

    return (
        <>
            {/* <Loader /> */}
            {/* <NestedTable /> */}

            {/* {loading ? <Loader /> : */}
                <>
                    <Header />
                    <main>
                        <Outlet />
                    </main>
                    <Footer />
                </>

            {/* } */}
        </>
    )
}

export default Layout







