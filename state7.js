demo.state7 = function(){};
// object with three functions
demo.state7.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#050d75';
        
        console.log('state7');
        
        addChangeStateEventListener();
    },
    update : function(){}
};
