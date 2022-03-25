import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PateintlistComponent } from './pateintlist.component';

describe('PateintlistComponent', () => {
  let component: PateintlistComponent;
  let fixture: ComponentFixture<PateintlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PateintlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PateintlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
