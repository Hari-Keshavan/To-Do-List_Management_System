package com.gl.todo.CapstoneProject.mapper;

import com.gl.todo.CapstoneProject.dto.ToDoListDTO;
import com.gl.todo.CapstoneProject.entity.ToDoList;

public class ToDoListMapper {

    // Method to map ToDoList entity to ToDoListDTO
    public static ToDoListDTO mapToToDoListDto(ToDoList todoList) {
        // Create and return a new ToDoListDTO object with entity's data
        return new ToDoListDTO(
                todoList.getId(),
                todoList.getTodoTitle(),
                todoList.getTodoDescription(),
                todoList.getTodoCompleted()
        );
    }
    
    // Method to map ToDoListDTO to ToDoList entity
    public static ToDoList mapToToDoList(ToDoListDTO todoListDto) {
        // Create and return a new ToDoList object with DTO's data
        return new ToDoList(
                todoListDto.getId(),
                todoListDto.getTodoTitle(),
                todoListDto.getTodoDescription(),
                todoListDto.getTodoCompleted()
        );
    }
}
