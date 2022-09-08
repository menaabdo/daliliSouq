import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSalesDetailesComponent } from './store-sales-detailes.component';

describe('StoreSalesDetailesComponent', () => {
  let component: StoreSalesDetailesComponent;
  let fixture: ComponentFixture<StoreSalesDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSalesDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSalesDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
