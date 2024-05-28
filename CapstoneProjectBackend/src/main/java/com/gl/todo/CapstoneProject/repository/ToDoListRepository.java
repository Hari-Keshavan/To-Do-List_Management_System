package com.gl.todo.CapstoneProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.gl.todo.CapstoneProject.entity.ToDoList;

public interface ToDoListRepository extends JpaRepository<ToDoList, Long> {

}
