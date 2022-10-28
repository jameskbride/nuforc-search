import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Encounter} from "./add-encounter/encounter";
import {Observable} from "rxjs/Observable";
import {ReportEncounterResponse} from "./ReportEncounterResponse";
import {environment} from "../environments/environment";

@Injectable()
export class EncounterService {

  constructor(private http: HttpClient) { }

  reportEncounter(encounter:Encounter): Observable<ReportEncounterResponse> {
    const reportUrl = environment.BASE_URL + '/encounters/encounter';

    return this.http.post<ReportEncounterResponse>(reportUrl, encounter);
  }

}
