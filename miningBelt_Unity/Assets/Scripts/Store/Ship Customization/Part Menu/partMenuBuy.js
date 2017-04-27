//File: partMenuBuy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/17/2017

/*
--Buying buttons for part menu.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Level objects.
public var buttonIndicatorObject : GameObject;
public var localButtonObject : GameObject;
public var localBuyPeriod : GameObject;

//Update variables.
private var maxBuyTime : int = 3; //Menu stays up for 3 seconds.
private var buyTime : float = 0.0;
private var scaleFactor : float; //For scaling buy period object.

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function Update () {
	
    localBuyPeriod.SetActive(true);
    buyTime += Time.deltaTime;
    
    scaleFactor = (buyTime / 3) * 21.2;
    localBuyPeriod.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.

    if (buyTime > maxBuyTime) {

        buyTime = 0.0;
        localBuyPeriod.SetActive(false);
        gameObject.SetActive(false);
    }
}

function OnMouseDown () {

    if (name == "enginesButtonBuy" || name == "wingsButtonBuy" || name == "miscButtonBuy") {

        if (playerScript.Kascade >= 1000) {

            if (name == "enginesButtonBuy")
                localButtonObject.GetComponent(partMenuButtons).purchasedEngines = 1;
            if (name == "wingsButtonBuy")
                localButtonObject.GetComponent(partMenuButtons).purchasedWings = 1;
            if (name == "miscButtonBuy")
                localButtonObject.GetComponent(partMenuButtons).purchasedMisc = 1;

            playerScript.Kascade -= 1000;
            buttonIndicatorObject.transform.position = transform.position;
            buttonIndicatorObject.transform.position.z += .1;
            localBuyPeriod.SetActive(false);
            gameObject.SetActive(false);
        }

        else
            return;
    }
}