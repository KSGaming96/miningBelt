//File: playerGUIText.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/27/2017

/*
--Writes all variables on GUI.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var shipUpgradesObject : GameObject;
public var repairHealthObject : GameObject;
public var repairHullObject : GameObject;
public var repairShieldObject : GameObject;

function Start () {
	
    playerScript = PlayerObject.GetComponent(player);
}

function OnGUI () {
	
    var gui : GUI; 
    
    var x : int = playerScript.transform.position.x;
    var y : int = playerScript.transform.position.y;

    //Prints total stats.
    gui.Label (Rect (725, 279, 725, 279), "" + playerScript.totalHealth);
    gui.Label (Rect (725, 293, 725, 293), "" + playerScript.totalShield);
    gui.Label (Rect (725, 307, 725, 307), "" + playerScript.totalAttack);
    gui.Label (Rect (725, 321, 725, 321), "" + playerScript.totalMobility);
    gui.Label (Rect (725, 349, 725, 349), "" + playerScript.totalHull);
    gui.Label (Rect (725, 363, 725, 363), "" + playerScript.totalSpeed);
    gui.Label (Rect (725, 377, 725, 377), "" + playerScript.totalCargo);
    gui.Label (Rect (725, 391, 725, 391), "" + playerScript.totalFireRate);

    //Prints playerScript.Kascade amount and offsets depending on size of number.
    if (playerScript.Kascade < 10)
        gui.Label (Rect (185, 575, 185, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 10 && playerScript.Kascade < 100)
        gui.Label (Rect (178, 575, 178, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 100 && playerScript.Kascade < 1000)
        gui.Label (Rect (171, 575, 171, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 1000 && playerScript.Kascade < 10000)
        gui.Label (Rect (164, 575, 164, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 10000 && playerScript.Kascade < 100000)
        gui.Label (Rect (157, 575, 157, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 100000 && playerScript.Kascade < 1000000)
        gui.Label (Rect (150, 575, 150, 575), "" + playerScript.Kascade);
    if (playerScript.Kascade >= 1000000 && playerScript.Kascade < 10000000)
        gui.Label (Rect (143, 575, 143, 575), "" + playerScript.Kascade);

    //Prints ore number and offsets at 10 or above.
    if (playerScript.Copper < 10)
        gui.Label (Rect (468, 534, 468, 534), "0" + playerScript.Copper);
    if (playerScript.Copper >= 10)
        gui.Label (Rect (468, 534, 468, 534), "" + playerScript.Copper);
    if (playerScript.Silver < 10)
        gui.Label (Rect (468, 547, 468, 547), "0" + playerScript.Silver);
    if (playerScript.Silver >= 10)
        gui.Label (Rect (468, 547, 468, 547), "" + playerScript.Silver);
    if (playerScript.Gold < 10)
        gui.Label (Rect (468, 560, 468, 560), "0" + playerScript.Gold);
    if (playerScript.Gold >= 10)
        gui.Label (Rect (468, 560, 468, 560), "" + playerScript.Gold);
    if (playerScript.Diamond < 10)
        gui.Label (Rect (468, 573, 468, 573), "0" + playerScript.Diamond);
    if (playerScript.Diamond >= 10)
        gui.Label (Rect (468, 573, 468, 573), "" + playerScript.Diamond);
    if (playerScript.Uranium < 10)
        gui.Label (Rect (560, 521, 560, 521), "0" + playerScript.Uranium);
    if (playerScript.Uranium >= 10)
        gui.Label (Rect (560, 521, 560, 521), "" + playerScript.Uranium);
    if (playerScript.Silicon < 10)
        gui.Label (Rect (560, 534, 560, 534), "0" + playerScript.Silicon);
    if (playerScript.Silicon >= 10)
        gui.Label (Rect (560, 534, 560, 534), "" + playerScript.Silicon);
    if (playerScript.Crystal < 10)
        gui.Label (Rect (560, 547, 560, 534), "0" + playerScript.Crystal);
    if (playerScript.Crystal >= 10)
        gui.Label (Rect (560, 547, 560, 534), "" + playerScript.Crystal);
    if (playerScript.Magnesium < 10)
        gui.Label (Rect (560, 560, 560, 560), "0" + playerScript.Magnesium);
    if (playerScript.Magnesium >= 10)
        gui.Label (Rect (560, 560, 560, 560), "" + playerScript.Magnesium);
    if (playerScript.Fluorite < 10)
        gui.Label (Rect (560, 573, 560, 573), "0" + playerScript.Fluorite);
    if (playerScript.Fluorite >= 10)
        gui.Label (Rect (560, 573, 560, 573), "" + playerScript.Fluorite);

    //Default Prices on GUI.
    if (repairHealthObject.activeSelf == false && repairHullObject.activeSelf == false && repairShieldObject.activeSelf == false && shipUpgradesObject.activeSelf == true) {

        playerScript.repairAllPrice = playerScript.repairHealthPrice + playerScript.repairHullPrice + playerScript.repairShieldPrice;
        if (playerScript.repairAllPrice < 10)
            gui.Label (Rect (480, 177, 480, 177), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 100 && playerScript.repairAllPrice >= 10)
            gui.Label (Rect (473, 177, 473, 177), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 1000 && playerScript.repairAllPrice >= 100)
            gui.Label (Rect (466, 177, 466, 181777), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 10000 && playerScript.repairAllPrice >= 1000)
            gui.Label (Rect (459, 177, 459, 177), "" + playerScript.repairAllPrice);
        if (playerScript.repairAllPrice < 100000 && playerScript.repairAllPrice >= 10000)
            gui.Label (Rect (452, 177, 452, 177), "" + playerScript.repairAllPrice);
    }

    //Health prices on GUI.
    if (repairHealthObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairHealthPrice < 10)
            gui.Label (Rect (566, 177, 566, 177), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 100 && playerScript.repairHealthPrice >= 10)
            gui.Label (Rect (553, 177, 475533, 177), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 1000 && playerScript.repairHealthPrice >= 100)
            gui.Label (Rect (546, 177, 446, 466), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 10000 && playerScript.repairHealthPrice >= 1000)
            gui.Label (Rect (539, 177, 539, 177), "" + playerScript.repairHealthPrice);
        if (playerScript.repairHealthPrice < 100000 && playerScript.repairHealthPrice >= 10000)
            gui.Label (Rect (532, 177, 522, 177), "" + playerScript.repairHealthPrice);
        

        //Repair 50 price.
        gui.Label (Rect (466, 177, 466, 177), "50");
    }

    //Hull prices on GUI.
    if (repairHullObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairHullPrice < 10)
            gui.Label (Rect (566, 177, 566, 177), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 100 && playerScript.repairHullPrice >= 10)
            gui.Label (Rect (553, 177, 553, 177), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 1000 && playerScript.repairHullPrice >= 100)
            gui.Label (Rect (546, 177, 546, 177), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 10000 && playerScript.repairHullPrice >= 1000)
            gui.Label (Rect (539, 177, 539, 177), "" + playerScript.repairHullPrice);
        if (playerScript.repairHullPrice < 100000 && playerScript.repairHullPrice >= 10000)
            gui.Label (Rect (532, 177, 532, 177), "" + playerScript.repairHullPrice);

        //Repair 1 price.
        gui.Label (Rect (466, 177, 466, 177), "50");
    }

    //Shield prices on GUI.
    if (repairShieldObject.activeSelf == true && shipUpgradesObject.activeSelf == true) {

        //Repair all price.
        if (playerScript.repairShieldPrice < 10)
            gui.Label (Rect (566, 177, 566, 177), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 100 && playerScript.repairShieldPrice >= 10)
            gui.Label (Rect (553, 177, 553, 177), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 1000 && playerScript.repairShieldPrice >= 100)
            gui.Label (Rect (546, 177, 546, 177), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 10000 && playerScript.repairShieldPrice >= 1000)
            gui.Label (Rect (539, 177, 539, 177), "" + playerScript.repairShieldPrice);
        if (playerScript.repairShieldPrice < 100000 && playerScript.repairShieldPrice >= 10000)
            gui.Label (Rect (532, 177, 532, 177), "" + playerScript.repairShieldPrice);

        //Repair 1 price.
        gui.Label (Rect (466, 177, 466, 177), "50");
    }
}
