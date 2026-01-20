import {Component, input} from '@angular/core';
import {HighlightCompletedDirective} from '../../directives/highlight-completed.directive';
import {Todo} from '../../services/todo.service';

@Component({
  selector: 'ko-list-item',
  imports: [
    HighlightCompletedDirective
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  todo = input.required<Todo>();

}
