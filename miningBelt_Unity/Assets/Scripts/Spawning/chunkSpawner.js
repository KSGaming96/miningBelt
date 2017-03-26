//File: closeSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/26/2017

/*
--As the ship moves stars and asteroids will be spawned around it. This will save memory but look totally random. Will use for all background particles.
*/

#pragma strict

public var PlayerObject : GameObject;
public var SmallStar : GameObject;
public var MediumStar : GameObject;
public var SmallAsteroid : GameObject;
public var MediumAsteroid : GameObject;
private var playerScript : player;
public var temp : Vector3;

static var spawnRange : float = 10.0; // Changes size of active chunk.
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

    if (transform.position.x > playerScript.spawnRangeX.y - (spawnRange / 2)) { //Positive X Spawn Right

        state = 1;
        Spawn(0);
        playerScript.spawnRangeX.x += spawnRange;
        playerScript.spawnRangeX.y += spawnRange;
    }

    if (transform.position.x < playerScript.spawnRangeX.x + (spawnRange / 2)) { //Negative X Spawn Left

        state = 0;
        Spawn(0);
        playerScript.spawnRangeX.x -= spawnRange;
        playerScript.spawnRangeX.y -= spawnRange;
    }

    if (transform.position.y > playerScript.spawnRangeY.y - (spawnRange / 2)) { //Positive Y Spawn Up

        state = 1;
        Spawn(1);
        playerScript.spawnRangeY.x += spawnRange;
        playerScript.spawnRangeY.y += spawnRange;
    }

    if (transform.position.y < playerScript.spawnRangeY.x + (spawnRange / 2)) { //Negative Y Spawn Down

        state = 0;
        Spawn(1);
        playerScript.spawnRangeY.x -= spawnRange;
        playerScript.spawnRangeY.y -= spawnRange;
    }
}

function Spawn(direction : int) {

    var size : int;
    var starCount : int = spawnRange * 5;
    var asteroidCount : int = spawnRange * 2;

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

        size = rand.Range(1, 8);

        if (size <= 6) {

            if (starCount > 0)
                Instantiate(SmallStar, temp, Quaternion.identity);
            if (asteroidCount > 0)
                Instantiate(SmallAsteroid, temp, Quaternion.identity);
        }

        if (size > 6 && size <= 8) {

            if (starCount > 0)
                Instantiate(MediumStar, temp, Quaternion.identity);
            if (asteroidCount > 0)
                Instantiate(MediumAsteroid, temp, Quaternion.identity);
        }

        starCount--;
        asteroidCount--;
    }
}