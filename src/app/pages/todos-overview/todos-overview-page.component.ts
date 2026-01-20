import {ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import {ListItemComponent} from '../../components/list-item/list-item.component';
import {Todo, TodoService} from '../../services/todo.service';


@Component({
  selector: 'ko-todos-overview-page',
  imports: [
    ListItemComponent
  ],
  templateUrl: './todos-overview-page.component.html',
  styleUrl: './todos-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosOverviewPageComponent implements OnInit {
  private readonly todoService = inject(TodoService);
  protected todos: WritableSignal<Todo[]> = signal([]);

  ngOnInit(): void {
    this.todoService.getTodos().subscribe({
      next: (todos) => {
        this.todos.set(todos);
      }
    })
  }
}

{

}
