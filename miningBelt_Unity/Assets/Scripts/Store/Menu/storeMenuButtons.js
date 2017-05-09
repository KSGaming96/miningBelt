//File: storeMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/02/2017

/*
--Store menu button interactions. Switches store tabs and changes/purchases levels.v
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Menu button objects
public var localButtonActiveObject : GameObject; //Set to local button's active object.
public var localMenuObject : GameObject; //Set to local button's respective menu.
public var partStatsIndicatorObject : GameObject; //Disables stats indicator when level is changed.

//Level button objects.
public var levelIndicatorObject : GameObject; //Changes positions when buttons are purchased or switched.
public var localLevelBuyPeriod : GameObject; //Activates when player clicks on locked ship level.
public var localLevelButtonSprite : Sprite; //Sprites used for level purchasing.
public var localLevelBuySprite : Sprite; //   ^^
public var localLevelIndicatorObject : GameObject; //Sprite and object for indicating what levels have been purchased.
public var localLevelIndicatorSprite : Sprite; //    ^^

//Variables for buyTimer.
private var levelButtonPressed : int = 0; //Only allows for buyTimer to be started once.
private var maxBuyTime : int = 3; //Menu stays up for 3 seconds.
private var buyTime : float = 0.0; //Time since buyTimer started.
private var scaleFactor : float; //For scaling buy period object.

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
        partStatsIndicatorObject.SetActive(false);
        levelIndicatorObject.transform.position = transform.position;
    }

    else if (name == "level2Button") { //If this level has been bought moves levelIndicator and changes playerScript.selectedLevel. Else spawns level buy button.

        if (playerScript.level2Bought == 1) {

            playerScript.selectedLevel = 2;
            partStatsIndicatorObject.SetActive(false);
            levelIndicatorObject.transform.position = transform.position;
        }
            
        else if (playerScript.level2Bought == 0)
            buyLevel();
    }

    else if (name == "level3Button") { //If this level has been bought moves levelIndicator and changes playerScript.selectedLevel. Else spawns level buy button.

        if (playerScript.level3Bought == 1) {

            playerScript.selectedLevel = 3;
            partStatsIndicatorObject.SetActive(false);
            levelIndicatorObject.transform.position = transform.position;
        }
            
        else if (playerScript.level3Bought == 0)
            buyLevel();
    }
}

function OnDisable () { //Resets open level buy menus when store is closed. Excludess level 1, and menu buttons because they have no buy menu.

    if (name != "level1Button" && name != "weaponShopButton" && name != "itemShopButton" && name != "shipUpgradesButton" && name != "shipCustomizationButton") {

        buyTime = 0.0;
        levelButtonPressed = 0;
        localLevelBuyPeriod.SetActive(false);
        GetComponent(SpriteRenderer).sprite = localLevelButtonSprite;
    }
}

function buyLevel () { //Activated when player hasn't bought the part category.

    if (GetComponent(SpriteRenderer).sprite == localLevelBuySprite) { //Skips on first pass. Click again to buy.
        if (name == "level2Button" && playerScript.Kascade >= 5000) {

            playerScript.level2Bought = 1;
            playerScript.selectedLevel = 2;
            playerScript.Kascade -= 5000;
            levelIndicatorObject.transform.position = transform.position;
            localLevelIndicatorObject.GetComponent(SpriteRenderer).sprite = localLevelIndicatorSprite;
            GetComponent(SpriteRenderer).sprite = localLevelButtonSprite;
            localLevelBuyPeriod.SetActive(false);
            partStatsIndicatorObject.SetActive(false);
        }
        
        if (name == "level3Button" && playerScript.Kascade >= 10000 && playerScript.level2Bought == 1) {

            playerScript.level3Bought = 1;
            playerScript.selectedLevel = 3;
            playerScript.Kascade -= 10000;
            levelIndicatorObject.transform.position = transform.position;
            localLevelIndicatorObject.GetComponent(SpriteRenderer).sprite = localLevelIndicatorSprite;
            GetComponent(SpriteRenderer).sprite = localLevelButtonSprite;
            localLevelBuyPeriod.SetActive(false);
            partStatsIndicatorObject.SetActive(false);
        }
    }

    if (levelButtonPressed == 0) { //First time pressed. Wont allow more clicking until buyTimer has finished.

        levelButtonPressed = 1;
        GetComponent(SpriteRenderer).sprite = localLevelBuySprite;
        buyTimer();
    }
}

function buyTimer() { //Sprite changes to localBuySprite. Button disappears if timer runs out, or is category is bought.

    localLevelBuyPeriod.SetActive(true);
    while (buyTime <= maxBuyTime) { //Scaling localBuyPeriod until full, then closes. Running as a co-routine.
        buyTime += Time.deltaTime;
        scaleFactor = (1 - buyTime / maxBuyTime) * 15;
        localLevelBuyPeriod.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.
        yield;
    }

    //Resets buy button. Ready to be pressed again.
    buyTime = 0.0;
    levelButtonPressed = 0;
    localLevelBuyPeriod.SetActive(false);
    GetComponent(SpriteRenderer).sprite = localLevelButtonSprite;
}

function resetMenus () { //Sets all to false and only activates the last clicked button.

    //Resets menus and reassigns on clicked button.
    if (localButtonActiveObject != null)
        localButtonActiveObject.SetActive(false); //De-activates active menu buttons.
    if (localMenuObject != null)
        localMenuObject.SetActive(false); //De-activates menu buttons.

    if (buttonPressed == 1 && name == "weaponShopButton" || buttonPressed == 2 && name == "itemShopButton"
        || buttonPressed == 3 && name == "shipUpgradesButton" || buttonPressed == 4 && name == "shipCustomizationButton") {

        localButtonActiveObject.SetActive(true);

        if (localMenuObject != null)
            localMenuObject.SetActive(true);

        yield; //Pauses before setting buttonPressed back to 0 so the other buttons can finish reseting.
        buttonPressed = 0;
    }
}