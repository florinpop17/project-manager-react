import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }
    
    render() {
        let projectItems;
        if(this.props.projects) {
            projectItems = this.props.projects.map(project => {
                return (<ProjectItem key={project.id} onDetele={this.deleteProject.bind(this)} project={project} />);
            });
        }
        
        return (
            <div className="Projects">
                <h1>My projects</h1>
                <ul>
                    {projectItems}
                </ul>
            </div>
        );
    }
}

export default Projects;
