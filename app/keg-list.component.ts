import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

//TODO: probs need to do something if no pints left lol

@Component ({
  selector: 'keg-list',
  template:`
    <div *ngFor="let currentKeg of childKegList">
      <h3>{{ currentKeg.name }} <button (click)="pourFrom(currentKeg)">Sell Pint</button></h3>
      <p>
        {{currentKeg.brand}} \${{currentKeg.price}} {{currentKeg.abv}} {{currentKeg.pintsLeft}} pours left <button (click)="editClicked(currentKeg)">Edit</button>
      </p>
    </div>
  `
})

export class KegListComponent{
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  pourFrom(clickedKeg) {
    clickedKeg.sellPint();
  }
  editClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
}
