import React from "react";
import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
function App() {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default App