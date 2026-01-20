import {Component,} from '@angular/core';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';
import { MyLib } from 'my-lib';

export interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'ko-root',
  imports: [Header, RouterOutlet, MyLib],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly user: User = {
    firstName: 'Max',
    lastName: 'Mustermann',
  }
}
