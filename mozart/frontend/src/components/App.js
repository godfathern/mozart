import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./HomePage";



const container = document.getElementById("app");
const root = createRoot(container);

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <HomePage/>                
            
            </div>
        )
    }
}


root.render(<App name="harry" />);