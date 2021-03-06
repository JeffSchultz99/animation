const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./halo.png");
ASSET_MANAGER.queueDownload("./skeleton.png");
ASSET_MANAGER.queueDownload("./dragon.png");
ASSET_MANAGER.queueDownload("./skeleton2.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new halo(gameEngine));
	gameEngine.addEntity(new skeleton(gameEngine));
	gameEngine.addEntity(new dragon(gameEngine));
	gameEngine.addEntity(new skeleton2(gameEngine));
	
	

	gameEngine.init(ctx);

	gameEngine.start();
});
