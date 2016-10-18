import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';
import { EmptinessPipe } from './emptiness.pipe';

@Component ({
  selector: 'keg-list',
  template:`
    <div class="beer" *ngFor="let currentKeg of childKegList | emptiness: selectedEmptiness: selectedSort; let i = index">
      <div class="row beer-row">
        <div class="col-sm-5">
        <h3>{{ currentKeg.name }} </h3>
        </div>
        <div class="col-sm-1">
        <button class="btn btn-danger" [ngClass]="{'btn-lg': isEmpty}" *ngIf="currentKeg.pintsLeft === 0" (click)="deleteClicked(currentKeg)">X</button>
        </div>
        <div class="col-sm-2">
        <button class="btn btn-default" (click)="editClicked(currentKeg)">Edit</button>
        </div>
        <div class="col-sm-4">
        <button class="btn btn-primary btn-sm"(click)="pintFrom($event, currentKeg)">Sell Pint</button>
        <button class="btn btn-primary btn-sm"(click)="growlerFrom(currentKeg)">Sell Growler</button>
        </div>
      </div>
      <div class="row beer-row-2">
        <div class="col-sm-5 col-xs-7">
        {{currentKeg.brand}}
        </div>
        <div class="col-sm-2 col-xs-5" [ngClass]="{'sopricey': currentKeg.price > 5}">
        <span *ngIf="currentKeg.price > 5">$</span>\${{currentKeg.price}}
        </div>
        <div class="col-sm-2 col-xs-7">
        {{currentKeg.abv}}% <i *ngIf="currentKeg.abv > 5" class="fa fa-star"></i>
        </div>
        <div class="col-sm-3 col-xs-5">
        {{currentKeg.pintsLeft}} pours left
        </div>
      </div>
    </div>
    <select (change)="onFilterChange($event.target.value)">
      <option value="all">Show all</option>
      <option value="nearlyEmpty">Show nearly empty</option>
      <option value="notEmpty">Show mostly full</option>
    </select>
    <select (change)="onSortChange($event.target.value)">
      <option value="name">By beer</option>
      <option value="brand">By Brewery</option>
      <option value="price">By price</option>
    </select>
  `,
})

export class KegListComponent{
  public selectedEmptiness: string = "all";
  public selectedSort: string="name"
  public isEmpty: boolean = false;
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  pintFrom(event, clickedKeg) {
    if(!clickedKeg.sellPint()){
      this.isEmpty=true;
    } else {
      this.isEmpty=false;
    }
  }
  growlerFrom(clickedKeg) {
    if(!clickedKeg.sellGrowler()){
      this.isEmpty=true;
    } else {
      this.isEmpty=false;
    }
  }
  editClicked(kegToEdit: Keg){
    this.clickSender.emit(kegToEdit);
  }
  deleteClicked(kegToDelete: Keg){
    this.childKegList.splice(this.childKegList.indexOf(kegToDelete), 1);
    this.isEmpty=false;
  }
  onFilterChange(optionFromMenu){
    this.selectedEmptiness = optionFromMenu;
  }
  onSortChange(optionFromMenu){
    this.selectedSort = optionFromMenu;
  }
}
