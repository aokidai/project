import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../herolist';
import { HeroSService } from '../hero-s.service';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes: Hero[] = [];  
  getHero(): void{
    this.heroes = this.heroservic.getHeroes();
  }
  constructor(private heroservic: HeroSService) { }

  ngOnInit(): void {
    this.getHero();
  }
 
}
