//File: statusBarScale.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/17/2017

/*
--Scales all status bars.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var cargoStatusBar : GameObject;
public var healthStatusBar : GameObject;
public var energyStatusBar : GameObject;
public var missileStatusBar : GameObject;
public var hullStatusBar : GameObject;
public var shieldStatusBar : GameObject;

static var energyReloaded : int = 0;
static var missileReloaded : int = 0;

private var energyReload : int =  2; //Seconds to reload.
private var missileReload : int = 3; //
private var energyTime : float = 0.0;
private var missileTime : float = 0.0;
private var scaleFactor : float = 0.0;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function Update () {

    //Displaying cargo holding on GUI.
    scaleFactor = (playerScript.heldOre + 0.0) / playerScript.totalCargo * 42.3;
    if (scaleFactor == 0)
        scaleFactor = 1;
    cargoStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.

    //Displaying health on GUI.
    scaleFactor = (playerScript.currentHealth + 0.0) / playerScript.totalHealth * 24.2;
    if (playerScript.currentHealth <= 0)
        scaleFactor = 0;
    healthStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.

    //Displaying energy reload on GUI.
    if (energyTime < energyReload) {
        if (energyReloaded == 0) {

            energyTime += Time.deltaTime * playerScript.totalFireRate;
            scaleFactor = (energyTime / energyReload) * 9.75;
            energyStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.
        }
    }

    else {

        energyTime = 0.0;
        energyReloaded = 1;
    }
        
    //Displaying missile reload on GUI.
    if (missileTime < missileReload) {
        if (missileReloaded == 0) {

            missileTime += Time.deltaTime * playerScript.totalFireRate;
            scaleFactor = (missileTime / missileReload) * 11.35;
            missileStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.
        }
    }

    else {

        missileTime = missileReload;
        missileReloaded = 1;
    }

    //Displaying hull on GUI.
    scaleFactor = (playerScript.currentHull + 0.0) / playerScript.totalHull * 23.65;
    if (playerScript.currentHull <= 0)
        scaleFactor = 0;
    hullStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.

    //Displaying shield on GUI.
    scaleFactor = (playerScript.currentShield + 0.0) / playerScript.totalShield * 23;
    if (playerScript.currentShield <= 0)
        scaleFactor = 0;
    shieldStatusBar.transform.localScale = new Vector3(scaleFactor, 1, 1); //Scales buy timer down until objects are disabled.
}