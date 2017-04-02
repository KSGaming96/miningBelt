//File: particleDestroy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/02/2017

/*
--Assigns all particle objects, and destroys object with "flare" :D
--
--collision2D sees what object is running the script and destroys according to object.
--If collision detects player run PlayerDestruction().
--
--Nothing too special here. Just instantiation of particles in various ways and destruction of objects.
*/

#pragma strict

//Object Particles
public var objectParticles : GameObject[] = new GameObject[10]; //0 is Dust, 1-3 are small, 4-6 are medium, 7-9 are large

//Ship Particles
public var shipParticles : GameObject[] = new GameObject[10]; //0 is Dust, 1-3 are small, 4-6 are medium, 7-9 are large
private var tempArray : GameObject[];

private var rand : Random;
private var direction : Transform;
private var spawn : int = 0;
private var spread : int;

private var particleCount : int;

function OnTriggerEnter2D (temp : Collider2D) {

    direction = temp.transform;
    tempArray = objectParticles; //Defaults to objectParticles. Changes to shipParticles later if needed.

    if (temp.gameObject.name == "foundryRing1") { //Despawn asteroid if it spawns within foundry

        Destroy(gameObject);
    }

    if (temp.gameObject.tag == "Projectile" || temp.gameObject.tag == "Player") {

        if (name == "smallAsteroid(Clone)") {

            particleCount = rand.Range(2,8);
            spread = 0;
            destruction(1);

            Destroy(gameObject);
        }

        if (name == "mediumAsteroid(Clone)") {

            particleCount = rand.Range(2,8);
            spread = 7;
            destruction(1);

            particleCount = rand.Range(1,6);
            spread = 0;
            destruction(0);

            Destroy(gameObject);
        }

        if (name == "largeAsteroid(Clone)") {

            particleCount = rand.Range(2,8);
            spread = 16;
            destruction(1);

            particleCount = rand.Range(1,6);
            spread = 12;
            destruction(4);

            particleCount = rand.Range(1,3);
            spread = 0;
            destruction(0);

            Destroy(gameObject);
        }

        if (tag == "asteroidParticle") {

            if (name == "asteroidPieceSmall1(Clone)" || name == "asteroidPieceSmall2(Clone)" || name == "asteroidPieceSmall3(Clone)") {

                DustSpawn(15);
                Destroy(gameObject);
            }

            if (name == "asteroidPiece1(Clone)" || name == "asteroidPiece2(Clone)" || name == "asteroidPiece3(Clone)") {

                spread = 2;
                particleCount = rand.Range(0,3);
                destruction(1);

                Destroy(gameObject);
            }

            if (name == "asteroidPieceLarge1(Clone)" || name == "asteroidPieceLarge2(Clone)" || name == "asteroidPieceLarge3(Clone)") {

                spread = 2;
                particleCount = rand.Range(0,3);
                destruction(1);

                particleCount = rand.Range(0,2);
                destruction(4);
                
                Destroy(gameObject);
            }
        }

        if (temp.gameObject.name == "playerShip") {

            tempArray = shipParticles; //Assign correct particles.
            particleCount = rand.Range(50, 150);
            spread = 0;
            destruction(1); //Small.
            destruction(4); //Medium.
            destruction(7); //Large

            var dustCount : int = 200;

            while (dustCount >= 0) {

                dustCount--;
                Instantiate(tempArray[0], transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            }
        }

        Destroy(temp.gameObject);
    }
}

function destruction (arrayLocation : int) {

    var temp : int;

    if (spread == 0) {

        while (particleCount >= 0) {

            temp = rand.Range(arrayLocation, arrayLocation + 2);
            particleCount--;
            Instantiate(tempArray[arrayLocation], transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    else {

        while (particleCount >= 0) {

            temp = rand.Range(arrayLocation, arrayLocation + 2);
            particleCount--;
            Instantiate(tempArray[arrayLocation], transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
        }
    }

    DustSpawn(50);
}

function DustSpawn (dustCount : int) {

    var temp : int;

    while (dustCount >= 0) {

        dustCount--;
        temp = rand.Range(1, 2);

        if (temp == 1)
            Instantiate(tempArray[0], transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-dustCount, dustCount)));
        if (temp == 2)
            Instantiate(tempArray[0], transform.position, Quaternion.Euler(0, 0, (direction.rotation.z * 180.0) - rand.Range(-dustCount, dustCount)));
    }
}