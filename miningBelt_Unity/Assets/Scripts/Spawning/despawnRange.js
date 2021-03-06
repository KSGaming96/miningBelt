﻿//File: despawnRange.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/27/2017

/*
--Removes objects if they are out of players spawnRangeX and spawnRangeY
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function Update () {
	
    if (playerScript.despawn == 1) { //Check variable, not transform. Cleans up everything so much! Main memory leak is gone.

        if (transform.position.x <= playerScript.spawnRangeX.y && transform.position.x >= playerScript.spawnRangeX.x &&
        transform.position.y <= playerScript.spawnRangeY.y && transform.position.y >= playerScript.spawnRangeY.x) {

            //Inside Spawn Range
        }

        else {

            Destroy(gameObject);
        }
    }
}