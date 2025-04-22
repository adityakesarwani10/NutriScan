import React from "react";
import Header from "./Component/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import { useState } from "react";
function App() {

    const [searchText, setSearchText] = useState("");
    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />

                    <div className="flex-grow">
                        <Outlet />
                    </div>
                <Footer />
            </div>
        </>
    )
}

export default App