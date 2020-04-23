import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo'
import { TodoDataService } from '../todo-data.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TodoDataService]
})
export class EditTaskComponent implements OnInit {

  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
  }

  get todos(){
    return this.todoDataService.getAllTodos();
  }


}
