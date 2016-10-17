import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  template: `
  <h3>New Keg</h3>
  <div class="form-group">
    <label>Enter Keg Name</label>
    <input class="form-control" #newName>
  </div>
  <div class="form-group">
    <label>Enter New Keg Brand</label>
    <input class="form-control" #newBrand>
  </div>
  <div class="form-group" >
    <label>Enter New Keg Price</label>
    <input class="form-control" type="number" step=".1" #newPrice>
  </div>
  <div class="form-group">
    <label>Enter New Keg ABV</label>
    <input type="number" class="form-control" #newABV>
  </div>
  <button class="btn btn-success center-block" (click)="addClicked(newName.value, newBrand.value, newPrice.value, newABV.value)">Add</button>
  `
})

export class NewKegComponent {
  @Output() newKegSender = new EventEmitter();
  addClicked(name: string, brand: string, price: number, abv: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, abv);
    this.newKegSender.emit(newKegToAdd);
  }
}
