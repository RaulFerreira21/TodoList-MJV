import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { TodoDataService } from '../todo-data.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers: [TodoDataService]
})
export class TasksComponent implements OnInit {

  newTodo:Todo = new Todo();
  toggle = true;
  status = 'Enable';
  todoEdit:Todo;
  testedit = true;

  constructor(private todoDataService: TodoDataService){

  }

  ngOnInit(): void {
    this.todoDataService.getListCards()
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

  edit(todo) {
    console.log(todo.id)
    console.log(todo.isEditable)
      this.testedit = !this.testedit
      todo.isEditable = !todo.isEditable
      // this.todoDataService.updateTodoById(todo); 
      // this.todoDataService.deleteTodoById(todo.id); 

  }

  updateTodos(){
    console.log(this.todoDataService.todos)
    this.todoDataService.postAllTodos()
  }

  getCards(){
    let teste = this.todoDataService.getListCards()
    console.log(teste)
    console.log("aqui")
  }

}
