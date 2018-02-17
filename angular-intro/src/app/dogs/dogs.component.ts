
import { DogService } from '../dog.service';
import { Dog } from '../dog';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  lastUpdated: string="";
  wasEdited: boolean=false;

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

  addLastUpdated(dog) {
    this.lastUpdated = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  findEditedDog(editedDog) {
      for (var i=0; i< this.dogs.length; i++) {
        if (editedDog.id===this.dogs[i].id) {
          console.log("hello from fondEditedDog method! here is the edited dog: "+ editedDog)
          this.dogs[i].wasEdited = true;
          
        }
      }
     
  }

 

}
