//File: developerTraits.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Controls persistance with the developer button. Attached to player.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var level2GridObject : GameObject;
public var shipLevel2Red : GameObject;
public var level3GridObject : GameObject;
public var shipLevel3Red : GameObject;

public var developerMenuIndicator : GameObject;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);

    if (playerScript.level2Bought == 1) {

        level2GridObject.SetActive(true);
        shipLevel2Red.SetActive(false);
    }
        
    if (playerScript.level3Bought == 1) {

        level3GridObject.SetActive(true);
        shipLevel3Red.SetActive(false);
    }

    if (developerMenuIndicator.activeSelf == false)
        if (playerScript.persistance == 0)
            developerMenuIndicator.SetActive(true);
}