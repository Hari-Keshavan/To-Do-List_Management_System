import React from "react";
import axios from "axios"; // Importing Axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { Button, Col, Container, Form, Row } from "react-bootstrap"; // Importing Button, Col, Container, Form, and Row from react-bootstrap
import { useNavigate, useParams } from "react-router-dom"; // Importing useNavigate and useParams hooks from react-router-dom
import "./CSS/ToDoListAddComp.css"; // Importing the CSS file for styling

// Defining RouteParams type to define parameter structure
type RouteParams = {
    id: string
}

// Interface for the structure of a to-do list item
interface TodoList {
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoCompleted: string
}

// Defining ToDoListUpdateComp functional component
const ToDoListUpdateComp: React.FC<{}> = () => {

    // Getting id from URL params
    const { id } = useParams<RouteParams>();

    // State variables to store form data and to-do list data
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoCompleted, setTodoCompleted] = useState("");
    const [myTodoLists, setMyTodoLists] = useState<TodoList>();
    const nav = useNavigate(); // Hook for navigation

    // Function to fetch to-do list data
    const searchFetchData = async () => {
        const response = await axios.get<TodoList>(
            "http://localhost:8080/api/todolists/" + id
        );
        setMyTodoLists(response.data); // Setting to-do list data
        // Setting form data with fetched values
        setTodoTitle(response.data['todoTitle']);
        setTodoDescription(response.data['todoDescription']);
        setTodoCompleted(response.data['todoCompleted']);
    };

    // Function to update to-do list data
    const updateData = async () => {
        // Creating a new data object with updated values
        const newData = {
            "id": id,
            "todoTitle": todoTitle,
            "todoDescription": todoDescription,
            "todoCompleted": todoCompleted
        };
        // Sending PUT request to update data
        await axios.put("http://localhost:8080/api/todolists/" + id, newData);
        // Alerting the user that data has been updated
        alert("A To-Do List Data Successfully Updated");
        // Navigating back to the home page
        nav("/");
    };

    // useEffect hook to run searchFetchData on component mount
    useEffect(() => {
        searchFetchData()
    }, [])

    return (
        <>
            <Container className="todo-container"> {/* Container for the whole component */}
                <Row>
                    <Col md={12}>
                        <h1>CONFIRM UPDATION</h1> {/* Heading */}
                    </Col>
                    <Col md={12}>
                        <Form className="todo-form"> {/* Form for updating to-do list */}
                            <br></br>
                            {/* Input field for entering title */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                            </Form.Group>

                            {/* Input field for entering description */}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
                            </Form.Group>

                            {/* Input field for entering completion status */}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Completed?</Form.Label>
                                <Form.Control type="text" placeholder="Enter Yes or No" value={todoCompleted} readOnly />
                            </Form.Group>

                            {/* Button for submitting the form */}
                            <div className="action-buttons">
                                <Button variant="primary"  onClick={updateData}>Submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ToDoListUpdateComp; // Exporting ToDoListUpdateComp component
