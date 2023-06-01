import {Component} from '@angular/core';
import {Station} from "../../common/model/station";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  stations: Station[] = [
    {name: "重庆市区变电站 No.1", id: 123,level:200, location: "somewhere"},
    {name: "重庆市区变电站 No.2", id: 124,level:200, location: "somewhere"},
    {name: "重庆市区变电站 No.3", id: 125,level:400, location: "somewhere"},
    {name: "重庆市区变电站 No.9", id: 189,level:500, location: "somewhere"},
    {name: "重庆市区变电站 No.11", id: 190,level:400, location: "somewhere"},
  ]


  ngOnInit(): void {

  }
}
