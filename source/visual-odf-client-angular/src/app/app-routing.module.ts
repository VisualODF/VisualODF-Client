import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ContainerComponent} from "./dashboard/container/container.component";
import {ManageComponent} from "./dashboard/manage/manage.component";
import {DataComponent} from "./dashboard/data/data.component";
import {ComputeComponent} from "./dashboard/compute/compute.component";
import {StationComponent} from "./dashboard/station/station.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: '', // child route path
        component: ContainerComponent, // child route component that the router renders
      },
      {
        path: 'container',
        component: ContainerComponent,
      },
      {
        path: 'manage',
        component: ManageComponent,
      },
      {
        path: 'data',
        component: DataComponent,
      },
      {
        path: 'compute',
        component: ComputeComponent,
      },
      {
        path: 'station',
        component: StationComponent,
        // children: [
        //   {
        //     path:":id"
        //   }
        // ]
      },
      {
        path: 'station/:id',
        component: StationComponent,
        // children: [
        //   {
        //     path:":id"
        //   }
        // ]
      },
    ],
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', redirectTo: "dashboard"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
