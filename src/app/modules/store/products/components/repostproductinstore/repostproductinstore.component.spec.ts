import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostproductinstoreComponent } from './repostproductinstore.component';

describe('RepostproductinstoreComponent', () => {
  let component: RepostproductinstoreComponent;
  let fixture: ComponentFixture<RepostproductinstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepostproductinstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostproductinstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
