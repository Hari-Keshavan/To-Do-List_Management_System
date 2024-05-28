package com.gl.todo.CapstoneProject.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ToDoListDTO {
    
    // Attributes representing ToDoListDTO
    private Long id; // Unique identifier for the ToDoList
    private String todoTitle; // Title of the ToDoList
    private String todoDescription; // Description of the ToDoList
    private String todoCompleted; // Completion status of the ToDoList
    
}
