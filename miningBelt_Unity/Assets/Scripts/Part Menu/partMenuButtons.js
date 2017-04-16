//File: partMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Part menu button interactions.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Button Objects. Used for indicator movement, tab switching, and level selection.
public var bodiesButtonObject : GameObject;
public var wingsButtonObject : GameObject;
public var enginesButtonObject : GameObject;
public var miscButtonObject : GameObject;
public var level1ButtonObject : GameObject;
public var level2ButtonObject : GameObject;
public var level3ButtonObject : GameObject;

public var bodiesLevel1Object : GameObject;
public var bodiesLevel2Object : GameObject;
public var bodiesLevel3Object : GameObject;
public var enginesLevel1Object : GameObject;
public var enginesLevel2Object : GameObject;
public var enginesLevel3Object : GameObject;
public var wingsLevel1Object : GameObject;
public var wingsLevel2Object : GameObject;
public var wingsLevel3Object : GameObject;

public var level2BuyObject : GameObject;
public var level3BuyObject : GameObject;

public var buttonIndicatorObject : GameObject;
public var levelIndicatorObject : GameObject;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function Update () {

    //Reads indicator positions and displays correct menu accordingly.

    if (buttonIndicatorObject.transform.position == bodiesButtonObject.transform.position) { //Body button pressed.

        //Close all other tabs.
        enginesLevel1Object.SetActive(false);
        enginesLevel2Object.SetActive(false);
        enginesLevel3Object.SetActive(false);
        wingsLevel1Object.SetActive(false);
        wingsLevel2Object.SetActive(false);
        wingsLevel3Object.SetActive(false);

        if (levelIndicatorObject.transform.position == level1ButtonObject.transform.position) {

            bodiesLevel1Object.SetActive(true);
            bodiesLevel2Object.SetActive(false);
            bodiesLevel3Object.SetActive(false);
        }
        
        if (levelIndicatorObject.transform.position == level2ButtonObject.transform.position) {

            bodiesLevel1Object.SetActive(false);
            bodiesLevel2Object.SetActive(true);
            bodiesLevel3Object.SetActive(false);
        }

        if (levelIndicatorObject.transform.position == level3ButtonObject.transform.position) {

            bodiesLevel1Object.SetActive(false);
            bodiesLevel2Object.SetActive(false);
            bodiesLevel3Object.SetActive(true);
        }
    }

    if (buttonIndicatorObject.transform.position == enginesButtonObject.transform.position) { //Engine button pressed.

        //Close all other tabs.
        bodiesLevel1Object.SetActive(false);
        bodiesLevel2Object.SetActive(false);
        bodiesLevel3Object.SetActive(false);
        wingsLevel1Object.SetActive(false);
        wingsLevel2Object.SetActive(false);
        wingsLevel3Object.SetActive(false);

        if (levelIndicatorObject.transform.position == level1ButtonObject.transform.position) {

            enginesLevel1Object.SetActive(true);
            enginesLevel2Object.SetActive(false);
            enginesLevel3Object.SetActive(false);
        }
        
        if (levelIndicatorObject.transform.position == level2ButtonObject.transform.position) {

            enginesLevel1Object.SetActive(false);
            enginesLevel2Object.SetActive(true);
            enginesLevel3Object.SetActive(false);
        }

        if (levelIndicatorObject.transform.position == level3ButtonObject.transform.position) {

            enginesLevel1Object.SetActive(false);
            enginesLevel2Object.SetActive(false);
            enginesLevel3Object.SetActive(true);
        }
    }

    if (buttonIndicatorObject.transform.position == wingsButtonObject.transform.position) { //Wing button pressed.

        //Close all other tabs.
        enginesLevel1Object.SetActive(false);
        enginesLevel2Object.SetActive(false);
        enginesLevel3Object.SetActive(false);
        bodiesLevel1Object.SetActive(false);
        bodiesLevel2Object.SetActive(false);
        bodiesLevel3Object.SetActive(false);

        if (levelIndicatorObject.transform.position == level1ButtonObject.transform.position) {

            wingsLevel1Object.SetActive(true);
            wingsLevel2Object.SetActive(false);
            wingsLevel3Object.SetActive(false);
        }
        
        if (levelIndicatorObject.transform.position == level2ButtonObject.transform.position) {

            wingsLevel1Object.SetActive(false);
            wingsLevel2Object.SetActive(true);
            wingsLevel3Object.SetActive(false);
        }

        if (levelIndicatorObject.transform.position == level3ButtonObject.transform.position) {

            wingsLevel1Object.SetActive(false);
            wingsLevel2Object.SetActive(false);
            wingsLevel3Object.SetActive(true);
        }
    }
}

function OnMouseDown () {

    if (name == "bodiesButton" || name == "wingsButton" || name == "enginesButton" || name == "miscButton") { //Places buttonIndicator on pressed part button.

        buttonIndicatorObject.transform.position = transform.position;
    }

    else if (name == "level1Button") { //Places levelIndicator on pressed level button.

        levelIndicatorObject.transform.position = transform.position;
    }

    else if (name == "level2Button") {

        if (playerScript.level2Bought == 1)
            levelIndicatorObject.transform.position = transform.position;
        else if (playerScript.level2Bought == 0)
            level2BuyObject.SetActive(true);
    }
    else if (name == "level3Button") {

        if (playerScript.level3Bought == 1)
            levelIndicatorObject.transform.position = transform.position;
        else if (playerScript.level3Bought == 0)
            level3BuyObject.SetActive(true);
    }
}