import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article
      [ngClass]="{
        'bg-white dark:bg-slate-800': true,
        'rounded-lg': true,
        'shadow-sm': true,
        'overflow-hidden': true,
        'hover:shadow-md': hover,
        'transition-shadow': hover
      }"
    >
      <ng-content select="[card-image]"></ng-content>
      <div class="p-6">
        <ng-content select="[card-badge]"></ng-content>
        <ng-content select="[card-header]"></ng-content>
        <ng-content select="[card-body]"></ng-content>
        <ng-content select="[card-footer]"></ng-content>
      </div>
    </article>
  `,
  styles: []
})
export class CardComponent {
  @Input() variant: 'default' | 'elevated' = 'default';
  @Input() hover = true;
}
