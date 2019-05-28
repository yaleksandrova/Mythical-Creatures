class Medusa {
  constructor (name){
    this.name = name;
		this.statues = [];

	}
  stare (victim) {
		// victim.stoned = true;
		this.statues.push(victim);
		// array prototype method push, 
		// puts it at the end

		if (this.statues.length > 3) {
			this.statues.shift()
			// this.statues[0].stoned = false;
		}

		// if (this.statues.length > 3) {
		// 	this.statues[0].stoned = false;
		// 	this.statues.shift()
		// }
	}
}


module.exports = Medusa