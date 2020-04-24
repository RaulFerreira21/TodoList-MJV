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
  apiUrlGet = 'https://ceep.herokuapp.com/cartoes/carregar?'

  usuario = "pedro@email.com.br"

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

  getListCards(){
    return this.http.get('https://ceep.herokuapp.com/cartoes/carregar?usuario=pedro@email.com.br')
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }


  getTodoById(id: number): Todo {
    return this.todos.filter(todo =>
      todo.id === id).pop();
  }


  mural = {
    email: 'pedro@email.com.br',
    todos: this.todos
  }


  postAllTodos(){
    console.log("post func")
    let td = this.todos
    console.log(td[0].title)
    // this.http.post(this.apiUrlPost,this.mural)
  }

  toggleTodoComplete(todo: Todo){
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
