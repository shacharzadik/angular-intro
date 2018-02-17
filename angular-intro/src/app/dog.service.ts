import { Injectable } from '@angular/core';
import { Dog } from './dog';


const DOGS: Dog[] = [
  { id: 0, name: 'Rex', weight: 20, birthDate: new Date(1998, 5, 7), toggleFormat: true,  wasEdited: false },
  { id: 1, name: 'Woof', weight: 8, birthDate: new Date(2006, 3, 5), toggleFormat: true ,wasEdited: false},
  { id: 2, name: 'Chuck', weight: 28, birthDate: new Date(2009, 7, 25), toggleFormat: true ,wasEdited: false},
  { id: 3, name: 'Barkley', weight: 4, birthDate: new Date(2015, 6, 18), toggleFormat: true, wasEdited: false },
  { id: 4, name: 'Prince', weight: 65, birthDate: new Date(2014, 1, 12), toggleFormat: true, wasEdited: false }
];


@Injectable()
export class DogService {
  
  dogs: Dog[] = DOGS;

  constructor() {
  };


  getDogs() {
    return this.dogs;
  }

  addDog(newDog: Dog) {
    console.log(newDog);
    newDog.id = this.generateId();
    this.dogs.push(newDog);
    
  }

  generateId(): number {
    return this.dogs[this.dogs.length - 1].id + 1;
  }

  editDog( editedDog: Dog) {
         console.log('hello from service!');
         console.log(editedDog);
         for (var i=0; i< this.dogs.length; i++){
           if (editedDog.id===this.dogs[i].id) {
              this.dogs[i].name = editedDog.name;
              this.dogs[i].weight = editedDog.weight;
              this.dogs[i].birthDate = editedDog.birthDate;
              this.dogs[i].wasEdited = true;
            console.log('here is the edited dog:')
            console.log(this.dogs);
           }

         }
      };
  }

  //  editDog(editedDog: Dog) {
        
  //           console.log('hello from service!');
      
  //     };
  // }



