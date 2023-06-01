import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStationListItemComponent } from './sidebar-station-list-item.component';

describe('SidebarStationListItemComponent', () => {
  let component: SidebarStationListItemComponent;
  let fixture: ComponentFixture<SidebarStationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarStationListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarStationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
