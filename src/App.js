import React from "react";
import ReactPortfolio from "./components/ReactPortfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {

    return (
    <div style={{backgroundColor: "#d1c5ba", fontSize: '25px', fontFamily: 'monospace'}}>
        <Header />
        <ReactPortfolio />
        <Footer />
    </div>

    )
}

export default App;
