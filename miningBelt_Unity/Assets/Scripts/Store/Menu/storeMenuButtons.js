//File: storeMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/16/2017

/*
--Store menu button interactions.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var localButtonActiveObject : GameObject; //Set to local button's active object.
public var localMenuObject : GameObject; //Set to local button's respective menu.

//Level Button Objects.
public var localLevelBuyObject : GameObject;
public var levelIndicatorObject : GameObject;

static var buttonPressed : int = 0;

function Update () {

    if (buttonPressed != 0) {

        resetMenus();
    }
}

function OnMouseDown () {

    if (name == "weaponShopButton")
        buttonPressed = 1;
    if (name == "itemShopButton")
        buttonPressed = 2;
    if (name == "shipUpgradesButton")
        buttonPressed = 3;
    if (name == "shipCustomizationButton")
        buttonPressed = 4;

    if (name == "level1Button") { //Moves levelIndicator and changes playerScript.selectedLevel.

        playerScript.selectedLevel = 1;
        levelIndicatorObject.transform.position = transform.position;
    }

    else if (name == "level2Button") { //If this level has been bought moves levelIndicator and changes playerScript.selectedLevel. Else spawns level buy button.

        if (playerScript.level2Bought == 1) {

            playerScript.selectedLevel = 2;
            levelIndicatorObject.transform.position = transform.position;
        }
            
        else if (playerScript.level2Bought == 0)
            localLevelBuyObject.SetActive(true);
    }

    else if (name == "level3Button") { //If this level has been bought moves levelIndicator and changes playerScript.selectedLevel. Else spawns level buy button.

        if (playerScript.level3Bought == 1) {

            playerScript.selectedLevel = 3;
            levelIndicatorObject.transform.position = transform.position;
        }
            
        else if (playerScript.level3Bought == 0)
            localLevelBuyObject.SetActive(true);
    }
}

function resetMenus () { //Sets all to false and only activates the last clicked button.

    //Resets menus and reassigns on clicked button.
    if (localButtonActiveObject != null)
        localButtonActiveObject.SetActive(false); //Activates level button.
    if (localMenuObject != null)
        localMenuObject.SetActive(false);

    if (buttonPressed == 1 && name == "weaponShopButton" || buttonPressed == 2 && name == "itemShopButton"
        || buttonPressed == 3 && name == "shipUpgradesButton" || buttonPressed == 4 && name == "shipCustomizationButton") {

        localButtonActiveObject.SetActive(true);

        if (localMenuObject != null)
            localMenuObject.SetActive(true);

        yield; //Pauses before setting buttonPressed back to 0 so the other buttons can finish reseting.
        buttonPressed = 0;
    }
}