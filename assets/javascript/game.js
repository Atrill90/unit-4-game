$(document).ready(function() {


// Mario is all arounder
var mario={
    health:110,
    counter:14,
    damage: function(){
        return Math.floor(Math.random()*25)
    }
    

}
// Luigi can crit on number 7!
var luigi={
    health:100,
    counter:15,
    damage: function(){
        var randNum = Math.floor(Math.random()*10);
        if (randNum===7){
        return randNum * 10;
        }else {
            return randNum;
        }

    }
}
var Bowser={
    health:200,
    counter:10,
    damage: function(){
        return Math.floor(Math.random()*15);

    }
}

var Peach={
    health:125,
    damage: function(){
        return Math.floor(Math.random()*20);
    }
}
var userChar = {
    health:"",
    attack:"",
    counter:""

}
var enemyChar ={
    health:"",
    attack:"",
    counter:""
}


var enemyChar = false;

var playerOne = false;

// I need to be able to select a character click
$(".cards").on("click",'.marioImage',function (e) {
    
    var targetSelected = e.currentTarget.id;
    $(".attackspot").append(this); 
    
    var $leftover = $(".card1"); 
    $('#enemy').append($leftover);
     
        // console.log(playerOne);
});

$("#enemy").on("click", '.marioImage', function(){
   
    $('#battleground').append($('#playerOne .marioImage'));
    $(".defensespot").append(this);

    // console.log(this);
    $("#enemy").hide();
    $(".hitspot").append("<img class='mushroomBtn img-fluid'>");
    $(".mushroomBtn").attr("src", "assets/images/mushroom.png")
    .click(function(){
     var user =   $('.marioImage:nth-child(1)');
     var enemy = $('.marioImage:nth-child(2)');
    console.log(enemy);

    })


    

}); 

// Each character is an object

// Health, Damage, Name 


// Pick an Opponent with another click

// Opponent needs health

// Opponent needs damage



// I need to attack the Opponent click




// Restart the game

});

