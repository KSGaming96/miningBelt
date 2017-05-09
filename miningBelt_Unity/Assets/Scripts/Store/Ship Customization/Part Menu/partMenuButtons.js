//File: partMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/02/2017

/*
--Part menu button interactions. Attached to store tabs.
--
--Switches sprite to localButtonSprite and scales buyPeriod in buyTimer if category is locked.
--Switches tab and moves indicator if category is unlocked.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Button Objects are used for indicator movement and tab switching.
public var buttonIndicatorObject : GameObject; //Moves to selected part category button.
public var partStatsIndicatorObject : GameObject; //Closes part stats indicator when menu is selected.
public var localPartLevel1Menu : GameObject; //Set to buttons menus. IE bodiesButton assigns bodiesLevel1 etc.
public var localPartLevel2Menu : GameObject; //    ^^
public var localPartLevel3Menu : GameObject; //    ^^

public var localBuyPeriod : GameObject; //Buy period object. Scales in buyTimer.
public var localButtonSprite : Sprite; //Button Sprite.
public var localBuySprite : Sprite; //Buy button Sprite

//For part stat buttons.
public var statsIndicatorObject : GameObject; //Stats indicator object. Switches to selected part.
public var partDescriptionObject : GameObject; //Sprite shown in description tab of part properties.
public var partDescriptionSprite : Sprite; //    ^^
public var partPurchaseObject : GameObject;
public var extendedPartObject : GameObject; //Sprite shown in part view. Object and sprite.
public var extendedPartSprite : Sprite;//     ^^
public var totalPrice : int;

static var purchasedBodies : int = 1; //Global variable showing what category has been purchased.
static var purchasedWings : int = 0; //     ^^
static var purchasedEngines : int = 0; //   ^^
static var purchasedMisc : int = 0; //      ^^

private var buttonPressed : int = 0; //Only allows for buyTimer to be started once.
private var maxBuyTime : float = 3.0; //Menu stays up for 3 seconds.
private var buyTime : float = 0.0; //Time since buyTimer started.
private var scaleFactor : float; //For scaling buy period object.

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function Update () { //Resets all menus, then activates one.

    if (tag != "partStats") {

        localPartLevel1Menu.SetActive(false);
        localPartLevel2Menu.SetActive(false);
        localPartLevel3Menu.SetActive(false);

        if (buttonIndicatorObject.transform.position == transform.position) { //Reads level selection and displays correct menu accordingly.

            if (playerScript.selectedLevel == 1)
                localPartLevel1Menu.SetActive(true);
            else if (playerScript.selectedLevel == 2)
                localPartLevel2Menu.SetActive(true);
            else if (playerScript.selectedLevel == 3)
                localPartLevel3Menu.SetActive(true);
        }
    }
}

function OnMouseDown () { //Places buttonIndicator on pressed part button if player has purchased category. Opens buy button if player still needs to purchase it.

    if (name == "bodiesButton") { //Bodies is bought by default. Just opens menu.
        partStatsIndicatorObject.SetActive(false); //Closes part stats indicator when category is selected.
        buttonIndicatorObject.transform.position = transform.position;
    }

    if (name == "enginesButton") {
        if (purchasedEngines == 1) {
            partStatsIndicatorObject.SetActive(false); //Closes part stats indicator when category is selected.
            buttonIndicatorObject.transform.position = transform.position;
        }

        else if (purchasedEngines == 0)
            buyButton();
    }

    if (name == "wingsButton") {
        if (purchasedWings == 1) {
            partStatsIndicatorObject.SetActive(false); //Closes part stats indicator when category is selected.
            buttonIndicatorObject.transform.position = transform.position;
        }

        else if (purchasedWings == 0)
            buyButton();
    }

    if (name == "miscButton") {
        if (purchasedMisc == 1) {
            partStatsIndicatorObject.SetActive(false); //Closes part stats indicator when category is selected.
            buttonIndicatorObject.transform.position = transform.position;
        }
            
        else if (purchasedMisc == 0)
            buyButton();
    }

    if (tag == "partStats") { //Button interactions for all part stats.

        statsIndicatorObject.transform.position = gameObject.transform.position;
        statsIndicatorObject.gameObject.SetActive(true);
        partDescriptionObject.GetComponent(SpriteRenderer).sprite = partDescriptionSprite;
        partPurchaseObject.GetComponent(partPropertiesButtons).totalPrice = totalPrice;
        extendedPartObject.GetComponent(SpriteRenderer).sprite = extendedPartSprite;
    }
}

function OnDisable () { //Resets open buy menus when store is closed. Excludess bodies because it has no buy menu.

    if (name != "bodiesButton" && tag != "partStats") {

        buyTime = 0.0;
        buttonPressed = 0;
        localBuyPeriod.SetActive(false);
        GetComponent(SpriteRenderer).sprite = localButtonSprite;
    }
}

function buyButton () { //Activated when player hasn't bought the part category.

    if (GetComponent(SpriteRenderer).sprite == localBuySprite) { //Skips on first pass. Click again to buy.
        if (playerScript.Kascade >= 1000) {

            //Category purchased. Allowing menu switching and removes Kascades.
            if (name == "wingsButton")
                purchasedWings = 1;
            if (name == "enginesButton")
                purchasedEngines = 1;
            if (name == "miscButton")
                purchasedMisc = 1;

            playerScript.Kascade -= 1000;
            buttonIndicatorObject.transform.position = transform.position;
            partStatsIndicatorObject.SetActive(false); //Closes part stats indicator when category is purchased.
            localBuyPeriod.SetActive(false);
            GetComponent(SpriteRenderer).sprite = localButtonSprite;
        }
    }

    if (buttonPressed == 0) { //First time pressed. Wont allow more clicking until buyTimer has finished.

        buttonPressed = 1;
        GetComponent(SpriteRenderer).sprite = localBuySprite;
        buyTimer();
    }
}

function buyTimer() { //Sprite changes to localBuySprite. Button disappears if timer runs out, or is category is bought.

    localBuyPeriod.SetActive(true);
    while (buyTime <= maxBuyTime) { //Scaling localBuyPeriod until full, then closes. Running as a co-routine.
        buyTime += Time.deltaTime;
        scaleFactor = (1 - buyTime / maxBuyTime) * 21.2;
        localBuyPeriod.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.
        yield;
    }

    //Resets buy button. Ready to be pressed again.
    buyTime = 0.0;
    buttonPressed = 0;
    localBuyPeriod.SetActive(false);
    GetComponent(SpriteRenderer).sprite = localButtonSprite;
}