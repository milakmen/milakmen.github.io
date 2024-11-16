import React from "react";
import {
    Link,
} from "react-router-dom";
import HeaderBar from "../../components/header-bar/HeaderBar";
import "./project-list.css";

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
        <div className="projects-list-container">
            <Link to="https://github.com/shashankduhan/reflex-js">
                <div className="thumbnail">
                    <span>reflex-flow</span>
                </div>
            </Link>
            <Link to="https://interviewprojectnz.com/">
                <div className="thumbnail">
                    <span>
                        <span className="block">Interview Project</span>
                        New Zealand
                    </span>
                </div>
            </Link>
            
        </div>
    )
}

export default ProjectsListRouter;