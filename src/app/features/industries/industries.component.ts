import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Industry {
  id: string;
  name: string;
  description: string;
  keyPoints: string[];
  image: string;
}

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './industries.component.html',
  styles: []
})
export class IndustriesComponent implements OnInit {
  industries: Industry[] = [
    {
      id: '1',
      name: 'Fintech',
      description: 'We revolutionize financial services with cutting-edge technology, enabling secure transactions, smart investing, and financial inclusion.',
      keyPoints: [
        'Payment Processing Solutions',
        'Investment Platforms',
        'Lending Management',
        'Blockchain Integration',
        'API-First Architecture',
        'Regulatory Compliance'
      ],
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=800&h=400&fit=crop'
    },
    {
      id: '2',
      name: 'Logistics',
      description: 'Optimize your supply chain with intelligent logistics solutions that improve efficiency, reduce costs, and enhance visibility.',
      keyPoints: [
        'Real-time Tracking',
        'Route Optimization',
        'Warehouse Automation',
        'Inventory Management',
        'Predictive Analytics',
        'IoT Integration'
      ],
      image: 'https://images.unsplash.com/photo-1578575437980-ba2b2ffa89c7?w=800&h=400&fit=crop'
    },
    {
      id: '3',
      name: 'Healthcare',
      description: 'Transform healthcare delivery with our digital solutions designed for patient engagement, operational efficiency, and better outcomes.',
      keyPoints: [
        'Telemedicine Platforms',
        'Patient Data Management',
        'EHR Integration',
        'Clinical Analytics',
        'Health IoT Solutions',
        'HIPAA Compliance'
      ],
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop'
    },
    {
      id: '4',
      name: 'E-commerce',
      description: 'Build thriving online businesses with our comprehensive e-commerce solutions that drive conversions and customer loyalty.',
      keyPoints: [
        'Omnichannel Retail',
        'Personalization Engines',
        'Payment Integration',
        'Inventory Sync',
        'Analytics Dashboard',
        'Mobile Commerce'
      ],
      image: 'https://images.unsplash.com/photo-1523437113738-dbf4f9c3c310?w=800&h=400&fit=crop'
    }
  ];

  ngOnInit(): void {
    this.setupScrollAnimations();
  }

  private setupScrollAnimations(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });
  }
}
