package com.gl.todo.CapstoneProject.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gl.todo.CapstoneProject.dto.ToDoListDTO;
import com.gl.todo.CapstoneProject.entity.ToDoList;
import com.gl.todo.CapstoneProject.mapper.ToDoListMapper;
import com.gl.todo.CapstoneProject.repository.ToDoListRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class ToDoListService {
	
	@Autowired
	private ToDoListRepository todoListRepository;

	// Method to create a new ToDo list
	public ToDoListDTO createTodoList(ToDoListDTO todoListDto) {
		ToDoList todoList = ToDoListMapper.mapToToDoList(todoListDto); // Map DTO to entity
		ToDoList savedTodoList = todoListRepository.save(todoList); // Save ToDo list in the repository
		return ToDoListMapper.mapToToDoListDto(savedTodoList); // Map entity back to DTO and return
	}

	// Method to get a ToDo list by ID
	public ToDoListDTO getTodoListById(Long todoListId) {
		Optional<ToDoList> opt = todoListRepository.findById(todoListId); // Find ToDo list by ID
		if (opt.isPresent()) {
			ToDoList todoList = opt.get();
			return ToDoListMapper.mapToToDoListDto(todoList); // Map entity to DTO and return
		}
		return null;
	}
	
	// Method to get all ToDo lists
	public List<ToDoListDTO> getAllTodoLists() {
		List<ToDoList> todos = todoListRepository.findAll(); // Get all ToDo lists from the repository
		return todos.stream()
					.map((todo) -> ToDoListMapper.mapToToDoListDto(todo)) // Map each entity to DTO
					.collect(Collectors.toList()); // Collect DTOs into a list and return
	}
	
	// Method to update a ToDo list
	public ToDoListDTO updateTodoList(Long todoListId, ToDoListDTO updatedTodoList) {
		Optional<ToDoList> opt = todoListRepository.findById(todoListId); // Find ToDo list by ID
		ToDoList todoList = null;
		if (opt.isPresent()) {
			todoList = opt.get();
			todoList.setTodoTitle(updatedTodoList.getTodoTitle()); // Update ToDo list title
			todoList.setTodoDescription(updatedTodoList.getTodoDescription()); // Update ToDo list description
			ToDoList savedTodoList = todoListRepository.save(todoList); // Save updated ToDo list
			return ToDoListMapper.mapToToDoListDto(savedTodoList); // Map entity back to DTO and return
		}
		return null;
	}
	
	// Method to update the completion status of a ToDo list
	public ToDoListDTO updateTodoCompleted(Long todoListId, ToDoListDTO updatedTodoList) {
		Optional<ToDoList> opt = todoListRepository.findById(todoListId); // Find ToDo list by ID
		ToDoList todoList = null;
		if (opt.isPresent()) {
			todoList = opt.get();
			todoList.setTodoCompleted(updatedTodoList.getTodoCompleted()); // Update ToDo list completion status
			ToDoList savedTodoList = todoListRepository.save(todoList); // Save updated ToDo list
			return ToDoListMapper.mapToToDoListDto(savedTodoList); // Map entity back to DTO and return
		}
		return null;
	}
	
	// Method to delete a ToDo list by ID
	public void deleteTodoList(Long todoListId) {
		todoListRepository.deleteById(todoListId); // Delete ToDo list by ID
	}
}
