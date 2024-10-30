import React, { Component } from "react";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <h1>Hello world dit me may</h1>)
    }
}


root.render(<App />);