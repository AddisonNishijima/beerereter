import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h3>New Keg</h3>
  <div>
    <label>Enter Keg Name</label>
    <input #newName>
  </div>
  <div>
    <label>Enter New Keg Brand</label>
    <input #newBrand>
  </div>
  <div>
    <label>Enter New Keg Price</label>
    <input type="number" step=".1" #newPrice>
  </div>
  <div>
    <label>Enter New Keg ABV</label>
    <input #newABV>
    <button (click)="addClicked(newName.value, newBrand.value, newPrice.value, newABV.value)">Add</button>
  </div>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
