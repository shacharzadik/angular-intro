import { Component } from '@angular/core';


const DOGS = [
  {name: 'Rex', weight: 20, birthDate:new Date(1998, 5, 7), toggleFormat: true},
  {name: 'Woof', weight: 8, birthDate:new Date(2006, 3, 5), toggleFormat: true},
  {name: 'Chuck', weight: 28, birthDate:new Date(2009, 7, 25), toggleFormat: true},
  {name: 'Barkley', weight: 4, birthDate:new Date(2015, 6, 18), toggleFormat: true},
  {name: 'Prince', weight: 65, birthDate:new Date(2014, 1, 12), toggleFormat: true}
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my first angular 2.0 ';
  dogName :string ='rex';
  dogWeight: number;
  birthDate: Date;
  dogs = DOGS;
  addDog(){
    this.dogs.push({name: this.dogName, 
                   weight: this.dogWeight, 
                   birthDate: this.birthDate},
                   toggleFormat: true
                  ) 
  };
 
  banana(dog)   { 
    return dog.toggleFormat? 'MM/dd/yy' : 'fullDate'; 
  }
  toggle(dog) { dog.toggleFormat= !dog.toggleFormat; }

}
