import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AboutUsComponent,
        CommonModule,
        RouterModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have company stats', () => {
    expect(component.companyStats).toBeDefined();
    expect(component.companyStats.length).toBe(4);
  });

  it('should have core values', () => {
    expect(component.coreValues).toBeDefined();
    expect(component.coreValues.length).toBe(6);
  });

  it('should have milestones', () => {
    expect(component.milestones).toBeDefined();
    expect(component.milestones.length).toBe(5);
  });

  it('should have team members', () => {
    expect(component.teamMembers).toBeDefined();
    expect(component.teamMembers.length).toBe(2);
  });

  it('should have main products', () => {
    expect(component.mainProducts).toBeDefined();
    expect(component.mainProducts.length).toBe(6);
  });

  it('should have brand features', () => {
    expect(component.brandFeatures).toBeDefined();
    expect(component.brandFeatures.length).toBe(4);
  });

  it('should have ROSE brand in milestones', () => {
    const roseMilestone = component.milestones.find(m => m.title.includes('ROSE'));
    expect(roseMilestone).toBeDefined();
    expect(roseMilestone?.year).toBe('2022');
  });

  it('should have green net focus in core values', () => {
    const greenNetValue = component.coreValues.find(v => v.description.includes('green net'));
    expect(greenNetValue).toBeDefined();
  });

  it('should have Customer Focus as a core value', () => {
    const customerFocusValue = component.coreValues.find(v => v.title === 'Customer Focus');
    expect(customerFocusValue).toBeDefined();
    expect(customerFocusValue?.description).toContain('customer expectations');
  });

  it('should have Continuous Improvement as a core value', () => {
    const continuousImprovementValue = component.coreValues.find(v => v.title === 'Continuous Improvement');
    expect(continuousImprovementValue).toBeDefined();
    expect(continuousImprovementValue?.description).toContain('evolving');
  });
});
