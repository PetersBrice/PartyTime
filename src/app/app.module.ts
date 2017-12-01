// CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MATERIAL DESIGN MODULES
import { MatToolbarModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SymptomeComponent } from './symptome/symptome.component';
import { ListsymptomeComponent } from './listsymptome/listsymptome.component';
import {CardComponent} from './shared/card/card.component';

@NgModule({
  declarations: [AppComponent, SymptomeComponent, ListsymptomeComponent, CardComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatCardModule
  ],
  providers: [SymptomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
