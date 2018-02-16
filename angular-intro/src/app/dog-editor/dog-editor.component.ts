import { DogService } from '../dog.service';
import { CatService } from '../cat.service';
import { Component, OnInit, OnDestroy, Input  } from '@angular/core';

import { Dog } from '../dog';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {


  // dogs : Dog[]=[];
  // dogName: string = '';
  // dogWeight: number;
  // birthDate: Date;
  
  @Input() dog: Dog = new Dog();


  constructor( private dogService: DogService) { }

  ngOnInit() {
    // this.dog = this.dogService.getDogs();
    // console.log(this.dog);

  }

  addDog() {
      // let dog = new Dog()
      // dog.name = this.dogName;
      // dog.weight = this.dogWeight;
      // dog.birthDate = this.birthDate;
      this.dogService.addDog(this.dog)
      console.log(this.dog);
    };
  
    // deleteDog(index) {
    //   this.dogs.splice(index, 1);
    //   console.log(this.dogs);
    // }

}
