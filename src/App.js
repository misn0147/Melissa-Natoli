import React, { useState } from "react";
import Nav from "../src/components/Nav";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Home from "../src/components/Home";
import Footer from '../src/components/Footer';


function App() {
    // Using useState, set the default value for currentPage to 'Home'
    const [currentPage, handlePageChange] = useState("Home");
    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            default:
                return <Home />;
        }
    };
    return (
        <div>
            <main>
                <Nav
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />

                <div>{renderPage(currentPage)}</div>

                <Footer></Footer>
            </main>
        </div>
    );
}

export default App;
