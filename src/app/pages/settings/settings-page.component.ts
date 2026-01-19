import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

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
export class SettingsPageComponent implements OnInit {
  protected readonly form: FormGroup<SettingsForm> = new FormGroup({
    firstName: new FormControl('', {nonNullable: true, validators: Validators.required}),
    lastName: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      const firstName = this.form.value.firstName;
      const lastName = this.form.value.lastName;
      console.log(firstName, lastName)
    });
  }
}
