//File: playerGUIText.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/01/2017

/*
--Writes all variables on GUI.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var terminal : Font;

public var shipUpgradesObject : GameObject;
public var repairHealthObject : GameObject;
public var repairHullObject : GameObject;
public var repairShieldObject : GameObject;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function OnGUI () {
	
    var gui : GUI; 
    gui.skin.font = terminal;
    
    var x : int = playerScript.transform.position.x;
    var y : int = playerScript.transform.position.y;

    //Prints total stats.
    gui.Label (Rect (725, 281, 725, 281), "" + playerScript.totalHealth);
    gui.Label (Rect (725, 295, 725, 295), "" + playerScript.totalShield);
    gui.Label (Rect (725, 309, 725, 309), "" + playerScript.totalAttack);
    gui.Label (Rect (725, 323, 725, 323), "" + playerScript.totalMobility);
    gui.Label (Rect (725, 351, 725, 351), "" + playerScript.totalHull);
    gui.Label (Rect (725, 365, 725, 365), "" + playerScript.totalSpeed);
    gui.Label (Rect (725, 379, 725, 379), "" + playerScript.totalCargo);
    gui.Label (Rect (725, 393, 725, 393), "" + playerScript.totalFireRate);

    //Prints playerScript.Kascade amount and offsets depending on size of number.
    if (playerScript.Kascade < 10)
        gui.Label (Rect (185, 577, 185, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 10 && playerScript.Kascade < 100)
        gui.Label (Rect (178, 577, 178, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 100 && playerScript.Kascade < 1000)
        gui.Label (Rect (171, 577, 171, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 1000 && playerScript.Kascade < 10000)
        gui.Label (Rect (164, 577, 164, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 10000 && playerScript.Kascade < 100000)
        gui.Label (Rect (157, 577, 157, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 100000 && playerScript.Kascade < 1000000)
        gui.Label (Rect (150, 577, 150, 577), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 1000000 && playerScript.Kascade < 10000000)
        gui.Label (Rect (143, 577, 143, 577), "" + playerScript.Kascade);

    //Prints ore number and offsets at 10 or above.
    if (playerScript.Copper < 10)
        gui.Label (Rect (468, 535, 468, 535), "0" + playerScript.Copper);
    if (playerScript.Copper >= 10)
        gui.Label (Rect (468, 535, 468, 535), "" + playerScript.Copper);
    if (playerScript.Silver < 10)
        gui.Label (Rect (468, 548, 468, 548), "0" + playerScript.Silver);
    if (playerScript.Silver >= 10)
        gui.Label (Rect (468, 548, 468, 548), "" + playerScript.Silver);
    if (playerScript.Gold < 10)
        gui.Label (Rect (468, 561, 468, 561), "0" + playerScript.Gold);
    if (playerScript.Gold >= 10)
        gui.Label (Rect (468, 561, 468, 561), "" + playerScript.Gold);
    if (playerScript.Diamond < 10)
        gui.Label (Rect (468, 574, 468, 574), "0" + playerScript.Diamond);
    if (playerScript.Diamond >= 10)
        gui.Label (Rect (468, 574, 468, 574), "" + playerScript.Diamond);
    if (playerScript.Uranium < 10)
        gui.Label (Rect (560, 522, 560, 522), "0" + playerScript.Uranium);
    if (playerScript.Uranium >= 10)
        gui.Label (Rect (560, 522, 560, 522), "" + playerScript.Uranium);
    if (playerScript.Silicon < 10)
        gui.Label (Rect (560, 535, 560, 535), "0" + playerScript.Silicon);
    if (playerScript.Silicon >= 10)
        gui.Label (Rect (560, 535, 560, 535), "" + playerScript.Silicon);
    if (playerScript.Crystal < 10)
        gui.Label (Rect (560, 548, 560, 548), "0" + playerScript.Crystal);
    if (playerScript.Crystal >= 10)
        gui.Label (Rect (560, 548, 560, 548), "" + playerScript.Crystal);
    if (playerScript.Magnesium < 10)
        gui.Label (Rect (560, 561, 560, 561), "0" + playerScript.Magnesium);
    if (playerScript.Magnesium >= 10)
        gui.Label (Rect (560, 561, 560, 561), "" + playerScript.Magnesium);
    if (playerScript.Fluorite < 10)
        gui.Label (Rect (560, 574, 560, 574), "0" + playerScript.Fluorite);
    if (playerScript.Fluorite >= 10)
        gui.Label (Rect (560, 574, 560, 574), "" + playerScript.Fluorite);

    //Default Prices on GUI.
    if (repairHealthObject.activeSelf == false && repairHullObject.activeSelf == false && repairShieldObject.activeSelf == false && shipUpgradesObject.activeSelf == true) {

        playerScript.repairAllPrice = playerScript.repairHealthPrice + playerScript.repairHullPrice + playerScript.repairShieldPrice;
        if (playerScript.repairAllPrice < 10)
            gui.Label (Rect (480, 179, 480, 179), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 100 && playerScript.repairAllPrice >= 10)
            gui.Label (Rect (473, 179, 473, 179), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 1000 && playerScript.repairAllPrice >= 100)
            gui.Label (Rect (466, 179, 466, 179), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 10000 && playerScript.repairAllPrice >= 1000)
            gui.Label (Rect (459, 179, 459, 179), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 100000 && playerScript.repairAllPrice >= 10000)
            gui.Label (Rect (452, 179, 452, 179), "" + playerScript.repairAllPrice);
    }

    //Health prices on GUI.
    if (repairHealthObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairHealthPrice < 10)
            gui.Label (Rect (566, 179, 566, 179), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 100 && playerScript.repairHealthPrice >= 10)
            gui.Label (Rect (553, 179, 475533, 179), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 1000 && playerScript.repairHealthPrice >= 100)
            gui.Label (Rect (546, 179, 446, 466), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 10000 && playerScript.repairHealthPrice >= 1000)
            gui.Label (Rect (539, 179, 539, 179), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 100000 && playerScript.repairHealthPrice >= 10000)
            gui.Label (Rect (532, 179, 522, 179), "" + playerScript.repairHealthPrice);
        

        //Repair 50 price.
        gui.Label (Rect (466, 179, 466, 179), "50");
    }

    //Hull prices on GUI.
    if (repairHullObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairHullPrice < 10)
            gui.Label (Rect (566, 179, 566, 179), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 100 && playerScript.repairHullPrice >= 10)
            gui.Label (Rect (553, 179, 553, 179), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 1000 && playerScript.repairHullPrice >= 100)
            gui.Label (Rect (546, 179, 546, 179), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 10000 && playerScript.repairHullPrice >= 1000)
            gui.Label (Rect (539, 179, 539, 179), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 100000 && playerScript.repairHullPrice >= 10000)
            gui.Label (Rect (532, 179, 532, 179), "" + playerScript.repairHullPrice);

        //Repair 1 price.
        gui.Label (Rect (466, 179, 466, 179), "50");
    }

    //Shield prices on GUI.
    if (repairShieldObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairShieldPrice < 10)
            gui.Label (Rect (566, 179, 566, 179), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 100 && playerScript.repairShieldPrice >= 10)
            gui.Label (Rect (553, 179, 553, 179), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 1000 && playerScript.repairShieldPrice >= 100)
            gui.Label (Rect (546, 179, 546, 179), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 10000 && playerScript.repairShieldPrice >= 1000)
            gui.Label (Rect (539, 179, 539, 179), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 100000 && playerScript.repairShieldPrice >= 10000)
            gui.Label (Rect (532, 179, 532, 179), "" + playerScript.repairShieldPrice);

        //Repair 1 price.
        gui.Label (Rect (466, 179, 466, 179), "50");
    }
}
