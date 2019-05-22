class Medusa {
  constructor (name){
    this.name = name;
		this.statues = [];

	}
  stare (poorSoul) {
		poorSoul.stoned = true;
		this.statues.push(poorSoul);
		if (this.statues.length > 3) {
			this.statues[0].stoned = false;
			this.statues.shift();

		}
	}
}

module.exports = Medusa