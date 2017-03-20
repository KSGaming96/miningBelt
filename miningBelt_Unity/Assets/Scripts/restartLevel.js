//File: restartLevel.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Simple restart command. Will remove when game menus are implemented.
*/

#pragma strict

function Update () { //restarts the room.
	
    if (Input.GetButton("Restart"))
    {

        Application.LoadLevel("mainLevel");
    }
}
