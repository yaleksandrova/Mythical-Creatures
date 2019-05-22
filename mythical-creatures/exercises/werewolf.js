class Werewolf {
  constructor (name, location) {
    this.name = name;
    this.location = location;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  change(){
    this.human = !this.human;
    this.wolf = !this.wolf;
    this.hungry = !this.hungry;
    // if (this.human) {
    //   this.human = false;
    //   this.wolf = true;
    // }else {
    // this.human = true;
    // this.wolf = false;
  }

  eat(victim) {
    victim.alive = false;
      if (this.hungry) {
        this.change();
      return ;
    }
  }
}



module.exports = Werewolf;