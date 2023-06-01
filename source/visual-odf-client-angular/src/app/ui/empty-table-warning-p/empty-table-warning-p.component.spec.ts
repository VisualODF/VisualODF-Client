import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyTableWarningPComponent } from './empty-table-warning-p.component';

describe('EmptyTableWarningPComponent', () => {
  let component: EmptyTableWarningPComponent;
  let fixture: ComponentFixture<EmptyTableWarningPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyTableWarningPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyTableWarningPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
