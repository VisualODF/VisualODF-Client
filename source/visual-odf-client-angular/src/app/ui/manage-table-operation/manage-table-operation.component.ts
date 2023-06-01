import {Component, Input} from '@angular/core';
import {Station} from "../../common/model/station";

@Component({
  selector: 'app-manage-table-operation',
  templateUrl: './manage-table-operation.component.html',
  styleUrls: ['./manage-table-operation.component.scss']
})
export class ManageTableOperationComponent {

  @Input() station!:Station;

}
