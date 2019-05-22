class Hobbit {
  constructor (name){
    this.name = name;
    this.age= 0;
    this.disposition = "homebody";
    this.adult = false;
    this.isShort = true;
    this.old = false;
    this.hasRing = false;
    if (this.name === 'Frodo'){
    this.hasRing = true;
    if (this.name === 'Frodo'){
      this.hasRing = true;
    }
    }
  }
  celebrateBirthday (){
  this.age++;
  if (this.age >= 33){
    this.adult = true;
    if (this.age >=101){
      this.old = true;
    }
  }
}
}


module.exports = Hobbit














