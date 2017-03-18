//File: restartLevel.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/12/2017

/*
--Simple restart command. Will remove when gae menus are implemented.
*/

#pragma strict

function Update () {
	
    if (Input.GetButton("Restart"))
    {

        Application.LoadLevel("mainLevel");
    }
}
