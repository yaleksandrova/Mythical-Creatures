class Wizard {
  constructor (obj) {
    this.name = obj.name;
    this.bearded = obj.bearded;
    if (this.bearded === undefined){
        this.bearded = true;
    }
    this.isRested = true;
    this.counter = 0;
  }
  incantation(Spell) {
      return Spell.toUpperCase()
    }
  cast (){
    this.counter++;
    if (this.counter >= 3){
        this.isRested = false;
        return 'I SHALL NOT CAST!';
      }
    return 'MAGIC BULLET';
    }
  }








module.exports = Wizard