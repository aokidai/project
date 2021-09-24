import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TODO } from '../todolist';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  todos = TODO;
  todolist: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void{
    this.todoService.getTodolist().subscribe(todolist => this.todolist = todolist.slice(1, 5))
  }
 }
