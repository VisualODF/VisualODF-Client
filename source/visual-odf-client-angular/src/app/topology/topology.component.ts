import {Component} from '@angular/core';

// import pixijs as *
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-topology',
  templateUrl: './topology.component.html',
  styleUrls: ['./topology.component.scss']
})
export class TopologyComponent {

  private app: PIXI.Application<HTMLCanvasElement> = new PIXI.Application<HTMLCanvasElement>({
    width: 400,
    height: 300
  });

  ngOnInit(): void {
    document.body.appendChild(this.app.view);
  }
}
