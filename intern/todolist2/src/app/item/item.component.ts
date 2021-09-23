import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Items } from '../item';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  editable = false;
  @Input() item: Items;
  @Input() newItem: string;
  @Output() remove = new EventEmitter<Items>();

  saveItem(description){
    if(!description) return;
    this.editable = false;
    this.item.description = description;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
