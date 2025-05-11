import LevelA from "./scenes/LevelA.js";
import LevelB from "./scenes/LevelB.js";
import LevelC from "./scenes/LevelC.js";
import LevelD from "./scenes/LevelD.js";
import LevelE from "./scenes/LevelE.js";
import LevelF from "./scenes/LevelF.js";
import LevelG from "./scenes/LevelG.js";
import Menu from "./scenes/Menu.js";

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


	game.scene.add("LevelA", LevelA);
	game.scene.add("LevelB", LevelB);
	game.scene.add("LevelC", LevelC);
	game.scene.add("LevelD", LevelD);
	game.scene.add("LevelE", LevelE);
	game.scene.add("LevelF", LevelF);
	game.scene.add("LevelG", LevelG);
	game.scene.add("Menu", Menu);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/asset-pack.json");
	}

	create() {

		this.scene.start("Menu");
		

	}
}