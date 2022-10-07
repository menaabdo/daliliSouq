import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreallcodeComponent } from './storeallcode.component';

describe('StoreallcodeComponent', () => {
  let component: StoreallcodeComponent;
  let fixture: ComponentFixture<StoreallcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreallcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreallcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
