import {Component, input} from '@angular/core';

@Component({
  selector: 'ko-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  firstName = input.required<string>();
  lastName = input.required<string>();
}
