import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { DogService } from './dog.service';
import { CatService } from './cat.service';


import { AppComponent } from './app.component';
import { DogsComponent } from './dogs/dogs.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [DogService,CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
