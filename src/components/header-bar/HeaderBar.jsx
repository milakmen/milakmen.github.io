import React from "react";
import {
    useNavigate
} from "react-router-dom";

export default function HeaderBar() {
    const navigate = useNavigate();
    const navigateBackHandler = () => {
        navigate(-1);
    }

    return (
        <>
            <header>
                <a onClick={navigateBackHandler}>&larr;</a>
            </header>

        </>
    )
}