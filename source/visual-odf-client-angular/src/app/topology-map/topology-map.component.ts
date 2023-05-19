import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

// import pixijs as *
import * as PIXI from 'pixi.js';

@Component({
  selector: 'app-topology-map',
  templateUrl: './topology-map.component.html',
  styleUrls: ['./topology-map.component.scss']
})
export class TopologyMapComponent implements AfterViewInit {

  private app = new PIXI.Application({
    autoDensity: true,              // control text-like scaling, together resolution option
    resolution: devicePixelRatio,   // default as 1, recommend as devicePixelRatio for costume
    antialias: true,
    backgroundAlpha: 0.02,
  });

  @ViewChild('mapPixiCanvas') mpc!: ElementRef

  constructor(private r2: Renderer2) {
  }

  ngOnInit(): void {

    // create crying sprite
    let path = "assets/sample.png";
    let sp = PIXI.Sprite.from(path);
    sp.x = 500
    sp.y = 190
    sp.anchor.set(0.5);
    sp.interactive = true
    sp.cursor = 'pointer';
    sp.on('pointerdown', () => {
      sp.rotation += 0.1
    });
    this.app.stage.addChild(sp)
  }

  ngAfterViewInit(): void {
    // capture the element
    let containerElement = this.mpc.nativeElement
    // resize the width and height
    this.app.resizeTo = containerElement
    // render the stage to the canvas dom
    this.r2.appendChild(containerElement, this.app.view)
  }
}
