import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="getButtonClasses()"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: []
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() fullWidth = false;

  @Output() onClick = new EventEmitter<Event>();

  getButtonClasses(): string {
    let classes = 'font-medium rounded-lg transition-all duration-200 ';
    
    // Size classes
    if (this.size === 'sm') {
      classes += 'px-3 py-1.5 text-sm ';
    } else if (this.size === 'lg') {
      classes += 'px-8 py-3 text-lg ';
    } else {
      classes += 'px-6 py-2 text-base ';
    }

    // Variant classes
    if (this.variant === 'primary') {
      classes += 'btn-primary ';
    } else if (this.variant === 'secondary') {
      classes += 'btn-secondary ';
    } else {
      classes += 'btn-secondary border-2 border-primary text-primary ';
    }

    // Full width
    if (this.fullWidth) {
      classes += 'w-full ';
    }

    // Disabled state
    if (this.disabled) {
      classes += 'opacity-50 cursor-not-allowed ';
    }

    return classes;
  }
}
