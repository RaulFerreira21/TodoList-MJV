import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {


  //contador de ids
  lastId: number = 0;

  // Array de To dos
  todos: Todo[] = [];

  //url da api post()
  apiUrlPost = 'https://ceep.herokuapp.com/cartoes/salvar'

  //url da api get()
  apiUrlGet = 'https://ceep.herokuapp.com/cartoes/carregar'

  constructor(private http: HttpClient) { }

   addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }


  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo =>
      todo.id !== id);
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
    return this.todos.filter(todo =>
      todo.id === id).pop();
  }


  postAllTodos(){}

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
