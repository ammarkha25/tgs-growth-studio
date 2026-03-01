import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProcessPhase {
  phase: string;
  title: string;
  duration: string;
  description: string;
  tasks: string[];
}

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process.component.html',
  styles: []
})
export class ProcessComponent implements OnInit {
  phases: ProcessPhase[] = [
    {
      phase: 'Phase 1',
      title: 'Ideation & Validation',
      duration: '4-6 weeks',
      description: 'We thoroughly validate your business idea, understand market demand, identify competitors, and define the problem we\'re solving.',
      tasks: [
        'Market research and analysis',
        'Problem statement definition',
        'Initial prototyping',
        'User interviews and feedback',
        'Business model canvas creation'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Incubation & Build',
      duration: '8-12 weeks',
      description: 'We build your MVP with agile methodology, gathering user feedback at every iteration and refining the product continuously.',
      tasks: [
        'Technical architecture design',
        'MVP development',
        'Testing and QA',
        'User feedback loops',
        'Beta launch preparation'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Scale & Operation',
      duration: 'Ongoing',
      description: 'We scale your infrastructure, optimize operations, implement growth strategies, and prepare your venture for sustained success.',
      tasks: [
        'Infrastructure scaling',
        'Performance optimization',
        'Growth strategy implementation',
        'Team building support',
        'Market expansion planning'
      ]
    }
  ];

  ngOnInit(): void {}
}
