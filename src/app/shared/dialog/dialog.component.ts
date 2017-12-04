import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'nwt-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) private _data: any) { }

  ngOnInit() {
  }

  get data(): any {
    return this._data;
  }

  onCancel() {
    this._dialogRef.close();
  }

  onSave(seance: any) {
    this._dialogRef.close(seance);
  }
}
