import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODO } from '../todolist';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  todolist: Todo[] = [];
  selectedTodo?: Todo;
  constructor(private todoServiece: TodoService) { }

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void{
    this.todoServiece.getTodolist().subscribe(todolist => this.todolist = todolist);
  }
}
