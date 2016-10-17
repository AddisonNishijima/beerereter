import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { EmptinessPipe } from './emptiness.pipe';

@Component ({
  selector: 'keg-list',
  template:`
    <select (change)="onChange($event.target.value)">
      <option value="all">Show all</option>
      <option value="nearlyEmpty">Show nearly empty</option>
      <option value="notEmpty">Show mostly full</option>
    </select>
    <div class="beer" *ngFor="let currentKeg of childKegList | emptiness: selectedEmptiness">
      <div class="row beer-row">
        <div class="col-sm-5">
        <h3>{{ currentKeg.name }} </h3>
        </div>
        <div class="col-sm-2">
        <button class="btn btn-danger" *ngIf="currentKeg.pintsLeft === 0" (click)="deleteClicked(currentKeg)">Delete</button>
        </div>
        <div class="col-sm-2">
        <button class="btn btn-default" (click)="editClicked(currentKeg)">Edit</button>
        </div>
        <div class="col-sm-3">
        <button class="btn btn-primary"(click)="pourFrom(currentKeg)">Sell Pint</button>
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
  `,
})

export class KegListComponent{
  public selectedEmptiness: string = "all";
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
  onChange(optionFromMenu){
    this.selectedEmptiness = optionFromMenu;
    console.log(this.selectedEmptiness);
  }
}
