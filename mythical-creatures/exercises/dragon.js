class Dragon {
  constructor (name){
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.meal = 0;
  }
  eat (){
    this.meal++;
    if (this.meal >= 3){
    this.hungry = false;
    }
  }
}



module.exports = Dragon




