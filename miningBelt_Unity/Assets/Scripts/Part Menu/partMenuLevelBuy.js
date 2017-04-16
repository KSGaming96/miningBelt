//File: partMenuBuy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Part menu button interactions.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var level2ButtonObject : GameObject;
public var shipLevel2Red : GameObject;
public var level3ButtonObject : GameObject;
public var shipLevel3Red : GameObject;
public var levelIndicatorObject : GameObject;

public var level2GridObject : GameObject;
public var level3GridObject : GameObject;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function OnMouseExit () {
	
    gameObject.SetActive(false);
}

function OnMouseDown () {

    if (name == "level2Buy")
        if (playerScript.Kascade >= 5000) {

            playerScript.level2Bought = 1;
            levelIndicatorObject.transform.position = level2ButtonObject.transform.position;
            playerScript.Kascade -= 5000;
            level2GridObject.SetActive(true);
            shipLevel2Red.SetActive(false);
            gameObject.SetActive(false);
        }

    if (name == "level3Buy")
        if (playerScript.Kascade >= 10000) {

            playerScript.level3Bought = 1;
            levelIndicatorObject.transform.position = level3ButtonObject.transform.position;
            playerScript.Kascade -= 10000;
            level3GridObject.SetActive(true);
            shipLevel3Red.SetActive(false);
            gameObject.SetActive(false);
        }
}