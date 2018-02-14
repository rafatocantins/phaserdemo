
// function of state
demo.state1 = function(){};
// object with three functions
demo.state1.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = '#3a85ff';
        console.log('state1');
        
        //event listeners are local to the state. The code must be in both states
         addChangeStateEventListener();
        
    },
    update : function(){}
};


