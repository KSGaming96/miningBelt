//File: shipPart.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/18/2017

/*
--Controls ship parts.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var shipEdgeObject : GameObject;

private var tempVector : Vector3;
private var tempObject : GameObject;

function Start () { //Set variables and spawn edges.

    playerScript = PlayerObject.GetComponent(player);
    tempVector = transform.position;

    if (name == "AcornPod") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x = 0;
        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }
}

function Update () {

    if (playerScript.currentHealth <= 0)
        gameObject.SetActive(false);
}

function OnTriggerEnter2D (temp : Collider2D) { //Collisions. Health is decremented when player hits a destructible object. Ore increments counts.

    if (temp.gameObject.tag == "Destructible" || temp.gameObject.tag == "asteroidParticle") { //Sets amount of health taken by object.

        var healthDecrement : int;
        if (temp.gameObject.name == "smallAsteroid(Clone)")
            healthDecrement = 100;
        if (temp.gameObject.name == "mediumAsteroid(Clone)")
            healthDecrement = 300;
        if (temp.gameObject.name == "largeAsteroid(Clone)")
            healthDecrement = 500;
        if (temp.gameObject.name == "asteroidPieceSmall1(Clone)" || temp.gameObject.name == "asteroidPieceSmall2(Clone)" || temp.gameObject.name == "asteroidPieceSmall3(Clone)")
            healthDecrement = 50;
        if (temp.gameObject.name == "asteroidPiece1(Clone)" || temp.gameObject.name == "asteroidPiece2(Clone)" || temp.gameObject.name == "asteroidPiece3(Clone)")
            healthDecrement = 80;
        if (temp.gameObject.name == "asteroidPieceLarge1(Clone)" || temp.gameObject.name == "asteroidPieceLarge2(Clone)" || temp.gameObject.name == "asteroidPieceLarge3(Clone)")
            healthDecrement = 200;

        if (playerScript.currentHull > 0) {
            healthDecrement = healthDecrement / 2;
            playerScript.currentHull--;
        }

        playerScript.currentHealth -= healthDecrement;
    }

    if (temp.gameObject.tag == "Ore") {
        if (playerScript.heldOre < playerScript.totalCargo) {
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
        
            playerScript.heldOre += 1;
            Destroy(temp.gameObject);
        }
    }
}