import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">
    <h3>Edit Keg</h3>
    <div>
      <label>Enter Keg Name:</label>
      <input [(ngModel)]="childSelectedKeg.name">
    </div>
    <div>
      <label>Enter Keg Brand:</label>
      <input [(ngModel)]="childSelectedKeg.brand">
    </div>
    <div>
      <label>Enter Keg Price:</label>
      <input type="number" step=".1" [(ngModel)]="childSelectedKeg.price">
    </div>
    <div>
      <label>Enter Keg ABV:</label>
      <input [(ngModel)]="childSelectedKeg.abv">
      <button (click)="doneClicked()">Done</button>
    </div>
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked(){
    this.doneClickedSender.emit();
  }
}
