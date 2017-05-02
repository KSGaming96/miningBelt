//File: foundry.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/14/2017

/*
--Basic spinning and menu movement with player collision.
*/

#pragma strict

public var PlayerObject : GameObject;
public var foundryMenuObject : GameObject;
public var foundryOreMenuObject : GameObject;
public var foundryLocatorObject : GameObject;
public var storeObject : GameObject;
public var storeButtonObject : GameObject;

private var playerMovementScript : playerMovement;
private var PlayerRB : Rigidbody2D;
private var RB : Rigidbody2D;

function Start () { //Sets rotation and variables.
	
    if (name == "foundryCenter") {

        RB = this.GetComponent(Rigidbody2D);
        RB.AddTorque(2); 
    }
    
    playerMovementScript = gameObject.GetComponent(playerMovement);
}

function OnTriggerEnter2D (temp : Collider2D) { //Sets drag and moves menu when player is on the foundry so it'll stop.

    if (temp.gameObject.tag == "shipPart") {

        if (name == "foundryCenter") {

            playerMovementScript.linearDrag = 1;
            foundryMenuObject.SetActive(true);
            foundryLocatorObject.SetActive(false);
        }
        
        if (name == "foundryInnerCollider") {

            playerMovementScript.linearDrag = 2;
            storeButtonObject.GetComponent(foundryMenuButtons).innerCollider = 1;
        }
    }
        
}

function OnTriggerExit2D (temp : Collider2D) { //Changes drag back to normal for flying and removes menus when player leaves foundry.

    if (temp.gameObject.tag == "shipPart") {

        if (name == "foundryCenter") {

            playerMovementScript.linearDrag = 0;
            foundryMenuObject.SetActive(false);
            foundryOreMenuObject.SetActive(false);
            foundryLocatorObject.SetActive(true);
        }

        if (name == "foundryInnerCollider") {

            playerMovementScript.linearDrag = 1;
            storeObject.SetActive(false);
            storeButtonObject.GetComponent(foundryMenuButtons).innerCollider = 0;
        }
            
    }
}