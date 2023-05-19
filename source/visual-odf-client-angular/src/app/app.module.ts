import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopologyComponent } from './topology/topology.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopologyMapComponent } from './topology-map/topology-map.component';
import { BoxComponent } from './box/box.component';

@NgModule({
  declarations: [
    AppComponent,
    TopologyComponent,
    DashboardComponent,
    TopologyMapComponent,
    BoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
