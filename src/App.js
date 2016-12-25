import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects: []
        }
    }
    
    componentWillMount() {
        this.setState({
            projects: [
                {
                    title: 'Business Website',
                    category: 'Web Design'
                },
                {
                    title: 'Social App',
                    category: 'Mobile Dev'
                },
                {
                    title: 'Ecommerce Shopping Cart',
                    category: 'Web Dev'
                }
            ]
        });
    }
    
    render() {
        return (
            <div className="App">
                <AddProject />
                <Projects projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
