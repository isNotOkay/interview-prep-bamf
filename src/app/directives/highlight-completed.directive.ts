import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: '[koHighlightCompleted]',
})
export class HighlightCompletedDirective {
  completed = input.required<boolean>();

  @HostBinding('style.color')
  get color(): string | null {
    return this.completed() ? 'green' : null;
  }
}
