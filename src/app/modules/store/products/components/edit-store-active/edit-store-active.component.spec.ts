import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreActiveComponent } from './edit-store-active.component';

describe('EditStoreActiveComponent', () => {
  let component: EditStoreActiveComponent;
  let fixture: ComponentFixture<EditStoreActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStoreActiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
