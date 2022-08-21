import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersellerviewcodeComponent } from './ordersellerviewcode.component';

describe('OrdersellerviewcodeComponent', () => {
  let component: OrdersellerviewcodeComponent;
  let fixture: ComponentFixture<OrdersellerviewcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersellerviewcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersellerviewcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
