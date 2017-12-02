///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Seances} from '../_static/seances';

@Component({
  selector: 'nwt-seance',
  templateUrl: './seance.component.html',
  styleUrls: ['./seance.component.css']
})

@Injectable()
export class SymptomeComponent implements OnInit {
    private _seance: any;

// il faut ajouter un constructeur avec les parametres pour ajouter directement au tableau listsymptone
  constructor() {
    this._seance = Seances[0];
  }

  ngOnInit() {
  }

  get seance(): any {
    return this._seance;
  }
  @Input()
  set seance(symptome: any) {
    this._seance = symptome;
  }
  afficher(event) {
    // this.nom="Modifier Name";//il faut afficher agrandir les informations
  }
}
