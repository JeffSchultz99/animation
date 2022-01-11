class skeleton2 {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./dragon.png"), 0, 0, 71.1, 82, 9, 0.5);
        
        this.x = 0;
        this.y = 0;
        this.speed = 150;
    }

    update() {
        this.x += this.speed * this.game.clockTick;
        if (this.x > 1024) this.x = 0;

    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y + 300);
    }
}