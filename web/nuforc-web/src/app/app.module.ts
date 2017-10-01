import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {NuforcSearchService} from "./nuforc-search.service";
import {HttpClientModule} from '@angular/common/http'
import {RouterModule, Routes} from '@angular/router';
import { EncounterComponent } from './encounter/encounter.component';
import { SearchComponent } from './search/search.component';
import { ShapeAggregatorComponent } from './shape-aggregator/shape-aggregator.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {
    path: 'encounter/:id',
    component: EncounterComponent
  },
  {
    path: 'search',
    component: SearchComponent
  }
];

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    EncounterComponent,
    SearchComponent,
    ShapeAggregatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [NuforcSearchService, HttpClientModule]
})

export class AppModule { }
