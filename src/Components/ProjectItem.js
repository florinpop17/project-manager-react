import React, { Component } from 'react';

class ProjectItem extends Component {
    render() {
        return (
            <li className="Projects">
                <strong>{this.props.project.title}</strong> from {this.props.project.category}.
            </li>
        );
    }
}

export default ProjectItem;
