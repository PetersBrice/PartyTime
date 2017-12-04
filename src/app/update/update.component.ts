import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {DialogComponent} from '../shared/dialog/dialog.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';
import {SeanceService} from '../shared/seance-service/seance.service';

@Component({
  selector: 'nwt-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private _peopleDialog: MatDialogRef<DialogComponent>;

  /**
   * Component constructor
   */
  constructor(private _route: ActivatedRoute, private _router: Router, private _dialog: MatDialog, private _seanceService: SeanceService) {
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {

    this._route.params
      .map((params: any) => params.id)
      .flatMap((id: string) => this._seanceService.fetchOne(id))
      .subscribe((seance: any) => {
        this._peopleDialog = this._dialog.open(DialogComponent, {
          width: '500px',
          disableClose: true,
          data: seance
        });

        // subscribe to afterClosed observable to set dialog status and do process
        this._peopleDialog.afterClosed()
          .filter(_ => !!_)
          .flatMap(_ => this._seanceService.update(_))
          .subscribe(null, null, () => this._router.navigate(['/seances']));
      });
  }

}
