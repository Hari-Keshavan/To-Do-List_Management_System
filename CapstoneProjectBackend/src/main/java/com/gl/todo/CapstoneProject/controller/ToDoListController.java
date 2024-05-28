package com.gl.todo.CapstoneProject.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gl.todo.CapstoneProject.dto.ToDoListDTO;
import com.gl.todo.CapstoneProject.service.ToDoListService;

import lombok.AllArgsConstructor;

@CrossOrigin("*") // Allows cross-origin requests from any origin
@AllArgsConstructor // Lombok annotation to generate a constructor with all arguments
@RestController // Marks this class as a REST controller
@RequestMapping("/api/todolists") // Base URL for all end points in this controller
public class ToDoListController {

    @Autowired
    private ToDoListService todoService; // Injecting ToDoListService

    // Endpoint to create a new ToDo list
    @PostMapping
    public ResponseEntity<ToDoListDTO> createTodo(@RequestBody ToDoListDTO todoListDto) {
        ToDoListDTO todoList = todoService.createTodoList(todoListDto); // Create ToDo list
        return new ResponseEntity<>(todoList, HttpStatus.CREATED); // Return the created ToDo list
    }
    
    // Endpoint to get a ToDo list by ID
    @GetMapping("{id}")
    public ResponseEntity<ToDoListDTO> getTodoById(@PathVariable("id") Long todoListId) {
        ToDoListDTO todoListDto = todoService.getTodoListById(todoListId); // Get ToDo list by ID
        return ResponseEntity.ok(todoListDto); // Return the ToDo list found
    }

    // Endpoint to get all ToDo lists
    @GetMapping
    public ResponseEntity<List<ToDoListDTO>> getAllTodoList() {
        List<ToDoListDTO> todoList = todoService.getAllTodoLists(); // Get all ToDo lists
        return ResponseEntity.ok(todoList); // Return all ToDo lists
    }
    
    // Endpoint to update a ToDo list
    @PutMapping("{id}")
    public ResponseEntity<ToDoListDTO> updateTodoList(@PathVariable("id") Long todoListId, @RequestBody ToDoListDTO updateTodoList) {
        ToDoListDTO todoListDto = todoService.updateTodoList(todoListId, updateTodoList); // Update ToDo list
        return ResponseEntity.ok(todoListDto); // Return the updated ToDo list
    }
    
    // Endpoint to update the completion status of a ToDo list
    @PutMapping("/updatestatus/{id}")
    public ResponseEntity<ToDoListDTO> updateTodoCompleted(@PathVariable("id") Long todoListId, @RequestBody ToDoListDTO updateTodoList) {
        ToDoListDTO todoListDto = todoService.updateTodoCompleted(todoListId, updateTodoList); // Update ToDo completion status
        return ResponseEntity.ok(todoListDto); // Return the updated ToDo list
    }

    // Endpoint to delete a ToDo list by ID
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTodoList(@PathVariable("id") Long todoListId) {
        todoService.deleteTodoList(todoListId); // Delete ToDo list
        return ResponseEntity.ok("A To-Do-List deleted successfully"); // Return success message
    }
}
