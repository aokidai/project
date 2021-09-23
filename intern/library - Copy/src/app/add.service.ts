import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TODO } from './todolist';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  item: Todo[] = [];
  addToList( todo: Todo){
    this.item.push(todo);
  }
  getItem(){
    return this.item;
  }
  clearAdd(){
    this.item=[];
    return this.item;
  }
  constructor() {}
}
