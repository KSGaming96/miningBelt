//File: playerMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--Attaches to any object that uses the same transforms as player. GUI, Items, Spawners, etc.
*/

#pragma strict

public var PlayerObject : GameObject;
public var PlayerParent : GameObject;
private var playerScript : player;
private var TempRB : Rigidbody2D;

static var linearDrag : float;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
    TempRB = this.GetComponent(Rigidbody2D); //Assigns own Rigidbody2D for easy script assigning.
    linearDrag = 0;
}

function FixedUpdate () { //Movement

    if (Input.GetAxis("Vertical") == 1 && PlayerObject != null) {

        TempRB.AddForce(transform.up * (5 * playerScript.totalSpeed) * Input.GetAxis("Vertical") * Time.deltaTime);
        playerScript.playerDirection = transform.localRotation.eulerAngles.z;
    }

    if (Input.GetAxis("Horizontal") != 0 && PlayerObject != null)
        transform.RotateAround(PlayerObject.transform.position, Vector3.forward, (50 * playerScript.totalMobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
}

function Update () { //Drag change from Foundry.

    if (linearDrag == 1)
        TempRB.drag = 1;
    else
        TempRB.drag = 0.2;
    playerScript.speedVector = TempRB.velocity;
}