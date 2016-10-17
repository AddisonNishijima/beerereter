import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

//TODO: probs need to do something if no pints left lol

@Component ({
  selector: 'keg-list',
  template:`
    <div class="beer" *ngFor="let currentKeg of childKegList">
      <div class="row beer-row">
        <div class="col-sm-5">
        <h3>{{ currentKeg.name }} </h3>
        </div>
        <div class="col-sm-2">
        <button class="btn btn-default" *ngIf="currentKeg.pintsLeft === 0" (click)="deleteClicked(currentKeg)">Delete</button>
        </div>
        <div class="col-sm-2">
        <button class="btn btn-default" (click)="editClicked(currentKeg)">Edit</button>
        </div>
        <div class="col-sm-3">
        <button class="btn btn-default"(click)="pourFrom(currentKeg)">Sell Pint</button>
        </div>
      </div>
      <div class="row beer-row-2">
        <div class="col-sm-3">
        {{currentKeg.brand}}
        </div>
        <div class="col-sm-3">
        \${{currentKeg.price}}
        </div>
        <div class="col-sm-3">
        {{currentKeg.abv}}
        </div>
        <div class="col-sm-3">
        {{currentKeg.pintsLeft}} pours left
        </div>
      </div>
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
  deleteClicked(kegToDelete: Keg){
    this.childKegList.splice(this.childKegList.indexOf(kegToDelete), 1);
  }
}
