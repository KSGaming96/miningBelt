//File: projectileSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/10/2017

/*
--projectileSpawn.js
--
--Spawns weapon object. Needs to be modular and accept variables for all future weapon objects.
--
--Spawn() makes a single bullet up from player.
--SplitSpawn() reads how many splits there are, and spawns the bullets Spread degrees apart.
*/

#pragma strict

public var ProjectileParent : GameObject;
public var PlayerObject : GameObject;
public var Weapon : GameObject;

public var FireRate : float;
public var Split : int;
public var Spread : int;

private var temp : float = 0.0;
private var i : int = 0;

function Update () {

    if (Input.GetButton("Fire")) {

        if (temp < Time.time) {

            temp = Time.time + (10 / FireRate);

            if (Split == 0) {

                Spawn();
            }
    
            else {

                SplitSpawn();
            }
        }
    }
}

function Spawn () {

    Instantiate(Weapon, this.transform.position, PlayerObject.transform.rotation);
}

function SplitSpawn () {

    var rotation : Quaternion = PlayerObject.transform.rotation;

    if (Split == 1) {

        rotation *= Quaternion.Euler(0, 0, 2 * Spread);
        Instantiate(Weapon, this.transform.position, rotation);

        rotation = PlayerObject.transform.rotation;
        rotation *= Quaternion.Euler(0, 0, 360 - (2 * Spread));
        Instantiate(Weapon, this.transform.position, rotation);
    }

    if (Split == 2) {

        Instantiate(Weapon, this.transform.position, rotation);

        rotation *= Quaternion.Euler(0, 0, 2 * Spread);
        Instantiate(Weapon, this.transform.position, rotation);

        rotation = PlayerObject.transform.rotation;
        rotation *= Quaternion.Euler(0, 0, 360 - 2 * Spread);
        Instantiate(Weapon, this.transform.position, rotation);
    }

    if (Split == 4) {

    Instantiate(Weapon, this.transform.position, rotation);

    rotation *= Quaternion.Euler(0, 0, 2 * Spread);
    Instantiate(Weapon, this.transform.position, rotation);

    rotation = PlayerObject.transform.rotation;
    rotation *= Quaternion.Euler(0, 0, 4 * Spread);
    Instantiate(Weapon, this.transform.position, rotation);

    rotation = PlayerObject.transform.rotation;
    rotation *= Quaternion.Euler(0, 0, 360 - (2 * Spread));
    Instantiate(Weapon, this.transform.position, rotation);

    rotation = PlayerObject.transform.rotation;
    rotation *= Quaternion.Euler(0, 0, 360 - (4 * Spread));
    Instantiate(Weapon, this.transform.position, rotation);
    }
}