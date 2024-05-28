package com.gl.todo.CapstoneProject.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="todolist") // Table name in the database
public class ToDoList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-generated ID
    private Long id; // Unique identifier for ToDoList

    @Column(name="title") // Column name in the database
    private String todoTitle; // Title of the ToDoList

    @Column(name="description") // Column name in the database
    private String todoDescription; // Description of the ToDoList
    
    @Column(name="completed") // Column name in the database
    private String todoCompleted; // Completion status of the ToDoList
}
