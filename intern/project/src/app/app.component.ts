import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My project';
  todos = [{ label: 'learning angular', done: false, priority: 3},
          { label: 'learning abc', done: false, priority: 3},
          { label: 'learning xyz', done: false, priority: 3},
          { label: 'learning aaa', done: false, priority: 3},
  ];

  addTodo(newTodoLabel:any){
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }

  deleteTodo(todo:any){
    this.todos=this.todos.filter(t => t.label !== todo.label);
  }
}
