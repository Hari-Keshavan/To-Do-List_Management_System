import React, { Component } from "react";
import ToDoListListComp from "./ToDoListListComp"; // Importing ToDoListListComp component
import "./CSS/HomeComp.css"; // Importing CSS file for styling

// Defining the HomeComp component
class HomeComp extends Component{

    // Rendering method for HomeComp
    render() {
        return (
          <div className="home-container"> {/* Container for the whole component */}
            <ToDoListListComp></ToDoListListComp> {/* Rendering ToDoListListComp component */}
          </div>
        );
    }

}

export default HomeComp; // Exporting HomeComp component
