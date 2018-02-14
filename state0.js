 //object
var demo = {}, centerX = 1500/2, centerY = 1000 / 2, rafael, speed = 4;
// var to set location ex. 0,0 top left corner

demo.state0 = function(){};
// object with three functions
demo.state0.prototype = {
    preload : function(){
        game.load.image('rafael', 'assets/sprites/adam.png');
    },
    create : function(){
        game.stage.backgroundColor = '#000000';
        console.log('state0');
        
        // add function to change state
        addChangeStateEventListener();
        // Phaser scale to all screens
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        
        rafael = game.add.sprite(centerX, centerY, 'rafael');
        // set location to center
       /*rafael.anchor.x = 0.5;
        rafael.anchor.y = 0.5;*/
        
        // one line to set center
        rafael.anchor.setTo(0.5, 0.5);
        
    },
    update : function(){
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
            rafael.x += speed;
        }else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            rafael.x -= speed;
        }
    }
};


// function to add state

function changeState(i, stateNum){
    game.state.start('state' + stateNum);
}

//function to add key to change state

function addKeyCallback(key, fn, args){
    game.input.keyboard.addKey(key).onDown.add(fn, null, null, args)
}


// function to add change states

function addChangeStateEventListener(){
    
    addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
        addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
        addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
        addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
        addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
        addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
        addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
        addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
        addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
        addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);
}