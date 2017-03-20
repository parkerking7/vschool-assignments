function Party(name, isTurn, population) {
	this.name = name;
	this.population = 1000000;
}

var party1 = new Party("Penguins", "true")
var party2 = new Party("Communists", "true")

whosFirst();

while (party1.population >= 0 && party2.population >= 0) {
	sendNuke(fightParty, defendParty, boatHit());
}

console.log("THEY LOSE");

function whosFirst() {
	if (randomNumber() === 1) {
		fightParty = party1;
		defendParty = party2;
	} else {
		fightParty = party2;
		defendParty = party1;
	}
	console.log(`It looks like the ${fightParty.name}, will be going first!`);
}

function randomNumber() {
	return Math.floor(Math.random() * 2) + 1;
}

function sendNuke(mainParty, secondParty, onHit) {
	var odds = Math.floor(Math.random() * 4) + 1;
	if (odds <= 3) {
		damage = onHit;
		defendParty.population -= damage;
		console.log(`It looks like the ${fightParty.name} did ${damage} to the ${defendParty.name}! Leaving the ${defendParty.name} population at ${defendParty.population}`);
		fightParty = newFight(fightParty);
		defendParty = newDefend(defendParty);
	} else {
		console.log(`it looks like the ${fightParty.name} nuke missed those damn ${defendParty.name}`);
		fightParty = newFight(fightParty);
		defendParty = newDefend(defendParty);
	}

}

function newFight(fightParty, defendParty) {
	if (fightParty === party1) {
		return fightParty = party2;
	} else {
		return fightParty = party1;
	}
}

function newDefend(defendParty) {
	if (defendParty === party1) {
		return defendParty = party2;
	} else {
		return defendParty = party1;
	}
}

function boatHit(party) {
	var damage = Math.floor(Math.random() * (100000 - 50000 + 1) + 50000);
	return damage;
}
