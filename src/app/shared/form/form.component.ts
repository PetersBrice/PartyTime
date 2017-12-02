import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nwt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private _cancel$: EventEmitter<any>;
  constructor() {
    this._cancel$ = new EventEmitter();
  }

  ngOnInit() {
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  cancel() {
    this._cancel$.emit();
  }


}
