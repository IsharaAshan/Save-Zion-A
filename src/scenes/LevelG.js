// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class LevelG extends Phaser.Scene {

	constructor() {
		super("LevelG");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// clip_a
		const clip_a = this.add.video(640, 360, "5_1");

		// clip_b
		const clip_b = this.add.video(640, 360, "5_2");
		clip_b.visible = false;

		// clip_c
		const clip_c = this.add.video(640, 360, "5_3");
		clip_c.visible = false;

		// clip_d
		const clip_d = this.add.video(640, 360, "5_4");
		clip_d.visible = false;

		// restart_video
		const restart_video = this.add.video(640, 360, "RestartVideo");
		restart_video.visible = false;

		// quiz_panel
		const quiz_panel = this.add.container(1001, 417);

		// quizBackground
		const quizBackground = this.add.image(0, 0, "QuizBackground");
		quizBackground.scaleX = 0.5;
		quizBackground.scaleY = 0.6;
		quiz_panel.add(quizBackground);

		// answe_d
		const answe_d = this.add.container(-186, 97);
		quiz_panel.add(answe_d);

		// toggle_button_d
		const toggle_button_d = this.add.container(0, 0);
		toggle_button_d.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_d.add(toggle_button_d);

		// toggle_button_background_3
		const toggle_button_background_3 = this.add.image(0, 0, "toggle_button_background");
		toggle_button_background_3.scaleX = 0.1;
		toggle_button_background_3.scaleY = 0.1;
		toggle_button_d.add(toggle_button_background_3);

		// toggle_button_front_3
		const toggle_button_front_3 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_3.scaleX = 0.1;
		toggle_button_front_3.scaleY = 0.1;
		toggle_button_front_3.visible = false;
		toggle_button_d.add(toggle_button_front_3);

		// text_3
		const text_3 = this.add.text(160, 9, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "D. Officers who lead judicial investigations \ninto government spending";
		text_3.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_d.add(text_3);

		// answe_c
		const answe_c = this.add.container(-186, 48);
		quiz_panel.add(answe_c);

		// toggle_button_c
		const toggle_button_c = this.add.container(0, 0);
		toggle_button_c.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_c.add(toggle_button_c);

		// toggle_button_background_2
		const toggle_button_background_2 = this.add.image(0, 0, "toggle_button_background");
		toggle_button_background_2.scaleX = 0.1;
		toggle_button_background_2.scaleY = 0.1;
		toggle_button_c.add(toggle_button_background_2);

		// toggle_button_front_2
		const toggle_button_front_2 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_2.scaleX = 0.1;
		toggle_button_front_2.scaleY = 0.1;
		toggle_button_front_2.visible = false;
		toggle_button_c.add(toggle_button_front_2);

		// text_2
		const text_2 = this.add.text(156, 5, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "C. Professional civil servants who manage \nthe operations of Ministries";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_c.add(text_2);

		// answe_b
		const answe_b = this.add.container(-186, 3);
		quiz_panel.add(answe_b);

		// toggle_button_b
		const toggle_button_b = this.add.container(0, 0);
		toggle_button_b.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_b.add(toggle_button_b);

		// toggle_button_background_1
		const toggle_button_background_1 = this.add.image(0, 0, "toggle_button_background");
		toggle_button_background_1.scaleX = 0.1;
		toggle_button_background_1.scaleY = 0.1;
		toggle_button_b.add(toggle_button_background_1);

		// toggle_button_front_1
		const toggle_button_front_1 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_1.scaleX = 0.1;
		toggle_button_front_1.scaleY = 0.1;
		toggle_button_front_1.visible = false;
		toggle_button_b.add(toggle_button_front_1);

		// text
		const text = this.add.text(193, 0, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "B. Political appointees who represent Jamaica overseas";
		text.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_b.add(text);

		// answe_a
		const answe_a = this.add.container(-186, -39);
		quiz_panel.add(answe_a);

		// toggle_button_a
		const toggle_button_a = this.add.container(0, -9);
		toggle_button_a.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_a.add(toggle_button_a);

		// toggle_button_background
		const toggle_button_background = this.add.image(0, 0, "toggle_button_background");
		toggle_button_background.scaleX = 0.1;
		toggle_button_background.scaleY = 0.1;
		toggle_button_a.add(toggle_button_background);

		// toggle_button_front
		const toggle_button_front = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front.scaleX = 0.1;
		toggle_button_front.scaleY = 0.1;
		toggle_button_front.visible = false;
		toggle_button_a.add(toggle_button_front);

		// text_1
		const text_1 = this.add.text(181, -3, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "A. Elected officials who propose new legislation in\n Parliament";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_a.add(text_1);

		// question
		const question = this.add.text(-29, -100, "", {});
		question.setOrigin(0.5, 0.5);
		question.text = "Which of the following best describes the role of \nPermanent Secretaries?";
		question.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "20px", "resolution": 2 });
		quiz_panel.add(question);

		// game_over_panel
		const game_over_panel = this.add.container(0, 0);
		game_over_panel.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 360, 128, 128);
		rectangle_1.scaleX = 10;
		rectangle_1.scaleY = 6;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 0;
		rectangle_1.fillAlpha = 0.79;
		game_over_panel.add(rectangle_1);

		// game_over_pop_up
		const game_over_pop_up = this.add.container(640, 360);
		game_over_panel.add(game_over_pop_up);

		// rectangle_2
		const rectangle_2 = this.add.rectangle(0, 0, 128, 128);
		rectangle_2.scaleX = 3.25;
		rectangle_2.scaleY = 1.8;
		rectangle_2.isFilled = true;
		rectangle_2.fillColor = 16772224;
		game_over_pop_up.add(rectangle_2);

		// rectangle
		const rectangle = this.add.rectangle(0, -72, 128, 128);
		rectangle.scaleX = 3.2533579512889683;
		rectangle.scaleY = 0.5799520779856571;
		rectangle.isFilled = true;
		rectangle.fillColor = 7492633;
		game_over_pop_up.add(rectangle);

		// text_4
		const text_4 = this.add.text(-137, -105, "", {});
		text_4.scaleY = 0.8329385748504211;
		text_4.text = "GAME OVER";
		text_4.setStyle({ "align": "center", "fontFamily": "BebasNeue-Regular", "fontSize": "75px", "resolution": 2 });
		game_over_pop_up.add(text_4);

		// restart_button
		const restart_button = this.add.image(0, 49, "RestartButton");
		restart_button.setInteractive(new Phaser.Geom.Rectangle(0, 0, 140, 42), Phaser.Geom.Rectangle.Contains);
		game_over_pop_up.add(restart_button);

		this.clip_a = clip_a;
		this.clip_b = clip_b;
		this.clip_c = clip_c;
		this.clip_d = clip_d;
		this.restart_video = restart_video;
		this.toggle_button_d = toggle_button_d;
		this.toggle_button_c = toggle_button_c;
		this.toggle_button_b = toggle_button_b;
		this.toggle_button_a = toggle_button_a;
		this.quiz_panel = quiz_panel;
		this.restart_button = restart_button;
		this.game_over_panel = game_over_panel;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Video} */
	clip_a;
	/** @type {Phaser.GameObjects.Video} */
	clip_b;
	/** @type {Phaser.GameObjects.Video} */
	clip_c;
	/** @type {Phaser.GameObjects.Video} */
	clip_d;
	/** @type {Phaser.GameObjects.Video} */
	restart_video;
	/** @type {Phaser.GameObjects.Container} */
	toggle_button_d;
	/** @type {Phaser.GameObjects.Container} */
	toggle_button_c;
	/** @type {Phaser.GameObjects.Container} */
	toggle_button_b;
	/** @type {Phaser.GameObjects.Container} */
	toggle_button_a;
	/** @type {Phaser.GameObjects.Container} */
	quiz_panel;
	/** @type {Phaser.GameObjects.Image} */
	restart_button;
	/** @type {Phaser.GameObjects.Container} */
	game_over_panel;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();

		// Initially set the quiz_panel to scale 0
		this.quiz_panel.setScale(0);

		// Get sound from asset pack using string key
		this.miSound = this.sound.add("mi_sound");
		this.miSound.setLoop(true);
		this.miSound.play();

		// Load the flat_bridge sound using string key reference
		this.flatBridgeSound = this.sound.add("back _road");

		// Load button click sound
		this.buttonClickSound = this.sound.add("button_click");

		// Load pop up sound
		this.popUpSound = this.sound.add("pop_up");

		// Load toggle click sound
		this.toggleClickSound = this.sound.add("toggle_click");

		// Stop the first sound after 5 seconds and play flat_bridge
		this.time.delayedCall(5000, () => {
			this.miSound.stop();
			// Play flat_bridge sound after mi_sound stops
			this.flatBridgeSound.play();

			this.time.delayedCall(5000, () => {
				this.quiz_panel.visible = true;

				// Play the pop up sound when the panel becomes active
				this.popUpSound.play();

				// Add pop animation to quiz_panel
				this.tweens.add({
					targets: this.quiz_panel,
					scaleX: 1,
					scaleY: 1,
					duration: 500,
					ease: 'Back.out', // Gives a nice bounce effect
					onComplete: () => {
						 // Setup toggle buttons after quiz panel is visible
						this.setupToggleButtons();
					}
				});
			});
		});

		// Start playing the first clip
		this.clip_a.play();

		// After 5 seconds, switch to the second clip
		this.time.delayedCall(5000, () => {
			this.clip_a.visible = false;
			this.clip_a.stop();

			this.clip_b.visible = true;
			this.clip_b.play();
			this.clip_b.setLoop(true);
		});

		// Initialize the toggle buttons
		this.setupToggleButtons();
	}

	/**
	 * Set up toggle buttons with click handlers
	 */
	setupToggleButtons() {
		const buttons = [
			this.toggle_button_a,
			this.toggle_button_b,
			this.toggle_button_c,
			this.toggle_button_d
		];

		// Add click event to each button
		buttons.forEach((button, index) => {
			button.on('pointerdown', () => {
				// Play button click sound
				this.buttonClickSound.play();
				// Play toggle click sound
				this.toggleClickSound.play();
				this.toggleButton(index);
			});

			// Store the front part of each button for easier reference
			button.frontPart = button.getAt(1); // The front part is the second child (index 1)
		});

		// Store the buttons array for later use
		this.toggleButtons = buttons;
	}

	/**
	 * Toggle the selected button on and turn off all others
	 * @param {number} selectedIndex - The index of the button to enable
	 */
	toggleButton(selectedIndex) {
		// Disable all buttons first
		this.toggleButtons.forEach((button, index) => {
			// Hide the front part of the button (the selected indicator)
			button.frontPart.visible = (index === selectedIndex);
		});

		// Check if the selected answer is correct (C is index 2)
		const isCorrect = (selectedIndex === 2);

		if (isCorrect) {
			console.log("Correct answer!");

			// Add zoom out animation to quiz panel
			this.tweens.add({
				targets: this.quiz_panel,
				scaleX: 0,
				scaleY: 0,
				duration: 500,
				ease: 'Back.in',
				onComplete: () => {
					// Deactivate the quiz panel
					this.quiz_panel.visible = false;

					// Stop any currently playing videos
					this.clip_a.stop();
					this.clip_a.visible = false;
					this.clip_b.stop();
					this.clip_b.visible = false;
					this.clip_c.stop();
					this.clip_c.visible = false;

					// Show and play clip_d (correct answer clip)
					this.clip_d.visible = true;
					this.clip_d.play();

					// Add 5-second delay before loading next level
					this.time.delayedCall(5000, () => {
						 // Stop all media before scene transition
						this.stopAllVideos();
						this.stopAllSounds();

						// Load next level scene
						this.scene.start("LevelH");
					});
				}
			});
		} else {
			console.log(`Selected incorrect answer: ${String.fromCharCode(65 + selectedIndex)}`);

			// Hide quiz panel when wrong answer selected
			this.tweens.add({
				targets: this.quiz_panel,
				scaleX: 0,
				scaleY: 0,
				duration: 500,
				ease: 'Back.in',
				onComplete: () => {
					// Deactivate the quiz panel
					this.quiz_panel.visible = false;

					// Stop any currently playing videos
					this.clip_a.stop();
					this.clip_a.visible = false;
					this.clip_b.stop();
					this.clip_b.visible = false;

					// Show and play clip_c (wrong answer clip)
					this.clip_c.visible = true;
					this.clip_c.play();

					// Add 5-second delay before showing the game over panel
					this.time.delayedCall(5000, () => {
						// Show game over panel after delay
						this.game_over_panel.visible = true;

						// Play the pop up sound when the panel becomes active
						this.popUpSound.play();

						// Add event listener to restart button if needed
						this.restart_button.on('pointerdown', () => {
							// Play button click sound
							this.buttonClickSound.play();

							// Animate button click
							this.tweens.add({
								targets: this.restart_button,
								scaleX: 0.9,
								scaleY: 0.9,
								duration: 100,
								yoyo: true,
								ease: 'Power1',
								onComplete: () => {
									 // Cancel all pending timers to prevent scheduled sounds/videos
									this.time.removeAllEvents();

									// Stop all sounds immediately
									this.stopAllSounds();

									// Hide game over panel
									this.game_over_panel.visible = false;

									// Stop all videos
									this.stopAllVideos();

									// Show and play restart video
									this.restart_video.visible = true;
									this.restart_video.play();

									// Add 8-second delay before restarting
									this.time.delayedCall(8000, () => {
										// Stop everything again before scene restart
										this.stopAllVideos();
										this.stopAllSounds();
										this.time.removeAllEvents();

										// Force-remove all event listeners to prevent memory leaks
										this.input.off('pointerdown');

										// Use scene.start instead of scene.restart for a cleaner restart
										this.scene.start("LevelG");
									});
								}
							});
						});
					});
				}
			});
		}
	}

	/**
	 * Stop all video objects to prevent memory leaks
	 */
	stopAllVideos() {
		// Stop all video objects
		if (this.clip_a) this.clip_a.stop();
		if (this.clip_b) this.clip_b.stop(); 
		if (this.clip_c) this.clip_c.stop();
		if (this.clip_d) this.clip_d.stop();
		if (this.restart_video) this.restart_video.stop();
	}

	/**
	 * Stop all sound objects to prevent audio overlap issues
	 */
	stopAllSounds() {
		// Stop all sound objects
		if (this.miSound) this.miSound.stop();
		if (this.flatBridgeSound) this.flatBridgeSound.stop();
		if (this.buttonClickSound) this.buttonClickSound.stop();
		if (this.popUpSound) this.popUpSound.stop();
		if (this.toggleClickSound) this.toggleClickSound.stop();

		// Additional safety to clear any other sounds
		this.sound.stopAll();
	}

	/**
	 * Clean up when the scene is shut down
	 */
	shutdown() {
		this.stopAllVideos();
		this.stopAllSounds();
		super.shutdown();
	}

	/**
	 * Clean up when the scene is destroyed
	 */
	destroy() {
		this.stopAllVideos();
		this.stopAllSounds();
		super.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
