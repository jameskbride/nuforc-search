import { Injectable } from '@angular/core';
import { NuforcEncounter } from './nuforc-encounter'
import {Http} from "@angular/http";

@Injectable()
export class NuforcSearchService {


  constructor(private http: Http) { }

  search(queryString: String): Promise<NuforcEncounter[]>{
    const searchUrl = '/api/encounters/_search?q=';
    let query = `${searchUrl}${queryString}`;
    return this.http.get(query)
      .toPromise()
      .then(response => response.json().data as NuforcEncounter[]).catch(this.handleError);

    // return Promise.resolve([
    //   new NuforcEncounter('stuff', 'summary'),
    //   new NuforcEncounter('more stuff', 'other summary')
    // ]);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
