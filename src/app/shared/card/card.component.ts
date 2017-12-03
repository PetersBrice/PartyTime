import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // private property to store person value
  private _seance: any;
  private _delete$: EventEmitter<any>;

  /**
   * Component constructor
   */
  constructor() {
    this._seance = {};
    this._delete$ = new EventEmitter();
  }

  get seance(): any {
    return this._seance;
  }

  @Input()
  set seance(seance: any) {
    this._seance = seance;
  }

  @Output('seanceDelete')
  get delete$(): EventEmitter<any> {
    return this._delete$;
  }

  delete(person: any) {
    this._delete$.emit(person);
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
  }



}
