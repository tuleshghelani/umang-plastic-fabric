import { Component, OnInit, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Aos from 'aos';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

interface Product {
  title: string;
  description: string;
  image: string;
  link: string;
  aosDelay: number;
}

interface Dealership {
  image: string;
  name: string;
  alt: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
  aosDelay: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  
  currentSlide = 0;
  slides = [0, 1, 2, 3, 4, 5, 6]; // Array for slide indicators
  showDesignContent = false;
  
  constructor(
    private sanitizer: DomSanitizer,
    private meta: Meta,
    private title: Title
  ) {
    this.setupSEO();
    this.setupStructuredData();
  }

  products: Product[] = [
    {
      title: 'Green Shade Nets',
      description: 'High-quality shade nets for optimal sunlight filtration and plant protection in various agricultural applications.',
      image: 'assets/home/about.jpg',
      link: '/products/green-shade-nets',
      aosDelay: 200
    },
    {
      title: 'Insect Protection Nets',
      description: 'Fine-mesh nets designed to keep pests away while allowing air circulation for healthier crops.',
      image: 'assets/home/about.jpg',
      link: '/products/insect-protection-nets',
      aosDelay: 200
    },
    {
      title: 'UV Stabilized Nets',
      description: 'Long-lasting nets with enhanced UV resistance for extended outdoor use in harsh sunlight conditions.',
      image: 'assets/home/about.jpg',
      link: '/products/uv-stabilized-nets',
      aosDelay: 200
    },
    {
      title: 'Windbreak Nets',
      description: 'Durable nets designed to protect crops from wind damage and create optimal microclimate for plant growth.',
      image: 'assets/home/pp-flute-boards.jpeg',
      link: '/products/windbreak-nets',
      aosDelay: 200
    },
  ];
  yearsOfExperience: number = new Date().getFullYear() - 2020;
  experienceText: string = this.yearsOfExperience + '+';
  features: Feature[] = [
    {
      title: 'UV Resistant & Durable',
      description: 'Our agricultural nets offer excellent UV resistance and durability for long-lasting crop protection',
      icon: 'fas fa-sun',
      aosDelay: 100
    },
    {
      title: 'Weather & Climate Protection',
      description: 'Resistant to harsh weather conditions while creating optimal microclimate for plant growth',
      icon: 'fas fa-cloud-sun',
      aosDelay: 200
    },
    {
      title: 'Eco-Friendly Solutions',
      description: 'Sustainable agricultural protection that reduces chemical usage and promotes organic farming',
      icon: 'fas fa-leaf',
      aosDelay: 300
    },
    {
      title: 'Customizable Solutions',
      description: 'Tailor-made products according to your specific requirements',
      icon: 'fas fa-tools',
      aosDelay: 400
    },
    {
      title: 'Cost-Effective',
      description: 'Affordable packaging solutions without compromising on quality',
      icon: 'fas fa-rupee-sign',
      aosDelay: 500
    },
    {
      title: 'Wide Range of Applications',
      description: 'Versatile products suitable for various industries and applications',
      icon: 'fas fa-industry',
      aosDelay: 600
    },
    {
      title: 'High Impact Resistance',
      description: 'Superior strength to protect contents during storage and transit',
      icon: 'fas fa-shield-alt',
      aosDelay: 700
    },
    {
      title: 'Printable Surface',
      description: 'Excellent printing capabilities for branding and promotional needs',
      icon: 'fas fa-print',
      aosDelay: 800
    },
    {
      title: 'Reusable & Recyclable',
      description: 'Products that can be reused multiple times and eventually recycled',
      icon: 'fas fa-recycle',
      aosDelay: 900
    }
  ];

  private setupSEO() {
    const description = `Umang Plastic Fabric - No.1 Green Nets & Shade Nets Manufacturer in Gujarat with ${this.yearsOfExperience}+ years of excellence. Suppliers of Agricultural Nets, Insect Protection Nets, UV Stabilized Nets, Windbreak Nets, and more.`;

    this.title.setTitle('Umang Plastic Fabric - Premium Green Nets & Shade Nets Manufacturer | Rajkot, Gujarat');
    
    // Meta tags for SEO
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: 'green nets, shade nets, agricultural nets, insect protection nets, UV stabilized nets, windbreak nets, crop protection, agricultural protection, plant protection, farming nets, greenhouse nets, garden nets, Gujarat, Rajkot' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.meta.updateTag({ name: 'author', content: 'Umang Plastic Fabric' });

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: 'Umang Plastic Fabric - Premium PP Corrugated Sheets & Box Manufacturer' });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ property: 'og:image', content: 'assets/home/company.jpg' });
    this.meta.updateTag({ property: 'og:url', content: 'https://umangplasticfabric.com' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: 'Umang Plastic Fabric - Premium PP Corrugated Sheets & Box Manufacturer' });
    this.meta.updateTag({ name: 'twitter:description', content: description });
    this.meta.updateTag({ name: 'twitter:image', content: 'assets/home/company.jpg' });

    // Location tags
    this.meta.updateTag({ name: 'geo.region', content: 'IN-GJ' });
    this.meta.updateTag({ name: 'geo.placename', content: 'Rajkot' });
  }

  private setupStructuredData() {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Umang Plastic Fabric',
      'url': 'https://www.umangplasticfabric.com',
      'logo': 'https://www.umangplasticfabric.com/assets/images/logo.png',
      'description': 'Leading manufacturer of high-quality green nets and shade nets for agricultural protection in Rajkot, Gujarat.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Survey No. 108/1, Plot No. 2, Shapar Industrial Area',
        'addressLocality': 'Shapar',
        'addressRegion': 'Rajkot',
        'postalCode': '360024',
        'addressCountry': 'IN'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-9898123456',
        'contactType': 'Customer Service'
      },
      'sameAs': [
        'https://www.facebook.com/umangplasticfabric',
        'https://www.linkedin.com/company/umang-plastic-fabric',
        'https://www.instagram.com/umangplasticfabric'
      ],
      // Add dynamic product data
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Agricultural Nets Products',
        itemListElement: this.products.map(product => ({
          '@type': 'Offer',
          name: product.title,
          description: product.description,
          image: product.image
        }))
      }
    };

    // Create script element for structured data
    if (isPlatformBrowser(this.platformId)) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      Aos.init({
        duration: 1000,
        once: true
      });
      this.startSlideShow();
    }
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  nextSlide() {
    this.currentSlide = this.currentSlide === this.slides.length - 1 ? 0 : this.currentSlide + 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  private startSlideShow() {
    setInterval(() => {
      this.nextSlide();
    }, 5000); 
  }
  
  getSafeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  toggleDesignContent() {
    this.showDesignContent = !this.showDesignContent;
  }

  /**
   * Opens WhatsApp chat with the specified phone number
   * Uses web.whatsapp.com for desktop and whatsapp://send for mobile
   */
  openWhatsApp() {
    const phoneNumber = '919328034724';
    const message = encodeURIComponent('Hello! I am interested in your premium green nets and shade nets. Could you please provide more information?');
    
    // Check if it's a mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let whatsappUrl: string;
    
    if (isMobile) {
      // For mobile devices, use the WhatsApp app directly
      whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    } else {
      // For desktop, use web.whatsapp.com
      whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
    
    // Open WhatsApp in a new window/tab
    window.open(whatsappUrl, '_blank');
  }
}
