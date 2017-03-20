var user = {
		name: "Mario",
		coins: 0,
		status: "Small",
		star: false,
		setName: function (namePicked) {
			this.name = namePicked;
		},
		gotHit: function () {
			if (this.status === "Small") {
				this.status = "Dead";
			} else if (this.status === "Big") {
				this.status = "Small";
			} else if (this.status === "Powered Up") {
				this.status = "Big";
			}
		},
		gotPowerup: function () {
			if (this.status === "Small") {
				this.status = "Big";
			} else if (this.status === "Big") {
				this.status = "Powered Up";

			}
		},
			gameActive: true,
				addCoin: function () {
					this.coins = this.coins + 1;

				},
				print: function () {
					console.log("Name: " + this.name + " Status: " + this.status + " Coins: " + this.coins + " Star Active:" + this.star);
				}
		}



		function randomRange() {
			return Math.floor(Math.random() * 3);
		}

		function callOut() {
			var newNumber = randomRange();
			if (newNumber === 0) {
				user.gotHit();

			} else if (newNumber === 1) {
				user.gotPowerup();

			} else {
				user.addCoin();

			}
		}

		for (var i = 0; i < 3; i++) {
			callOut();
			user.print();
		}
