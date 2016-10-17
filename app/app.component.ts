import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Beerereter</h1>
    <keg-list [childKegList]="masterKegList"></keg-list>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Jubel Ale", "Deschutes", 5, "6.7%"),
    new Keg("Wassail", "Full Sail", 4, "7.2%"),
    new Keg("Sleigh'r", "Ninkasi", 6, "7.2%"),
    new Keg("Pray For Snow", "10 Barrel", 3, "7.6%"),
    new Keg("Nutcracker", "Boulevard", 5.50, "7.8%")
  ];
}
