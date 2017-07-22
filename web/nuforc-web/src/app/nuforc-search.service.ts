import { Injectable } from '@angular/core';
import { NuforcEncounter } from './nuforc-encounter'

@Injectable()
export class NuforcSearchService {

  constructor() { }

  search(queryString: String): Promise<NuforcEncounter[]>{
    return Promise.resolve([
      new NuforcEncounter('stuff', 'summary'),
      new NuforcEncounter('more stuff', 'other summary')
    ]);
  }

}
