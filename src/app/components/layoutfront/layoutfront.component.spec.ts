import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutfrontComponent } from './layoutfront.component';

describe('LayoutfrontComponent', () => {
  let component: LayoutfrontComponent;
  let fixture: ComponentFixture<LayoutfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutfrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
