//File: storeMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/16/2017

/*
--Attaches to customizationBorder. Controls what grids are displayed. Will be used for ship editing here shortly.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var level2GridObject : GameObject;
public var level3GridObject : GameObject;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function Update () {
	
    if (playerScript.level2Bought == 1) {

        level2GridObject.SetActive(true);
    }

    else {

        level2GridObject.SetActive(false);
    }


    if (playerScript.level3Bought == 1) {

        level3GridObject.SetActive(true);
    }

    else {

        level3GridObject.SetActive(false);
    }
}
