import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStoreproductComponent } from './edit-storeproduct.component';

describe('EditStoreproductComponent', () => {
  let component: EditStoreproductComponent;
  let fixture: ComponentFixture<EditStoreproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStoreproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStoreproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
