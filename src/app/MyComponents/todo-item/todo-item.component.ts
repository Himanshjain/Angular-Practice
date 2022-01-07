import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  //templateUrl: './todo-item.component.html',
  template:`<p>
  todo-item works!
  </p>`,
  styleUrls: ['./todo-item.component.css'],
  
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}