import { Injectable } from '@angular/core';
import {Todo} from "./todo";
import {Http, Response, Headers}          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  lastId : number = 0 ;
  todos : Todo[] = [];
  private baseUrl: string = 'https://api.zoutravel.fr';

  constructor(private http: Http) {}

  zou(){


    return new Promise((resolve, reject) => {

      var url ="https://api.zoutravel.fr/users.json";
      let headers = new Headers({'Content-Type': 'application/json'});

      this.http.get(url, {headers: headers}).map(res => res.json()).subscribe(res => {

        var dara = JSON.parse(JSON.stringify(res || null ))
        console.log("======>",dara)
        resolve(dara)

      }, (err) => {
        reject(err);
      });
    });

  }

  createFood() {
    return this.http.get('https://api.zoutravel.fr/users.json').map((res:Response) => res.json());
  }

  getAll() {
    return this.http.get('https://api.zoutravel.fr/users.json')
      .map(data => {
        data.json();
        return data;
      });

  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  deleteTodoById(id: number): TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

  addTodo(todo: Todo): TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  saveTodos(){
    let storage = this.getAllTodos();
    localStorage.setItem("todos",JSON.stringify(storage));
  }

}
