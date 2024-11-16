import React from "react";
import { Link } from "react-router-dom";
import "./landing-page.css"

export default function LandingPage() {


    return (
        <header className="App-header">
            <h1>Shashank Duhan | Portfolio</h1>
            <Link to="/projects" className="browse-button">Browse &rarr;</Link>
        </header>
    )
}