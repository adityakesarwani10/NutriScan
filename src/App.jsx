import React from "react";
import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
function App() {

    const [searchText, setSearchText] = useState("");
    return (
        <>
            <Header searchText={searchText} />
            <Outlet context={{ setSearchText }}/>
            <Footer />
        </>
    )
}

export default App