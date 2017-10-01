import {SearchHit} from "./search-hit";
import {AggregationResults} from "./aggregation-results";

export interface ComplexSearchResult {
  hits: SearchHit;
  aggregations: AggregationResults;
}
