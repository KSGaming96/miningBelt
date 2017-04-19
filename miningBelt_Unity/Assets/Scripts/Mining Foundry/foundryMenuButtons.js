//File: foundryMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Controls all foundry menu buttons
*/

#pragma strict

public var PlayerObject : GameObject;
public var foundryOreMenuObject : GameObject;
public var storeObject : GameObject;
public var storeCloseButtonObject : GameObject;
public var largeMenuObject : GameObject;

private var playerScript : player;
static var innerCollider : int = 0;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function Update () {

    if (name == "storeCloseButton") {

        if (innerCollider == 0)
            storeCloseButtonObject.SetActive(false);
    }
}

function OnMouseDown () {

    if (name == "storeButton") { //Shows store and close button

        if (innerCollider == 1) {

            storeObject.SetActive(true);
            storeCloseButtonObject.SetActive(true);
            largeMenuObject.SetActive(false);
        }
    }

    if (name == "storeCloseButton") { //Hides store and close button

        storeObject.SetActive(false);
        storeCloseButtonObject.SetActive(false);
    }

    if (name == "sellOreButton") { //Shows ore menu

        foundryOreMenuObject.SetActive(true);
    }

    if (name == "oreBack") { //Hides ore menu

        foundryOreMenuObject.SetActive(false);
    }

    if (name == "sellAllButton") { //Decrement all ores and add Kascades

        while (playerScript.Copper > 0) {

            playerScript.Copper--;
            playerScript.heldOre--;
            playerScript.Kascade += 1;
        }

        while (playerScript.Silver > 0) {

            playerScript.Silver--;
            playerScript.heldOre--;
            playerScript.Kascade += 5;
        }

        while (playerScript.Gold > 0) {

            playerScript.Gold--;
            playerScript.heldOre--;
            playerScript.Kascade += 10;
        }

        while (playerScript.Diamond > 0) {

            playerScript.Diamond--;
            playerScript.heldOre--;
            playerScript.Kascade += 35;
        }

        while (playerScript.Uranium > 0) {

            playerScript.Uranium--;
            playerScript.heldOre--;
            playerScript.Kascade += 50;
        }

        while (playerScript.Silicon > 0) {

            playerScript.Silicon--;
            playerScript.heldOre--;
            playerScript.Kascade += 75;
        }

        while (playerScript.Crystal > 0) {

            playerScript.Crystal--;
            playerScript.heldOre--;
            playerScript.Kascade += 100;
        }

        while (playerScript.Magnesium > 0) {

            playerScript.Magnesium--;
            playerScript.heldOre--;
            playerScript.Kascade += 200;
        }

        while (playerScript.Fluorite > 0) {

            playerScript.Fluorite--;
            playerScript.heldOre--;
            playerScript.Kascade += 500;
        }
    }

    if (name == "copperOneButton") { //Decrement Copper and add Kascades

        if (playerScript.Copper > 0) {

            playerScript.Copper--;
            playerScript.heldOre--;
            playerScript.Kascade += 1;
        }
    }

    if (name == "silverOneButton") { //Decrement Silver and add Kascades

        if (playerScript.Silver > 0) {

            playerScript.Silver--;
            playerScript.heldOre--;
            playerScript.Kascade += 5;
        }
    }

    if (name == "goldOneButton") { //Decrement Gold and add Kascades

        if (playerScript.Gold > 0) {

            playerScript.Gold--;
            playerScript.heldOre--;
            playerScript.Kascade += 10;
        }
    }

    if (name == "diamondOneButton") { //Decrement Diamond and add Kascades

        if (playerScript.Diamond > 0) {

            playerScript.Diamond--;
            playerScript.heldOre--;
            playerScript.Kascade += 35;
        }
    }

    if (name == "uraniumOneButton") { //Decrement Uranium and add Kascades

        if (playerScript.Uranium > 0) {

            playerScript.Uranium--;
            playerScript.heldOre--;
            playerScript.Kascade += 50;
        }
    }

    if (name == "siliconOneButton") { //Decrement Silicon and add Kascades

        if (playerScript.Silicon > 0) {

            playerScript.Silicon--;
            playerScript.heldOre--;
            playerScript.Kascade += 75;
        }
    }

    if (name == "crystalOneButton") { //Decrement Crystal and add Kascades

        if (playerScript.Crystal > 0) {

            playerScript.Crystal--;
            playerScript.heldOre--;
            playerScript.Kascade += 100;
        }
    }

    if (name == "magnesiumOneButton") { //Decrement Magnesium and add Kascades

        if (playerScript.Magnesium > 0) {

            playerScript.Magnesium--;
            playerScript.heldOre--;
            playerScript.Kascade += 200;
        }
    }

    if (name == "fluoriteOneButton") { //Decrement Fluorite and add Kascades

        if (playerScript.Fluorite > 0) {

            playerScript.Fluorite--;
            playerScript.heldOre--;
            playerScript.Kascade += 500;
        }
    }
}