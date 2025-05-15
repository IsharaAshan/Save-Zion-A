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
		rectangle_1.fillColor = 0;

		// game_interductions
		const game_interductions = this.add.text(136, 255, "", {});
		game_interductions.setStyle({ "align": "center", "fontFamily": "BebasNeue-Regular", "fontSize": "30px", "resolution": 3 });
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

		// Store the full text for the typing effect
		this.fullText = "It has been a crazy week for Zion, \nhe made the mistake of taking one egg from Babylon's nest...\nand now the Babylon the hawk is determined to nyam him.Help \nBabylon escape as he runs all across Jamaica..All you have to do is answer the questions Correctly!\nthen every scene has its own short script that is played while the scene is being shown";

		 // Create typing sound
		this.typingSound = this.sound.add('type', { 
			loop: true,
			volume: 0.5 
		});
		
		// Start the typing effect
		this.typeText();
	}

	typeText() {
		// Position text in the center of the screen horizontally
		this.game_interductions.setX(640); 
		this.game_interductions.setOrigin(0.5, 0);
		
		 // Play typing sound in loop
		this.typingSound.play();
		
		// Faster typing speed to fit within 5 seconds
		const typeSpeed = 20; 
		let currentCharacter = 0;
		let currentLine = "";
		
		// Create a timer event that adds one character at a time
		this.typingTimer = this.time.addEvent({
			delay: typeSpeed,
			callback: () => {
				// Get next character
				const char = this.fullText[currentCharacter];
				
				// Add to text with proper handling
				if (char === '\n') {
					// For line breaks, preserve them properly
					this.game_interductions.text += char;
				} else {
					// Add normal character
					this.game_interductions.text += char;
				}
				
				// Add slight pause after punctuation, but shorter to fit in 5 seconds
				if (['.', '!', '?', ','].includes(char)) {
					this.typingTimer.delay = typeSpeed * 2; // Shorter pause after punctuation
				} else {
					this.typingTimer.delay = typeSpeed; // Reset to normal speed
				}
				
				currentCharacter++;
				
				// When typing animation completes, stop the sound and add 5-second delay before transition
				if (currentCharacter >= this.fullText.length) {
					this.typingTimer.destroy();
					
					// Stop the typing sound
					this.typingSound.stop();
					
					// Wait 5 seconds after typing is complete, then transition
					this.time.delayedCall(5000, this.transitionToLevelA, [], this);
				}
			},
			repeat: this.fullText.length - 1
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
