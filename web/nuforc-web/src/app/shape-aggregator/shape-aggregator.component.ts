import {Component, Input} from '@angular/core';
import {Bucket} from "../bucket";

@Component({
  selector: 'shape-aggregator',
  templateUrl: './shape-aggregator.component.html',
  styleUrls: ['./shape-aggregator.component.css']
})
export class ShapeAggregatorComponent {
  @Input() buckets: Bucket[];

  constructor() {
  }
}
