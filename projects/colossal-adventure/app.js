var readlineSync = require("readline-sync");

var userHp = 1000;

var userAttack = 100;

var weapons = ["Sword", "Bow", "Wood Stick"];

var enemies = ["Horse", "Cat", "Dog"];

var difficultyLevel = ['Easy', 'Medium', 'Hard'];

var choice = ['Fight', 'Run'];

var items = [];

////
////
////
////
////
////THIS IS THE BEGINNING OF THE GAME!!
////
////
////
////

var name = readlineSync.question("Hello and Welcome to the lame RPG !!!! *Explosion noises* can I grab your name from you! ");

var weapon = readlineSync.keyInSelect(weapons, "Which weapon would you like to choose!");

damageAmount();

weapon = weapons[weapon];

console.log(`You can never go wrong with the ${weapon}`)

var difficulty = readlineSync.keyInSelect(difficultyLevel, `How difficult would you like this to be ${name}? **This will decide how much health you have**`);

difficulty = difficultyLevel[difficulty];

userHp = difficultySet();
////

walkQuestion();

console.log("Let us get walking now! Press W!")


walking();

while (userHp > 0) {
	walking();
	deathCheck();
}


//  **
//Below this is where everything that will ever happen in the game takes place. If you don't care for a long code you can just look above this and pretend that it is something you are okay with seeing and completley happy with.	
//	
//	
//	
//	
//	**

//Decides the damage of the weapon you pick!!//

function damageAmount() {
	if (weapon === "Sword") {
		userAttack = 100;
		return userAttack;
	} else if (weapon === "Bow") {
		userAttack = 120;
		return userAttack;
	} else {
		userAttack = 200;
		return userAttack;
	}
}

//Sets health for the difficulty

function difficultySet() {
	if (difficulty === "Easy") {
		var hp = 5000;
		return hp;
	} else if (difficulty === "Medium") {
		var hp = 2500;
		return hp;
	} else {
		var hp = 1000;
		return hp;
	}
}

//Asks the user if they would like to start walking//

function walkQuestion() {
	if (readlineSync.keyInYN(`${name}, Would you like to start walking!?`)) {
		console.log("Well let's get to it then!");
	} else {
		console.log("Well you'll be walking regardless!");
	}
}

//Selects the 'w' key to walk and p to print

function walking() {
	key = readlineSync.keyIn();
	if (key === 'w') {
		walkChance();
	} else if (key === 'p') {
		console.log(`Hey ${name}, your health is at ${userHp}, and you have ${items} in your inventory`)
			//		console.log(userHp);
		return;
	} else if (key === 'q') {
		console.log("force quit");
		userHp = 0;
		return;
	} else {
		console.log("PRESS THE W KEY LOSER");
	}
}

//Decides the chance of running into an enemy

function walkChance() {
	var randomNumber = Math.floor(Math.random() * 3 - 1) + 1;
	if (randomNumber === 2) {
		console.log("You've encountered an enemy!")
		answer = readlineSync.keyInSelect(choice, "Would you like to run or fight!?")
		enemyEncounter();
	} else {
		console.log("Keep pressing 'W' to walk!");
		console.log("Press 'P' to print your inventory");
	}
}

//What to do when they run into the enemy

function enemyEncounter() {
	if (answer === 0) {
		bossBattleSetup(userAttack, userHp);
	} else {
		console.log("Let's try to run!")
		var newNumber = Math.floor(Math.random() * 2 - 1) + 1;
		if (newNumber == 1) {
			console.log("We weren't able to run!!");
			console.log("Get ready for a fight")
			bossBattleSetup(userAttack, userHp);
		} else {
			console.log("We got out let's keep walking!")
		}
	}
}

//Calls the fight and picks which monster it will be

function fight() {
	var monster = enemies[Math.floor(Math.random() * enemies.length)];
	console.log(`It looks like you encountered a ${monster} you must click 'i' for his stats!`);
	stats(monster);
}

//Looks for 'i' key to find the monster

function stats(monster) {
	newKey = readlineSync.keyIn();
	if (newKey === 'i') {
		enemyPower(monster);

	}
}

//Decides the power of the enemy between two numbers

function enemyPower(monster) {
	if (monster === "Horse") {
		var enemyHp = Math.floor(Math.random() * ((700 - 500) + 1) + 500);
		console.log(`${monster}, has hp: ${enemyHp}`);
		var enemyAttack = Math.floor(Math.random() * ((500 - 350) + 1) + 350);
		console.log(`${monster}, has an attack of: ${enemyAttack}`);

	} else if (monster === "Cat") {
		var enemyHp = Math.floor(Math.random() * ((400 - 200) + 1) + 100);;
		console.log(`${monster}, has hp: ${enemyHp}`);
		var enemyAttack = Math.floor(Math.random() * ((250 - 150) + 1) + 150);
		console.log(`${monster}, has an attack of: ${enemyAttack}`)

	} else if (monster === "Dog") {
		var enemyHp = Math.floor(Math.random() * ((500 - 250) + 1) + 250);;
		console.log(`${monster}, has hp: ${enemyHp}`);
		var enemyAttack = Math.floor(Math.random() * ((400 - 250) + 1) + 100);
		console.log(`${monster}, has an attack of: ${enemyAttack}`);
	}
	mainFight(monster, enemyHp, enemyAttack);
}


//Sets up the fight!

function mainFight(monster, enemyHp, enemyAttack) {
	console.log("Let's start this fight")
	battleBegin(monster, enemyHp, enemyAttack, userAttack, userHp);
}

//Begins the battle if they click 'f'

function battleBegin(monster, enemyHp, enemyAttack, userAttack, fightHp) {
	console.log("Press 'f' to begin the fight!")
	fKey = readlineSync.keyIn();
	if (fKey === 'f') {
		battle(monster, enemyHp, enemyAttack, userAttack, userHp);
	} else {
		battleBegin(monster, enemyHp, enemyAttack, userAttack, fightHp);
	}
}

//gives you the fight and adds item if won!

function battle(monster, enemyHp, enemyAttack, userAttack, fightHp) {
	while (enemyHp > 0 && fightHp > 0) {
		enemyHp = userTurn(monster, enemyHp);
		if (enemyHp > 0) {
			fightHp = enemyTurn(enemyAttack, monster, fightHp);

		} else if (fightHp <= 0) {
			gameOver();

		} else {
			enemyItem = itemFinder(monster);
			items.push(enemyItem);
			userHp = fightHp;
			console.log(`The ${monster} has died! You picked up ${enemyItem} you have ${fightHp} health left! Let's keep walking!`);
			console.log("Press 'W'");
		}
	}
	userHp = fightHp;
	deathCheck();
}

//Checks to see if the user had died.

function deathCheck() {
	if (userHp <= 0) {
		gameOver();
	} else {
		return;
	}
}

//Auto Kills the user

function gameOver() {
	console.log("You died, you didn't even get to the best part!")
	userHp = 0;
	return;
}

//Fight with the user attacking with a 3/4 chance to hit!

function userTurn(monsterName, Hp) {
	var attackChance = Math.floor(Math.random() * 4 - 1) + 1;
	if (attackChance <= 3) {
		Hp -= userAttack;
		console.log(`You hit the ${monsterName}, you did ${userAttack} damage! The ${monsterName} now has ${Hp} health left;`)
		return Hp;
	} else {
		console.log("You missed!")
		return Hp;
	}
}
//Fight with the enemy attacking with a 3/4 chance to hit!

function enemyTurn(monsterAttack, monsterName, fightHp) {
	var attackChance = Math.floor(Math.random() * 4 - 1) + 1;
	if (attackChance <= 3) {
		fightHp -= monsterAttack;
		console.log(`The ${monsterName}, hit you and did ${monsterAttack} damage! You now have ${fightHp} health left;`)
		return fightHp;
	} else {
		console.log("They missed!");
		return fightHp;
	}
}

// Finds the item of the monster

function itemFinder(monster) {
	if (monster === "Horse") {
		var enemyItem = ["Horse Hair"];
	} else if (monster === "Cat") {
		var enemyItem = ["Cat Tail"];
	} else {
		var enemyItem = ["Dog happiness"];
	}
	return enemyItem;
}

//Set's up the Boss info!!

function bossBattleSetup(userAttack, fightHp) {
	if (items.length >= 5) {
		console.log("You've encountered a boss... MEGA HORSE")
		var bossHp = bossStatHp();
		var bossAttack = bossStatAttack();
		fightHp = healthDouble(fightHp);
		console.log("This is going to be hard... Maybe even impossible")
		bossBattleBegin(userAttack, fightHp, bossHp, bossAttack)
	} else {
		fight();
	}
}

//Sets the random Boss HP

function bossStatHp() {
	var bossHp = Math.floor(Math.random() * ((2000 - 1000) + 1) + 1000);
	console.log(`MEGA HORSE, has an hp: ${bossHp}`);
	return bossHp;
}

//Sets the random Attack power

function bossStatAttack() {
	var bossAttack = Math.floor(Math.random() * ((900 - 270) + 1) + 270);
	console.log(`MEGA HORSE, has an attack of: ${bossAttack}`);
	return bossAttack;
}

//Doubles the users health!

function healthDouble(fightHp) {
	console.log("Let's double your health!");
	fightHp = userHp * 2;
	console.log(`Your health is now at ${fightHp}`);
	return fightHp;
}

// Runs the fight

function bossBattleBegin(userAttack, fightHp, bossHp, bossAttack) {
	console.log("Press 'f' to begin the fight!")
	fKey = readlineSync.keyIn();
	if (fKey === 'f') {
		bossBattle(userAttack, userHp, bossHp, bossAttack);
	} else {
		bossBattle(userAttack, userHp, bossHp, bossAttack);
	}
}

//Runs the battle using the above fight info

function bossBattle(userAttack, fightHp, bossHp, bossAttack) {
	while (bossHp > 0 && fightHp > 0) {
		bossHp = userTurn("Mega Horse", bossHp);
		if (bossHp > 0) {
			fightHp = enemyTurn(bossAttack, "Mega Horse", fightHp);
		} else if (fightHp <= 0) {
			gameOver();
		} else {
			userHp = fightHp;
			console.log(`The Mega Horse has been defeated! Welcome to hell`);
		}
	}
	userHp = fightHp;
	deathCheck();
}