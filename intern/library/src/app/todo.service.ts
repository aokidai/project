import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODO } from './todolist';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  getTodolist(): Observable<Todo[]>{
    const todolist = of(TODO);
    return todolist;
  }
getTodo(id: number): Observable<Todo>{
  const todo = TODO.find(h=>h.id===id)!;
  return of(todo);
}
  constructor() { }
}
