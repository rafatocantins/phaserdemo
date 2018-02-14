demo.state4 = function(){};
// object with three functions
demo.state4.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#ff00e9';
        
        console.log('state4');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
