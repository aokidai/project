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
  
  todos = TODO;

  todolist: Todo[] = [];
  selectedTodo?: Todo;
  constructor(private todoServiece: TodoService) { }

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void{
    this.todoServiece.getTodolist().subscribe(todolist => this.todolist = todolist);
  }
  newID = "";
  newTitle = "";
  newDes = "";

  add = () => {
    const b = {id: Number(this.newID), name: this.newTitle, des: this.newDes};
    this.todolist.push(b);
    this.newID ="";
    this.newTitle="";
    this.newDes="";
  }
  del = (i: number) => {
    this.todolist.splice(i, 1);
  }
}
