import {Component} from '@angular/core';
import {Header} from './header/header';


export interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  imports: [Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly user: User = {
    firstName: 'Max',
    lastName: 'Mustermann',
  }
}
