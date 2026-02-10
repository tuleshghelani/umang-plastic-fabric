import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = '';

  constructor(
    private fb: FormBuilder,
    private seoService: SeoService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]+$/)]],
      company: [''],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.setSEOMetadata();
    // Only load Font Awesome on browser platform
    if (isPlatformBrowser(this.platformId)) {
      this.loadFontAwesome();
    }
  }

  private loadFontAwesome(): void {
    // Check if we're in browser environment and Font Awesome is not already loaded
    if (typeof document !== 'undefined' && !document.querySelector('link[href*="font-awesome"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
      document.head.appendChild(link);
    }
  }

  private setSEOMetadata(): void {
    this.seoService.updateTitle('Contact Us - Umang Plastic Fabric | Get in Touch for Premium Solutions');

    const ogUrl = isPlatformBrowser(this.platformId) ? window.location.href : '';
    this.seoService.updateMetaTags({
      description: 'Contact Umang Plastic Fabric for premium plastic fabric solutions. Get expert consultation, quotes, and support. Reach our team via phone, email, or contact form.',
      keywords: 'contact us, plastic fabric, Umang Plastic Fabric, customer support, quote request, consultation, industrial fabrics',
      ogTitle: 'Contact Us - Umang Plastic Fabric',
      ogDescription: 'Get in touch with Umang Plastic Fabric for premium plastic fabric solutions and expert consultation.',
      ogUrl,
      twitterTitle: 'Contact Us - Umang Plastic Fabric',
      twitterDescription: 'Get in touch with Umang Plastic Fabric for premium plastic fabric solutions and expert consultation.'
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.isSubmitting) return;
    if (!this.contactForm.valid) {
      this.markFormGroupTouched();
      return;
    }
    this.isSubmitting = true;
    this.submitError = '';

    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();

      // Reset success message after 5 seconds
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }, 2000);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field?.touched) {
      if (field.errors['required']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) return `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} must be at least ${field.errors['minlength'].requiredLength} characters`;
      if (field.errors['pattern']) return 'Please enter a valid phone number';
    }
    return '';
  }
}
