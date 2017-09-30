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
  declarations: [
    AppComponent,
    EncounterComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [NuforcSearchService, HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
