//File: shipPart.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Controls ship parts.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var shipEdgeObject : GameObject;

private var shipPartsParent : GameObject;
private var tempVector : Vector3;
private var tempObject : GameObject;

function Start () {

    shipPartsParent = GameObject.Find("ShipParts");
    playerScript = PlayerObject.GetComponent(player);
    tempVector = transform.position;

    if (name == "AcornPod") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), shipPartsParent.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), shipPartsParent.transform);
        tempVector.x = 0;
        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), shipPartsParent.transform);
    }
}

function Update () {

    if (PlayerObject == null)
        gameObject.Destroy(this);
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