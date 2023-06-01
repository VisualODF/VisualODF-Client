import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMaskComponent } from './dashboard-mask.component';

describe('DashboardMaskComponent', () => {
  let component: DashboardMaskComponent;
  let fixture: ComponentFixture<DashboardMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
