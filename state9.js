demo.state9 = function(){};
// object with three functions
demo.state9.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#aea7b7';
        
        console.log('state9');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
