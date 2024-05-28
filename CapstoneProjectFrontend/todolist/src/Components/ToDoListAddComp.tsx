import axios from "axios"; // Importing Axios for making HTTP requests
import React, { useState } from "react"; // Importing useState hook from React
import { Form, Button, Container, Col, Row } from "react-bootstrap"; // Importing Form, Button, Container, Col, Row from react-bootstrap
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook from react-router-dom
import "./CSS/ToDoListAddComp.css"; // Importing CSS file for styling

// Defining ToDoListAddComp functional component
const ToDoListAddComp: React.FC<{}> = () => {

    // State variables to store form data
    const [id, setId] = useState(0); // ID
    const [todoTitle, setTodoTitle] = useState(""); // Title
    const [todoDescription, setTodoDescription] = useState(""); // Description
    const [todoCompleted, setTodoCompleted] = useState("No"); // Completed
    const nav = useNavigate(); // Hook for navigation

    // Function to add new to-do item
    const addtodoData = async () => {
        // Creating a new to-do item object
        const newItem = {
            "id": id,
            "todoTitle": todoTitle,
            "todoDescription": todoDescription,
            "todoCompleted": todoCompleted
        };
        // Sending POST request to add the new item
        await axios.post("http://localhost:8080/api/todolists", newItem);
        // Alerting the user that a new to-do list has been added
        alert("A New To-Do List Added");
        // Navigating back to the home page
        nav("/");
    }

    return (
        <>
            <Container className="todo-container"> {/* Container for the whole component */}
                <Row>
                    <Col md={12}>
                        <h1>ADD TO-DO LIST</h1> {/* Heading */}
                    </Col>

                    <Col md={12}>

                        <Form className="todo-form"> {/* Form for adding new to-do list */}
                            <br></br>
                            {/* Input field for entering title */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Enter Title" onChange={(e) => setTodoTitle(e.target.value)} />
                            </Form.Group>

                            {/* Input field for entering description */}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter Description" onChange={(e) => setTodoDescription(e.target.value)} />
                            </Form.Group>

                            {/* Input field for entering completion status */}
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Completed?</Form.Label>
                                <Form.Control type="text" placeholder="Enter Yes or No"  value="No" readOnly />
                            </Form.Group>

                            {/* Button for submitting the form */}
                            <div className="action-buttons">
                                <Button variant="primary" onClick={addtodoData}>Submit</Button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default ToDoListAddComp; // Exporting ToDoListAddComp component
