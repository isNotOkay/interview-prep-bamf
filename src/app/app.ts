import {Component, inject, OnInit} from '@angular/core';
import {Header} from './header/header';
import {Todo, TodoService} from './services/todo.service';
import {ListItemComponent} from './components/list-item/list-item.component';


export interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  imports: [Header, ListItemComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly user: User = {
    firstName: 'Max',
    lastName: 'Mustermann',
  }
  private readonly todoService = inject(TodoService);
  protected todos: Todo[] = [];

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos = todos
      }
    })
  }
}
