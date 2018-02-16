import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  constructor( 
    private dogService: DogService,
  ) { }

  title:string;
  dogs : any[];
  sayHello: any;
  selectedDog: Dog = new Dog();

  ngOnInit() {
    
    this.dogs = this.dogService.getDogs();
  }


  deleteDog(index) {
    this.dogs.splice(index, 1);
    console.log(this.dogs);
  }

  editDog(dog) {
    console.log(dog);
    this.selectedDog = dog;
  }

  banana(dog) {
    return dog.toggleFormat ? 'MM/dd/yy' : 'fullDate';
  }
  toggle(dog) { dog.toggleFormat = !dog.toggleFormat; }

 

}
