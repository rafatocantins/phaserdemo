demo.state5 = function(){};
// object with three functions
demo.state5.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#1bf7f7';
        
        console.log('state5');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
