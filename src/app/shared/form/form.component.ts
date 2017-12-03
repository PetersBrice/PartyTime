import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nwt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private _cancel$: EventEmitter<any>;
  private _add$: EventEmitter<any>;
  constructor() {
    this._cancel$ = new EventEmitter();
    this._add$ = new EventEmitter();
  }

  ngOnInit() {
  }


  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  cancel() {
    this._cancel$.emit();
  }


  @Output('seanceAdd') get add$(): EventEmitter<any> {
    return this._add$;
  }

  add(seance: any) {
    this._add$.emit(seance);
  }


}
