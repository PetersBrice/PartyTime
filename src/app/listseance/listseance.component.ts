
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


  private _seances: any[];
  private _dialogStatus: string;
  private _backendURL: any;
  private _seanceDialog: MatDialogRef<DialogComponent>;

  constructor(private _dialog: MatDialog, private _seanceService: SeanceService) {
    this._dialogStatus = 'inactive';
    this._backendURL = {};
    this._seances = [];
  }

// il faut ajouter au tableau les seances en se basant sur le constructeur using fields.
  ngOnInit() {
    this._seanceService
      .fetch()
      .subscribe((seances: any[]) => this._seances = seances);
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

    // subscribe to afterClosed observable to set dialog status and do process
    this._seanceDialog.afterClosed()
      .filter(_ => !!_)
      .flatMap(_ => this._add(_))
      .subscribe(
        (seances: any[]) => this._seances = seances,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );
  }
}
