import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ListseanceComponent} from "./listseance/listseance.component";

// APP COMPONENTS
const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'seances', component: ListseanceComponent }
];

export const APP_ROUTES = RouterModule.forRoot(ROUTES, { useHash: true });
