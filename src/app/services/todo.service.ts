import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';


export interface Todo {
  id: 1,
  todo: "Do something nice for someone I care about",
  completed: true,
  userId: 26
}

export interface PaginatedResult {
  todos: Todo[];
}


@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseUrl = 'https://dummyjson.com/todos';
  private readonly http = inject(HttpClient);

  getTodos(): Observable<Todo[]> {
    return this.http.get(this.baseUrl).pipe(map((result) => (result as PaginatedResult).todos));
  }
}
