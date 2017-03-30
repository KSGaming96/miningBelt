//File: foundry.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/29/2017

/*
--Basic spinning for now.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerMovementScript : playerMovement;
private var PlayerRB : Rigidbody2D;
private var RB : Rigidbody2D;

function Start () { //Sets rotation and variables.
	
    RB = this.gameObject.GetComponent("Rigidbody2D");
    playerMovementScript = gameObject.GetComponent(playerMovement);

    if (name == "center")
        RB.AddTorque(2);

    else if (name == "foundryRing1")
        RB.AddTorque(-2);
}

function OnTriggerStay2D (temp : Collider2D) { //Sets drag when player is on the foundry so it'll stop.

    if (temp.gameObject.name == "playerShip")
        playerMovementScript.linearDrag = 1;
}

function OnTriggerExit2D (temp : Collider2D) { //Changes drag back to normal for flying.

    playerMovementScript.linearDrag = 0.2;
}