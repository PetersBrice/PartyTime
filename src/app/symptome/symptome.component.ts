///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Symptoms} from '../_static/symptoms';

@Component({
  selector: 'nwt-symptome',
  templateUrl: './symptome.component.html',
  styleUrls: ['./symptome.component.css']
})

@Injectable()
export class SymptomeComponent implements OnInit {
    private _symptome: any;

// il faut ajouter un constructeur avec les parametres pour ajouter directement au tableau listsymptone
  constructor() {
    this._symptome = Symptoms[0];
  }

  ngOnInit() {
  }

  get symptome(): any {
    return this._symptome;
  }
  @Input()
  set symptome(symptome: any) {
    this._symptome = symptome;
  }
  afficher(event) {
    // this.nom="Modifier Name";//il faut afficher agrandir les informations
  }
}
