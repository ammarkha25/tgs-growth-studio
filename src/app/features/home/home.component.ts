import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface Venture {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  private router = inject(Router);

  industries: Industry[] = [
    {
      id: '1',
      name: 'Fintech',
      description: 'Disrupting traditional banking with seamless digital payment infrastructures and investment platforms.',
      icon: 'account_balance'
    },
    {
      id: '2',
      name: 'Logistics',
      description: 'Optimizing supply chains and last-mile delivery through intelligent automation and routing AI.',
      icon: 'local_shipping'
    },
    {
      id: '3',
      name: 'Healthcare',
      description: 'Enhancing patient outcomes through data-driven diagnostic tools and remote care ecosystems.',
      icon: 'health_and_safety'
    },
    {
      id: '4',
      name: 'E-commerce',
      description: 'Building high-conversion retail experiences and headless commerce engines for global brands.',
      icon: 'shopping_bag'
    }
  ];

  ventures: Venture[] = [
    {
      id: '1',
      title: 'Venture Alpha',
      category: 'PropTech',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASp7wnNtbSUMtzOP_-WtO39YpLi0esjpLVQE5De2o1T1s55Dr8a2M_yl6iVCd-jk6ouT7yX53sC7POh0d-9G4BvFQWcp7GPB0WuZiUj3NeID0MWeHKx4KSFDIHoxxR0McuHqmc7gWY7PJGcDfszZJogxrw0ZTlQs4aY1_bQC04naqc7t-gPhBgLvavU1CLifYBZjmjOQSXrg2JVqMrMl2h9RRfkE0pZh8LJvs2G2R8k2_l5-XoQM03QW1uFbPDn1i7_Ey43ULh8g',
      description: 'Next-generation real estate asset management platform for global investors.'
    },
    {
      id: '2',
      title: 'Quantify Insight',
      category: 'AI & Analytics',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX0sMnGgIuLJJewyow1w9NctSPCIxGCdBof4xhUEN1Q3H4sYYH_oTlbnN23wCZUDIL4RPpMkQ2HtM5khuIE3y87TRk3PqbFp0Db1-AgmOusQM1rauJbT7bt1xV2sYRPM8zsLtxQ9hO-mQanCQw95CQxlbvETB5AjcMMxL8wn6R3bmEa5UoUAouMebrfNQCA4kI2Pxecvp1JZgBNUpUis5SleernMiyEgoompr0j_xKAAqYlSIBwyWRO5UGLFIfNkl-72MKkyVtHw',
      description: 'Enterprise AI analytics tool that predicts consumer behavior patterns with 94% accuracy.'
    },
    {
      id: '3',
      title: 'EcoGrid Systems',
      category: 'Sustainability',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUADHAbJ2OigsfxcaDKFngQbL1bAXGSiJlMUsO2_xOeoo4eSNULihxEMVBkkbxEBaeTBaysfktQh0dBAFObWZmN_gCjop-qYf2J_pW60RZQdbcu2UahsNaF81XAdSPksFhTCgI2t3U61uCWkbQhZQwjiB9YP4L-f7l8MAiHOK0ZJNmSQbf3rqtYwHN2qnODhn_uevx1KzIind8wj4nMdqENfKhNiMwXOGv2DZeVI9X6-FPB5fLOzB3cCxZIQAe15x4_hqezyps3w',
      description: 'Decentralized energy management platform reducing carbon footprints for industrial hubs.'
    }
  ];

  steps: Step[] = [
    {
      number: '01',
      title: 'Ideation & Validation',
      description: 'We identify market gaps and stress-test concepts through rigorous data analysis and prototype testing before committing capital.'
    },
    {
      number: '02',
      title: 'Incubation & Build',
      description: 'Our core team of engineers, designers, and growth hackers build the MVP and establish the operational framework.'
    },
    {
      number: '03',
      title: 'Scale & Operation',
      description: 'Once product-market fit is achieved, we scale operations, hire dedicated leadership, and drive the business to market leadership.'
    }
  ];

  ngOnInit(): void {}

  viewPortfolio(): void {
    this.router.navigate(['/portfolio']);
  }

  learnProcess(): void {
    this.router.navigate(['/process']);
  }

  viewAllVentures(): void {
    this.router.navigate(['/portfolio']);
  }
}
