// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Interduction extends Phaser.Scene {

	constructor() {
		super("Interduction");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 360, 128, 128);
		rectangle_1.scaleX = 10;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;

		// game_interductions
		const game_interductions = this.add.text(223.5, 195, "", {});
		game_interductions.setStyle({ "align": "center", "color": "#000000ff", "fixedWidth": 833, "fixedHeight": 330, "fontFamily": "BebasNeue-Regular", "fontSize": "30px", "resolution": 3 });
		game_interductions.setLineSpacing(12.5);

		this.game_interductions = game_interductions;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	game_interductions;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		// Play game introduction sound
		this.sound.play('game_interdution');

		// Position text in the center of the screen horizontally
		this.game_interductions.setX(640); 
		this.game_interductions.setOrigin(0.5, 0);

		// Prepare the introduction text broken into 5 lines
		const introText = [
			"It has been a crazy week for Zion,",
			"he made the mistake of taking one egg from Babylon's nest...",
			"and now Babylon the hawk is determined to eat him.",
			"Help Babylon escape as he runs all across Jamaica.",
			"All you have to do is answer the questions Correctly!"
		];

		// Initialize with empty text
		this.game_interductions.text = "";

		// Start typing animation
		this.typewriteText(introText);

		// Wait 21 seconds before transitioning to LevelA
		this.time.delayedCall(15000, this.transitionToLevelA, [], this);
	}

	/**
	 * Creates a typewriter effect on the text
	 * @param {string[]} textLines - Array of text lines to type out
	 */
	typewriteText(textLines) {
		let currentLine = 0;
		let currentChar = 0;
		let fullText = '';
		const delay = 55; // adjusted to make animation last 15 seconds (244 characters)

		// Create a typing timer
		this.typewriterTimer = this.time.addEvent({
			delay: delay,
			callback: () => {
				if (currentLine < textLines.length) {
					if (currentChar < textLines[currentLine].length) {
						// Add the next character
						fullText += textLines[currentLine][currentChar];
						this.game_interductions.text = fullText;
						currentChar++;
					} else {
						// Line complete, move to next line
						currentLine++;
						currentChar = 0;

						// Only add newline if not the last line
						if (currentLine < textLines.length) {
							fullText += '\n';
							this.game_interductions.text = fullText;

							// Pause slightly longer between lines
							this.typewriterTimer.paused = true;
							this.time.delayedCall(300, () => {
								this.typewriterTimer.paused = false;
							});
						}
					}
				} else {
					// All lines typed, stop the timer
					this.typewriterTimer.remove();
				}
			},
			callbackScope: this,
			loop: true
		});
	}

	transitionToLevelA() {
		// Fade out effect
		this.cameras.main.fadeOut(1000, 0, 0, 0);

		// When fade is complete, start the next scene
		this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, () => {
			this.scene.start('LevelA');
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
