class halo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./skeleton.png"), 0, 0, 60.3, 52, 10, 0.5);
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 100);
    }
}