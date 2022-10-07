import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreallcodesellerComponent } from './storeallcodeseller.component';

describe('StoreallcodesellerComponent', () => {
  let component: StoreallcodesellerComponent;
  let fixture: ComponentFixture<StoreallcodesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreallcodesellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreallcodesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
