//File: partMenuBuy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/16/2017

/*
--Buying menu for level buttons. Scales buy timer until player buys upgrade, or object deactivates itself.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Level objects.
public var localShipLevelLocked : GameObject;
public var levelIndicatorObject : GameObject;
public var localLevelBuyPeriod : GameObject;

//Update variables.
private var maxBuyTime : int = 3; //Menu stays up for 3 seconds.
private var buyTime : float = 0.0;
private var scaleFactor : float; //For scaling buy period object.

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function Update () {
	
    localLevelBuyPeriod.SetActive(true);
    buyTime += Time.deltaTime;
    
    scaleFactor = (buyTime / 3) * 15;
    localLevelBuyPeriod.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.

    if (buyTime > maxBuyTime) {

        buyTime = 0.0;
        localLevelBuyPeriod.SetActive(false);
        gameObject.SetActive(false);
    }
}

function OnMouseDown () {

    if (name == "level2Buy")
        if (playerScript.Kascade >= 5000) {

            playerScript.Kascade -= 5000;
            playerScript.selectedLevel = 2;
            playerScript.level2Bought = 1;
        }
        else
            return; //Not enough money? Just goes back

    if (name == "level3Buy")
        if (playerScript.Kascade >= 10000) {

            playerScript.Kascade -= 10000;
            playerScript.selectedLevel = 3;
            playerScript.level3Bought = 1;
        }
        else
            return; //Not enough money? Just goes back

    levelIndicatorObject.transform.position = transform.position;
    localShipLevelLocked.SetActive(false);
    localLevelBuyPeriod.SetActive(false);
    gameObject.SetActive(false);
}