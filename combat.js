function resetDice()
{
  for (x=0; x<=20; x++)
	{
	  dp_current_dice_pool[x] = 0;
		dp_current_dice_result[x] = 0;
		
	  tvar = "die" + x;
	  document.getElementById(tvar).style.display = "none";		
	}
}

function updateDice()
{
  for (x=0; x<=20; x++)
	{
	  if (dp_current_dice_pool[x] > 0)
		{
		  tvar = "die" + x; 
		  dvar = "images\\d" + dp_current_dice_pool[x] + ".png";
			//alert(dvar);
			document.getElementById(tvar).src = dvar;
			pvar = x * 50 + 160;
			pvar = pvar + "px";
			document.getElementById(tvar).style.left = pvar;
			document.getElementById(tvar).style.top = "5px";
			document.getElementById(tvar).style.display = "block";
		}
		else
		  {
			  tvar = "die" + x; 
			  document.getElementById(tvar).style.display = "none";
			}
	}
	//alert(dp_current_dice_pool);
}


/*
choice path is as follows:
player clicks on a div that has a challege in it
dangerDivClick(x)
selectCharacter()
selectTrait()
confirmTrait()
updateDice()
selectTrait()
on Next -> setTrait()
selectItems()
setItem() <- back to selectItems()
on Next ->
*/

function dangerDivClick(divclicked)
{
  //alert(divclicked);
	
	dp_trait_selected = -1;
	dp_challenge_up = divclicked;
	tvar = "dangerdiv" + divclicked;
	dvar = parseInt(document.getElementById(tvar).style.left);
	//alert(dvar);
	wvar = parseInt(document.getElementById(tvar).style.width);
	//alert(wvar);
	dvar = dvar + wvar;
	thold = dvar;
	dvar = dvar + "px";
	
	hvar = "";
	
	dp_challenge_text = "";
	dp_challenge_text = dp_challenge_text + "<font style='color:red; font-size:28pt;'>";
	dp_challenge_text = dp_challenge_text + dp_threat_name[dp_threat_up][divclicked];
	dp_challenge_text = dp_challenge_text + "</font>";
	dp_challenge_text = dp_challenge_text + "<span id='threathpdiv'>";
	dp_challenge_text = dp_challenge_text + "<font style='color:black; font-size:18pt;'>";
	dp_challenge_text = dp_challenge_text + " (" + dp_threat_HP[dp_threat_up][divclicked] + "/" + dp_threat_maxHP[dp_threat_up][divclicked] +")";
	dp_challenge_text = dp_challenge_text + "</font>";
  dp_challenge_text = dp_challenge_text + "</span>";	
	
	dp_challenge_text = dp_challenge_text + "<BR>";
	dp_challenge_text = dp_challenge_text + dp_threat_description[dp_threat_up][divclicked];
	
	hvar = hvar + dp_challenge_text;
	
	document.getElementById("dangerlabeldiv").style.left = dvar;
	//dvar = document.getElementById(tvar).style.top;
	dvar = 50;
	document.getElementById("dangerlabeldiv").style.top = dvar;  

	hvar = hvar + "<BR>";
  hvar = hvar + "Select the hero that will face this challenge!";
	
	for (x=0; x<=2; x++)
	{
	  dp_hero_text[x] = "";
	  dp_hero_text[x] = dp_hero_text[x] + "<div id='advdiv' onclick=selectCharacter("+x+")>";
		dp_hero_text[x] = dp_hero_text[x] + "<font style='color:darkblue; font-size:18pt;'>";
		dp_hero_text[x] = dp_hero_text[x] + dp_first_name[x] + " " + dp_last_name[x];
		dp_hero_text[x] = dp_hero_text[x] + "</font>";
		dp_hero_text[x] = dp_hero_text[x] + ", ";
		dp_hero_text[x] = dp_hero_text[x] + "<font style='color:olive; font-size:12pt;'>";
		dp_hero_text[x] = dp_hero_text[x] + dp_base_style[dp_style[x]] + " " + dp_base_role[dp_role[x]];
		dp_hero_text[x] = dp_hero_text[x] + "</font>";
		dp_hero_text[x] = dp_hero_text[x] + "</div>";
		//alert(dp_hero_text[x]);
	}
	
	for (x=0; x<=2; x++)
	{
	  hvar = hvar + dp_hero_text[x];
	}
	
	document.getElementById("dangerlabeldiv").innerHTML = hvar;
	
	document.getElementById("dangerlabeldiv").style.display = "block";
}

function selectCharacter(charup)
{
  dp_character_up = charup;
	selectTrait();
}


function selectTrait()
{
	hvar = "";

  hvar = hvar + dp_challenge_text;
	
	hvar = hvar + dp_hero_text[dp_character_up];	
	
	hvar = hvar + "<BR>";
  hvar = hvar + "Select a trait to use for this challenge!";
	for (x=0; x<=7; x++)
	{
	  hvar = hvar + "<div id='advdiv' onclick=confirmTrait("+x+")>";
		hvar = hvar + "<font style='color:darkblue; font-size:12pt;'>";
		hvar = hvar + "d" + dp_dice[dp_character_up][x] + ", " + dp_base_role[x];
		hvar = hvar + "</font>";
		hvar = hvar + "</div>";
	}
	
	if (dp_trait_selected >= 0)
	{
	  hvar = hvar + "<font style='font-size:14pt;'>";
	  hvar = hvar + dp_threat_trait_text[dp_threat_up][dp_challenge_up][dp_trait_selected];
		hvar = hvar + "</font>";
	}
	
	hvar = hvar + "<table style='width:100%; border-style:solid; border-width:0px;'>";
	hvar = hvar + "<tr>";
	hvar = hvar + "<td>";
	hvar = hvar + "<a href='javascript:dangerDivClick("+dp_challenge_up+")'>Back</a>";
	hvar = hvar + "</td>";	
	hvar = hvar + "<td style='text-align:right;'>";
	hvar = hvar + "<a href='javascript:setTrait()'>Next</a>";
	hvar = hvar + "</td>";
	
	hvar = hvar + "</tr>";
	hvar = hvar + "</table>"
	
	document.getElementById("dangerlabeldiv").innerHTML = hvar;
}

function confirmTrait(tselected)
{
  dp_trait_selected = tselected;
	//set dice for trait selected
	dp_current_dice_pool[0] = dp_dice[dp_character_up][dp_trait_selected];
	updateDice();
	//alert(dp_trait_selected);
	selectTrait();	
}



function setTrait()
{
  for (x=0; x<=8; x++)
	{
	  itemused[x] = -1;
	}
	totalitemsused = 0;
  selectItems();
}


function selectItems()
{
	hvar = "";

  hvar = hvar + dp_challenge_text;
	
	hvar = hvar + dp_hero_text[dp_character_up];	
	
	hvar = hvar + "<BR>";
  hvar = hvar + "Would you like to use up to three items?";
	for (x=0; x<=8; x++)
	{
	  hvar = hvar + "<div id='advdiv' onclick=setItem("+x+")>";
		if (itemused[x] > -1)
		{
		  hvar = hvar + "<img src='images\\check.png'>";
		}
		hvar = hvar + "<font style='color:darkblue; font-size:12pt;'>";
		hvar = hvar + dp_base_role_ability_name[dp_role[dp_character_up]][x];		
		hvar = hvar + "</font>";
		//alert(itemused[x]);
		if (itemused[x] > -1)
		{
		  hvar = hvar + "<BR>";
			//hvar = hvar + "<table style='width:100%'><tr><td>zzz</td><td>";
		  hvar = hvar + "<font style='color:red; font-size:10pt;'>";
		  hvar = hvar + dp_base_role_ability_text[dp_role[dp_character_up]][x];					
		  hvar = hvar + "</font>"; 
			//hvar = hvar = "</td></tr></table>";
		}
		hvar = hvar + "</div>";
	}
	
	
	hvar = hvar + "<table style='width:100%; border-style:solid; border-width:0px;'>";
	hvar = hvar + "<tr>";
	hvar = hvar + "<td>";
	hvar = hvar + "<a href='javascript:backToSelectTrait()'>Back</a>";
	hvar = hvar + "</td>";	
	hvar = hvar + "<td style='text-align:right;'>";
	hvar = hvar + "<a href='javascript:initDangers()'>Next</a>";
	hvar = hvar + "</td>";
	
	hvar = hvar + "</tr>";
	hvar = hvar + "</table>"
	
	document.getElementById("dangerlabeldiv").innerHTML = hvar;  
}

function setItem(iup)
{
		  if (itemused[iup] == -1)
			{
			  if (totalitemsused < 3)
				{
		      totalitemsused = totalitemsused + 1;
			    itemused[iup] = 1;
				}
				else
				  {
					  alert("too many items");
					}
			}
			else
			  {
				  totalitemsused = totalitemsused - 1;
					itemused[iup] = -1;
				}

	if (totalitemsused == 0)
	{
	  dp_current_dice_pool[1] = 0;
		dp_current_dice_pool[2] = 0;
		dp_current_dice_pool[3] = 0;
	}
	if (totalitemsused == 1)
	{
	  dp_current_dice_pool[1] = 10;
		dp_current_dice_pool[2] = 0;
		dp_current_dice_pool[3] = 0;	
	}
	if (totalitemsused == 2)
	{
	  dp_current_dice_pool[1] = 10;
		dp_current_dice_pool[2] = 8;
		dp_current_dice_pool[3] = 0;		
	}
	if (totalitemsused == 3)
	{
	  dp_current_dice_pool[1] = 10;
		dp_current_dice_pool[2] = 8;
		dp_current_dice_pool[3] = 6;		
	}
	updateDice();
	selectItems();
}

function backToSelectTrait()
{
  dp_current_dice_pool[1] = 0;
	dp_current_dice_pool[2] = 0;
	dp_current_dice_pool[3] = 0;
	updateDice();
	selectTrait();
}

function initDangers()
{
  for (x=0; x<=8; x++)
	{
	  dangerused[x] = -1;
	}
	totaldangersused = 0;
	selectDangers();
}

function selectDangers()
{
	hvar = "";

  hvar = hvar + dp_challenge_text;
	
	hvar = hvar + dp_hero_text[dp_character_up];	
	
	hvar = hvar + "<BR>";
  hvar = hvar + "How much danger would you like to add?<BR>Select 0-3 dangers to add danger dice.";
	for (x=0; x<=8; x++)
	{
	  hvar = hvar + "<div id='advdiv' onclick=setDanger("+x+")>";
		if (dangerused[x] > -1)
		{
		  hvar = hvar + "<img src='images\\check.png'>";
		}
		hvar = hvar + "<font style='color:darkblue; font-size:12pt;'>";
		hvar = hvar + dp_threat_danger_title[dp_threat_up][dp_challenge_up][x];		
		hvar = hvar + "</font>";
		if (dangerused[x] > -1)
		{
		  hvar = hvar + "<BR>";
			//hvar = hvar + "<table style='width:100%'><tr><td>zzz</td><td>";
		  hvar = hvar + "<font style='color:red; font-size:10pt;'>";
		  hvar = hvar + dp_threat_danger_text[dp_threat_up][dp_challenge_up][x];					
		  hvar = hvar + "</font>"; 
			//hvar = hvar = "</td></tr></table>";
		}
		
		hvar = hvar + "</div>";
	}
	
	
	hvar = hvar + "<table style='width:100%; border-style:solid; border-width:0px;'>";
	hvar = hvar + "<tr>";
	hvar = hvar + "<td>";
	hvar = hvar + "<a href='javascript:backToSelectItems()'>Back</a>";
	hvar = hvar + "</td>";	
	hvar = hvar + "<td style='text-align:right;'>";
	hvar = hvar + "<a href='javascript:rollDice()'>Roll Dice</a>";
	hvar = hvar + "</td>";
	
	hvar = hvar + "</tr>";
	hvar = hvar + "</table>"
	
	document.getElementById("dangerlabeldiv").innerHTML = hvar;  
}

function setDanger(dup)
{
  //alert(dangerused);
  if (dangerused[dup] == -1)
  {
	  //alert('test');
    if (totaldangersused < 3)
    {
      totaldangersused = totaldangersused + 1;
      dangerused[dup] = 1;
		}
		else
		  {
			alert("too many dangers");
			}
	}	
	else
	  {
		  totaldangersused = totaldangersused - 1;
			dangerused[dup] = -1;
		}


	for (x=0; x<=2; x++)
	{
	  tvar = totalitemsused + 1 + x;
	  dp_current_dice_pool[tvar] = 0;
	}
	for (x=0; x<totaldangersused; x++)
	{
    tvar = totalitemsused + 1 + x;
	  dp_current_dice_pool[tvar] = 6;
	}
	//alert(totaldangersused);
	//alert(totalitemsused);
	updateDice();
	selectDangers();
}

function backToSelectItems()
{
	for (x=0; x<=2; x++)
	{
	  tvar = totalitemsused + 1 + x;
	  dp_current_dice_pool[tvar] = 0;
	}
	updateDice();
	selectItems();
}

function rollDice()
{
  numberofdice = 0;
  for (x=0; x<20; x++)
	{
	  if (dp_current_dice_pool[x] > 0)
		{
		  numberofdice = numberofdice + 1;
		}
	}
	
	for (x=0; x<numberofdice; x++)
	{
	  dicedirx[x] = (Math.floor(Math.random()*10) - 5) * 2;
		dicediry[x] = (Math.floor(Math.random()*10) - 5) * 2;
		tvar = "die" + x;	
		dicex[x] = parseInt(document.getElementById(tvar).style.left);
		dicey[x] = parseInt(document.getElementById(tvar).style.top);	
	}
	movecount = 0;
	
	diceinterval = setInterval("moveDice()",2);

}

function moveDice()
{
	  for (x=0; x<numberofdice; x++)
		{
	    dicex[x] = dicex[x] + dicedirx[x];
			if (dicex[x] < 0)
			{
			  dicex[x] = 0;
				dicedirx[x] = dicedirx[x] * -1;
			}
			if (dicex[x] > 1024)
			{
			  dicex[x] = 1024;
				dicedirx[x] = dicedirx[x] * -1;
			}
		  dicey[x] = dicey[x] + dicediry[x];
			if (dicey[x] < 0)
			{
			  dicey[x] = 0;
				dicediry[x] = dicediry[x] * -1;
			}
			if (dicey[x] > 768)
			{
			  dicey[x] = 768;
				dicediry[x] = dicediry[x] * -1;
			}
		  dx = dicex[x] + "px";
		  dy = dicey[x] + "px";
		  tvar = "die" + x;
		  document.getElementById(tvar).style.left = dx;
		  document.getElementById(tvar).style.top = dy;
		}
		movecount = movecount + 1;
		if (movecount > 150)
		{
		  clearInterval(diceinterval);
			showResults();
		}
}


function showResults()
{
	hvar = "";

	
	
  hvar = hvar + dp_challenge_text;
	
	hvar = hvar + dp_hero_text[dp_character_up];	
	hvar = hvar + "1-3: Danger!, 4+ Success!<BR><BR>";
	successcount = 0;
	failurecount = 0;
  for (x=0; x<numberofdice; x++)
	{
	  dp_current_dice_result[x] = Math.floor(Math.random()*dp_current_dice_pool[x]) + 1;
		hvar = hvar + "d" + dp_current_dice_pool[x] + ": ";
		if (dp_current_dice_result[x] >= 4)
		{
		  hvar = hvar + "<font style='color:green; font-size:16pt;'>";
			successcount = successcount + 1;
		}
		else
		  {
			  hvar = hvar + "<font style='color:red; font-size:16pt;'>";
				failurecount = failurecount + 1;
			}
			
		hvar = hvar + dp_current_dice_result[x];
		hvar = hvar + "</font>";

		if (x == 0)
		{
		  //this is the trait die roll result
			if (dp_current_dice_result[x] >= 4)
			{
			  hvar = hvar + " - " + dp_threat_trait_text_success[dp_threat_up][dp_challenge_up][x];
			}
			else
			  {
				  hvar = hvar + " - " + dp_threat_trait_text_failure[dp_threat_up][dp_challenge_up][x];
				}
			
		}
		
		hvar = hvar + "<BR>";
	}
	hvar = hvar + "<BR>";
	hvar = hvar + "Sucesses: <font style='color:green;'>" + successcount + "</font><BR>";
	hvar = hvar + "Failures: <font style='color:red;'>" + failurecount + "</font><BR>";
	
	dp_threat_HP[dp_threat_up][dp_challenge_up] = 	dp_threat_HP[dp_threat_up][dp_challenge_up] - successcount;
	if (dp_threat_HP[dp_threat_up][dp_challenge_up] <= 0)
	{
	  hvar = hvar + "You have successfully overcome this challenge!<BR>";
	}
	else
	  { 
		  hvar = hvar + "You have achieved "+successcount+" successes against this challnge, you need "+dp_threat_HP[dp_threat_up][dp_challenge_up]+" more to overcome it.<BR>";
		} 
		
	nvar = "";
	nvar = nvar + "<font style='color:black; font-size:18pt;'>";
	nvar = nvar + " (zzz" + dp_threat_HP[dp_threat_up][dp_challenge_up] + "/" + dp_threat_maxHP[dp_threat_up][dp_challenge_up] +")";
	nvar = nvar + "</font>";
	alert(nvar);
	document.getElementById("threathpdiv").style.innerHTML = nvar;

		
	hvar = hvar + "<table style='width:100%; border-style:solid; border-width:0px;'>";
	hvar = hvar + "<tr>";
	hvar = hvar + "<td>";
	//hvar = hvar + "<a href='javascript:backToSelectItems()'>Back</a>";
	hvar = hvar + "</td>";	
	hvar = hvar + "<td style='text-align:right;'>";
	hvar = hvar + "<a href='javascript:rollDice()'>Next</a>";
	hvar = hvar + "</td>";
	
	hvar = hvar + "</tr>";
	hvar = hvar + "</table>"
	
	document.getElementById("dangerlabeldiv").innerHTML = hvar;  
}

