demo.state2 = function(){};
// object with three functions
demo.state2.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#5eff39';
        console.log('state2');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
