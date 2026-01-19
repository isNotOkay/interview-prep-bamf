import {Component, input} from '@angular/core';

@Component({
  selector: 'ko-list-item',
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss',
})
export class ListItemComponent {
  name = input.required<string>();

}
