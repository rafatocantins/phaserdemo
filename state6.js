demo.state6 = function(){};
// object with three functions
demo.state6.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#eaf700';
        
        console.log('state6');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
