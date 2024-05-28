import axios from "axios"; // Importing Axios for making HTTP requests
import React, { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import { Col, Container, Row } from "react-bootstrap"; // Importing Col, Container, and Row from react-bootstrap
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

// Interface for the structure of a to-do list item
interface TodoList {
    id: number,
    todoTitle: string,
    todoDescription: string,
    todoCompleted: string
}

// Defining ToDoListListComp functional component
const ToDoListListComp: React.FC<{}> = () => {

    // State variables to store to-do list data and completed status
    const [todoData, setTodoData] = useState<TodoList[]>([]);
    
    // Function to fetch to-do list data
    const searchFetchData = async () => {
        const response = await axios.get<TodoList[]>(
            "http://localhost:8080/api/todolists"
        );
        setTodoData(response.data);
    };

    // useEffect hook to run searchFetchData on component mount
    useEffect(()=>{
        searchFetchData();
    },[])

    // Function to mark a to-do item as completed
    const completed = async (id:number) => {
        await axios.put (`http://localhost:8080/api/todolists/updatestatus/${id}`, {
            todoCompleted: "Yes",   
        });
        searchFetchData();
    };

    // Function to mark a to-do item as incomplete
    const incompleted = async (id:number) => {
        await axios.put (`http://localhost:8080/api/todolists/updatestatus/${id}`, {
            todoCompleted: "No",   
        });
        searchFetchData();
    };
   
    return(
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>LIST OF TODOS</h1> {/* Heading */}
                    </Col>
                    <Col md={12}>
                        <br></br>
                        {/* Link to navigate to the add to-do page */}
                        <Link to={"/todoadd"} className="btn btn-primary">Add To-Do</Link>
                        <br /><br />
                        {/* Table to display the list of to-dos */}
                        <table  className="table table-striped" border={3}>
                            <thead>
                                <tr>
                                    <th>Todo Title</th>
                                    <th>Todo Description</th>
                                    <th>Todo Completed</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            {/* Mapping through the to-do list data */}
                            {todoData.map((temp) => (
                                <tbody key={temp.id}>
                                    <tr key={temp.id}>
                                        {/* Displaying to-do item details */}
                                        <td>{temp.todoTitle}</td>
                                        <td>{temp.todoDescription}</td>
                                        <td>{temp.todoCompleted}</td>
                                        {/* Button to update to-do item */}
                                        <td> <Link className="btn btn-info" to={`/todoupdate/${temp.id}`}>Update</Link></td>
                                        {/* Button to delete to-do item */}
                                        <td> <Link className="btn btn-danger" to={`/tododelete/${temp.id}`}>Delete</Link></td>
                                        {/* Button to mark to-do item as completed */}
                                        <td><button className="btn btn-success" onClick={()=>completed(temp.id)}>Complete</button></td>
                                        {/* Button to mark to-do item as incomplete */}
                                        <td><button className="btn btn-info" onClick={()=>incompleted(temp.id)}>Incomplete</button></td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </Col>
                </Row>
            </Container>
        </>
    )

}

export default ToDoListListComp; // Exporting ToDoListListComp component
