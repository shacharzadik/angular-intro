import { DogService } from '../dog.service';
import { CatService } from '../cat.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
 
import { Dog } from '../dog';
 
@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
 
 
  // dogs : Dog[]=[];
  dogName: string = '';
  dogWeight: number;
  birthDate: Date;
  isEdit: boolean = false;
  dogId: number;


  // @Input()
  // dog: Dog =new Dog();
 
  @Input()
  set dog(dog: Dog) {
    this.dogName = dog.name;
    this.dogWeight = dog.weight;
    this.birthDate = dog.birthDate;
    if (dog.id!=null)
      this.isEdit = true;
      this.dogId = dog.id;
      console.log(this.dogId)
  }

  @Output() dogAdded : EventEmitter<Dog> = new EventEmitter();

  @Output() dogEdited: EventEmitter<Dog> = new EventEmitter();
 
 
  constructor(private dogService: DogService) {
 
  }
 
  ngOnInit() {
    // this.dog = this.dogService.getDogs();
    //console.log(this.dog);
 
  }
 
   addDog() {
    let dog = new Dog()
     dog.name = this.dogName;
     dog.weight = this.dogWeight;
     dog.birthDate = this.birthDate;
    this.dogService.addDog(dog)
    this.dogAdded.emit(dog);  
     console.log(dog);
   };

  // addDog(){
  //   this.dogService.addDog(this.dog); 
  //   this.dogAdded.emit(this.dog);   
  // }


  // take the dog and send it to dog.service
  editDog() {
    let editedDog = new Dog()
    editedDog.id = this.dogId;
    editedDog.name = this.dogName;
    editedDog.weight = this.dogWeight;
    editedDog.birthDate = this.birthDate;
    editedDog.birthDate = this.birthDate;
    this.dogEdited.emit(editedDog);
    console.log(this.dog)
    console.log(editedDog)
    console.log(editedDog.id)
    this.dogService.editDog(editedDog)
    
  }

  cancelEdit() {
    this.isEdit = false;
    this.dogName= '';
  }


 
  // deleteDog(index) {
  //   this.dogs.splice(index, 1);
  //   console.log(this.dogs);
  // }
 
}