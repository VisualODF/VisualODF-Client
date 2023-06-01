import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TopologyComponent} from './ui/topology/topology.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TopologyMapComponent} from './ui/topology-map/topology-map.component';
import { SidebarStationListItemComponent } from './ui/sidebar-station-list-item/sidebar-station-list-item.component';
import { ContainerComponent } from './dashboard/container/container.component';
import { ManageComponent } from './dashboard/manage/manage.component';
import { DataComponent } from './dashboard/data/data.component';
import { ComputeComponent } from './dashboard/compute/compute.component';
import { ManageTableOperationComponent } from './ui/manage-table-operation/manage-table-operation.component';
import { DashboardMaskComponent } from './ui/dashboard-mask/dashboard-mask.component';
import { StationComponent } from './dashboard/station/station.component';
import { EmptyTableWarningPComponent } from './ui/empty-table-warning-p/empty-table-warning-p.component';




@NgModule({
  declarations: [
    AppComponent,
    TopologyComponent,
    DashboardComponent,
    TopologyMapComponent,
    SidebarStationListItemComponent,
    ContainerComponent,
    ManageComponent,
    DataComponent,
    ComputeComponent,
    ManageTableOperationComponent,
    DashboardMaskComponent,
    StationComponent,
    EmptyTableWarningPComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
