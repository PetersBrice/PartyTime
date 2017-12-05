
import { Component, OnInit } from '@angular/core';
import {DialogComponent} from '../shared/dialog/dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';
import {SeanceService} from '../shared/seance-service/seance.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'nwt-listseance',
  templateUrl: './listseance.component.html',
  styleUrls: ['./listseance.component.css']
})
export class ListseanceComponent implements OnInit {

  private _view: string;
  private _seances: any[];
  private _dialogStatus: string;
  private _backendURL: any;
  private _seanceDialog: MatDialogRef<DialogComponent>;

  constructor(private _dialog: MatDialog, private _seanceService: SeanceService) {
    this._dialogStatus = 'inactive';
    this._backendURL = {};
    this._seances = [];
    this._view = 'card';
  }

  ngOnInit() {
    this._seanceService
      .fetch()
      .subscribe((seances: any[]) => this._seances = seances);
  }
  get view(): string {
    return this._view;
  }

  switchView() {
    this._view = (this._view === 'card') ? 'list' : 'card';
  }

  get dialogStatus(): string {
    return this._dialogStatus;
  }

  get seances(): any[] {
    return this._seances;
  }

  set seances(value: any[]) {
    this._seances = value;
  }

  delete(seance: any) {
    // on delete
    this._seanceService
      .delete(seance.id)
      .subscribe((seances: any[]) => this._seanceService
        .fetch()
        .subscribe((program: any[]) => this._seances = program));
  }

  private _add(seance: any): Observable<any[]> {
    return this._seanceService
      .create(seance)
      .flatMap(_ => this._seanceService.fetch());
  }

  showDialog() {
    this._dialogStatus = 'active';

    // open modal
    this._seanceDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });

    this._seanceDialog.afterClosed()
      .filter(_ => !!_)
      .flatMap(_ => this._add(_))
      .subscribe(
        (seances: any[]) => this._seances = seances,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );
  }

  isTypeForce(seance: any): boolean {
    return seance.type === 'Force';
  }

  isTypeCardio(seance: any): boolean {
    return seance.type === 'Cardio';
  }

  isTypePertedePoids(seance: any): boolean {
    return seance.type === 'Perte de poids';
  }
}
