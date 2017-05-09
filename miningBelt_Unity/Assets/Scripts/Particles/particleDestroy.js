//File: particleDestroy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/03/2017

/*
--Assigns all particle objects, and destroys object with "flare" :D
--
--collision2D sees what object is running the script and destroys according to object.
--If collision detects player run PlayerDestruction().
--
--Nothing too special here. Just instantiation of particles in various ways and destruction of objects.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;
private var oreSpawnerScript : oreSpawn;
private var TempRB : Rigidbody2D;

//Object Particles
public var objectParticles : GameObject[] = new GameObject[10]; //0 is Dust, 1-3 are small, 4-6 are medium, 7-9 are large

//Ship Particles
public var shipParticles : GameObject[] = new GameObject[10]; //0 is Dust, 1-3 are small, 4-6 are medium, 7-9 are large

private var rand : Random;
private var tempArray : GameObject[] = objectParticles; //Defaults to objectParticles. Changes to shipParticles later if needed.;
private var direction : Transform;
private var spread : int;
private var particleCount : int;
private var objectHealth : int = 1;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
    oreSpawnerScript = GetComponent(oreSpawn);
    TempRB = GetComponent(Rigidbody2D);

    //Sets health for different objects.
    if (name == "smallAsteroid(Clone)")
        objectHealth = 3;
    if (name == "mediumAsteroid(Clone)")
        objectHealth = 6;
    if (name == "largeAsteroid(Clone)")
        objectHealth = 12;
    if (name == "asteroidPieceSmall1(Clone)" || name == "asteroidPieceSmall2(Clone)" || name == "asteroidPieceSmall3(Clone)")
        objectHealth = 1;
    if (name == "asteroidPiece1(Clone)" || name == "asteroidPiece2(Clone)" || name == "asteroidPiece3(Clone)")
        objectHealth = 3;
    if (name == "asteroidPieceLarge1(Clone)" || name == "asteroidPieceLarge2(Clone)" || name == "asteroidPieceLarge3(Clone)")
        objectHealth = 6;

    if (transform.position.x <= 6 && transform.position.x >= -4 && transform.position.y <= 5 && transform.position.y >= -3)
        Destroy(gameObject);
}

function OnTriggerEnter2D (temp : Collider2D) {

    direction = temp.transform;

    if (temp.gameObject.name == "foundryRing1") { 
        if (Time.time <= 5) //Despawn asteroid if it spawns within foundry.
            Destroy(gameObject);
        else 
            preDestruction(); //Destroys asteroid if it hit foundry.
    }

    if (temp.gameObject.tag == "Projectile") {

        objectHealth -= playerScript.totalAttack;
        if (objectHealth > 0) {

            particleCount = rand.Range(0,3);
            spread = 0;
            destruction(2);
            particleCount = rand.Range(10,30);
            spread = 0;
            destruction(0);
            TempRB.AddForce(direction.transform.up * rand.Range(2.0, 10.0) * Time.deltaTime * 100);
            TempRB.AddTorque(rand.Range(-1.0, 1.0) * Time.deltaTime * 1000.0);
        }
        
        else {

            if (name != "asteroidPieceSmall1(Clone)" && name != "asteroidPieceSmall2(Clone)" && name != "asteroidPieceSmall3(Clone)")
                oreSpawnerScript.oreSpawner();
            preDestruction();
        }
    }

    if (temp.gameObject.tag == "shipPart")

        if (playerScript.currentHealth <= 0)
            shipDestruction();
        else
            preDestruction();
}

function preDestruction () {

    //Dust spawn.
    particleCount = 50;
    spread = 20;
    destruction(0);

    if (name == "smallAsteroid(Clone)") {
        particleCount = rand.Range(2,8);
        spread = 0;
        destruction(2);
    }

    if (name == "mediumAsteroid(Clone)") {
        particleCount = rand.Range(2,4);
        spread = 40;
        destruction(2);

        particleCount = rand.Range(2,4);
        spread = 0;
        destruction(5);
    }

    if (name == "largeAsteroid(Clone)") {
        particleCount = rand.Range(2,4);
        spread = 40;
        destruction(2);

        particleCount = rand.Range(1,3);
        spread = 90;
        destruction(5);

        particleCount = rand.Range(1,3);
        spread = 0;
        destruction(8);
    }

    if (name == "asteroidPiece1(Clone)" || name == "asteroidPiece2(Clone)" || name == "asteroidPiece3(Clone)") {
        particleCount = rand.Range(1,4);
        spread = 35;
        destruction(2);
    }

    if (name == "asteroidPieceLarge1(Clone)" || name == "asteroidPieceLarge2(Clone)" || name == "asteroidPieceLarge3(Clone)") {
        spread = 0;
        particleCount = rand.Range(2,6);
        destruction(2);

        spread = 35;
        particleCount = rand.Range(1,3);
        destruction(5);
    }

    Destroy(gameObject);
}

function shipDestruction () {

    tempArray = shipParticles;
    spread = 0;
    particleCount = 200;
    destruction(0);
    particleCount = rand.Range(0, 50);
    destruction(2);
    particleCount = rand.Range(0, 50);
    destruction(5);
    particleCount = rand.Range(0, 50);
    destruction(8);
}

function destruction (arrayLocation : int) {

    var temp : int = 0;

    if (spread == 0) {
        while (particleCount >= 0) {

            if (arrayLocation != 0)
                temp = rand.Range(arrayLocation - 1, arrayLocation + 2);
            particleCount--;
            Instantiate(tempArray[temp], transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    else {
        while (particleCount >= 0) {

            if (arrayLocation != 0)
                temp = rand.Range(arrayLocation - 1, arrayLocation + 2);
            particleCount--;
            Instantiate(tempArray[temp], transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
        }
    }
}