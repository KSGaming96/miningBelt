//File: MenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Menu button interactions.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var largeMenuObject : GameObject;
public var storeObject : GameObject;
public var closeStoreButtonObject : GameObject;
public var developerMenuIndicator : GameObject;

public var shipPartsParent : GameObject;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function OnMouseDown() {

    if (name == "restartButton") {

        shipPartsParent.SetActive(true);
        SceneManagement.SceneManager.LoadScene(0);
    }

    if (name == "menuButton") {

        if (largeMenuObject.activeSelf == false) {

            largeMenuObject.SetActive(true);
            storeObject.SetActive(false);
            closeStoreButtonObject.SetActive(false);
        }
        
        else if (largeMenuObject.activeSelf == true)
            largeMenuObject.SetActive(false);
    }

    if (name == "closeMenuButton")
        largeMenuObject.SetActive(false);

    if (name == "developerMenuButton") { //Gives player money and removed persistance.

        playerScript.Kascade += 150000;
        playerScript.persistance = 0;
        developerMenuIndicator.SetActive(true);
    }

    if (name == "developerMenuIndicator") { //Sets money back to 0 and enables persistance.

        playerScript.Kascade = 0;
        playerScript.persistance = 1;
        developerMenuIndicator.SetActive(false);
    }
}
