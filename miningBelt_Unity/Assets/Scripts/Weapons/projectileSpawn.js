//File: projectileSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Spawns weapon object. Instantiates according to tag and equip states in itemStorage.
*/

#pragma strict

public var PlayerObject : GameObject;
public var bottomGUI : GameObject;
public var weaponArray : GameObject[] = new GameObject[2];
private var Weapon : GameObject;

private var FireRate : int;
private var Split : int = 0;
private var Spread : int = 0;
private var temp : float = 0.0;
private var state : int;

function Start () { //Setting initial variables depending on weapon type. Chooses what prefab to instantiate.

    if (gameObject.tag == "Energy") {

        Weapon = weaponArray[0].gameObject;
        FireRate = PlayerObject.GetComponent(Player).FireRate;
        state = 1;
    }
        
    if (gameObject.tag == "Missile") {

        Weapon = weaponArray[1].gameObject;
        FireRate = PlayerObject.GetComponent(Player).FireRate * 2;
        state = 2;
    } 
}

function Update () { //Checks if weapon is equipped depending on object tag. Spawns weapons if not unequipped.

    if (Input.GetButton("Fire")) {

        if (temp < Time.time) {

            temp = Time.time + FireRate;

            if (bottomGUI.GetComponent(itemStorage).energyEquip == 1 && state == 1
                || bottomGUI.GetComponent(itemStorage).missileEquip == 1 && state == 2) {

                if (Split == 0) {

                    Spawn();
                }
    
                else {

                    SplitSpawn();
                }
            }
        }
    }
}

function Spawn () { //Makes a single bullet up from player.

    Instantiate(Weapon, this.transform.position, PlayerObject.transform.rotation);
}

function SplitSpawn () { //Reads how many splits there are, and spawns the bullets Spread degrees apart.

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