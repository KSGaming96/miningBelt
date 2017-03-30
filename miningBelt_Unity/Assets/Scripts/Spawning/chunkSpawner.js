//File: closeSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/26/2017

/*
--As the ship moves stars and asteroids will be spawned around it. This will save memory but look totally random. Will use for all background particles.
*/

#pragma strict

public var PlayerObject : GameObject;
public var AsteroidParent : GameObject;
public var StarParent : GameObject;
public var Stars : GameObject[] = new GameObject[2];
public var Asteroids : GameObject[] = new GameObject[3];
private var playerScript : player;
public var temp : Vector3;

static var spawnRange : float = 20.0; // Changes size of active chunk.
private var state : int; //Used for specifying positive and negative.

private var rand : Random;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
    playerScript.spawnRangeX = new Vector2(PlayerObject.transform.position.x - spawnRange, PlayerObject.transform.position.x + spawnRange);
    playerScript.spawnRangeY = new Vector2(PlayerObject.transform.position.y - spawnRange, PlayerObject.transform.position.y + spawnRange);
    Spawn(3); //First objects
    Spawn(3); //First objects
}

function Update () {

    if (transform.position.x > playerScript.spawnRangeX.y - 5) { //Positive X Spawn Right

        state = 1;
        Spawn(0);
        playerScript.spawnRangeX.x += spawnRange;
        playerScript.spawnRangeX.y += spawnRange;
    }

    if (transform.position.x < playerScript.spawnRangeX.x + 5) { //Negative X Spawn Left

        state = 0;
        Spawn(0);
        playerScript.spawnRangeX.x -= spawnRange;
        playerScript.spawnRangeX.y -= spawnRange;
    }

    if (transform.position.y > playerScript.spawnRangeY.y - 5) { //Positive Y Spawn Up

        state = 1;
        Spawn(1);
        playerScript.spawnRangeY.x += spawnRange;
        playerScript.spawnRangeY.y += spawnRange;
    }

    if (transform.position.y < playerScript.spawnRangeY.x + 5) { //Negative Y Spawn Down

        state = 0;
        Spawn(1);
        playerScript.spawnRangeY.x -= spawnRange;
        playerScript.spawnRangeY.y -= spawnRange;
    }
}

function Spawn(direction : int) {

    var size : int;
    var tempObject : GameObject;
    var starCount : int = spawnRange * 10;
    var asteroidCount : int = spawnRange * 2;
    playerScript.despawn = 1; //Despawn objects out of spawnRange

    while (starCount > 0 || asteroidCount > 0) {

        if (direction == 1) { //Y Calls

            if (state == 0) //Negative Y call
                temp = new Vector3(transform.position.x + rand.Range(spawnRange, -spawnRange), playerScript.spawnRangeY.x - rand.Range(0.0, spawnRange), 0.0);
            if (state == 1) //Positive Y call
                temp = new Vector3(transform.position.x + rand.Range(spawnRange, -spawnRange), playerScript.spawnRangeY.y + rand.Range(0.0, spawnRange), 0.0);
                
        }

        if (direction == 0) { //X Calls

            if (state == 0) //Negative X call
                temp = new Vector3(playerScript.spawnRangeX.x - rand.Range(0.0, spawnRange), transform.position.y + rand.Range(spawnRange, -spawnRange), 0.0);
            if (state == 1) //Positive X call
                temp = new Vector3(playerScript.spawnRangeX.y + rand.Range(0.0, spawnRange), transform.position.y + rand.Range(spawnRange, -spawnRange), 0.0);
        }

        if (direction == 3) //Start Parameters
            temp = new Vector3(transform.position.x + rand.Range(-spawnRange, spawnRange), transform.position.y + rand.Range(spawnRange, -spawnRange), 0.0);

        size = rand.Range(0, 1);
        if (starCount > 0){

            tempObject = Instantiate(Stars[size], temp, Quaternion.identity);
            tempObject.transform.parent = StarParent.transform;
        }

        size = rand.Range(0, 2);
        if (asteroidCount > 0) {

            tempObject = Instantiate(Asteroids[size], temp, Quaternion.identity);
            tempObject.transform.parent = AsteroidParent.transform;
        }

        starCount--;
        asteroidCount--;
    }
}