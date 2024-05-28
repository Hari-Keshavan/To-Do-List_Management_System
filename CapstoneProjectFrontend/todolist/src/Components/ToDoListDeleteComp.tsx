import React from "react";
import axios from "axios"; // Importing Axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { Col, Container, Row } from "react-bootstrap"; // Importing Col, Container, and Row from react-bootstrap
import { useParams, useNavigate } from "react-router-dom"; // Importing useParams and useNavigate hooks from react-router-dom
import "./CSS/ToDoListDeleteComp.css"; // Importing the CSS file for styling

// Defining RouteParams type to define parameter structure
type RouteParams = {
    id: string
}

// Defining TodoList interface for the structure of a to-do list item
interface TodoList {
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoCompleted: string
}

// Defining ToDoListDeleteComp functional component
const ToDoListDeleteComp: React.FC<{}> = () => {

    // Getting id from URL params
    const { id } = useParams<RouteParams>();

    // State variables to store to-do list data and for navigation
    const [myTodoList, setmyTodoLists] = useState<TodoList>();
    const nav = useNavigate();

    // Function to fetch to-do list data based on id
    const searchFetchData = async () => {
        const response = await axios.get<TodoList>(
            "http://localhost:8080/api/todolists/" + id
        );
        setmyTodoLists(response.data);
    };

    // Function to delete to-do list data
    const deleteData = async () => {
        await axios.delete("http://localhost:8080/api/todolists/" + id);
        alert("A To-Do List Data Successfully Deleted");
        nav("/");
    };

    // useEffect hook to run searchFetchData on component mount
    useEffect(() => {
        searchFetchData()
    }, [])

    return (
        <>
            <Container className="confirmation-container"> {/* Container for the whole component */}
                <Row>
                    <Col md={12}>
                        <h1>CONFIRM DELETION</h1> {/* Heading */}
                    </Col>
                    <Col md={12}>
                        <br /><br />
                        <div className="confirmation-info"> {/* Div for displaying to-do list info */}
                            <span>ID: </span>{myTodoList?.id} {/* Displaying ID */}
                            <br /><br />
                            <span>Title: </span>{myTodoList?.todoTitle} {/* Displaying Title */}
                            <br /><br />
                            <span>Description: </span>{myTodoList?.todoDescription} {/* Displaying Description */}
                            <br /><br />
                            <span>Completed?: </span>{myTodoList?.todoCompleted} {/* Displaying Completion Status */}
                            <br />
                        </div>
                        <div className="confirmation-buttons"> {/* Div for buttons */}
                            <button className="btn btn-danger" onClick={deleteData}>Delete</button> {/* Button to delete */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ToDoListDeleteComp; // Exporting ToDoListDeleteComp component
