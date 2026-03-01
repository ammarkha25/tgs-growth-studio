import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  team = [
    { name: 'Team Member 1', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop' },
    { name: 'Team Member 2', role: 'CTO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop' },
    { name: 'Team Member 3', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop' },
  ];

  values = [
    { icon: '🚀', title: 'Innovation', description: 'We push boundaries and embrace new technologies' },
    { icon: '🤝', title: 'Collaboration', description: 'We work closely with partners to achieve shared goals' },
    { icon: '✅', title: 'Execution', description: 'We deliver results with precision and speed' },
    { icon: '📈', title: 'Growth', description: 'We foster sustainable and scalable growth' },
  ];

  ngOnInit(): void {}
}
