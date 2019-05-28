class Stark {
  constructor (name, location){
    this.name = name;
    this.location = location|| 'Winterfell';
    this.safe = false;
  }

  houseWords(stark) {
    if (this.safe === true){
      return 'The North Remembers';
    } 
      return 'Winter is Coming';
    }
  }
  




module.exports = Stark;