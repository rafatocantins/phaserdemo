demo.state8 = function(){};
// object with three functions
demo.state8.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#ff6e00';
        
        console.log('state8');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
