import {Routes} from '@angular/router';
import {SettingsPageComponent} from './pages/settings/settings-page.component';
import {TodosOverviewPageComponent} from './pages/todos-overview/todos-overview-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'todos' },
  {
    component: TodosOverviewPageComponent,
    path: 'todos',

  },
  {
    component: SettingsPageComponent,
    path: 'settings'
  }
];
