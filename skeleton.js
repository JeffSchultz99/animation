class skeleton {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./skeleton.png"), 0, 0, 60.3, 52, 9, 0.2);
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 250, 250);
    }
}