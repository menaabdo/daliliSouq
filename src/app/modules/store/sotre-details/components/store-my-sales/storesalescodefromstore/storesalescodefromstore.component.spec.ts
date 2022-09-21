import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresalescodefromstoreComponent } from './storesalescodefromstore.component';

describe('StoresalescodefromstoreComponent', () => {
  let component: StoresalescodefromstoreComponent;
  let fixture: ComponentFixture<StoresalescodefromstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresalescodefromstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresalescodefromstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
