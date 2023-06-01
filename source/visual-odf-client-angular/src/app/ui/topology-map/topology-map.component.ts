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


    // create rect 1
    let rect1 = new PIXI.Graphics();
    rect1.beginFill(0xf0f0f0)
    rect1.lineStyle(2, 0x9e9e9e, 1)
    rect1.drawRect(20, 320, 100, 50)
    // create rect 2
    let rect2 = new PIXI.Graphics();
    rect2.beginFill(0xf0f0f0)
    rect2.lineStyle(2, 0x9e9e9e, 1)
    rect2.drawRect(150, 400, 100, 50)
    // Add it to the stage to render
    this.app.stage.addChild(rect1);
    this.app.stage.addChild(rect2);

    let message1 = new PIXI.Text("重庆市变电站 no.1");
    message1.x = 30
    message1.y = 280
    this.app.stage.addChild(message1);

    let message2 = new PIXI.Text("重庆市变电站 no.9");
    message2.x = 260
    message2.y = 380
    this.app.stage.addChild(message2);

    // draw the line
    let line = new PIXI.Graphics();
    line.lineStyle(2, 0x212121, 1);
    line.moveTo(120, 345);
    line.lineTo(200, 345);
    line.lineTo(200, 400);
    line.x = 0;
    line.y = 0;
    this.app.stage.addChild(line);

    // test the bezier graphic
    // const realPath = new PIXI.Graphics();
    // realPath.lineStyle(2, 0xFFFFFF, 1);
    // realPath.moveTo(0, 0);
    // realPath.lineTo(100, 200);
    // realPath.lineTo(200, 200);
    // realPath.lineTo(240, 100);
    //
    // realPath.position.x = 50;
    // realPath.position.y = 50;
    // this.app.stage.addChild(realPath);

    // const bezier = new PIXI.Graphics();
    // bezier.lineStyle(1, 0xAA0000, 1);
    // bezier.bezierCurveTo(100, 200, 200, 200, 240, 100);
    //
    // bezier.position.x = 50;
    // bezier.position.y = 50;
    // this.app.stage.addChild(bezier);

    // render the message text
    let message = new PIXI.Text("Hello Pixi!");
    message.x = 750
    message.y = 400
    this.app.stage.addChild(message);

    this.app.ticker.minFPS = 70
    this.app.ticker.add((delta) => {
      message.text = `DELTA: ${delta.toFixed(3)}`
    })

    // create crying sprite
    // let sp = PIXI.Sprite.from('assets/sample.png')
    // sp.anchor.set(0.5);
    // sp.x = 500
    // sp.y = 190
    // sp.interactive = true
    // sp.cursor = 'pointer';
    // sp.on('pointerdown', () => {
    //   sp.rotation += 0.1
    // });
    // this.app.stage.addChild(sp)
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
