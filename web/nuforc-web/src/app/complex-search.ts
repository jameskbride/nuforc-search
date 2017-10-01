import {ComplexQuery} from "./complex-query";
import {ComplexAggregations} from "./complex-aggregations";

export class ComplexSearch {
  constructor(public query?: ComplexQuery, public aggs?: ComplexAggregations) {}
}
