import {Component, Input} from '@angular/core';
import {Station} from "../../common/model/station";
import {Rack} from "../../common/model/rack";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Observable, switchMap} from "rxjs";

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss']
})
export class StationComponent {

  racks: Rack[] = [
    {name: "主站3楼新机房光纤配线架", id: 223, stationId: 123},
    {name: "主站4楼新机房光纤配线架", id: 224, stationId: 123},
    {name: "主站5楼新机房光纤配线架", id: 225, stationId: 123},
  ]

  @Input() station: Station = {
    id: 123,
    name: "重庆市主城区变电站",
    level: 10000,
    location: "2089,122",
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // station$: Observable<Station>;
  // stationId!: number;
  //
  //
  // ngOnInit() {
  //   this.station = this.route.paramMap.pipe(
  //     switchMap(params => {
  //        // = ;
  //       return Number(params.get('id'));
  //     })
  //   );
  // }

  // @Input() station!:Station;
  // ngOnInit() {
  //   this.hero$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) =>
  //       this.service.getHero(params.get('id')!))
  //   );
  // }
}
