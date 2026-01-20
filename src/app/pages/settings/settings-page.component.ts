import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SettingsState, SettingsStateService} from '../../services/settings-state.service';
import {Subscription} from 'rxjs';
import {CreditCardComponent} from '../../components/credit-card/credit-card.component';

interface SettingsForm {
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  creditCard: FormControl<string>;
}

@Component({
  selector: 'ko-settings-page',
  imports: [
    ReactiveFormsModule,
    CreditCardComponent
  ],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.scss',
})
export class SettingsPageComponent implements OnInit, OnDestroy {
  protected readonly form: FormGroup<SettingsForm> = new FormGroup({
    firstName: new FormControl('', {nonNullable: true, validators: Validators.required}),
    lastName: new FormControl('', {nonNullable: true, validators: Validators.required}),
    creditCard: new FormControl('', {nonNullable: true, validators: Validators.required}),
  });
  private readonly settingsStateService = inject(SettingsStateService);
  private stateChangesSubscription?: Subscription;
  private valueChangesSubscription?: Subscription;

  ngOnInit(): void {
    this.listenToStateChanges();
    this.listenToFormValueChanges();
  }

  ngOnDestroy(): void {
    const state: SettingsState = {
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
      creditCard: this.form.controls.creditCard.value
    }
    this.settingsStateService.setState(state);

    this.stateChangesSubscription?.unsubscribe();
    this.valueChangesSubscription?.unsubscribe();
  }

  private listenToFormValueChanges(): void {
    this.valueChangesSubscription = this.form.valueChanges.subscribe(() => {
      const firstName = this.form.value.firstName;
      const lastName = this.form.value.lastName;
      console.log(firstName, lastName);
    });
  }

  private listenToStateChanges(): void {
    this.stateChangesSubscription = this.settingsStateService.stateChanges().subscribe((state) => {
      if (state !== undefined) {
        this.form.setValue(state);
      }
    })
  }
}
