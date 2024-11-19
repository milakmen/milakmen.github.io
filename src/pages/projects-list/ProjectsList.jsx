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
            <Link to="https://github.com/shashankduhan/reflex-js" className="link">
                <div className="thumbnail">
                    <span>reflex-flow</span>
                </div>
            </Link>
            <Link to="https://interviewprojectnz.com/" className="link">
                <div className="thumbnail">
                    <span>
                        <span className="block">Interview Project</span>
                        New Zealand
                    </span>
                </div>
            </Link>
            <Link to="/projects/preloader-football" className="link">
                <div className="thumbnail">
                    <span>
                        <span className="block">Preloader Football</span>
                    </span>
                </div>
            </Link>
            <Link to="/projects/card-widget" className="link">
                <div className="thumbnail">
                    <span>
                        <span className="block">Card Widget</span>
                    </span>
                </div>
            </Link>
        </div>
    )
}

export default ProjectsListRouter;