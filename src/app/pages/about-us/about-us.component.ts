import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  companyStats = [
    {
      number: '5+',
      label: 'Years of Excellence',
      icon: '🏆'
    },
    {
      number: '1000+',
      label: 'Happy Customers',
      icon: '😊'
    },
    {
      number: '50+',
      label: 'Product Varieties',
      icon: '📦'
    },
    {
      number: '24/7',
      label: 'Customer Support',
      icon: '🛠️'
    }
  ];

  coreValues = [
    {
      title: 'Innovation',
      description: 'Pioneering sustainable green net solutions for tomorrow\'s agricultural challenges',
      icon: '💡'
    },
    {
      title: 'Quality',
      description: 'Uncompromising standards in every green net and shade net we manufacture',
      icon: '⭐'
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly green nets and sustainable manufacturing practices for a greener future',
      icon: '🌱'
    },
    {
      title: 'Excellence',
      description: 'Striving for perfection in every aspect of our green net production',
      icon: '🏆'
    },
    {
      title: 'Customer Focus',
      description: 'Dedicated to understanding and exceeding customer expectations with personalized solutions',
      icon: '🤝'
    },
    {
      title: 'Continuous Improvement',
      description: 'Constantly evolving our processes and products to deliver better green net solutions',
      icon: '📈'
    }
  ];

  milestones = [
    {
      year: '2021',
      title: 'Company Foundation',
      description: 'Started as a small green net manufacturing unit in Gujarat'
    },
    {
      year: '2022',
      title: 'ROSE Brand Launch',
      description: 'Introduced ROSE brand green nets and shade nets'
    },
    {
      year: '2023',
      title: 'Product Expansion',
      description: 'Launched comprehensive range of agricultural shade nets'
    },
    {
      year: '2024',
      title: 'Market Leadership',
      description: 'Became leading green net manufacturer in Gujarat region'
    },
    {
      year: '2025',
      title: 'Innovation Hub',
      description: 'Established R&D center for advanced green net solutions'
    }
  ];

  teamMembers = [
    {
      name: 'Harshil Sagapariya',
      position: 'CEO & Founder',
      experience: '5+ years',
      image: 'assets/images/team/ceo.jpg'
    },
    {
      name: 'Rajubhai Sagapariya',
      position: 'Technical Director',
      experience: '5+ years',
      image: 'assets/images/team/technical-director.jpg'
    }
  ];

  mainProducts = [
    {
      name: 'Residential Shade Net',
      description: 'Premium shade nets for homes, balconies, and residential areas',
      icon: '🏠'
    },
    {
      name: 'Event Decoration Flooring Net',
      description: 'Specialized nets for event decoration and temporary flooring',
      icon: '🎉'
    },
    {
      name: 'Agriculture Shade Net',
      description: 'Professional agricultural shade nets for crop protection',
      icon: '🌾'
    },
    {
      name: 'Commercial Shade Net',
      description: 'Heavy-duty shade nets for commercial and industrial applications',
      icon: '🏢'
    },
    {
      name: 'Sun Shade Net',
      description: 'UV-stabilized sun protection nets for various applications',
      icon: '☀️'
    },
    {
      name: 'Monofilament Shade Net',
      description: 'High-quality monofilament nets for specialized applications',
      icon: '🔬'
    }
  ];

  brandFeatures = [
    {
      title: 'ROSE Brand Excellence',
      description: 'Our flagship ROSE brand represents the highest quality standards in green net manufacturing',
      icon: 'assets/logo/roze.jpg'
    },
    {
      title: 'Premium Quality',
      description: 'ROSE green nets are manufactured using the finest materials and advanced technology',
      icon: '💎'
    },
    {
      title: 'Durability',
      description: 'ROSE nets are built to last, withstanding harsh weather conditions and extended use',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'Continuous R&D ensures ROSE nets meet evolving agricultural and commercial needs',
      icon: '🚀'
    }
  ];

  ngOnInit(): void {
    // Component initialization logic
  }
}
