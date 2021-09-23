import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-herodetaill',
  templateUrl: './herodetaill.component.html',
  styleUrls: ['./herodetaill.component.css']
})
export class HerodetaillComponent implements OnInit {

  @Input() hero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }

}
