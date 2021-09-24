import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { EditComponent } from './edit/edit.component'
import { AddnewbookComponent } from './addnewbook/addnewbook.component';

const routes: Routes = [{path: 'todolist', component: IndexComponent},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                        {path: 'detail/:id', component: TodoDetailComponent},
                        {path: 'edit/:id', component: EditComponent},
                        {path: 'addnew', component: AddnewbookComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
