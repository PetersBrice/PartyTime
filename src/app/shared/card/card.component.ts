import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nwt-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // private property to store person value
  private _symptome: any;

  /**
   * Component constructor
   */
  constructor() {
    this._symptome = {};
  }

  get symptome(): any {
    return this._symptome;
  }

  @Input()
  set symptome(symptome: any) {
    this._symptome = symptome;
  }


  /**
   * OnInit implementation
   */
  ngOnInit() {
  }



}
