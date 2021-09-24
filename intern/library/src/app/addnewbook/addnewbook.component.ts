import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TODO } from '../todolist';
import { TodoService } from '../todo.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {

  todolist: Todo[] = [];
  selectedTodo?: Todo;
  constructor(private todoServiece: TodoService,  private location: Location) { }

  ngOnInit(): void {
    this.getTodolist();
  }

  getTodolist(): void{
    this.todoServiece.getTodolist().subscribe(todolist => this.todolist = todolist);
  }
  newID = "";
  newTitle = "";
  newDes = "";
  log = "Don't save and ";

  add = () => {
    try{
      if(this.newID == "" || this.newTitle == "" || this.newDes == "")
      {
        window.alert("ID or Title or Des is null");
      }
      else{
        const b = {id: Number(this.newID), name: this.newTitle, des: this.newDes};
        this.todolist.push(b);
        this.log = "Saved. Pleace exit button to ";
        this.location.back();
      }
    }
    catch(e){
      this.log = "I can't add new book. Try angn";
    }
  }
  del = (i: number) => {
    this.todolist.splice(i, 1);
  }
}
