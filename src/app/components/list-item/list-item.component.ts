import {Component, input} from '@angular/core';
import {HighlightCompletedDirective} from '../../directives/highlight-completed.directive';
import {Todo} from '../../services/todo.service';
import {LowerCasePipe} from '@angular/common';
import {PeriodPipe} from '../../pipes/period-pipe';

@Component({
  selector: 'ko-list-item',
  imports: [
    HighlightCompletedDirective,
    LowerCasePipe,
    PeriodPipe
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  todo = input.required<Todo>();

}
