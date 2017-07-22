import { Injectable } from '@angular/core';
import { NuforcEncounter } from './nuforc-encounter'

@Injectable()
export class NuforcSearchService {

  constructor() { }

  search(queryString: String): NuforcEncounter[]{
    return [
      new NuforcEncounter('stuff', 'summary'),
      new NuforcEncounter('more stuff', 'other summary')
    ];
  }

}
