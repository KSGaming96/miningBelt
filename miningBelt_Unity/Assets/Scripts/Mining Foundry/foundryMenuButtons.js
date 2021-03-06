﻿//File: foundryMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/02/2017

/*
--Controls all foundry menu buttons
*/

#pragma strict

public var PlayerObject : GameObject;
public var foundryOreMenuObject : GameObject;

public var foundryGUIHolderObject : GameObject;
public var foundryOreHolderObject : GameObject;

private var playerScript : player;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function OnMouseDown () {

    if (name == "sellOreButton") { //Makes ore menu visible

        foundryOreMenuObject.transform.position = foundryGUIHolderObject.transform.position;
    }

    if (name == "oreBack") { //Hides ore menu

        foundryOreMenuObject.transform.position = foundryOreHolderObject.transform.position;
    }

    if (name == "sellAllButton") { //Decrement all ores and add Kascades

        while (playerScript.Copper > 0) {

            playerScript.Copper--;
            playerScript.Kascade += 1;
        }

        while (playerScript.Silver > 0) {

            playerScript.Silver--;
            playerScript.Kascade += 5;
        }

        while (playerScript.Gold > 0) {

            playerScript.Gold--;
            playerScript.Kascade += 10;
        }

        while (playerScript.Diamond > 0) {

            playerScript.Diamond--;
            playerScript.Kascade += 35;
        }

        while (playerScript.Uranium > 0) {

            playerScript.Uranium--;
            playerScript.Kascade += 50;
        }

        while (playerScript.Silicon > 0) {

            playerScript.Silicon--;
            playerScript.Kascade += 75;
        }

        while (playerScript.Crystal > 0) {

            playerScript.Crystal--;
            playerScript.Kascade += 100;
        }

        while (playerScript.Magnesium > 0) {

            playerScript.Magnesium--;
            playerScript.Kascade += 200;
        }

        while (playerScript.Fluorite > 0) {

            playerScript.Fluorite--;
            playerScript.Kascade += 500;
        }
    }

    if (name == "copperOneButton") { //Decrement Copper and add Kascades

        if (playerScript.Copper > 0) {

            playerScript.Copper--;
            playerScript.Kascade += 1;
        }
    }

    if (name == "silverOneButton") { //Decrement Silver and add Kascades

        if (playerScript.Silver > 0) {

            playerScript.Silver--;
            playerScript.Kascade += 5;
        }
    }

    if (name == "goldOneButton") { //Decrement Gold and add Kascades

        if (playerScript.Gold > 0) {

            playerScript.Gold--;
            playerScript.Kascade += 10;
        }
    }

    if (name == "diamondOneButton") { //Decrement Diamond and add Kascades

        if (playerScript.Diamond > 0) {

            playerScript.Diamond--;
            playerScript.Kascade += 35;
        }
    }

    if (name == "uraniumOneButton") { //Decrement Uranium and add Kascades

        if (playerScript.Uranium > 0) {

            playerScript.Uranium--;
            playerScript.Kascade += 50;
        }
    }

    if (name == "siliconOneButton") { //Decrement Silicon and add Kascades

        if (playerScript.Silicon > 0) {

            playerScript.Silicon--;
            playerScript.Kascade += 75;
        }
    }

    if (name == "crystalOneButton") { //Decrement Crystal and add Kascades

        if (playerScript.Crystal > 0) {

            playerScript.Crystal--;
            playerScript.Kascade += 100;
        }
    }

    if (name == "magnesiumOneButton") { //Decrement Magnesium and add Kascades

        if (playerScript.Magnesium > 0) {

            playerScript.Magnesium--;
            playerScript.Kascade += 200;
        }
    }

    if (name == "fluoriteOneButton") { //Decrement Fluorite and add Kascades

        if (playerScript.Fluorite > 0) {

            playerScript.Fluorite--;
            playerScript.Kascade += 500;
        }
    }
}