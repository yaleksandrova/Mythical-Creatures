class Fairy {
  constructor (name, dust){
    this.name = name;
    this.dust = dust || 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief(){
    this.dust++;
  }
  believe(){
    this.dust+=10;
  }

  makeDresses(flowers){
this.clothes.dresses = this.clothes.dresses.concat(flowers);
  }
  provoke(){
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant){
    if (this.disposition === 'Vengeful'){
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    }
    if (this.humanWards.length === 3){
      this.disposition = 'Good natured';
    }
    return infant;
  }
}





module.exports = Fairy;