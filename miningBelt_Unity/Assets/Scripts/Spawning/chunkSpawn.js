//File: chunkSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/10/2017

/*
--chunkSpawn.js Is the main spawning script in miningBelt. Loads all objects and controls variables.

--chunkSpawn() and objectSpawn(). Random chunk generation. 1000x1000 chunk.
--As of now just spawns 4 chunks around the player. Infinity will be added later.
--
--48-- Set custom Vector3 for random spawn area within constraints.
*/

#pragma strict

public var Player : GameObject;
public var Chunk : GameObject;

private var smallStar : GameObject[];

function Start () {
    
    chunkSpawn(1);
    chunkSpawn(2);
    chunkSpawn(3);
    chunkSpawn(4);
}

function Update () {
	
}

function chunkSpawn(direction : int) {

    var desiredVector : Vector3 = Player.transform.position;

    if (direction == 1) {
        
        desiredVector.x -= 25;
        desiredVector.y -= 25;

        Instantiate(Chunk, desiredVector, Quaternion.identity);
    }

    if (direction == 2) {
        
        desiredVector.x -= 25;
        desiredVector.y += 25;

        Instantiate(Chunk, desiredVector, Quaternion.identity);
    }

    if (direction == 3) {
        
        desiredVector.x += 25;
        desiredVector.y -= 25;

        Instantiate(Chunk, desiredVector, Quaternion.identity);
    }

    if (direction == 4) {
        
        desiredVector.x += 25;
        desiredVector.y += 25;

        Instantiate(Chunk, desiredVector, Quaternion.identity);
    }
    
}