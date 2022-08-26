import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDoubleViewComponent } from './product-double-view.component';

describe('ProductDoubleViewComponent', () => {
  let component: ProductDoubleViewComponent;
  let fixture: ComponentFixture<ProductDoubleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDoubleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDoubleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
