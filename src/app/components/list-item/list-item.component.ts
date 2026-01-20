import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {HighlightCompletedDirective} from '../../directives/highlight-completed.directive';
import {Todo} from '../../services/todo.service';
import {PeriodPipe} from '../../pipes/period-pipe';

@Component({
  selector: 'ko-list-item',
  imports: [
    HighlightCompletedDirective,
    PeriodPipe
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  todo = input.required<Todo>();

}
