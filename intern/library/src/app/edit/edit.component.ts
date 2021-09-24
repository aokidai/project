import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../todo';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() todo?: Todo;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private location: Location) { }

  ngOnInit(): void {
    this.getTodo();
  }
  getTodo(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoService.getTodo(id).subscribe(todo => this.todo = todo);
  }
  goBack(): void {
    this.location.back();
  }
}
