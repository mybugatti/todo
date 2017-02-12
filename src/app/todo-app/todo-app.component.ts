import { Component, OnInit } from '@angular/core';
import {Todo} from "../todo";
import {TodoService} from "../todo.service";

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

  newTodo= new Todo;
  todos = this.todoService.todos;

  constructor(private todoService: TodoService) {

   /* this.todoService.zou().then((data) => {

    }); */

    console.log("zou======>", this.todoService.getAll())
  }

  ngOnInit() {}

  addTodo(){
    this.todoService.addTodo(this.newTodo);
    this.clear();
  }

  clear(){
    this.newTodo = new Todo;
  }

  removeTodo(todo){
    this.todoService.deleteTodoById(todo.id);
  }

  toggleTodoComplete(todo){
    this.todoService.toggleTodoComplete(todo);
  }

  saveToLocalStorage(){
    this.todoService.saveTodos();
  }

}
