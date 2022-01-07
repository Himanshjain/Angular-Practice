import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';
import {TodoItemComponent} from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
//   template: 
//   `<div *ngFor="let todo of todos">
//   <app-todo-item [todo]="todo"></app-todo-item>
// </div>
// `,
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() {
      this.todos = [
        {
          sno: 1,
          title: "Task1",
          desc: "Task1 Desc",
          active:true
        },
        {
          sno: 2,
          title: "Task2",
          desc: "Task2 Desc",
          active:true
        },
        {
          sno: 3,
          title: "Task2",
          desc: "Task3 Descr",
          active:true
        }
      ]
   }

  ngOnInit() {
  }

}