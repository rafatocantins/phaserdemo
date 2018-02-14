var game = new Phaser.Game(600, 400, Phaser.AUTO);
// add a state to our game
game.state.add('state1', demo.state1);
game.state.start('state1');