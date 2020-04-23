import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [
  {
    path: 'app-edit-task', component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
