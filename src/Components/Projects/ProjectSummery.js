import React from 'react';

const ProjectSummery = ({projects}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{projects.title}</span>
                <p>{projects.content}</p>
                <p className="grey-text">3rd Septemper, 2m</p>
            </div>
        </div>
    );
};

export default ProjectSummery;