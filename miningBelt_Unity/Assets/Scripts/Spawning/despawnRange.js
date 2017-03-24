//File: despawnRange.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/24/2017

/*
--Removes objects if they are out of players spawnRangeX and spawnRangeY
*/

#pragma strict

public var PlayerObject : GameObject;

function FixedUpdate () {

    var player : Player = PlayerObject.GetComponent(Player);
	
    if (transform.position.x <= player.spawnRangeX.y && transform.position.x >= player.spawnRangeX.x &&
        transform.position.y <= player.spawnRangeY.y && transform.position.y >= player.spawnRangeY.x) {

        //Inside Spawn Range
    }

    else {

        Destroy(gameObject);
    }
}