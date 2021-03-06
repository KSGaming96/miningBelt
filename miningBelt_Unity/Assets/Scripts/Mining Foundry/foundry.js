﻿//File: foundry.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/29/2017

/*
--Basic spinning and menu movement with player collision.
*/

#pragma strict

public var PlayerObject : GameObject;
public var foundryMenuObject : GameObject;
public var foundryOreMenuObject : GameObject;
public var foundryLocatorObject : GameObject;

public var foundryGUIHolderObject : GameObject;
public var foundryMenuHolderObject : GameObject;
public var foundryOreHolderObject : GameObject;

private var playerMovementScript : playerMovement;
private var PlayerRB : Rigidbody2D;
private var RB : Rigidbody2D;

function Start () { //Sets rotation and variables.
	
    RB = this.GetComponent(Rigidbody2D);
    playerMovementScript = gameObject.GetComponent(playerMovement);
    RB.AddTorque(2);  
}

function OnTriggerEnter2D (temp : Collider2D) { //Sets drag and moves menu when player is on the foundry so it'll stop.

    if (temp.gameObject.name == "playerShip") {

        playerMovementScript.linearDrag = 1;
        foundryMenuObject.transform.position = foundryGUIHolderObject.transform.position;
        foundryLocatorObject.transform.position = foundryOreHolderObject.transform.position;
    }
        
}

function OnTriggerExit2D (temp : Collider2D) { //Changes drag back to normal for flying and removes menus when player leaves foundry.

    if (temp.gameObject.name == "playerShip") {

        playerMovementScript.linearDrag = 0.2;
        foundryMenuObject.transform.position = foundryMenuHolderObject.transform.position;
        foundryOreMenuObject.transform.position = foundryOreHolderObject.transform.position;
        foundryLocatorObject.transform.position = PlayerObject.transform.position;
    }
}