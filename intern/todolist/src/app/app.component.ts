import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  todos=[{name: "abc", done: false},
         {name: 'xyz', done: true},];

  newAdd ="";

  show = () => {
    const oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach(t => {
    this.todos.push(t);
    });
  };

  add = () => {
    const t = {name: this.newAdd, done: false};
    this.todos.push(t);
    this.newAdd="";
  }
  del = (i: number) =>{
    this.todos.splice(i,1);
  }
  remain = function(this:any){
    let c = 0;
    this.todos.forEach((t: { done: any; }) => {
      if(t.done){
        c++;
      }
    });
    return c;
  };
}

