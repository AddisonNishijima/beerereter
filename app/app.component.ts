import { Component } from '@angular/core';
import {Keg} from './keg.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Beerereter</h1>
    <div class="row">
    <div class="col-md-8">
      <keg-list
        [childKegList]="masterKegList"
        (clickSender)="showDetails($event)"
      ></keg-list>
      </div>
      <div class='col-md-4'>
        <div class='forms'>
          <new-keg
            (newKegSender)="addKeg($event)"
          ></new-keg>
          <edit-keg
            [childSelectedKeg] = "selectedKeg"
            (doneClickedSender)="finishedEditing()"
          >
          </edit-keg>
        </div>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public masterKegList: Keg[] = [
    new Keg("Jubel Ale", "Deschutes", 5, 6.7),
    new Keg("Wassail", "Full Sail", 4, 7.2),
    new Keg("Sleigh'r", "Ninkasi", 6, 7.2),
    new Keg("Pray For Snow", "10 Barrel", 3, 7.6),
    new Keg("Nutcracker", "Boulevard", 5.50, 7.8)
  ];
  addKeg(newKegFromChild: Keg) {
    this.masterKegList.push(newKegFromChild);
  }
  selectedKeg: Keg = null;
  showDetails(clickedKeg: Keg){
    this.selectedKeg = clickedKeg;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }
}
