import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  email = '';

  onNewsletterSubmit(): void {
    if (this.email.trim()) {
      alert(`Thanks for subscribing: ${this.email}`);
      this.email = '';
    }
  }
}
