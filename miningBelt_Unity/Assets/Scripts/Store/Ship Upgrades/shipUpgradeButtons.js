//File: shipUpgradeButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/18/2017

/*
--Interactions on ship upgrade buttons. All prices and refunds are set. Objects edit respective stats.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

private var localStat : int;
private var buttonDirection : int; //0 for decrement, 1 for increment.

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);

    if (name == "healthIncrement" || name == "shieldIncrement" || name == "attackIncrement" || name == "mobilityIncrement"
        || name == "hullIncrement" || name == "speedIncrement" || name == "cargoIncrement" || name == "firerateIncrement") {
        buttonDirection = 1;
    }

    if (name == "healthDecrement" || name == "shieldDecrement" || name == "attackDecrement" || name == "mobilityDecrement"
        || name == "hullDecrement" || name == "speedDecrement" || name == "cargoDecrement" || name == "firerateDecrement") {
        buttonDirection = 0;
    }
}

function OnMouseDown () {
	
    var bought : int = 0;

    if (name == "healthIncrement" || name == "healthDecrement")
        localStat = playerScript.HealthBonus;
    if (name == "shieldIncrement" || name == "shieldDecrement")
        localStat = playerScript.ShieldBonus;
    if (name == "attackIncrement" || name == "attackDecrement")
        localStat = playerScript.AttackBonus;
    if (name == "mobilityIncrement" || name == "mobilityDecrement")
        localStat = playerScript.MobilityBonus;
    if (name == "hullIncrement" || name == "hullDecrement")
        localStat = playerScript.HullBonus;
    if (name == "speedIncrement" || name == "speedDecrement")
        localStat = playerScript.SpeedBonus;
    if (name == "cargoIncrement" || name == "cargoDecrement")
        localStat = playerScript.CargoBonus;
    if (name == "firerateIncrement" || name == "firerateDecrement")
        localStat = playerScript.FireRateBonus;

    if (buttonDirection == 1) { //Increment button pressed.
        if (localStat < 4) { //Level 1 Upgrades (4)
            if (playerScript.Kascade >= 80) {
                playerScript.Kascade -= 80;
                bought = 1;
            } 
        }

        else if (localStat >= 4 && localStat < 10) { //Level 2 Upgrades (6)
            if (playerScript.level2Bought == 1) {
                if (playerScript.Kascade >= 200) {
                    playerScript.Kascade -= 200;
                    bought = 1;
                }
            }
        }

        else if (localStat >= 10 && localStat < 20) { //Level 3 Upgrades (10)
            if (playerScript.level3Bought == 1) {
                if (playerScript.Kascade >= 500) {
                    playerScript.Kascade -= 500;
                    bought = 1;
                }
            }
        }
    }

    if (buttonDirection == 0) { //Decrement button pressed.
        if (localStat > 0 && localStat <= 4) { //Level 1 Downgrades (4)
            playerScript.Kascade += 40;
            bought = 1;
        }

        else if (localStat > 4 && localStat <= 10) { //Level 2 Downgrades (6)
            playerScript.Kascade += 100;
            bought = 1;
        }

        else if (localStat > 10 && localStat <= 20) { //Level 3 Downgrades (10)
            playerScript.Kascade += 250;
            bought = 1;
        }
    }

    if (bought == 1) { //Only changes stats if it passed the last 'if' statement cluster.

        if (name == "healthIncrement" || name == "healthDecrement") {
            if (buttonDirection == 0) {
                playerScript.HealthBonus -= 1;
                playerScript.currentHealth -= 50;
                if (playerScript.currentHealth <= 0)
                    playerScript.currentHealth = 1;
            }
                
            if (buttonDirection == 1) {
                playerScript.HealthBonus += 1;
                playerScript.currentHealth += 50;
            }
        }

        if (name == "shieldIncrement" || name == "shieldDecrement") {
            if (buttonDirection == 0) {
                playerScript.ShieldBonus -= 1;
                yield;
                playerScript.currentShield -= 1;
                if (playerScript.currentShield < 0)
                    playerScript.currentShield = 0;
            }
            
            if (buttonDirection == 1) {
                playerScript.ShieldBonus += 1;
                yield;
                playerScript.currentShield += 1;
            }
        }

        if (name == "attackIncrement" || name == "attackDecrement") {

            if (buttonDirection == 0)
                playerScript.AttackBonus -= 1;
            if (buttonDirection == 1)
                playerScript.AttackBonus += 1;
        }

        if (name == "mobilityIncrement" || name == "mobilityDecrement") {

            if (buttonDirection == 0)
                playerScript.MobilityBonus -= 1;
            if (buttonDirection == 1)
                playerScript.MobilityBonus += 1;
        }

        if (name == "hullIncrement" || name == "hullDecrement") {

            if (buttonDirection == 0) {
                playerScript.HullBonus -= 1;
                yield;
                playerScript.currentHull -= 1;
                if (playerScript.currentHull < 0)
                    playerScript.currentHull = 0;
            }
            if (buttonDirection == 1) {
                playerScript.HullBonus += 1;
                yield;
                playerScript.currentHull += 1;
            }
        }

        if (name == "speedIncrement" || name == "speedDecrement") {

            if (buttonDirection == 0)
                playerScript.SpeedBonus -= 1;
            if (buttonDirection == 1)
                playerScript.SpeedBonus += 1;
        }

        if (name == "cargoIncrement" || name == "cargoDecrement") {

            if (buttonDirection == 0)
                playerScript.CargoBonus -= 1;
            if (buttonDirection == 1)
                playerScript.CargoBonus += 1;
        }

        if (name == "firerateIncrement" || name == "firerateDecrement") {

            if (buttonDirection == 0)
                playerScript.FireRateBonus -= 1;
            if (buttonDirection == 1)
                playerScript.FireRateBonus += 1;
        }
    }
}