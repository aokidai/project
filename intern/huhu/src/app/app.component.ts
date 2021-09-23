import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To do list';

  todos=[{name: 'first', done: false},
         {name: 'second', done: true},
         {name: 'third', done: false},
  ];
  newTodo = "";
  remain = function(this:any){
    let c =0;
    this.todos.forEach((t: { done: any; }) => {
      if(!t.done){
        c++;
      }
    });
    return c;
  };

  del = (i:any) =>{
    this.todos.splice(i, 1);
  };

  archive =  () =>{
    const oldtodos = this.todos;
    this.todos = [];
    oldtodos.forEach(t => {
      if(!t.done){
        this.todos.push(t);
      }
    });
  };

  add = ()=>{
    const t = {name: this.newTodo, done: false };
    this.todos.push(t);
    this.newTodo = '';
  }
}
