/**
 * Utility class to handle scene transitions with effects
 */
export default class TransitionManager {
    /**
     * @param {Phaser.Scene} scene - The scene this manager belongs to
     */
    constructor(scene) {
        if (!scene) {
            console.error("TransitionManager: Scene parameter is required");
            return;
        }
        this.scene = scene;
    }

    /**
     * Fade to another scene
     * @param {string} targetScene - Key of the scene to transition to
     * @param {number} duration - Duration of fade in milliseconds
     * @param {string} color - Color to use for fade (hex)
     */
    fadeToScene(targetScene, duration = 1000, color = '#000000') {
        if (!this.scene) {
            console.error("TransitionManager: Scene reference is missing");
            return;
        }
        
        try {
            // Create a rectangle covering the screen
            const rect = this.scene.add.rectangle(
                this.scene.cameras.main.width / 2,
                this.scene.cameras.main.height / 2,
                this.scene.cameras.main.width,
                this.scene.cameras.main.height,
                Phaser.Display.Color.HexStringToColor(color).color
            );
            
            // Set depth to ensure it's on top
            rect.setDepth(1000);
            
            // Set initial alpha to 0
            rect.alpha = 0;
            
            // Make sure it stays fixed to camera
            rect.setScrollFactor(0);

            // Start fade in
            this.scene.tweens.add({
                targets: rect,
                alpha: 1,
                duration: duration / 2,
                ease: 'Linear',
                onComplete: () => {
                    try {
                        // Switch scene once fade is complete
                        this.scene.scene.start(targetScene);
                    } catch (err) {
                        console.error("Error starting new scene:", err);
                        // Try direct approach if the above fails
                        if (this.scene.scene) {
                            this.scene.scene.start(targetScene);
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Error in fadeToScene:", error);
            // Fallback to direct scene switching
            if (this.scene && this.scene.scene) {
                this.scene.scene.start(targetScene);
            }
        }
    }

    /**
     * Clean up resources
     */
    destroy() {
        this.scene = null;
    }
}
