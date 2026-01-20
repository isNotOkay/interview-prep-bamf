import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface SettingsState {
  firstName: string;
  lastName: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsStateService {
  private subject = new BehaviorSubject<SettingsState | undefined>(undefined);

  stateChanges(): Observable<SettingsState | undefined> {
    return this.subject.asObservable();
  }

  setState(state: SettingsState): void {
    this.subject.next(state);
  }
}
