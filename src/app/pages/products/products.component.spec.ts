import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProductsComponent,
        CommonModule,
        RouterModule,
        FormsModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have product categories', () => {
    expect(component.productCategories).toBeDefined();
    expect(component.productCategories.length).toBe(5);
  });

  it('should have products', () => {
    expect(component.products).toBeDefined();
    expect(component.products.length).toBe(6);
  });

  it('should have default selected category as "all"', () => {
    expect(component.selectedCategory).toBe('all');
  });

  it('should have empty search term by default', () => {
    expect(component.searchTerm).toBe('');
  });

  it('should filter products by category', () => {
    component.selectCategory('residential');
    expect(component.selectedCategory).toBe('residential');
    expect(component.categoryProducts.length).toBe(1);
  });

  it('should filter products by search term', () => {
    component.searchTerm = 'agricultural';
    expect(component.filteredProducts.length).toBeGreaterThan(0);
  });

  it('should clear search term', () => {
    component.searchTerm = 'test';
    component.clearSearch();
    expect(component.searchTerm).toBe('');
  });

  it('should toggle filters', () => {
    expect(component.showFilters).toBe(false);
    component.toggleFilters();
    expect(component.showFilters).toBe(true);
    component.toggleFilters();
    expect(component.showFilters).toBe(false);
  });

  it('should have ROSE brand products', () => {
    const roseProducts = component.products.filter(p => p.isRoseBrand);
    expect(roseProducts.length).toBe(6);
  });

  it('should have popular products', () => {
    const popularProducts = component.products.filter(p => p.isPopular);
    expect(popularProducts.length).toBeGreaterThan(0);
  });

  it('should have new products', () => {
    const newProducts = component.products.filter(p => p.isNew);
    expect(newProducts.length).toBeGreaterThan(0);
  });
});
