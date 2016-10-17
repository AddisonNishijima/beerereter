export class Keg {
  public pintsLeft: number = 10;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {}

  sellPint() {
    if(this.pintsLeft > 0){
      this.pintsLeft--;
    }
  }
}
