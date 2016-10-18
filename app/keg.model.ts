export class Keg {
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public abv: number) {
  }

  sellPint() {
    if(this.pintsLeft > 0){
      this.pintsLeft--;
      return true;
    }
    return false;
  }

  sellGrowler() {
    if(this.pintsLeft > 0){
      this.pintsLeft-=4;
    }
    return false;
  }
}
