export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: string) {}

  sellPint() {
    if(this.pintsLeft > 0){
      this.pintsLeft--;
    }
  }
}
