export class Keg {
  public pintsLeft: number = 10;
  public priciness: string;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {
    if(price > 5){
      this.priciness = "sopricey";
    } else {
      this.priciness = "notpricey";
    }
  }

  sellPint() {
    if(this.pintsLeft > 0){
      this.pintsLeft--;
    }
  }
}
