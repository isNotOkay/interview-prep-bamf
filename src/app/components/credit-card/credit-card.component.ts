import {ChangeDetectionStrategy, Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'ko-credit-card',
  imports: [],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CreditCardComponent),
      multi: true,
    },
  ],
})
export class CreditCardComponent implements ControlValueAccessor {
  protected displayValue = '';
  protected disabled = false;

  private onChange: (value: string) => void = () => {
  };
  protected onTouched: () => void = () => {
  };

  writeValue(value: string | null): void {
    const raw = value ?? '';
    this.displayValue = this.format(raw);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  protected onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const raw = input.value.replace(/\D/g, '');

    this.displayValue = this.format(raw);

    // propagate raw (unformatted) value to the form
    this.onChange(raw);
  }

  private format(value: string): string {
    return value
      .replace(/\D/g, '')
      .substring(0, 16)
      .replace(/(.{4})/g, '$1 ')
      .trim();
  }
}
