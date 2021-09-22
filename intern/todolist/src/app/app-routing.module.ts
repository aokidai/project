import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';

const routes: Routes = [{path: 'todolist', component: IndexComponent},
                        {path: 'dashboard', component: DashboardComponent},
                        {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
                        {path: 'detail/:id', component: TodoDetailComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
