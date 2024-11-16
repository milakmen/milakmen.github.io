import React from "react";
import {
    useNavigate
} from "react-router-dom";
import "./header-bar.css";

export default function HeaderBar() {
    const navigate = useNavigate();
    const navigateBackHandler = () => {
        navigate(-1);
    }

    return (
        <>
            <header>
                <div class="header-content">
                <a className="back-navigator" onClick={navigateBackHandler}>&larr;</a>
                <span>Shashank Duhan</span>
                </div>
                
            </header>

        </>
    )
}