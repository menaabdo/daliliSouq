import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneAdComponent } from './one-ad.component';

describe('OneAdComponent', () => {
  let component: OneAdComponent;
  let fixture: ComponentFixture<OneAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
