demo.state3 = function(){};
// object with three functions
demo.state3.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#ff0000';
        console.log('state3');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
