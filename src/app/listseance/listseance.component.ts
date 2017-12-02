
import { Component, OnInit } from '@angular/core';
import {Seances} from '../_static/seances';
import {DialogComponent} from '../shared/dialog/dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'nwt-listseance',
  templateUrl: './listseance.component.html',
  styleUrls: ['./listseance.component.css']
})
export class ListseanceComponent implements OnInit {


  private _seances: any[];
  private _dialogStatus: string;
  private _peopleDialog: MatDialogRef<DialogComponent>;

  constructor(private _dialog: MatDialog) {
    this._seances = Seances;
    this._dialogStatus = 'inactive';
  }

// il faut ajouter au tableau les seances en se basant sur le constructeur using fields.
  ngOnInit() {
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

  showDialog() {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._peopleDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });

    // subscribe to afterClosed observable to set dialog status and do process
    /*this._peopleDialog.afterClosed()
      .filter(_ => !!_)
      .flatMap(_ => this._add(_))
      .subscribe(
        (people: any[]) => this._people = people,
        _ => this._dialogStatus = 'inactive',
        () => this._dialogStatus = 'inactive'
      );*/
  }
}
