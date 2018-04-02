$(document).ready(function() {


// Mario is all arounder
const mario={
    health:110,
    counter:14,
    damage: 19
    }
    


// Luigi 
const luigi={
    health:100,
    counter:15,
    damage:20

    
}
const bowser={
    health:200,
    counter:10,
    damage:14
    
}

const peach={
    health:125,
    counter:10,
    damage: 15
}

const characterStats={
    attCurrHealth:0,
    defCurrHealth:0,
    attackerDamage:null
    
}


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
    

    })
    $(".row").on("click",'.mushroomBtn', function(e){
        var attackerId = e.currentTarget.parentElement.previousElementSibling.children[0].id ;
        var defenderId =e.currentTarget.parentElement.nextElementSibling.children[0].id;
        //first attack
        var attacker = setAttackerStats(attackerId);
        var defender = setDefenderStats(defenderId);

            defCurrHealth = defender.health - attacker.damage;
            attCurrHealth = attacker.health - defender.counter;
            if(!characterStats.attackerDamage){
                displayStats(defCurrHealth,attCurrHealth);
                characterStats.attCurrHealth = attCurrHealth;
                characterStats.defCurrHealth = defCurrHealth;
                 
                attack(attacker, defender);
                
            }
              
              
    });

    const attack = function(attacker, defender){
        // console.log(attacker, defender);
        characterStats.attackerDamage = attacker.damage;
        console.log(characterStats.attackerDamage);
        if(characterStats.attackerDamage){
            let twoXdamage = attacker.damage*2;
            
            characterStats.defCurrHealth = characterStats.defCurrHealth - twoXdamage;
            characterStats.attCurrHealth = characterStats.attCurrHealth - defender.counter;
            
            displayStats(characterStats.defCurrHealth,characterStats.attCurrHealth);
        }
            

    }
        function setAttackerStats(attackerId) {
            
            switch(attackerId) {
                case "mario":
                    return {
                        health: mario.health,
                        counter: mario.counter,
                        damage: mario.damage
                    }
                    break;
                case "luigi":
                return {
                    health: luigi.health,
                    counter: luigi.counter,
                    damage: luigi.damage
                }
                    break;
                case "bowser":
                return {
                    health: bowser.health,
                    counter: bowser.counter,
                    damage: bowser.damage
                }
                    break;
                case "peach":
                return {
                    health: peach.health,
                    counter: peach.counter,
                    damage: peach.damage
                }
                    break;
            }
        }
          


        function setDefenderStats(defenderId){
            switch(defenderId) {
                case "mario":
                    return {
                        health: mario.health,
                        counter: mario.counter,
                        damage: mario.damage
                    }
                    break;
                case "luigi":
                return {
                    health: luigi.health,
                    counter: luigi.counter,
                    damage: luigi.damage
                }
                    break;
                case "bowser":
                return {
                    health: bowser.health,
                    counter: bowser.counter,
                    damage: bowser.damage
                }
                    break;
                case "peach":
                return {
                    health: peach.health,
                    counter: peach.counter,
                    damage: peach.damage
                }
                    break;
            }
        }
        
        


        function displayStats(defCurrHealth,attCurrHealth){
            $(".defensestats").html(`<h2 class="text-center">Defenders Health</h2><br><h3 class="text-center">${defCurrHealth}</h3>`);
            $(".attackstats").html(`<h2 class="text-center">Attackers Health</h2><br><h3 class="text-center">${attCurrHealth}</h3>`);
        }
// Health, Damage, Name 


// Pick an Opponent with another click

// Opponent needs health

// Opponent needs damage



// I need to attack the Opponent click




// Restart the game

});

