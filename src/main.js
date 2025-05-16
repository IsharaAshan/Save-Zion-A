import Menu from "./scenes/Menu.js";
import Interduction from "./scenes/Interduction.js";
import LevelA from "./scenes/LevelA.js";
import LevelB from "./scenes/LevelB.js";
import LevelC from "./scenes/LevelC.js";
import LevelD from "./scenes/LevelD.js";
import LevelE from "./scenes/LevelE.js";
import LevelF from "./scenes/LevelF.js";
import LevelG from "./scenes/LevelG.js";
import WinScene from "./scenes/WinScene.js";

window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1280,
		height: 720,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		}
	});

	game.scene.add("Menu", Menu);
	game.scene.add("Interduction", Interduction);
	game.scene.add("LevelA", LevelA);
	game.scene.add("LevelB", LevelB);
	game.scene.add("LevelC", LevelC);
	game.scene.add("LevelD", LevelD);
	game.scene.add("LevelE", LevelE);
	game.scene.add("LevelF", LevelF);
	game.scene.add("LevelG", LevelG);
	game.scene.add("WinScene", WinScene);


	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		// Create loading text
		let loadingText = this.add.text(this.cameras.main.width / 2, this.cameras.main.height / 2, 'Loading...', {
			fontSize: '32px',
			fill: '#FFF'
		}).setOrigin(0.5, 0.5);
		
		// Create loading progress bar
		let progressBar = this.add.graphics();
		let progressBox = this.add.graphics();
		progressBox.fillStyle(0x222222, 0.8);
		progressBox.fillRect(this.cameras.main.width / 2 - 160, this.cameras.main.height / 2 + 30, 320, 50);
		
		// Register progress event
		this.load.on('progress', function (value) {
			progressBar.clear();
			progressBar.fillStyle(0xffffff, 1);
			progressBar.fillRect(this.cameras.main.width / 2 - 150, this.cameras.main.height / 2 + 40, 300 * value, 30);
			loadingText.setText('Loading: ' + parseInt(value * 100) + '%');
		}, this);
		
		// Load the asset pack
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {
		// All assets are now loaded, transition to Menu scene
		this.scene.start("Menu");
	}
}