import { Component } from '@angular/core';
import {Station} from "../../common/model/station";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  stations: Station[] = [
    {name: "重庆市区变电站 No.1", id: 123,level:200, location: "123,234"},
    {name: "重庆市区变电站 No.2", id: 124,level:200, location: "234,165"},
    {name: "重庆市区变电站 No.3", id: 125,level:400, location: "8329,111"},
    {name: "重庆市区变电站 No.9", id: 189,level:500, location: "443,321"},
    {name: "重庆市区变电站 No.11", id: 190,level:400, location: "475,14"},
  ]

}
