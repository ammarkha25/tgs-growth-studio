import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';

interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  status: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styles: []
})
export class PortfolioComponent implements OnInit {
  selectedCategory = 'All';

  categories = ['All', 'AI', 'Sustainability', 'PropTech', 'FinTech'];

  portfolioItems: PortfolioItem[] = [
    {
      id: '1',
      name: 'Venture Alpha',
      category: 'AI',
      description: 'Advanced machine learning solutions for enterprise',
      image: 'https://images.unsplash.com/photo-1573141520189-48e5f2177d7c?w=500&h=300&fit=crop',
      status: 'Active'
    },
    {
      id: '2',
      name: 'Quantify Insight',
      category: 'FinTech',
      description: 'Real-time data analytics platform for financial services',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      status: 'Active'
    },
    {
      id: '3',
      name: 'EcoGrid Systems',
      category: 'Sustainability',
      description: 'Smart energy management for sustainable businesses',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=500&h=300&fit=crop',
      status: 'Active'
    },
    {
      id: '4',
      name: 'PropertyHub',
      category: 'PropTech',
      description: 'Next-gen real estate management platform',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop',
      status: 'Active'
    },
    {
      id: '5',
      name: 'CloudMind',
      category: 'AI',
      description: 'AI-powered automation for business processes',
      image: 'https://images.unsplash.com/photo-1518533182385-955ce704776f?w=500&h=300&fit=crop',
      status: 'Active'
    },
    {
      id: '6',
      name: 'GreenChain',
      category: 'Sustainability',
      description: 'Blockchain-based supply chain for sustainable products',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=500&h=300&fit=crop',
      status: 'Active'
    }
  ];

  get filteredItems(): PortfolioItem[] {
    if (this.selectedCategory === 'All') {
      return this.portfolioItems;
    }
    return this.portfolioItems.filter(item => item.category === this.selectedCategory);
  }

  ngOnInit(): void {}

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
