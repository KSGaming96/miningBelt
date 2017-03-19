//File: projectileSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Spawns weapon object. Instantiates according to tag and equip states in itemStorage.
--
--Spawn() makes a single bullet up from player.
--SplitSpawn() reads how many splits there are, and spawns the bullets Spread degrees apart.
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

function Start () {

    if (gameObject.name == "Energy") {

        Weapon = weaponArray[0].gameObject;
        FireRate = 10 * PlayerObject.GetComponent(Player).FireRate;
        state = 1;
    }
        
    if (gameObject.tag == "Missile") {

        Weapon = weaponArray[1].gameObject;
        FireRate = 5 * PlayerObject.GetComponent(Player).FireRate;
        state = 2;
    } 
}

function Update () {

    var weaponSelection : GameObject;

    if (Input.GetButton("Fire")) {

        if (temp < Time.time) {

            temp = Time.time + (10 / FireRate);

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