import { Component } from '@angular/core';
import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Dog } from './dog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit  {


  title = 'my first angular 2.0 ';
  
  dogs : Dog[]=[];
  // dogName: string = '';
  // dogWeight: number;
  // birthDate: Date;

  cats = this.catService.getCats();

  constructor(
    private dogService: DogService,
    private catService:CatService
  ) {

    }


ngOnInit() { 
  this.dogs = this.dogService.getDogs();
  console.log(this.dogs);
  // this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);	
}

// ngOnDestroy(){
//   window.clearInterval(this.sayHello);	
// }



  // addDog() {
  
  //   let dog = new Dog()
  //   dog.name = this.dogName;
  //   dog.weight = this.dogWeight;
  //   dog.birthDate = this.birthDate;
  //   this.dogService.addDog(dog)
  // };

  deleteDog(index) {
    this.dogs.splice(index, 1);
    console.log(this.dogs);
  }

  banana(dog) {
    return dog.toggleFormat ? 'MM/dd/yy' : 'fullDate';
  }
  toggle(dog) { dog.toggleFormat = !dog.toggleFormat; }

}





