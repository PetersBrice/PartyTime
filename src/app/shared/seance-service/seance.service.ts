import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/filter';

@Injectable()
export class SeanceService {
  // private property to store all backend URLs
  private _backendURL: any;
  private truc: any;

  constructor(private _http: HttpClient) {
    this._backendURL = {};
  this.truc = {};
    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[k] = `${baseUrl}${environment.backend.endpoints[k]}`);
  }

  fetch(): Observable<any[]> {
    return this._http.get(this._backendURL.allSeance, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  fetchRandom(): Observable<any> {
    return this._http.get(this._backendURL.randomPeople, this._options())
      .filter(_ => !!_)
      .defaultIfEmpty({});
  }

  fetchOne(id: string): Observable<any> {
    return this._http.get(this._backendURL.oneSeance.replace(':id', id), this._options());
  }

  create(seance: any): Observable<any> {
    return this._http.post(this._backendURL.allSeance, seance, this._options());
  }

  update(seance: any): Observable<any> {

    console.log(seance);
    /*on ne doit envoyer que le body*/
    this.truc.nom = seance.nom;
    this.truc.type = seance.type;
    this.truc.description = seance.description;
    this.truc.tel = seance.tel;

    console.log(this.truc);

    return this._http.put(this._backendURL.oneSeance.replace(':id', seance.id), this.truc, this._options());
  }

  delete(id: string): Observable<any[]> {
    return this._http.delete(this._backendURL.oneSeance.replace(':id', id), this._options())
      .filter(_ => !!_)
      .defaultIfEmpty([]);
  }

  private _options(headerList: Object = {}): any {
    const headers = new HttpHeaders(Object.assign({ 'Content-Type': 'application/json' }, headerList));
    return { headers };
  }
}
