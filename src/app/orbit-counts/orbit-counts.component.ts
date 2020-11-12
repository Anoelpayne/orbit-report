import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
    @Input() satellites: Satellite[];
  constructor() { 
  }
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

  allTheTypes(): string[] {
    let count: string[] = [];
    for (let satellite of this.satellites) {
      if (!count.includes(satellite.type)){
        count.push(satellite.type)
      }
    }
    console.log(count);
    return count;
  }
}
