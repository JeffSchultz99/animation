class halo {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./halo.png"), 0, 0, 51.25, 68, 12, 0.5);
    }

    update() {

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 25, 25);
    }
}