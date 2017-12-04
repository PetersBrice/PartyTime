// CORE MODULES
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MATERIAL DESIGN MODULES
import {
  MatToolbarModule, MatCardModule, MatDialogModule, MatIconModule, MatSelectModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SeanceComponent } from './seance/seance.component';
import { ListseanceComponent } from './listseance/listseance.component';
import {CardComponent} from './shared/card/card.component';
import { FormComponent } from './shared/form/form.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {APP_ROUTES} from './app.routes';
import {SeanceService} from './shared/seance-service/seance.service';
import {FormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [AppComponent, SeanceComponent, ListseanceComponent, CardComponent, FormComponent, DialogComponent, HomeComponent, UpdateComponent],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    APP_ROUTES
  ],
  providers: [SeanceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
