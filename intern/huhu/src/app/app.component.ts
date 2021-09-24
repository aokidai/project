import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TO DO LIST';

  todos=[{name: 'Learn Angular', done: true},
         {name: 'Learn Akita', done: false},
         {name: 'Learn .Net', done: false},
  ];
  
  remain = function(this:any){
    let c = 0;
    this.todos.forEach((t: { done: any; }) => {
      if(t.done){
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

  newTodo = "";
  add = ()=>{
    const t = {name: this.newTodo, done: false };
    this.todos.push(t);
    this.newTodo = '';
  }
}
