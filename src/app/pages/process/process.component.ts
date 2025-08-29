import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss'
})
export class ProcessComponent implements OnInit {
  constructor(private seo: SeoService) {}

  ngOnInit(): void {
    const title = 'Manufacturing Process | Umang Plastic Fabric';
    const description = 'Discover our premium shade net manufacturing process: HD T9 granules, film extrusion, precision slitting to 1.5 mm threads, net weaving, folding and quality checks.';
    this.seo.updateTitle(title);
    this.seo.updateMetaTags({
      description,
      keywords: 'shade net process, HD T9 granules, 1.5 mm thread, net weaving, folding machine, Umang Plastic Fabric',
      ogTitle: title,
      ogDescription: description,
      ogImage: 'assets/logo/logo.png',
      ogUrl: '/process',
      twitterTitle: title,
      twitterDescription: description,
      twitterImage: 'assets/logo/logo.png'
    });
  }
}
