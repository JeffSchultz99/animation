class skeleton {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./skeleton.png"), 0, 0, 60.3, 52, 9, 0.2);

        this.x = 0;
        this.y = 0;
        //this.speed = 150;
    }

    update() {
        //this.x += this.speed * this.game.clockTick;
        //if (this.x > 1024) this.x = 0;

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y + 100);
    }
}