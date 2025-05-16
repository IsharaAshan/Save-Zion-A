// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
import TransitionManager from '../utils/TransitionManager.js';
/* END-USER-IMPORTS */

export default class LevelD extends Phaser.Scene {

	constructor() {
		super("LevelD");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// clip_a
		const clip_a = this.add.video(640, 360, "4_1");

		// clip_b
		const clip_b = this.add.video(640, 360, "4_2");
		clip_b.visible = false;

		// clip_c
		const clip_c = this.add.video(640, 360, "4_3");
		clip_c.visible = false;

		// clip_d
		const clip_d = this.add.video(640, 360, "4_4");
		clip_d.visible = false;

		// restart_video
		const restart_video = this.add.video(640, 360, "RestartVideo");
		restart_video.visible = false;

		// quiz_panel
		const quiz_panel = this.add.container(1001, 417);
		quiz_panel.visible = false;

		// quizBackground
		const quizBackground = this.add.image(0, 0, "QuizBackground");
		quizBackground.scaleX = 0.5;
		quizBackground.scaleY = 0.6;
		quiz_panel.add(quizBackground);

		// answe_d
		const answe_d = this.add.container(-186, 92);
		quiz_panel.add(answe_d);

		// toggle_button_d
		const toggle_button_d = this.add.container(0, 0);
		toggle_button_d.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_d.add(toggle_button_d);

		// toggle_button_background_3
		const toggle_button_background_3 = this.add.image(0, 0, "toggle_button_background");
		toggle_button_d.add(toggle_button_background_3);

		// toggle_button_front_3
		const toggle_button_front_3 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_3.scaleX = 0.1;
		toggle_button_front_3.scaleY = 0.1;
		toggle_button_front_3.visible = false;
		toggle_button_d.add(toggle_button_front_3);

		// text_3
		const text_3 = this.add.text(160, 10, "", {});
		text_3.setOrigin(0.5, 0.5);
		text_3.text = "D. The House Speaker, Senate President, and \nParliamentary Committees office";
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
		toggle_button_c.add(toggle_button_background_2);

		// toggle_button_front_2
		const toggle_button_front_2 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_2.scaleX = 0.1;
		toggle_button_front_2.scaleY = 0.1;
		toggle_button_front_2.visible = false;
		toggle_button_c.add(toggle_button_front_2);

		// text_2
		const text_2 = this.add.text(207, 0, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "C. The Governor-General, Supreme Court Judges, and the DPP";
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
		toggle_button_b.add(toggle_button_background_1);

		// toggle_button_front_1
		const toggle_button_front_1 = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front_1.scaleX = 0.1;
		toggle_button_front_1.scaleY = 0.1;
		toggle_button_front_1.visible = false;
		toggle_button_b.add(toggle_button_front_1);

		// text
		const text = this.add.text(200, 5, "", {});
		text.setOrigin(0.5, 0.5);
		text.text = "B. The Prime Minister, Cabinet Ministers, and  Governor \nGeneral";
		text.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_b.add(text);

		// answe_a
		const answe_a = this.add.container(-186, -39);
		quiz_panel.add(answe_a);

		// toggle_button_a
		const toggle_button_a = this.add.container(0, 0);
		toggle_button_a.setInteractive(new Phaser.Geom.Rectangle(-16.94999999999999, -16.94999999999999, 33.89999999999998, 33.89999999999998), Phaser.Geom.Rectangle.Contains);
		answe_a.add(toggle_button_a);

		// toggle_button_background
		const toggle_button_background = this.add.image(0, 0, "toggle_button_background");
		toggle_button_a.add(toggle_button_background);

		// toggle_button_front
		const toggle_button_front = this.add.image(0, 0, "toggle_button_front");
		toggle_button_front.scaleX = 0.1;
		toggle_button_front.scaleY = 0.1;
		toggle_button_front.visible = false;
		toggle_button_a.add(toggle_button_front);

		// text_1
		const text_1 = this.add.text(185, -1, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "A. Members of Parliament, Senators, and Councillors";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "BebasNeue-Regular", "fontSize": "18px", "resolution": 2 });
		answe_a.add(text_1);

		// question
		const question = this.add.text(-9, -100, "", {});
		question.setOrigin(0.5, 0.5);
		question.text = "Which combination of leaders make up the Executive arm \nof government?";
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

		// game_over msg
		const game_over_msg = this.add.text(0, 200, "", {});
		game_over_msg.setOrigin(0.5, 0.5);
		game_over_msg.text = "Answer Wrong Game Over ! \nClick the button to restart";
		game_over_msg.setStyle({ "align": "center", "fontFamily": "BebasNeue-Regular", "fontSize": "57px" });
		game_over_pop_up.add(game_over_msg);

		// Interduction_panel
		const interduction_panel = this.add.container(-0.0000015544082287988203, 3.0083398883107293e-7);
		interduction_panel.visible = false;

		// interduction_blackScreen
		const interduction_blackScreen = this.add.rectangle(640, 360, 128, 128);
		interduction_blackScreen.scaleX = 10;
		interduction_blackScreen.scaleY = 6;
		interduction_blackScreen.isFilled = true;
		interduction_blackScreen.fillColor = 0;
		interduction_panel.add(interduction_blackScreen);

		// interdutcion_discription
		const interdutcion_discription = this.add.text(640, 360, "", {});
		interdutcion_discription.setOrigin(0.5, 0.5);
		interdutcion_discription.text = "In Half-Way Tree he only stopped a minute, to get a hot patty,\nBut Babylon swooped down off the clock—and grabbed him by the ba...!";
		interdutcion_discription.setStyle({ "fontFamily": "BebasNeue-Regular", "fontSize": "40px", "resolution": 3 });
		interduction_panel.add(interdutcion_discription);

		// Interduction_Title
		const interduction_Title = this.add.text(640, 227, "", {});
		interduction_Title.setOrigin(0.5, 0.5);
		interduction_Title.text = "Half-Way Tree";
		interduction_Title.setStyle({ "fontFamily": "BebasNeue-Regular", "fontSize": "50px", "resolution": 3 });
		interduction_panel.add(interduction_Title);

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
		this.game_over_msg = game_over_msg;
		this.game_over_panel = game_over_panel;
		this.interdutcion_discription = interdutcion_discription;
		this.interduction_Title = interduction_Title;
		this.interduction_panel = interduction_panel;

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
	/** @type {Phaser.GameObjects.Text} */
	game_over_msg;
	/** @type {Phaser.GameObjects.Container} */
	game_over_panel;
	/** @type {Phaser.GameObjects.Text} */
	interdutcion_discription;
	/** @type {Phaser.GameObjects.Text} */
	interduction_Title;
	/** @type {Phaser.GameObjects.Container} */
	interduction_panel;

	/* START-USER-CODE */

	create() {
		this.editorCreate();

		// Store reference to game_over_pop_up
		this.game_over_pop_up = this.game_over_panel.getAt(1);

		// Initially set all videos to be invisible except clip_a
		this.clip_b.visible = false;
		this.clip_c.visible = false;
		this.clip_d.visible = false;
		this.restart_video.visible = false;

		// Initially set the quiz_panel to scale 0
		this.quiz_panel.setScale(0);

		// Initially set game over pop-up to scale 0
		this.game_over_pop_up.setScale(0);

		// Create transition manager for smooth scene transitions
		this.transitionManager = new TransitionManager(this);

		// Make introduction panel visible initially
		this.interduction_panel.visible = true;

		// Update title and description - keeping LevelD specific text
		this.interduction_Title.setText('');
		this.interdutcion_discription.setText('');

		// Load and play introduction sound
		this.introductionSound = this.sound.add("level_e_interduction");
		this.introSoundPlaying = false;
		try {
			this.introductionSound.play();
			this.introSoundPlaying = true;
		} catch (error) {
			console.error("Failed to play introduction sound:", error);
			// Fallback to miSound if introduction sound fails
			this.miSound = this.sound.add("mi_sound");
			this.miSound.setLoop(true);
			this.miSound.play();
		}

		// Initialize sound effects
		if (!this.miSound) {
			this.miSound = this.sound.add("mi_sound");
			this.miSound.setLoop(true);
		}
		this.flatBridgeSound = this.sound.add("halfway_tree");
		this.buttonClickSound = this.sound.add("button_click");
		this.popUpSound = this.sound.add("pop_up");
		this.toggleClickSound = this.sound.add("toggle_click");

		// Add typing animation for title
		this.typeText(this.interduction_Title, "Half-Way Tree", 100);

		// Add typing animation for description after title is complete
		this.time.delayedCall(1200, () => {
			this.typeText(
				this.interdutcion_discription, 
				"In Half-Way Tree he only stopped a minute, to get a hot patty,\nBut Babylon swooped down off the clock—and grabbed him by the ba...!", 
				30
			);
		});

		// After 8 seconds, hide introduction panel and start the game sequence
		this.time.delayedCall(9000, () => {
			// Stop the introduction sound
			if (this.introductionSound) {
				this.introductionSound.stop();
			}

			// Fade out the introduction panel
			this.tweens.add({
				targets: this.interduction_panel,
				alpha: 0,
				duration: 900,
				onComplete: () => {
					// Completely deactivate the introduction panel
					this.interduction_panel.visible = false;
					this.interduction_panel.alpha = 1; // reset alpha for future use

					// Cancel any remaining typing animations for intro panel
					this.time.removeAllEvents();
					this.interduction_Title.setText("Half-Way Tree"); // Ensure text is fully displayed
					this.interdutcion_discription.setText("In Half-Way Tree he only stopped a minute, to get a hot patty,\nBut Babylon swooped down off the clock—and grabbed him by the ba...!");

					// Start playing miSound if intro sound was playing or as a fallback
					if (this.introSoundPlaying || !this.miSound.isPlaying) {
						this.miSound.play();
					}

					// Start the first video
					this.clip_a.visible = true;
					this.clip_a.play();

					// Listen for the first video's completion instead of using a delay
					this.clip_a.once('complete', () => {
						this.clip_a.visible = false;
						this.clip_a.stop();

						// Start the second video with looping
						this.clip_b.visible = true;
						this.clip_b.play();
						this.clip_b.setLoop(true);

						// Stop miSound after 5 seconds and play flatBridge sound
						this.time.delayedCall(1000, () => {
							this.miSound.stop();
							this.flatBridgeSound.play();

							// Show quiz panel after flatBridge sound has played for a bit
							this.time.delayedCall(2000, () => {
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
					});
				}
			});
		});

		// Initialize the toggle buttons
		this.setupToggleButtons();
	}

	/**
	 * Creates a typewriter effect for text
	 * @param {Phaser.GameObjects.Text} textObject - The text object to animate
	 * @param {string} finalText - The final text to display
	 * @param {number} speed - Speed of typing in ms per character
	 */
	typeText(textObject, finalText, speed = 50) {
		// Store original text for later
		const originalText = finalText;
		const length = finalText.length;
		let i = 0;

		// Clear text initially
		textObject.setText('');

		// Create typing interval
		this.time.addEvent({
			callback: () => {
				textObject.setText(originalText.substring(0, i));
				i++;
			},
			repeat: length,
			delay: speed
		});
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

		// Check if the selected answer is correct (B is index 1)
		const isCorrect = (selectedIndex === 1);

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
					if (this.clip_b.isPlaying()) {
						this.clip_b.stop();
					}
					this.clip_b.visible = false;

					// Show and play clip_d (correct answer clip)
					this.clip_d.visible = true;
					this.clip_d.play();

					// Add 5-second delay before loading next level
					this.time.delayedCall(5000, () => {
						 // Stop all media before scene transition
						this.stopAllVideos();
						this.stopAllSounds();

						// Use transition manager for smooth transition
						this.transitionManager.fadeToScene("LevelE", 800);
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
						// Show game over panel with scale animation
						this.game_over_panel.visible = true;
						this.game_over_panel.alpha = 1;

						// Set initial scale to 0
						this.game_over_pop_up.setScale(0);

						// Play the pop up sound
						this.popUpSound.play();

						// Make sure game over message is empty initially
						this.game_over_msg.setText('');

						// Hide restart button initially
						this.restart_button.visible = false;

						// Animate the game over pop-up
						this.tweens.add({
							targets: this.game_over_pop_up,
							scaleX: 1,
							scaleY: 1,
							duration: 500,
							ease: 'Back.out',
							onComplete: () => {
								// Start typing animation for game over message
								this.typeText(
									this.game_over_msg, 
									"Answer Wrong Game Over ! \nClick the button to restart",
									40
								);

								// Show restart button after message is complete
								this.time.delayedCall(2500, () => {
									// Fade in restart button
									this.restart_button.visible = true;
									this.restart_button.alpha = 0;

									this.tweens.add({
										targets: this.restart_button,
										alpha: 1,
										duration: 300,
										ease: 'Linear'
									});

									// Add event listener to restart button
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

													// Use transition manager for smooth restart
													this.transitionManager.fadeToScene("LevelD", 800);
												});
											}
										});
									});
								});
							}
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
		if (this.introductionSound) this.introductionSound.stop();

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
		if (this.transitionManager) {
			this.transitionManager.destroy();
		}
		super.destroy();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
