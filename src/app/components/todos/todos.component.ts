import { TodoService } from './../../services/todo.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { TodoDetails } from 'src/app/models/todo-details.model';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: TodoDetails[] = [];

  constructor(private _TodoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this._TodoService.getTodos();
    $('.todos').fadeOut(0).fadeIn(500);
  }

  ngOnDestroy(): void {
    $('.todos').fadeOut(500).fadeIn(0);
  }
}
