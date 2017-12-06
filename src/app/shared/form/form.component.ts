import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'ybd-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  private _isUpdate: boolean;
  private _model: any;
  private _cancel$: EventEmitter<any>;
  private _submit$: EventEmitter<any>;
  private _form: FormGroup;
  constructor() {
    this._cancel$ = new EventEmitter();
    this._submit$ = new EventEmitter();
    this._form = this._buildForm();
  }

  ngOnInit() {
  }

  get form(): FormGroup {
    return this._form;
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

  submit(seance: any) {
    seance.id = this._model.id;
    this._submit$.emit(seance);
  }

  private _buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      nom: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      type: new FormControl('', Validators.compose([
        Validators.required, Validators.minLength(2)
      ])),
      description: new FormControl(''),
      tel: new FormControl('', Validators.compose([
        Validators.required, Validators.pattern('\\d{10}')
      ]))
    });
  }


}
