import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { TodoDataService } from '../todo-data.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TodoDataService]
})
export class TasksComponent {

  newTodo:Todo = new Todo();
  toggle = true;
  status = 'Enable';
  todoEdit:Todo;
  constructor(private todoDataService: TodoDataService){

  }

  addTodo(){
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo); 
   }

  removeTodo(todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodoById(todo){
    this.todoEdit = this.todoDataService.getTodoById(todo.id)
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }

}
