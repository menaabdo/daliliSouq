import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStorePassiveComponent } from './edit-store-passive.component';

describe('EditStorePassiveComponent', () => {
  let component: EditStorePassiveComponent;
  let fixture: ComponentFixture<EditStorePassiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStorePassiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStorePassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
