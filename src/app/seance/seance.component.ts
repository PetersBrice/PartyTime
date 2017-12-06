import {Component, Injectable, Input, OnInit} from '@angular/core';
import {SeanceService} from '../shared/seance-service/seance.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'ybd-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})

@Injectable()
export class SeanceComponent implements OnInit {
    private _seance: any;
    private _isSeance : boolean;

// il faut ajouter un constructeur avec les parametres pour ajouter directement au tableau listsymptone
  constructor(private _seanceService: SeanceService, private _route: ActivatedRoute) {
    this._seance = {};
    this._isSeance = false;
  }

  ngOnInit() {
    Observable
      .merge(
        this._route.params
          .filter(params => !!params['id'])
          .flatMap(params => this._seanceService.fetchOne(params['id']))
          .do(_ => this._isSeance = true)
      )
      .subscribe((seance: any) => this._seance = seance);
  }

  get seance(): any {
    return this._seance;
  }
  @Input()
  set seance(symptome: any) {
    this._seance = symptome;
  }

}
