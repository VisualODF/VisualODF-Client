import {Component, Input} from '@angular/core';
import {Station} from "../../common/model/station";

@Component({
  selector: 'app-sidebar-station-list-item',
  templateUrl: './sidebar-station-list-item.component.html',
  styleUrls: ['./sidebar-station-list-item.component.scss']
})
export class SidebarStationListItemComponent {

  showChildren: Boolean = false;

  @Input() station!:Station;

  ngOnInit(): void {


  }
}
