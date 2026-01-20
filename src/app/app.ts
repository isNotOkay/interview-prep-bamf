import {ChangeDetectionStrategy, Component,} from '@angular/core';
import {Header} from './header/header';
import {RouterOutlet} from '@angular/router';

export interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'ko-root',
  imports: [Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly user: User = {
    firstName: 'Max',
    lastName: 'Mustermann',
  }
}
