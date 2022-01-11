class halo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./halo.png"), 0, 0, 49.4, 68, 12, 0.5);
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    }
}