import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-list',
  template:`
    <div *ngFor="let currentKeg of childKegList">
      <h3>{{ currentKeg.name }}</h3>
      <p>{{currentKeg.brand}} {{currentKeg.price}} {{currentKeg.abv}}</p>
    </div>
  `
})

export class KegListComponent{
  @Input() childKegList: Keg[];
}
