import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
    @Input() satellites: Satellite[];
    count: string[];
  constructor() { }

  ngOnInit() {
  }

  satelliteCounts():number {
    return this.satellites.length;
  }

  typeCounter(inputType:string):number {
    let sum: number = 0;
    for (let satellite of this.satellites) {
      if (satellite.type.toLowerCase() === inputType.toLowerCase()) {
        sum+=1;
      }
    }
    return sum;
  }

  allTheTypes():string[] {
    for (let satellite of this.satellites) {
      if (!this.count.includes(satellite.type.toLowerCase())){
    this.count.push(satellite.type)
      }
    }
    // console.log(this.count);
    return this.count;
  }
}
