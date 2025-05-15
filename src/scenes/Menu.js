// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Menu extends Phaser.Scene {

	constructor() {
		super("Menu");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// menu_clip
		const menu_clip = this.add.video(640, 360, "menu_clip");
		menu_clip.play(true);

		// title
		const title = this.add.image(640, 284, "Title");

		// play_button
		const play_button = this.add.image(647, 543, "play_button");

		this.title = title;
		this.play_button = play_button;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	title;
	/** @type {Phaser.GameObjects.Image} */
	play_button;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();

		 // Load button click sound
		this.buttonClickSound = this.sound.add("button_click");

		// Title animation
		this.tweens.add({
			targets: this.title,
			scaleX: 1.1,
			scaleY: 1.1,
			duration: 1000,
			yoyo: true,
			repeat: -1,
			ease: 'Sine.easeInOut'
		});

		// Play button animation
		this.tweens.add({
			targets: this.play_button,
			scaleX: 1.2,
			scaleY: 1.2,
			duration: 800,
			yoyo: true,
			repeat: -1,
			ease: 'Quad.easeInOut'
		});

		// Make play button interactive
		this.play_button.setInteractive();
		this.play_button.on('pointerover', () => {
			this.play_button.setScale(1.2);
		});
		this.play_button.on('pointerout', () => {
			this.play_button.setScale(1);
		});
		this.play_button.on('pointerdown', () => {
			// Play button click sound
			this.buttonClickSound.play();

			this.scene.start("Interduction");
			
			// You can add code here to start the game or transition to another scene
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
