import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTableOperationComponent } from './manage-table-operation.component';

describe('ManageTableOperationComponent', () => {
  let component: ManageTableOperationComponent;
  let fixture: ComponentFixture<ManageTableOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTableOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTableOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
