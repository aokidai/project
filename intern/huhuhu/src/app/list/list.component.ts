import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Books } from '../books';
import { BOOKSLIST } from '../bookslist';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  books = BOOKSLIST;
  constructor() { }

  ngOnInit(): void {
  }
  newID = "";
  newTitle = "";
  newDes = "";
  
  add = () => {
    const b = {id: Number(this.newID), title: this.newTitle, des: this.newDes};
    this.books.push(b);
    this.newID ="";
    this.newTitle="";
    this.newDes="";
  }
}
