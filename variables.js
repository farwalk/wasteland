
var itemused = new Array();
var dangerused = new Array();
var dicedirx = new Array();
var dicediry = new Array();
var dicex = new Array();
var dicey = new Array();
movecount = 0;
numberofdice = 0;

//danger patrol variables

dp_character_up = 0;
dp_challenge_up = 0;
var dp_hero_text = new Array();
for (x=0; x<10; x++)
{
  dp_hero_text[x] = "";
}
dp_challenge_text = "";
dp_trait_selected = 0;

var dp_current_dice_pool = Array();
var dp_current_dice_result = Array();

var dp_action_name = new Array();
var dp_action_description = new Array();
var dp_action_number_of_threats = new Array();

actionup = 0

var dp_threat_HP = new Array();
var dp_threat_maxHP = new Array();
var dp_threat_resistance = new Array();
var dp_threat_name = new Array();
var dp_threat_description = new Array();
var dp_threat_timer = new Array();
var dp_threat_image = new Array();
for (x=0; x<100; x++)
{
  dp_threat_HP[x] = new Array();
  dp_threat_maxHP[x] = new Array();
	dp_threat_resistance[x] = new Array();
	dp_threat_name[x] = new Array();
	dp_threat_description[x] = new Array();
	dp_threat_timer[x] = new Array();
	dp_threat_image[x] = new Array();
}
var dp_threat_trait_text = new Array();
var dp_threat_trait_text_success = new Array();
var dp_threat_trait_text_failure = new Array();
for (x=0; x<100; x++)
{
  dp_threat_trait_text[x] = new Array();
	dp_threat_trait_text_success[x] = new Array();
	dp_threat_trait_text_failure[x] = new Array();
  for (y=0; y<10; y++)
	{
	  dp_threat_trait_text[x][y] = new Array();
		dp_threat_trait_text_success[x][y] = new Array();
		dp_threat_trait_text_failure[x][y] = new Array();
	}
}
var dp_threat_danger_text = new Array();
var dp_threat_danger_title = new Array();
for (x=0; x<100; x++)
{
  dp_threat_danger_text[x] = new Array();
	dp_threat_danger_title[x] = new Array();
  for (y=0; y<10; y++)
	{
	  dp_threat_danger_text[x][y] = new Array();
		dp_threat_danger_title[x][y] = new Array();
	}	
}

var dp_threat_sprite = new Array();
dp_number_of_threats = 20

dp_action_name[0] = "Attack of the Crimson Apes!"
dp_action_description[0] = "a giant Crimson Ape, freshly escaped from the Rocket City Zoo, lands on the trunk of the car. It rips the back bumper off in a dominance display, roars, and hurls the bumper over its head right into traffic! The bumper smashes into a citizen’s car, sending it tumbling out of control, with smoke pouring from the engine. Across the city, the heroes can see other Crimson Apes, leaping from car to car in the traffic lanes, smashing windows, scaring citizens, and generally causing havoc! This looks like a job for the Danger Patrol!"
dp_action_number_of_threats[0] = 3
dp_threat_name[0][0] = "Crimson Ape"
dp_threat_description[0][0] = "A Giant Crimson Ape on your flying car!"
dp_threat_trait_text[0][0][0] = "'Come at me, you big ape.', I say goading the beast to charge, then I sidestep the behemoth and let it slide off the smooth trunk of the aircar.";
dp_threat_trait_text_success[0][0][0] = "Somehow the ape understands the universal language of taunt and falls for your ruse, literally falling for it.";
dp_threat_trait_text_failure[0][0][0] = "Crimson Apes, not understanding English, do not generally fall for ruses based on the spoken word.";

dp_threat_trait_text[0][0][1] = "Steadying myself against the back of the chair, I blast electric fire from my gun to knock this hairy brute off the car and down into the concrete canyons below.";
dp_threat_trait_text[0][0][2] = "A quick flip over the head of the gorilla, grabbing a fistfull of hair on the way over and a judo toss should send our simian friend on the ride of his his life.";
dp_threat_trait_text[0][0][3] = "Music has charms to soothe the savage beast. I quickly switch the wireless station to easy listening to calm the crimson crusher.";
dp_threat_trait_text[0][0][4] = "I have encountered these beasts before, I know their lingo. 'Gra! Kra! Krunch!'.  That means, back off Big Boy if you know what's good for you.";
dp_threat_trait_text[0][0][5] = "Easy as pie.  I strap myself in and do a quick barrel roll.  Bye bye monkey boy!";
dp_threat_trait_text[0][0][6] = "'My axe will stain your fur red, beast!', I yell.  Wait, these are crimson apes?  'My axe will stain your fur even redderer, beast!'";
dp_threat_trait_text[0][0][7] = "Let's see.  Approximately 180 kilos.  Hmm... so 500ccs of acepromazine should summon the sandman for this simian.  Now where did I put that banana?";
dp_threat_danger_title[0][0][0] = "Leaky oil line";
dp_threat_danger_text[0][0][0] = "Oil starts spewing from a cut line on the air car.  The entire bonnet is now as slippery as ice!";
dp_threat_danger_title[0][0][1] = "School bus!";
dp_threat_danger_text[0][0][1] = "Don't look now, but there is a school bus directly in our path!";
dp_threat_danger_title[0][0][2] = "Sundae, yummy sundae";
dp_threat_danger_text[0][0][2] = "That super deluxe ultra fudge sundae you had for lunch is not sitting well in your stomach.";
dp_threat_danger_title[0][0][3] = "Love is in the air";
dp_threat_danger_text[0][0][3] = "Something about your scent is driving this ape wild.  With lust or rage?  It is hard to tell really.";
dp_threat_danger_title[0][0][4] = "Form 1024-A-R1 Part B";
dp_threat_danger_text[0][0][4] = "You can't remember if you have done your taxes yet this year.";
dp_threat_danger_title[0][0][5] = "Fire bad";
dp_threat_danger_text[0][0][5] = "The car starts on fire. Apes are afriad of fire, this is good.  So are you, this is bad.";
dp_threat_danger_title[0][0][6] = "Is this car under warranty?";
dp_threat_danger_text[0][0][6] = "The DR-5000 series air cars always had finiky left thrusters.  What is that noise you hear coming from the port side?";
dp_threat_danger_title[0][0][7] = "Singin' and fightin' in the rain...";
dp_threat_danger_text[0][0][7] = "It starts to rain, and you without an umbrella.  Or perhaps more critically, slip resistant footwear.";
dp_threat_danger_title[0][0][8] = "Mantra";
dp_threat_danger_text[0][0][8] = "Fear is the mind killer, I will let it pass through me.  How does the rest of that go?";

dp_threat_maxHP[0][0] = 3
dp_threat_HP[0][0] = 3
dp_threat_image[0][0] = "gorilla.png";
dp_threat_name[0][1] = "Crimson Ape"
dp_threat_description[0][1] = "A Giant Crimson Ape dangling a citizen from an nearby flying car!"
dp_threat_maxHP[0][1] = 3
dp_threat_HP[0][1] = 3;
dp_threat_image[0][1] = "gorilla.png";
dp_threat_name[0][2] = "Crimson Ape"
dp_threat_description[0][2] = "A Giant Crimson Ape about to eat a little baby!!!"
dp_threat_maxHP[0][2] = 3
dp_threat_HP[0][2] = 3;
dp_threat_image[0][2] = "gorilla.png";

spriteup = 0
dp_threat_found = 0
dp_threat_up = 0 
dp_player_found = 0
dp_player_selected = -1
dp_threat_selected = -1
dp_role_selected = -1
dp_player_selected_sprite = 0
dp_threat_selected_sprite = 0
dp_role_selected_sprite = 0

var dp_first_name = new Array();
var dp_last_name = new Array();
var dp_style = new Array();
var dp_role = new Array();
var dp_dice =  new Array();
var dp_ability = new Array();
for (x=0; x<10; x++)
{
  dp_dice[x] = new Array();
	dp_ability[x] = new Array();
}
var dp_danger_meter = new Array();
var dp_power_token = new Array();
var dp_player_sprite = new Array();
var dp_role_ability_used = new Array();
var dp_style_ability_used = new Array();
for (x=0; x<10; x++)
{
  dp_role_ability_used[x] = new Array();
  dp_style_ability_used[x] = new Array();
}
var dp_danger_used = new Array();
var dp_style_ability_used = new Array();
var dp_role_ability_used = new Array();
dp_number_of_players = 10

dp_select_mode = "role"
dp_gobox = 0
var dp_dicepool = new Array();
var dp_dicepool_result = new Array();
dp_number_of_dangers = 2
var dp_ability_dice_value = new Array();
dp_ability_dice_value[0] = 12
dp_ability_dice_value[1] = 10
dp_ability_dice_value[2] = 8

var dp_danger_sprite = new Array();
var dp_style_ability_sprite = new Array();
var dp_role_ability_sprite = new Array();
var dp_role_sprite = new Array();
var dp_base_style = new Array();
var dp_base_role = new Array();
dp_base_style[0] = "Alien"
dp_base_style[1] = "Atomic"
dp_base_style[2] = "Ghost"
dp_base_style[3] = "Intrepid"
dp_base_style[4] = "Mystic"
dp_base_style[5] = "Psychic"
dp_base_style[6] = "Robot"
dp_base_style[7] = "Two-Fisted"

dp_base_role[0] = "Agent"
dp_base_role[1] = "Commando"
dp_base_role[2] = "Daredevil"
dp_base_role[3] = "Detective"
dp_base_role[4] = "Explorer"
dp_base_role[5] = "Flyboy"
dp_base_role[6] = "Warrior"
dp_base_role[7] = "Professor"

var dp_base_style_ability_name = new Array();
for (x=0; x<8; x++)
{
  dp_base_style_ability_name[x] = new Array();
}
dp_number_of_style_abilities = 3
//alien
dp_base_style_ability_name[0][0] = "Alien Training"
dp_base_style_ability_name[0][1] = "Alien Psysiology"
dp_base_style_ability_name[0][2] = "Secrets of My Homeworld"
dp_base_style_ability_name[0][3] = "Alien Allies"
//atomic
dp_base_style_ability_name[1][0] = "Atomic Strength"
dp_base_style_ability_name[1][1] = "Atomic Speed"
dp_base_style_ability_name[1][2] = "Atomic Beams"
dp_base_style_ability_name[1][3] = "Z-Ray Vision"
//ghost
dp_base_style_ability_name[2][0] = "Spectral Aura"
dp_base_style_ability_name[2][1] = "Poltergeist"
dp_base_style_ability_name[2][2] = "From Beyond"
dp_base_style_ability_name[2][3] = "There's a Reason I'm Still Here"
//intrepid
dp_base_style_ability_name[3][0] = "Don't Know When To Quit"
dp_base_style_ability_name[3][1] = "Right Place, Right Time"
dp_base_style_ability_name[3][2] = "Look Out!"
dp_base_style_ability_name[3][3] = "Lucky Break"
//mystic
dp_base_style_ability_name[4][0] = "The Black Mists of Malakar"
dp_base_style_ability_name[4][1] = "Eldritch Energy"
dp_base_style_ability_name[4][2] = "Secrets Man Was Not Meant to Know"
dp_base_style_ability_name[4][3] = "Dark Bargain"
//psychic
dp_base_style_ability_name[5][0] = "Psychic Aura"
dp_base_style_ability_name[5][1] = "Psychic Energy"
dp_base_style_ability_name[5][2] = "I Knew This Would Happen!"
dp_base_style_ability_name[5][3] = "Psychometry"
//robot
dp_base_style_ability_name[6][0] = "Robotic Strength"
dp_base_style_ability_name[6][1] = "Precision Sensors"
dp_base_style_ability_name[6][2] = "Energy Transfer"
dp_base_style_ability_name[6][3] = "Electro-Net Interface"
//two-fisted
dp_base_style_ability_name[7][0] = "Brawler"
dp_base_style_ability_name[7][1] = "Improvised Weapons"
dp_base_style_ability_name[7][2] = "Tough As Nails"
dp_base_style_ability_name[7][3] = "Suprise Move"


var dp_base_role_ability_name = new Array();
for (x=0; x<8; x++)
{
  dp_base_role_ability_name[x] = new Array();
}
var dp_base_role_ability_text = new Array();
for (x=0; x<8; x++)
{
  dp_base_role_ability_text[x] = new Array();
}

dp_number_of_role_abilities = 8
//agent
dp_base_role_ability_name[0][0] = "Micro Gadgets"
dp_base_role_ability_text[0][0] = "Small, micro even, in size. But huge in utility.";
dp_base_role_ability_name[0][1] = "Hologram Projector"
dp_base_role_ability_text[0][1] = "Now you see me, well maybe you don't...";
dp_base_role_ability_name[0][2] = "Disguise Kit"
dp_base_role_ability_text[0][2] = "I am not who you think I am.";
dp_base_role_ability_name[0][3] = "Spy Drone"
dp_base_role_ability_text[0][3] = "I spy with my little eye in the sky.";
dp_base_role_ability_name[0][4] = "Rocketpack"
dp_base_role_ability_text[0][4] = "Crude and loud, but sometimes that is exactly what you need.";
dp_base_role_ability_name[0][5] = "Goggles & Gas Mask"
dp_base_role_ability_text[0][5] = "Must see!  Must see!";
dp_base_role_ability_name[0][6] = "Wrist Communicator"
dp_base_role_ability_text[0][6] = "Agent to Command, Agent to Command, come in Command.";
dp_base_role_ability_name[0][7] = "Utility Belt & Med Kit"
dp_base_role_ability_text[0][7] = "What do you know, I DO have one of those.";
dp_base_role_ability_name[0][8] = "Raygun"
dp_base_role_ability_text[0][8] = "Sometimes subtlety fails.  In such instances, use raygun.";
//commando
dp_base_role_ability_name[1][0] = "Frag Grenades"
dp_base_role_ability_text[1][0] = "Big booms are good booms.";
dp_base_role_ability_name[1][1] = "Smoke Grenades"
dp_base_role_ability_text[1][1] = "Concealment is not cover, but it is better than nothing.";
dp_base_role_ability_name[1][2] = "Electro Pulse Grenades"
dp_base_role_ability_text[1][2] = "Shockingly effective little rocks.";
dp_base_role_ability_name[1][3] = "Atomic Beam Rifle w/scope"
dp_base_role_ability_text[1][3] = "For when you want to send your atomic fire from far away.";
dp_base_role_ability_name[1][4] = "Rocketpack"
dp_base_role_ability_text[1][4] = "To the skies!";
dp_base_role_ability_name[1][5] = "Goggles & Gas Mask"
dp_base_role_ability_text[1][5] = "Gas! Gas! Gas!";
dp_base_role_ability_name[1][6] = "Wrist Communicator"
dp_base_role_ability_text[1][6] = "Fire for effect!";
dp_base_role_ability_name[1][7] = "Utility Belt & Med Kit"
dp_base_role_ability_text[1][7] = "Patch me up doc.";
dp_base_role_ability_name[1][8] = "Turbo Rifle"
dp_base_role_ability_text[1][8] = "TR-73-A1 Mark 4, 4000 spike rounds, range to 1000 meters, ROF ridiculous.";
//daredevil
dp_base_role_ability_name[2][0] = "Fear Resistant Uniform"
dp_base_role_ability_name[2][1] = "Magna Grapple Line"
dp_base_role_ability_name[2][2] = "Smoke Bombs"
dp_base_role_ability_name[2][3] = "Flash Bangs"
dp_base_role_ability_name[2][4] = "Rocketpack"
dp_base_role_ability_name[2][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[2][6] = "Wrist Communicator"
dp_base_role_ability_name[2][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[2][8] = "Electro Blaster"
//detective
dp_base_role_ability_name[3][0] = "Forensic Analyzer"
dp_base_role_ability_name[3][1] = "Underworld Contacts"
dp_base_role_ability_name[3][2] = "Case File Archive"
dp_base_role_ability_name[3][3] = "Energy Handcuffs"
dp_base_role_ability_name[3][4] = "Rocketpack"
dp_base_role_ability_name[3][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[3][6] = "Wrist Communicator"
dp_base_role_ability_name[3][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[3][8] = "Raygun"
//Explorer
dp_base_role_ability_name[4][0] = "Strange Alien Artifact"
dp_base_role_ability_name[4][1] = "Survival Gear"
dp_base_role_ability_name[4][2] = "Maps, Charts and Plans"
dp_base_role_ability_name[4][3] = "Useful Trade Goods"
dp_base_role_ability_name[4][4] = "Rocketpack"
dp_base_role_ability_name[4][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[4][6] = "Wrist Communicator"
dp_base_role_ability_name[4][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[4][8] = "Electro Blaster"
//flyboy
dp_base_role_ability_name[5][0] = "Snapfly Glider"
dp_base_role_ability_name[5][1] = "Burst Pad"
dp_base_role_ability_name[5][2] = "Strato Chute"
dp_base_role_ability_name[5][3] = "Lift Movers"
dp_base_role_ability_name[5][4] = "Rocketpack"
dp_base_role_ability_name[5][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[5][6] = "Wrist Communicator"
dp_base_role_ability_name[5][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[5][8] = "Turbo-Rifle"
//warrior
dp_base_role_ability_name[6][0] = "Doomstalker"
dp_base_role_ability_name[6][1] = "Blade of My Forefathers"
dp_base_role_ability_name[6][2] = "Electro-Sheild Gauntlet"
dp_base_role_ability_name[6][3] = "Impact Gloves"
dp_base_role_ability_name[6][4] = "Rocketpack"
dp_base_role_ability_name[6][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[6][6] = "Wrist Communicator"
dp_base_role_ability_name[6][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[6][8] = "Turbo-Rifle"
//professor
dp_base_role_ability_name[7][0] = "Omniscanner"
dp_base_role_ability_name[7][1] = "Remote Control"
dp_base_role_ability_name[7][2] = "Experiment #1A73"
dp_base_role_ability_name[7][3] = "Alberstien's Formula"
dp_base_role_ability_name[7][4] = "Rocketpack"
dp_base_role_ability_name[7][5] = "Goggles & Gas Mask"
dp_base_role_ability_name[7][6] = "Wrist Communicator"
dp_base_role_ability_name[7][7] = "Utility Belt & Med Kit"
dp_base_role_ability_name[7][8] = "Raygun"



var dp_base_first_name = new Array();
var dp_base_last_name = new Array();
var dp_base_last_name_object = new Array();
var dp_base_last_name_descriptor = new Array();


dp_number_of_first_names = 49
dp_base_first_name[0]="Ace"
dp_base_first_name[1]="Adam"
dp_base_first_name[2]="Benton"
dp_base_first_name[3]="Blake"
dp_base_first_name[4]="Blitz"
dp_base_first_name[5]="Bradley"
dp_base_first_name[6]= "Buck"
dp_base_first_name[7]="Buzz"
dp_base_first_name[8]="Cody"
dp_base_first_name[9]="Crash"
dp_base_first_name[10]="Darien"
dp_base_first_name[11]="Darren"
dp_base_first_name[12]="Dash"
dp_base_first_name[13]="Dean"
dp_base_first_name[14]="Derek"
dp_base_first_name[15]="Dick"
dp_base_first_name[16]="Dirk"
dp_base_first_name[17]="Drake"
dp_base_first_name[18]="Flash"
dp_base_first_name[19]="Hawk"
dp_base_first_name[20]="Jack"
dp_base_first_name[21]="Jake"
dp_base_first_name[22]="Jay"
dp_base_first_name[23]="Kane"
dp_base_first_name[24]="Kip"
dp_base_first_name[25]="Lamont"
dp_base_first_name[26]="Lance"
dp_base_first_name[27]="Max"
dp_base_first_name[28]="Nick"
dp_base_first_name[29]="Perry"
dp_base_first_name[30]="Phoenix"
dp_base_first_name[31]="Oliver"
dp_base_first_name[32]="Remington"
dp_base_first_name[33]="Race"
dp_base_first_name[34]="Rex"
dp_base_first_name[35]="Rocky"
dp_base_first_name[36]="Roy"
dp_base_first_name[37]="Sam"
dp_base_first_name[38]="Samuel"
dp_base_first_name[39]="Sebastian"
dp_base_first_name[40]="Shayne"
dp_base_first_name[41]="Slade"
dp_base_first_name[42]="Slate"
dp_base_first_name[43]="Steve"
dp_base_first_name[44]="Tex"
dp_base_first_name[45]="Trent"
dp_base_first_name[46]="Victor"
dp_base_first_name[47]="Wolf"
dp_base_first_name[48]="Wolfe"
dp_base_first_name[49]="Chance"

dp_number_of_last_name_descriptors = 1
dp_base_last_name_descriptor[0]="Brave"
dp_base_last_name_descriptor[1]="Bronze"
dp_base_last_name_descriptor[2]="Dark"
dp_base_last_name_descriptor[3]="Dragon"
dp_base_last_name_descriptor[4]="Hard"
dp_base_last_name_descriptor[5]="Iron"
dp_base_last_name_descriptor[6]="Lone"
dp_base_last_name_descriptor[7]="Rock"
dp_base_last_name_descriptor[8]="Sharp"
dp_base_last_name_descriptor[9]="Solid"
dp_base_last_name_descriptor[10]="Strong"
dp_base_last_name_descriptor[11]="Sure"

dp_number_of_last_name_objects = 15
dp_base_last_name_object[0]="Arm"
dp_base_last_name_object[1]="Axe"
dp_base_last_name_object[2]="Blade"
dp_base_last_name_object[3]="Chest"
dp_base_last_name_object[4]="Fist"
dp_base_last_name_object[5]="Fury"
dp_base_last_name_object[6]="Hand"
dp_base_last_name_object[7]="Hammer"
dp_base_last_name_object[8]="Heart"
dp_base_last_name_object[9]="Shot"
dp_base_last_name_object[10]="Spear"
dp_base_last_name_object[11]="Star"
dp_base_last_name_object[12]="Steel"
dp_base_last_name_object[13]="Strike"
dp_base_last_name_object[14]="Sword"
dp_base_last_name_object[15]="Will"

dp_number_of_last_names = 46
dp_base_last_name[0]="Adams"
dp_base_last_name[1]="Armstrong"
dp_base_last_name[2]="Bannon"
dp_base_last_name[3]="Barrow"
dp_base_last_name[4]="Blitzer"
dp_base_last_name[5]="Bolton"
dp_base_last_name[6]="Bradford"
dp_base_last_name[7]="Cobalt"
dp_base_last_name[8]="Cranston"
dp_base_last_name[9]="Corbett"
dp_base_last_name[10]="Corrigan"
dp_base_last_name[11]="Fogg"
dp_base_last_name[12]="Fox"
dp_base_last_name[13]="Foxx"
dp_base_last_name[14]="Gordon"
dp_base_last_name[15]="Hawke"
dp_base_last_name[16]="Jackson"
dp_base_last_name[17]="Johnson"
dp_base_last_name[18]="Jones"
dp_base_last_name[19]="Justice"
dp_base_last_name[20]="King"
dp_base_last_name[21]="Knight"
dp_base_last_name[22]="March"
dp_base_last_name[23]="Mason"
dp_base_last_name[24]="Magnum"
dp_base_last_name[25]="Maxwell"
dp_base_last_name[26]="Midnight"
dp_base_last_name[27]="Monk"
dp_base_last_name[28]="Pierce"
dp_base_last_name[29]="Queen"
dp_base_last_name[30]="Quest"
dp_base_last_name[31]="Quill"
dp_base_last_name[32]="Quinn"
dp_base_last_name[33]="Ranger"
dp_base_last_name[34]="Rogers"
dp_base_last_name[35]="Savage"
dp_base_last_name[36]="Shadow"
dp_base_last_name[37]="Spade"
dp_base_last_name[38]="Steele"
dp_base_last_name[39]="Sterling"
dp_base_last_name[40]="Starr"
dp_base_last_name[41]="Storm"
dp_base_last_name[42]="Tungsten"
dp_base_last_name[43]="Swift"
dp_base_last_name[44]="Thunder"
dp_base_last_name[45]="Trask"
dp_base_last_name[46]="Wise"





//end danger patrol variables
