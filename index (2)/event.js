var eventtype = new Array();
var eventaction = new Array();
var eventvar = new Array();
var eventanswertype = new Array();
var eventanswer = new Array();
var eventansweraction = new Array();
var eventquestiontext = new Array();
var eventanswertype = new Array();
var eventchallengetype = new Array();
var eventchallengedifficulty = new Array();
var eventchallengesuccess = new Array();
var eventchallengefail = new Array();
for (x=0; x<10; x++)
{
  eventaction[x] = new Array();
  eventvar[x] = new Array();
  eventanswer[x] = new Array();
  eventansweraction[x] = new Array();
  eventanswertype[x] = new Array();
}

//event, interacting with book case
eventaction[0] = "challenge";
eventchallengetype[0] = "int";
eventchallengedifficulty[0] = 10;
eventchallengesuccess[0] = 1;
eventchallengefail[0] = 2;

eventaction[1] = "text"
eventvar[1][0] = "You find a secret door!<BR>Carefully you sneak through and see some goblins getting drunk on some foul smelling goblin ale.  You catch them off guard and are able to kill 3 before the battle begins";
eventvar[1][1] = "goto";
eventvar[1][2] = 3;
eventvar[2][0] = "set exit";
eventvar[2][1] = 2;
eventvar[2][2] = 2;
eventvar[2][3] = true;
eventvar[3][0] = "set exit";
eventvar[3][1] = 4;
eventvar[3][2] = 0;
eventvar[3][3] = true;
eventvar[4][0] = "set location";
eventvar[4][1] = 4;

eventaction[2] = "text";
eventvar[2][0] = "You find a secret door!<BR>Carefully you sneak through, but stumble on some broken pottery and alert the goblins in the next room.";
eventvar[2][1] = "goto";
eventvar[2][2] = 4;

eventaction[3] = "battle";
eventvar[3][0] = "The three remaining goblins and their leader charge you, their breath foul with the stench of their toxic brew, curved, viscious blades at the ready.";
eventvar[3][1] = "Goblin Leader"
eventvar[3][2] = "";

eventaction[4] = "question"
eventquestiontext[4] = "You notice something odd about the book case.";
eventanswer[4][0] = "Search the bookcase";
eventanswertype[4][0] = "action";
eventansweraction[4][0] = 0;
eventanswer[4][1] = "Leave it alone";
eventanswertype[4][1] = "nothing";


/*

If you interact with the well in room 1 you may go to room 2
If you interact with the shrine you are attacked by 3 fire beetles

If you interact with the book case you may search for the secret door in room 2 (DC 10)
  -success: you can enter room 3 with suprise and kill half of the goblins before they know what hit them
	-failure: you can enter room 3, but with no suprise

If you enter room 3 successfully via the secret door and the goblins are still a threat you may:
  -attack and kill half of them before they get to their weapons, or
	-parley, see below
	
If you listen at the door in room 3 leading to room 4 you can hear the golbin leader grousing about the new elf boss
this will help you with your parley roll.

If you enter room 4 via the main door, you may attack or parley
  -attack, regular combat with the goblins
	-parley, options:
	  -Tell the goblin leader that your have no quarrel with him, you are just here to find the undead that have been bothering the villiage (DC 10)
		  success: no fight
			fail: regular combat with the goblins
		-(if you listened at the door) Tell the goblin leader that you can help him to take his leadership position back from the new elf boss (DC 5)
		  success: help with elf battle
			fail: regular combat with the goblins
		
If you enter room 5 and you have parleyed with the goblin leader, they will fight, you can:
  -help the goblins
	  -goblins win, the goblin leader gives you the elf boss's arm as a trophy, chest with 110sp, 54gp 
	-help the elf
	   -elf wins, the elf is delighted that you chose to side with him in this fight, but seeing as you betrayed the goblin
		  he really can't trust you, fight with elf.
	-stay out of the fight
	  -goblins win and start a fight with you
		  -victory: 110sp, 54gp
			
If you enter room 5 and the elf is already dead and you have parleyed with the goblin leader
  -goblin leader gives you the elf boss' arm as a trophy, chest with 100sp, 54pg
	
If you enter room 5 before parley with the goblin
  -fight elf and goblin shaman
	  victory: 110sp, 54pg			
		
If you enter room 6, two centipedes attack you.

If you enter room 7
  -if you interact with the temple
	  -you hear a howl and feel that the wolf god is demanding a sacrifice
		  -if you have the elf boss' arm you have a option: offer elf arm
			  -success, the wolf god tells you that the ghoul in room 9 is an unnaturual being and must be destroyed, give you a word of power to help with this.
			-option: leave some gold
			  -fail, the dire wolf attacks
			-option: leave a weapon
			  -fail, the dire wolf attacks

If you enter room 8
  -if you interact with the dead goblins you may get sick (DC10)
	  -fail: sick, lose some HP, gain gold
		-success: not sick, gain gold
		-you notice that they have been poisoned in some way, helps with disarming the trap on the door
		
	-if you interact with the door, you can try to open it
	  -if you searched the bodies it is DC5 to disarm trap, DC10 otherwise
		  -success: go through door
			-fail: damage, go through door

If you enter room 9
  -if you have gotten the word of power you may speak it now
	  -yes: battle with just the ghoul
		-no: battle with the ghoul and his minions
	-after battle you get a +1 broadsword
	-after battle you can interact with the slab and get 100gp and a silver dagger


*/
