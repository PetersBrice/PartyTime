import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nwt-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  private _isUpdate: boolean;
  private _model: any;
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;
  constructor() {
    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();
  }

  ngOnInit() {
  }

  @Input()
  set model(model: any) {
    this._model = model;
  }

  get model(): any {
    return this._model;
  }
  get isUpdate(): boolean {
    return this._isUpdate;
  }

  @Output('cancel') get cancel$(): EventEmitter<any> {
    return this._cancel$;
  }

  ngOnChanges(record) {
    if (record.model && record.model.currentValue) {
      this._model = record.model.currentValue;
      this._isUpdate = true;
    } else {
      this._model = { };
      this._isUpdate = false;
    }
  }

  cancel() {
    this._cancel$.emit();
  }


  @Output('seanceAdd') get submit$(): EventEmitter<any> {
    return this._submit$;
  }

  submit() {
    this._submit$.emit(this._model);
  }


}
