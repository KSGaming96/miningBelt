//File: playerMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/26/2017

/*
--Attaches to any object that uses the same transforms as player. GUI, Items, Spawners, etc.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;
private var TempRB : Rigidbody2D;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
    TempRB = this.GetComponent(Rigidbody2D); //Assigns own Rigidbody2D for easy script assigning.
}

function Update () {

    if (Input.GetAxis("Vertical") == 1)
        TempRB.AddForce(transform.up * (50 * playerScript.Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
    if (Input.GetAxis("Horizontal") != 0)
        transform.RotateAround(PlayerObject.transform.position, Vector3.forward, (50 * playerScript.Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
    if (Input.GetButton("Restart"))
        Application.LoadLevel("mainLevel");
}
