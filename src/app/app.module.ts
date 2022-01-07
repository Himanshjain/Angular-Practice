import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
// import {TodoItemComponent} from './MyComponents/todo-item/todo-item.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,TodosComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
