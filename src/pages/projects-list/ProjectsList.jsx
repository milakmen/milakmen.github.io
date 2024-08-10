import React from "react";
import {
    Link,
} from "react-router-dom";
import HeaderBar from "../../components/header-bar/HeaderBar";

function ProjectsListRouter(props) {
    
    return (
        <div className="container">
            <HeaderBar />
            <ProjectsList />
        </div>
    )
}

function ProjectsList() {
    return (
        <>
            <Link to="project1">Thumbnail 1</Link>
            <div>Thumbnail 2</div>
        </>
    )
}

export default ProjectsListRouter;