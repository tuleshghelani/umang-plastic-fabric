import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent implements OnInit {
  companies = [
    {
      id: 'omkar',
      name: 'OMKAR ENTERPRISE',
      logo: 'assets/companies/omkar.png',
      website: 'https://goldsmithtoolsindia.com/',
      description: 'Goldsmith Jewellery Making Rolling Mill Machine',
      category: 'Manufacturing',
      industry: 'Jewellery Machinery',
      details: 'OMKAR ENTERPRISE is a leading manufacturer, exporter, and supplier of goldsmith jewellery making rolling mill machines. With decades of experience, they specialize in producing high-quality machinery for jewellery production, including single head rolling mills, double gear rolling mills, and mini rolling mills.',
      features: [
        'Premium Quality Machinery',
        'Export to 10+ Countries',
        'OMGLO Brand Excellence',
        'Reliable & Durable Products'
      ]
    },
    {
      id: 'shivholic',
      name: 'SHIVHOLIC',
      logo: 'assets/companies/shivholicindia.png',
      website: 'https://www.shivholicindia.com/',
      description: 'Kitchenware Company',
      category: 'Manufacturing',
      industry: 'Kitchenware',
      details: 'SHIVHOLIC is a renowned kitchenware company known for its commitment to quality and innovation. They manufacture a wide range of kitchen products that combine functionality with modern design, ensuring customer satisfaction through their "Quality is our Identity" philosophy.',
      features: [
        'Quality is our Identity',
        'Modern Kitchen Solutions',
        'Innovative Designs',
        'Customer-Focused Approach'
      ]
    }
  ];

  private platformId = inject(PLATFORM_ID);

  constructor(
    private title: Title,
    private meta: Meta,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    // Set SEO metadata
    this.seoService.updateTitle('Our Companies - Umang Plastic Fabric');
    
    // Get URL only if in browser environment (SSR safe)
    const ogUrl = isPlatformBrowser(this.platformId) 
      ? window.location.href 
      : '';
    
    this.seoService.updateMetaTags({
      description: 'Explore our group companies: OMKAR ENTERPRISE - Goldsmith Jewellery Making Rolling Mill Machines, and SHIVHOLIC - Premium Kitchenware Solutions.',
      keywords: 'Umang Plastic Fabric companies, OMKAR ENTERPRISE, SHIVHOLIC, jewellery machinery, kitchenware, manufacturing companies',
      ogTitle: 'Our Companies - Umang Plastic Fabric',
      ogDescription: 'Discover our group companies specializing in jewellery machinery and kitchenware manufacturing.',
      ogUrl: ogUrl
    });
  }

  openWebsite(url: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    // Ensure proper handling for both mouse and touch events
    // Only open in browser environment (SSR safe)
    if (isPlatformBrowser(this.platformId) && (event.type === 'click' || event.type === 'touchend')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.src = 'assets/logo/logo.png';
    }
  }
}

