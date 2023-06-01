import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-empty-table-warning-p',
  templateUrl: './empty-table-warning-p.component.html',
  styleUrls: ['./empty-table-warning-p.component.scss']
})
export class EmptyTableWarningPComponent {

  @Input() showWarning:boolean = true;

}
