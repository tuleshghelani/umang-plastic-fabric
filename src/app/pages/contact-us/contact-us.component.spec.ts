import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { PLATFORM_ID } from '@angular/core';
import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;
  let mockMeta: jasmine.SpyObj<Meta>;
  let mockTitle: jasmine.SpyObj<Title>;
  let mockPlatformId: Object;

  beforeEach(async () => {
    mockMeta = jasmine.createSpyObj('Meta', ['updateTag']);
    mockTitle = jasmine.createSpyObj('Title', ['setTitle']);
    mockPlatformId = 'browser';

    await TestBed.configureTestingModule({
      imports: [ContactUsComponent, ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Meta, useValue: mockMeta },
        { provide: Title, useValue: mockTitle },
        { provide: PLATFORM_ID, useValue: mockPlatformId }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
    expect(component.contactForm.get('phone')?.value).toBe('');
    expect(component.contactForm.get('company')?.value).toBe('');
    expect(component.contactForm.get('subject')?.value).toBe('');
    expect(component.contactForm.get('message')?.value).toBe('');
  });

  it('should set SEO metadata on init', () => {
    expect(mockTitle.setTitle).toHaveBeenCalledWith('Contact Us - Umang Plastic Fabric | Get in Touch for Premium Solutions');
    expect(mockMeta.updateTag).toHaveBeenCalled();
  });

  it('should validate required fields', () => {
    const form = component.contactForm;
    
    expect(form.valid).toBeFalsy();
    
    form.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      subject: 'Test Subject',
      message: 'This is a test message'
    });
    
    expect(form.valid).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.contactForm.get('email');
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.errors?.['email']).toBeTruthy();
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.errors?.['email']).toBeFalsy();
  });

  it('should validate phone number format', () => {
    const phoneControl = component.contactForm.get('phone');
    
    phoneControl?.setValue('abc123');
    expect(phoneControl?.errors?.['pattern']).toBeTruthy();
    
    phoneControl?.setValue('123-456-7890');
    expect(phoneControl?.errors?.['pattern']).toBeFalsy();
  });

  it('should validate minimum length requirements', () => {
    const nameControl = component.contactForm.get('name');
    const subjectControl = component.contactForm.get('subject');
    const messageControl = component.contactForm.get('message');
    
    nameControl?.setValue('A');
    expect(nameControl?.errors?.['minlength']).toBeTruthy();
    
    subjectControl?.setValue('Test');
    expect(subjectControl?.errors?.['minlength']).toBeTruthy();
    
    messageControl?.setValue('Short');
    expect(messageControl?.errors?.['minlength']).toBeTruthy();
  });

  it('should show field errors when form is touched', () => {
    const nameControl = component.contactForm.get('name');
    nameControl?.markAsTouched();
    
    expect(component.getFieldError('name')).toBe('Name is required');
  });

  it('should handle form submission successfully', fakeAsync(() => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      subject: 'Test Subject',
      message: 'This is a test message'
    });
    
    component.onSubmit();
    
    // Fast-forward time by 2 seconds
    tick(2000);
    
    expect(component.submitSuccess).toBeTruthy();
    expect(component.isSubmitting).toBeFalsy();
    
    // Fast-forward time by 5 more seconds to test auto-reset
    tick(5000);
    
    expect(component.submitSuccess).toBeFalsy();
  }));

  it('should not submit invalid form', () => {
    component.onSubmit();
    expect(component.isSubmitting).toBeFalsy();
    expect(component.submitSuccess).toBeFalsy();
  });

  it('should mark all form controls as touched on invalid submission', () => {
    const form = component.contactForm;
    spyOn(form, 'markAsTouched');
    
    component.onSubmit();
    
    expect(form.markAsTouched).toHaveBeenCalled();
  });
});
