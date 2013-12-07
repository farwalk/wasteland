var locationx = new Array();
var locationy = new Array();
var exits = new Array();
var exitdesc = new Array();
var exitactive = new Array();
var roomdesc = new Array();
var roomstate = new Array();
for (x=0; x<=100; x++)
{
  exits[x] = new Array();
	exitdesc[x] = new Array();
	roomdesc[x] = new Array();
	exitactive[x] = new Array();
}

for (x=0; x<=100; x++)
{
  roomstate[x] = 0;
}
for (y=0; y<100; y++)
{
  for (x=0; x<100; x++)
  {
    exitactive[y][x] = true;
  }
}

var objectroom = new Array();
var objectactive = new Array();
var objecttext = new Array();
var objectaction = new Array();

actiondesc = "";

for (x=0; x<100; x++)
{
  objectactive[x] = false;
}

objectactive[0] = true;
objectroom[0] = 3;
objecttext[0] = "You listen at the door and hear the following conversation.";
objectaction[0] = "display text";

objectactive[1] = true;
objectroom[1] = 2;
objecttext[1] = "";
objectaction[1] = 4;

objectactive[9] = true;
objectroom[9] = 1;
objecttext[9] = "You see a light at the bottom of the well, do you wish to descend?<BR><BR><input type=button value='Descend the well into the crypt.' onclick=gotoLocation(2)>";
objectaction[9] = "display text"; 


startinglocation = 1;
playerlocation = startinglocation;
locationx[1] = 171;
locationy[1] = 87;
locationx[2] = 96;
locationy[2] = 197;
locationx[3] = 195;
locationy[3] = 268;
locationx[4] = 254;
locationy[4] = 253;
locationx[5] = 28;
locationy[5] = 242;
locationx[6] = 84;
locationy[6] = 412;
locationx[7] = 187;
locationy[7] = 393;
locationx[8] = 128;
locationy[8] = 461;
locationx[9] = 236;
locationy[9] = 443;

roomdesc[1][0] = "An old oak tree is twisted and blackened by the evil inside the mound. 3 fire beetles (HP: 5, 6, 8) hide in the broken old shrine. A rough stone well leads down to area 2.";
exits[1][0] = 2;
//exitdesc[1][0] = "Descend the well into the crypt."

roomdesc[2][0] = "A shelf full of broken clay jars and other worthless old grave goods hides a secret door to area 4";
exits[2][0] = 1;
exitdesc[2][0] = "Climb the well to exit the crypt.";
exits[2][1] = 3;
exitdesc[2][1] = "Go south into the hallway.";
exits[2][2] = 4;
exitdesc[2][2] = "Go east through the secret door.";
exitactive[2][2] = false;

roomdesc[3][0] = "A hidden pit trap drops unwary adventurers into a 10' deep pit (1d6 damage, save for half).";
exits[3][0] = 2;
exitdesc[3][0] = "Go north into the entrance chamber.";
exits[3][1] = 4;
exitdesc[3][1] = "Go through the east door.";
exits[3][2] = 5;
exitdesc[3][2] = "Go through the west door.";

roomdesc[4][0] = "A group of 6 rowdy goblins (HP: 1,2,3,3,4,5, armed with spears) drink copiously from a large barrel of stolen beer. Goblin-boss Hogor (HP: 9, armed with two axes) might be convinced to help the heroes kill the elf that took his leadership position";
exits[4][0] = 2;
exitdesc[4][0] = "Go west through the secret door.";
exitactive[4][0]  = false;
exits[4][1] = 3;
exitdesc[4][1] = "Go through the west door.";

roomdesc[5][0] = "Skazic the elf (HP: 8, armed with a longsword, Charm Person memorized) is the last survivor of a raiding party from the Deep Down Below. He's the new leader of these goblins with plans to attack Old Tooley's village. Blehk the goblin witch-doctor (HP: 6, armed with a dagger, Magic Missile and Cause Fear memorized) is eager to help him. A small chest holds 110sp and 54gp. A wooden trap door leads down to area 6.";
exits[5][0] = 3;
exitdesc[5][0] = "Go through the east door.";
exits[5][1] = 6;
exitdesc[5][1] = "Climb down the stairs.";

roomdesc[6][0] = "2 giant centipedes (HP: 4, 4) crawl out of a fissure in the earthen wall to make a surprise attack!";
exits[6][0] = 5;
exitdesc[6][0] = "Climb up the stairs.";
exits[6][1] = 7;
exitdesc[6][1] = "Go east into the shrine room.";
exits[6][2] = 8;
exitdesc[6][2] = "Go south into the smelly room.";

roomdesc[7][0] = "An old shrine to the Wolf Totem rests here. If the heroes please the Wolf Totem, she will answer one question asked about the burial mound and its inhabitants. If they displease her, a dire wolf (HP: 15) will appear and attack them!";
exits[7][0] = 6;
exitdesc[7][0] = "Go west into the centipede room.";

roomdesc[8][0] = "Two dead goblins lie in front of a round stone door carved with sinister markings. The door is trapped to release poison spores if someone tries to open it (3d4 damage, save for half).";
exits[8][0] = 6;
exitdesc[8][0] = "Go north into the centipede room.";
exits[8][1] = 9;
exitdesc[8][1] = "Go east through the temple door.";

roomdesc[9][0] = "Gilliard the ghoul (HP: 10, armed with his two-handed sword +1) and his 6 skeleton followers (HP: 2, 3, 3, 4, 4, 6) are eager to escape their tomb and spread chaos across the land. A hollow spot under Gilliard's slab hides 100gp and a silver dagger.";
exits[9][0] = 8;
exitdesc[9][0] = "Go west through the temple door.";

