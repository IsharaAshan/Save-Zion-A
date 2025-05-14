// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class WinScene extends Phaser.Scene {

	constructor() {
		super("WinScene");

		/* START-USER-CTR-CODE */
		this.confettiColors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff, 0xffaa00, 0xaa00ff];
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// black_background
		const black_background = this.add.rectangle(640, 360, 128, 128);
		black_background.scaleX = 10;
		black_background.scaleY = 6;
		black_background.isFilled = true;
		black_background.fillColor = 0;

		// win_msg
		const win_msg = this.add.text(640, 259.5, "", {});
		win_msg.setOrigin(0.5, 0.5);
		win_msg.text = "Congratulations you have saved Zion from Babylon!";
		win_msg.setStyle({ "fontFamily": "BebasNeue-Regular", "fontSize": "55px", "resolution": 2 });

		// home_button
		const home_button = this.add.image(640, 456, "home_button");

		this.win_msg = win_msg;
		this.home_button = home_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	win_msg;
	/** @type {Phaser.GameObjects.Image} */
	home_button;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		// Preload the win sound asset if it's not already loaded in a loading scene
		if (!this.sound.get('win_sound')) {
			this.load.audio('win_sound', 'assets/sounds/win_sound.mp3');
		}
	}

	create() {
		this.editorCreate();

		// Play win sound
		this.winSound = this.sound.add('win_sound', { volume: 0.7 });
		this.winSound.play();

		// Setup win_msg pop-up animation
		this.win_msg.setScale(0);
		this.win_msg.alpha = 0;
		this.tweens.add({
			targets: this.win_msg,
			scale: 1,
			alpha: 1,
			duration: 800,
			ease: 'Back.out'
		});

		 // Setup home button pop-up animation
		this.home_button.setScale(0);
		this.home_button.alpha = 0;
		this.tweens.add({
			targets: this.home_button,
			scale: 1,
			alpha: 1,
			duration: 800,
			ease: 'Back.out',
			delay: 600 // Delay so it appears after the win message
		});

		// Create confetti particle effect
		this.createConfetti();

		// Setup home button interactive behavior
		this.setupHomeButton();
	}

	createConfetti() {
		// Create particle effects using the correct Phaser API
		this.createMainConfetti();
		this.createSparkles();
		this.createBursts();
	}

	createMainConfetti() {
		// Create falling confetti particles
		for (let i = 0; i < 100; i++) {
			const x = Phaser.Math.Between(0, 1280);
			const y = Phaser.Math.Between(-100, 0);
			const color = Phaser.Utils.Array.GetRandom(this.confettiColors);

			const confetti = this.add.rectangle(x, y, 10, 10, color);
			confetti.angle = Phaser.Math.Between(0, 360);

			this.tweens.add({
				targets: confetti,
				y: 800,
				x: x + Phaser.Math.Between(-200, 200),
				angle: confetti.angle + Phaser.Math.Between(180, 720),
				scaleX: Phaser.Math.FloatBetween(0.2, 1),
				scaleY: Phaser.Math.FloatBetween(0.2, 1),
				alpha: { start: 1, to: 0 },
				duration: Phaser.Math.Between(3000, 6000),
				ease: 'Linear',
				delay: Phaser.Math.Between(0, 2000),
				onComplete: () => {
					confetti.destroy();
				}
			});
		}

		// Create side confetti bursts
		this.time.addEvent({
			delay: 800,
			callback: this.createSideBurst,
			args: [100, 400, 1],
			callbackScope: this
		});

		this.time.addEvent({
			delay: 1200,
			callback: this.createSideBurst,
			args: [1180, 400, -1],
			callbackScope: this
		});
	}

	createSideBurst(x, y, directionX) {
		for (let i = 0; i < 25; i++) {
			const color = Phaser.Utils.Array.GetRandom(this.confettiColors);
			const confetti = this.add.rectangle(x, y, 8, 8, color);
			confetti.angle = Phaser.Math.Between(0, 360);

			const angle = Phaser.Math.Between(230, 310);
			const speed = Phaser.Math.Between(200, 400);
			const dx = Math.cos(angle * Math.PI / 180) * speed * directionX;
			const dy = Math.sin(angle * Math.PI / 180) * speed;

			this.tweens.add({
				targets: confetti,
				x: confetti.x + dx,
				y: confetti.y + dy,
				angle: confetti.angle + Phaser.Math.Between(180, 720),
				scaleX: Phaser.Math.FloatBetween(0.2, 0.8),
				scaleY: Phaser.Math.FloatBetween(0.2, 0.8),
				alpha: { start: 1, to: 0 },
				duration: Phaser.Math.Between(1500, 3000),
				ease: 'Quad.out',
				onComplete: () => {
					confetti.destroy();
				}
			});
		}
	}

	createSparkles() {
		// Create occasional sparkles
		this.time.addEvent({
			delay: 200,
			callback: () => {
				const x = Phaser.Math.Between(100, 1180);
				const y = Phaser.Math.Between(100, 620);

				const sparkle = this.add.circle(x, y, 4, 0xffffff);
				sparkle.blendMode = Phaser.BlendModes.ADD;

				this.tweens.add({
					targets: sparkle,
					scale: { from: 1, to: 0 },
					alpha: { start: 1, to: 0 },
					duration: Phaser.Math.Between(600, 1200),
					ease: 'Linear',
					onComplete: () => {
						sparkle.destroy();
					}
				});
			},
			callbackScope: this,
			repeat: -1
		});
	}

	createBursts() {
		// Create center burst
		this.time.addEvent({
			delay: 1000,
			callback: () => this.createBurst(640, 360, 50),
			callbackScope: this
		});

		// Create side bursts
		this.time.addEvent({
			delay: 2000,
			callback: () => {
				this.createBurst(300, 300, 30);
				this.time.delayedCall(300, () => this.createBurst(980, 300, 30));
			},
			callbackScope: this
		});

		// Create floating shapes
		this.time.addEvent({
			delay: 200,
			callback: this.createFloatingShape,
			callbackScope: this,
			repeat: 49
		});
	}

	createBurst(x, y, amount) {
		for (let i = 0; i < amount; i++) {
			const angle = Phaser.Math.Between(0, 360);
			const speed = Phaser.Math.Between(300, 600);
			const distance = speed * (Phaser.Math.FloatBetween(0.5, 1.0));

			const burst = this.add.circle(x, y, 6, 0xffffff);
			burst.blendMode = Phaser.BlendModes.ADD;

			const destX = x + Math.cos(angle * Math.PI / 180) * distance;
			const destY = y + Math.sin(angle * Math.PI / 180) * distance;

			this.tweens.add({
				targets: burst,
				x: destX,
				y: destY,
				scale: { from: 0.4, to: 0 },
				alpha: { start: 1, to: 0 },
				duration: Phaser.Math.Between(700, 1000),
				ease: 'Cubic.out',
				onComplete: () => {
					burst.destroy();
				}
			});
		}
	}

	createFloatingShape() {
		const x = Phaser.Math.Between(0, 1280);
		const color = Phaser.Utils.Array.GetRandom(this.confettiColors);
		const shape = this.add.rectangle(x, 700, 15, 15, color);
		shape.angle = Phaser.Math.Between(0, 360);

		this.tweens.add({
			targets: shape,
			y: Phaser.Math.Between(-50, 100),
			x: shape.x + Phaser.Math.Between(-100, 100),
			angle: shape.angle + Phaser.Math.Between(180, 720),
			scale: Phaser.Math.FloatBetween(0.2, 0.5),
			alpha: { start: 1, to: 0 },
			duration: Phaser.Math.Between(5000, 10000),
			ease: 'Sine.InOut',
			delay: Phaser.Math.Between(0, 1000),
			onComplete: () => {
				shape.destroy();
			}
		});
	}

	setupHomeButton() {
		// Make home button interactive
		this.home_button.setInteractive({ useHandCursor: true });

		// Add hover animations
		this.home_button.on('pointerover', () => {
			this.tweens.add({
				targets: this.home_button,
				scale: 1.1,
				duration: 100
			});
		});

		this.home_button.on('pointerout', () => {
			this.tweens.add({
				targets: this.home_button,
				scale: 1.0,
				duration: 100
			});
		});

		// Add click animation and scene transition
		this.home_button.on('pointerdown', () => {
			this.tweens.add({
				targets: this.home_button,
				scale: 0.9,
				duration: 100,
				yoyo: true,
				onComplete: () => {
					// Fade out the win sound when leaving the scene
					if (this.winSound && this.winSound.isPlaying) {
						this.tweens.add({
							targets: this.winSound,
							volume: 0,
							duration: 500
						});
					}
					
					this.cameras.main.fade(500, 0, 0, 0);
					this.time.delayedCall(500, () => {
						this.scene.start('Menu');
					});
				}
			});
		});
	}
	
	shutdown() {
		// Clean up sound resources
		if (this.winSound) {
			this.winSound.stop();
			this.winSound = null;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
