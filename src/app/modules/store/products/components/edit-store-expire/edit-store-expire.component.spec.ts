import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreExpireComponent } from './edit-store-expire.component';

describe('EditStoreExpireComponent', () => {
  let component: EditStoreExpireComponent;
  let fixture: ComponentFixture<EditStoreExpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStoreExpireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreExpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
