import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // private property to store person value
  private _seance: any;

  /**
   * Component constructor
   */
  constructor() {
    this._seance = {};
  }

  get seance(): any {
    return this._seance;
  }

  @Input()
  set seance(seance: any) {
    this._seance = seance;
  }


  /**
   * OnInit implementation
   */
  ngOnInit() {
  }



}
