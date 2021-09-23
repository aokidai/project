import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './herolist';

@Injectable({
  providedIn: 'root'
})
export class HeroSService {
  getHeroes(): Hero[]{
    return HEROES;
  }
  constructor() { }
}
