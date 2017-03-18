//File: objectSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/12/2017

/*
--Attached to chunk and handles star and asteroid spawning.
*/
#pragma strict

public var StarSpawnRate : int = 500;
public var AsteroidSpawnRate : int = 200;
public var SpawnRange : float = 25.0;

public var SmallStar : GameObject;
public var MediumStar : GameObject;
public var SmallAsteroid : GameObject;
public var MediumAsteroid : GameObject;
public var LargeAsteroid : GameObject;

private var rand : Random;

function Start () {
	
    starSpawn();
    asteroidSpawn();
}

function starSpawn() {

    var size : int;
    var temp : Vector3 = new Vector3(this.transform.position.x, this.transform.position.y, 0);

    while (0 <= StarSpawnRate) {

        size = rand.Range(0, 10);

        temp.x += rand.Range(-SpawnRange, SpawnRange);
        temp.y += rand.Range(-SpawnRange, SpawnRange);

        if (size <= 7) {

            Instantiate(SmallStar, temp, Quaternion.identity);
            StarSpawnRate--;
        }

        else {

            Instantiate(MediumStar, temp, Quaternion.identity);
            StarSpawnRate--;
        }

        temp = new Vector3(this.transform.position.x, this.transform.position.y, 0);
    }
}

function asteroidSpawn() {

    var size : int;
    var temp : Vector3 = new Vector3(this.transform.position.x, this.transform.position.y, 0);

    while (0 <= AsteroidSpawnRate) {

        AsteroidSpawnRate--;

        size = rand.Range(1, 20);

        temp.x += rand.Range(-SpawnRange, SpawnRange);
        temp.y += rand.Range(-SpawnRange, SpawnRange);

        if (size <= 12) {

            Instantiate(SmallAsteroid, temp, Quaternion.identity);
            AsteroidSpawnRate--;
        }

        else if (size > 12 && size < 16) {

            Instantiate(MediumAsteroid, temp, Quaternion.identity);
            AsteroidSpawnRate--;
        }

        
        else if (size >= 16) {

            Instantiate(LargeAsteroid, temp, Quaternion.identity);
            AsteroidSpawnRate--;
        }

        temp = new Vector3(this.transform.position.x, this.transform.position.y, 0);
    }
}