import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SettingsState, SettingsStateService} from '../../services/settings-state.service';

interface SettingsForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
}

@Component({
  selector: 'ko-settings-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  protected readonly form: FormGroup<SettingsForm> = new FormGroup({
    firstName: new FormControl('', {nonNullable: true, validators: Validators.required}),
    lastName: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });
  private readonly settingsStateService = inject(SettingsStateService);

  ngOnInit(): void {
    this.settingsStateService.stateChanges().subscribe((state) => {
      if (state !== undefined) {
        this.form.setValue(state);
      }

      this.form.valueChanges.subscribe(() => {
        const firstName = this.form.value.firstName;
        const lastName = this.form.value.lastName;
        console.log(firstName, lastName);
      });
    })
  }

  ngOnDestroy(): void {
    const state: SettingsState = {
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
    }
    this.settingsStateService.setState(state)
  }
}
