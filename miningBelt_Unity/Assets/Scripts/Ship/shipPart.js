//File: shipPart.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/14/2017

/*
--Controls ship parts.
*/

#pragma strict

public var playerObject : GameObject;
private var playerScript : player;

function Start () {

    playerScript = playerObject.GetComponent(player);
}

function OnTriggerEnter2D (temp : Collider2D) { //Increments ore on collision and destroys ore.

    if (temp.gameObject.tag == "Ore") {

        if (temp.gameObject.name == "copperOre(Clone)")
            playerScript.Copper++;
        if (temp.gameObject.name == "silverOre(Clone)")
            playerScript.Silver++;
        if (temp.gameObject.name == "goldOre(Clone)")
            playerScript.Gold++;
        if (temp.gameObject.name == "diamondOre(Clone)")
            playerScript.Diamond++;
        if (temp.gameObject.name == "uraniumOre(Clone)")
            playerScript.Uranium++;
        if (temp.gameObject.name == "siliconOre(Clone)")
            playerScript.Silicon++;
        if (temp.gameObject.name == "crystalOre(Clone)")
            playerScript.Crystal++;
        if (temp.gameObject.name == "magnesiumOre(Clone)")
            playerScript.Magnesium++;
        if (temp.gameObject.name == "fluoriteOre(Clone)")
            playerScript.Fluorite++;
        
        Destroy(temp.gameObject);
    }
}