
import { Component, OnInit } from '@angular/core';
import {Symptoms} from '../_static/symptoms';


@Component({
  selector: 'nwt-listsymptome',
  templateUrl: './listsymptome.component.html',
  styleUrls: ['./listsymptome.component.css']
})
export class ListsymptomeComponent implements OnInit {

    private _symptomes: any[];
 // private _dialogStatus: string;
 // private _peopleDialog: MatDialogRef<DialogComponent>;

  constructor() {
    this._symptomes = Symptoms;
  }
// il faut ajouter au tableau les symptomes en se basant sur le constructeur using fields.
  ngOnInit() {
  }

  /*get dialogStatus(): string {
    return this._dialogStatus;
  }

  showDialog() {
    // set dialog status
    this._dialogStatus = 'active';

    // open modal
    this._peopleDialog = this._dialog.open(DialogComponent, {
      width: '500px',
      disableClose: true
    });*/

  get symptomes(): any[] {
    return this._symptomes;
  }

  set symptomes(value: any[]) {
    this._symptomes = value;
  }


}
