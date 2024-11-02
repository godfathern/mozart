import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { 
    BrowserRouter as Router,
    Route,
    Routes,
    } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
        <Router>
            <Routes>
                <Route path="/" element={<p>This is the homepage</p>} />
                <Route path="/join" element={<RoomJoinPage />} />
                <Route path="/create" element={<CreateRoomPage />} />
            </Routes>
        </Router>
        );
    }

}