var enemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"];

var oneHundredEnemies = [];

function Enemy(type, hitPoints, defense) {
	this.type = type;
	this.hitPoints = hitPoints;
	this.defense = defense;
}

function enemyGenerator() {
	for (var i = 0; i <= 100 - 1; i++) {
		var type = enemies[Math.floor(Math.random() * enemies.length)];
		if (type === "Ancient Dragon") {
			var hitPoints = Math.floor(Math.random() * ((100 - 80) + 1) + 80);
		} else if (type === "Prowler") {
			var hitPoints = Math.floor(Math.random() * ((79 - 50) + 1) + 50);
		} else {
			var hitPoints = Math.floor(Math.random() * ((49 - 20) + 1) + 20);
		}
		var defense = hitPoints * 3;

		oneHundredEnemies.push(new Enemy(type, hitPoints, defense));
	}
	console.log(oneHundredEnemies);
	console.log(oneHundredEnemies.length);
}
enemyGenerator();