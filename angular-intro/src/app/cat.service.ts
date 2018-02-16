import { Injectable } from '@angular/core';


const Cats = [
  { name: 'kitty', weight: 10, birthDate: new Date(1998, 5, 7), toggleFormat: true },
  { name: 'Sticky', weight: 8, birthDate: new Date(2006, 3, 5), toggleFormat: true },
  { name: 'Melody', weight:18, birthDate: new Date(2009, 7, 25), toggleFormat: true },
];

@Injectable()
export class CatService {

  constructor() { }

  getCats() {
    return Cats;
  }
}
