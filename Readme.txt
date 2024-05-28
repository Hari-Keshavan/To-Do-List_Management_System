Project Name: To-Do List Management System

Description:
This project is a web application built using Spring Boot for the backend, React for the frontend, and MySQL for the database, providing a seamless integration for efficient task management.

Features:
- RESTful API endpoints provided by Spring Boot to interact with the backend.
- Frontend built using React to create a dynamic and interactive user interface.
- Usage of React Router for client-side routing.
- Utilization of Axios for making HTTP requests from the React frontend.
- Seamless communication between the frontend and backend using JSON data format.

Requirements:
- Java JDK 20 or higher installed on your machine.
- Node.js and npm installed for running the React frontend.
- A modern web browser such as Google Chrome or Mozilla Firefox.

Setup Instructions:
1. Clone the repository from [repository URL].
2. Navigate to the 'backend' directory and run to start the Spring Boot backend server.
3. Open terminal window, navigate to the 'frontend' directory, and run `npm install` to install the required dependencies.
4. After the dependencies are installed, run `npm start` to start the React development server.
5. Open your web browser and navigate to `http://localhost:3000` to access the application.

Project Structure:
- /backend: Contains the Spring Boot backend code.
- /frontend: Contains the React frontend code.
- /sql: Contains query file and export file.

Procedure:
Backend-
1.Created project using spring initializer where all the required dependencies will be added.
2.The project is added to the eclipse workspace.
3.After packages are made according to their properties.
4.First entity class is defined according to its package.
5.Next DTO class is made to give some security and protection by hiding the actual entity class.
6.Entity and Dto classes are mapped by a class called mapper.
7.Using these the repository and service classes are assigned.
8.Finally the controller class is created.

Database-
1.The database is connected with the backend with the help of the application properties in spring boot project.

Front end-
1.npx create-react-app capstone project --template typescript used to create project on frontend.
2.Frontend is connected with the url of the backend server.
3.Respective components are made to represent the requirements for the web page.
4.Using class components and function components the components are made.
5.Through this webpage is completed and ready for using.




