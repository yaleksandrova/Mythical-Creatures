class Centaur {
  constructor (name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.tasking = 0;
    this.rested = true;
  }
  shoot() {
    this.tasking++;
    this.cranky = this.tasking >= 3;
    return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
  }
  run() {
    this.tasking++;
    this.cranky = this.tasking >= 3;
    return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
  }
  sleep() {
    // this.cranky = !this.cranky;
    if (this.layingDown){
      this.cranky = false;
      this.tasking = 0;
    }
    return this.layingDown ? 'ZZZZ' : 'NO!';
      // if (this.standing) {
    // }
  }
  layDown () {
    this.standing = false;
    this.layingDown = true;
    }
  standUp () {
    this.layingDown = false;
    this.standing = true;
  }
  drinkPotion () {
    if (this.standing && this.tasking >= 3){
    this.cranky = false;
    this.rested = false;
    }
    if (this.rested) {
      this.cranky = true;
    }
    return 'Not while I\'m laying down!';
  }
}









module.exports = Centaur