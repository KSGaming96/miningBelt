//File: particleDestroy.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/23/2017

/*
--Assigns all particle objects, and destroys object with "flare" :D
--
--collision2D sees what object is running the script and destroys according to object.
--If collision detects player run PlayerDestruction().
--
--Nothing too special here. Just instantiation of particles in various ways and destruction of objects.
*/

#pragma strict

public var smallAsteroid : GameObject;
public var mediumAsteroid : GameObject;

//Object Particles
public var particleDust : GameObject;
public var smallParticle1 : GameObject;
public var smallParticle2 : GameObject;
public var smallParticle3 : GameObject;
public var particle1 : GameObject;
public var particle2 : GameObject;
public var particle3 : GameObject;
public var largeParticle1 : GameObject;
public var largeParticle2 : GameObject;
public var largeParticle3 : GameObject;

//Ship Particles
public var shipDust : GameObject;
public var smallShipParticle1 : GameObject;
public var smallShipParticle2 : GameObject;
public var smallShipParticle3 : GameObject;
public var shipParticle1 : GameObject;
public var shipParticle2 : GameObject;
public var shipParticle3 : GameObject;
public var largeShipParticle1 : GameObject;
public var largeShipParticle2 : GameObject;
public var largeShipParticle3 : GameObject;

private var rand : Random;
private var direction : Transform;
private var spawn : int = 0;

private var smallParticleCount : int;
private var mediumParticleCount : int;
private var largeParticleCount : int;

function OnTriggerEnter2D (temp : Collider2D) {

    direction = temp.transform;

    if (temp.gameObject.tag == "Projectile" || temp.gameObject.tag == "Player") {

        if (this.name == "smallAsteroid(Clone)") {

            smallParticleCount = rand.Range(2,8);
            SmallDestruction(0);
            Destroy(gameObject);
        }

        if (this.name == "mediumAsteroid(Clone)") {

            smallParticleCount = rand.Range(2,8);
            mediumParticleCount = rand.Range(1,6);
            MediumDestruction(0);
            SmallDestruction(7);

            Destroy(gameObject);
        }

        if (this.name == "largeAsteroid(Clone)") {

            smallParticleCount = rand.Range(2,8);
            mediumParticleCount = rand.Range(1,6);
            largeParticleCount = rand.Range(1,3);
            LargeDestruction(0);
            MediumDestruction(12);
            SmallDestruction(16);

            Destroy(gameObject);
        }

        if (this.tag == "asteroidParticle") {

            if (this.name == "asteroidPieceSmall1(Clone)" || this.name == "asteroidPieceSmall2(Clone)" || this.name == "asteroidPieceSmall3(Clone)") {

                DustSpawn(15);
                Destroy(gameObject);
            }

            if (this.name == "asteroidPiece1(Clone)" || this.name == "asteroidPiece2(Clone)" || this.name == "asteroidPiece3(Clone)") {

                smallParticleCount = rand.Range(0,3);
                SmallDestruction(2);
                Destroy(gameObject);
            }

            if (this.name == "asteroidPieceLarge1(Clone)" || this.name == "asteroidPieceLarge2(Clone)" || this.name == "asteroidPieceLarge3(Clone)") {

                smallParticleCount = rand.Range(0,3);
                mediumParticleCount = rand.Range(0,2);
                MediumDestruction(2);
                SmallDestruction(2);
                Destroy(gameObject);
            }
        }

        if (temp.gameObject.name == "playerShip") {

            PlayerDestruction();
        }

        Destroy(temp.gameObject);
    }
}

function SmallDestruction (spread : int) {

    var temp : int;

    if (spread == 0) {

        while (smallParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            smallParticleCount--;

            if (temp < 1)
                Instantiate(smallParticle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(smallParticle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(smallParticle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    else {

        while (smallParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            smallParticleCount--;

            if (temp < 1)
                Instantiate(smallParticle1, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 1 && temp < 2)
                Instantiate(smallParticle2, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 2)
                Instantiate(smallParticle3, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
        }
    }

    DustSpawn(50);
}

function MediumDestruction (spread : int) {

    var temp : int;

    if (spread == 0) {

        while (mediumParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            mediumParticleCount--;

            if (temp < 1)
                Instantiate(particle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(particle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(particle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    else {

        while (mediumParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            mediumParticleCount--;

            if (temp < 1)
                Instantiate(particle1, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 1 && temp < 2)
                Instantiate(particle2, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 2)
                Instantiate(particle3, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
        }
    }

    DustSpawn(75);
}

function LargeDestruction (spread : int) {

    var temp : int;

    if (spread == 0) {

        while (largeParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            largeParticleCount--;

            if (temp < 1)
                Instantiate(largeParticle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(largeParticle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(largeParticle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    else {

        while (largeParticleCount >= 0) {

            temp = rand.Range(1.0, 3.0);
            largeParticleCount--;

            if (temp < 1)
                Instantiate(largeParticle1, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 1 && temp < 2)
                Instantiate(largeParticle2, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
            if (temp >= 2)
                Instantiate(largeParticle3, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-spread, spread)));
        }
    }

    DustSpawn(100);
}

function PlayerDestruction() {

    var temp : int;
    var particleCount: int = rand.Range(100, 300);

    while (particleCount >= 0) {

        particleCount--;
        temp = rand.Range(1, 10);

        if (temp <= 5) {

            temp = rand.Range(1.0, 3.0);

            if (temp < 1)
                Instantiate(smallShipParticle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(smallShipParticle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(smallShipParticle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
        
        else if (temp > 5 && temp < 9) {

            temp = rand.Range(0, 3);

            if (temp < 1)
                Instantiate(shipParticle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(shipParticle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(shipParticle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }

        else if (temp >= 9) {

            temp = rand.Range(0, 3);

            if (temp < 1)
                Instantiate(largeShipParticle1, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 1 && temp < 2)
                Instantiate(largeShipParticle2, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
            if (temp >= 2)
                Instantiate(largeShipParticle3, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }

    var dustCount : int = 200;

    while (dustCount >= 0) {

        dustCount--;
        Instantiate(shipDust, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    }
}

function DustSpawn (dustCount : int) {

    var temp : int;

    while (dustCount >= 0) {

        dustCount--;
        temp = rand.Range(0, 6);

        if (temp >= 3)
            Instantiate(particleDust, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z  * 180.0) + rand.Range(-dustCount, dustCount)));
        if (temp < 3)
            Instantiate(particleDust, transform.position, Quaternion.Euler(0, 0, (direction.rotation.z * 180.0) - rand.Range(-dustCount, dustCount)));
    }
}