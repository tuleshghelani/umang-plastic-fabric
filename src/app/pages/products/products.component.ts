import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

interface Product {
  id: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  specifications: {
    material: string;
    density: string;
    uvStabilization: string;
    width: string;
    colors: string[];
    lifespan: string;
  };
  image: string;
  category: string;
  isRoseBrand: boolean;
  isPopular: boolean;
  isNew: boolean;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  productCount: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  selectedCategory: string = 'all';
  searchTerm: string = '';
  showFilters: boolean = false;
  
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {
    this.setupSEO();
  }

  productCategories: ProductCategory[] = [
    {
      id: 'all',
      name: 'All Products',
      description: 'Complete range of ROSE brand green nets',
      icon: '🌐',
      productCount: 6
    },
    {
      id: 'residential',
      name: 'Residential',
      description: 'Shade nets for homes and residential areas',
      icon: '🏠',
      productCount: 1
    },
    {
      id: 'agricultural',
      name: 'Agricultural',
      description: 'Professional farming and crop protection nets',
      icon: '🌾',
      productCount: 2
    },
    {
      id: 'commercial',
      name: 'Commercial',
      description: 'Heavy-duty nets for commercial applications',
      icon: '🏢',
      productCount: 2
    },
    {
      id: 'specialized',
      name: 'Specialized',
      description: 'Specialized nets for unique applications',
      icon: '🔬',
      productCount: 1
    }
  ];

  products: Product[] = [
    {
      id: 'residential-shade-net',
      name: 'Residential Shade Net',
      shortName: 'Residential Shade Net',
      description: 'Premium shade nets for homes, balconies, and residential areas with optimal light filtration',
      longDescription: 'Our premium residential shade nets are designed to provide comfortable living spaces by filtering harsh sunlight while maintaining natural ventilation. Perfect for balconies, patios, gardens, and home exteriors.',
      features: [
        'UV-stabilized for long-lasting performance',
        'Optimal light filtration (30-90% shade)',
        'Weather-resistant and durable',
        'Easy installation and maintenance',
        'Aesthetically pleasing design',
        'Available in multiple colors'
      ],
      applications: [
        'Home balconies and terraces',
        'Garden pergolas and gazebos',
        'Patio covers and outdoor seating',
        'Window shades and privacy screens',
        'Car parking areas',
        'Outdoor dining spaces'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE)',
        density: '30%, 50%, 70%, 90% shade options',
        uvStabilization: 'UV-stabilized for 5+ years',
        width: '2m, 3m, 4m, 6m rolls',
        colors: ['Green', 'Black', 'Brown', 'Beige'],
        lifespan: '5-8 years'
      },
      image: 'assets/products/residential-shade-net-2.jpg',
      category: 'residential',
      isRoseBrand: true,
      isPopular: true,
      isNew: false
    },
    {
      id: 'agricultural-shade-net',
      name: 'Agricultural Shade Net',
      shortName: 'Agricultural Shade Net',
      description: 'Professional agricultural shade nets for optimal crop protection and growth enhancement',
      longDescription: 'Our agricultural shade nets are engineered to create the perfect microclimate for various crops. They provide optimal shade levels, protect against harsh weather, and promote healthy plant growth.',
      features: [
        'Multiple shade density options (30-90%)',
        'UV-stabilized for extended outdoor use',
        'Weather and wind resistant',
        'Promotes optimal crop growth',
        'Reduces water evaporation',
        'Protects against hail and frost'
      ],
      applications: [
        'Greenhouse shading',
        'Nursery and seedling protection',
        'Fruit tree cultivation',
        'Vegetable farming',
        'Flower cultivation',
        'Tea and coffee plantations'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE)',
        density: '30%, 50%, 70%, 80%, 90% shade options',
        uvStabilization: 'UV-stabilized for 7+ years',
        width: '2m, 3m, 4m, 6m, 8m rolls',
        colors: ['Green', 'Black', 'Blue'],
        lifespan: '7-10 years'
      },
      image: 'assets/products/agricultural-shade-net-1.jpg',
      category: 'agricultural',
      isRoseBrand: true,
      isPopular: true,
      isNew: false
    },
    {
      id: 'commercial-shade-net',
      name: 'Commercial Shade Net',
      shortName: 'Commercial Shade Net',
      description: 'Heavy-duty shade nets for commercial and industrial applications with superior durability',
      longDescription: 'Built for demanding commercial environments, our commercial shade nets offer exceptional strength and durability. Ideal for industrial facilities, warehouses, and large-scale commercial projects.',
      features: [
        'Heavy-duty construction for commercial use',
        'High tensile strength and tear resistance',
        'Fire-retardant properties available',
        'Large roll sizes for big projects',
        'Professional installation support',
        'Custom sizing available'
      ],
      applications: [
        'Industrial warehouses and factories',
        'Shopping centers and malls',
        'Office buildings and complexes',
        'Parking structures',
        'Sports facilities and stadiums',
        'Construction sites'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE) with reinforcement',
        density: '50%, 70%, 80%, 90% shade options',
        uvStabilization: 'UV-stabilized for 10+ years',
        width: '3m, 4m, 6m, 8m, 10m rolls',
        colors: ['Green', 'Black', 'Blue', 'Gray'],
        lifespan: '10-15 years'
      },
      image: 'assets/products/commercial-shade-net-1.jpeg',
      category: 'commercial',
      isRoseBrand: true,
      isPopular: false,
      isNew: false
    },
    {
      id: 'sun-shade-net',
      name: 'Sun Shade Net',
      shortName: 'Sun Shade Net',
      description: 'UV-stabilized sun protection nets for various outdoor applications and extreme weather conditions',
      longDescription: 'Our sun shade nets provide superior protection against harmful UV rays while maintaining excellent durability. Perfect for areas with intense sunlight and extreme weather conditions.',
      features: [
        'Maximum UV protection (99% UV blocking)',
        'Extreme weather resistance',
        'Heat reduction properties',
        'Lightweight and easy to handle',
        'Quick installation and removal',
        'Maintains air circulation'
      ],
      applications: [
        'Beach and coastal areas',
        'Desert and arid regions',
        'High-altitude locations',
        'Tropical climates',
        'Outdoor events and festivals',
        'Temporary structures'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE) with UV inhibitors',
        density: '70%, 80%, 90%, 95% shade options',
        uvStabilization: 'UV-stabilized for 8+ years',
        width: '2m, 3m, 4m, 6m rolls',
        colors: ['Green', 'Black', 'Blue', 'Red'],
        lifespan: '8-12 years'
      },
      image: 'assets/products/sun-shade-net-1.jpg',
      category: 'commercial',
      isRoseBrand: true,
      isPopular: false,
      isNew: true
    },
    {
      id: 'event-decoration-flooring-net',
      name: 'Event Decoration Flooring Net',
      shortName: 'Event Flooring Net',
      description: 'Specialized nets for event decoration and temporary flooring with safety and aesthetics',
      longDescription: 'Our event decoration flooring nets combine safety with aesthetics, making them perfect for temporary events, exhibitions, and decorative applications. They provide secure footing while maintaining visual appeal.',
      features: [
        'Anti-slip surface for safety',
        'Lightweight and portable',
        'Quick setup and removal',
        'Customizable sizes and colors',
        'Weather-resistant for outdoor use',
        'Reusable for multiple events'
      ],
      applications: [
        'Weddings and celebrations',
        'Corporate events and exhibitions',
        'Trade shows and fairs',
        'Outdoor festivals and concerts',
        'Temporary walkways',
        'Decorative installations'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE) with anti-slip coating',
        density: 'N/A (Flooring application)',
        uvStabilization: 'UV-stabilized for 3+ years',
        width: '1m, 2m, 3m, 4m rolls',
        colors: ['Green', 'Black', 'White', 'Custom colors available'],
        lifespan: '3-5 years'
      },
      image: 'assets/products/event-decoration-flooring-net-1.jpg',
      category: 'specialized',
      isRoseBrand: true,
      isPopular: false,
      isNew: true
    },
    {
      id: 'monofilament-shade-net',
      name: 'Monofilament Shade Net',
      shortName: 'Monofilament Net',
      description: 'High-quality monofilament nets for specialized applications requiring precision and durability',
      longDescription: 'Our monofilament shade nets are crafted with single-strand fibers for superior strength and precision. Ideal for applications requiring fine mesh control and exceptional durability.',
      features: [
        'Single-strand fiber construction',
        'Precise mesh control',
        'Superior strength and durability',
        'Minimal light blockage',
        'Excellent air circulation',
        'Professional-grade quality'
      ],
      applications: [
        'Precision agriculture',
        'Horticulture and floriculture',
        'Research and development facilities',
        'Specialized crop protection',
        'Fine mesh applications',
        'Professional farming'
      ],
      specifications: {
        material: 'High-density polyethylene (HDPE) monofilament',
        density: '20%, 30%, 40%, 50% shade options',
        uvStabilization: 'UV-stabilized for 6+ years',
        width: '2m, 3m, 4m, 6m rolls',
        colors: ['Green', 'Black', 'Blue'],
        lifespan: '6-9 years'
      },
      image: 'assets/products/monofilament-shade-net-1.jpg',
      category: 'agricultural',
      isRoseBrand: true,
      isPopular: false,
      isNew: false
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Browser-specific initialization
    }
  }

  private setupSEO() {
    const description = 'Discover premium ROSE brand green nets and shade nets. Residential, agricultural, commercial, and specialized shade nets for all your needs. High-quality, UV-stabilized, and durable solutions.';

    this.title.setTitle('Products - ROSE Brand Green Nets & Shade Nets | Umang Plastic Fabric');
    
    // Meta tags for SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'green nets, shade nets, agricultural nets, residential shade nets, commercial shade nets, sun shade nets, event flooring nets, monofilament nets, ROSE brand, UV stabilized nets, crop protection, Gujarat, Rajkot' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Umang Plastic Fabric' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'ROSE Brand Green Nets & Shade Nets - Premium Products' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/products/hero-products.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://umangplasticfabric.com/products' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'ROSE Brand Green Nets & Shade Nets - Premium Products' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/products/hero-products.jpg' });
  }

  get filteredProducts(): Product[] {
    let filtered = this.products;
    
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }
    
    if (this.searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        product.applications.some(app => app.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
    
    return filtered;
  }

  get categoryProducts(): Product[] {
    if (this.selectedCategory === 'all') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  viewProductDetails(productId: string): void {
    // Navigate to product detail page or show modal
    console.log('Viewing product details for:', productId);
    // TODO: Implement product detail navigation
  }

  getQuote(productId: string): void {
    // Navigate to contact page or show quote form
    console.log('Getting quote for:', productId);
    this.router.navigate(['/contact-us']);
  }
}
