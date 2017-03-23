//File: projectileSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/22/2017

/*
--Spawns weapon object. Instantiates according to tag and equip states in itemStorage. Attaches to weapon item.
*/

#pragma strict

public var PlayerObject : GameObject;
public var bottomGUI : GameObject;
static var EnergyWeapon : GameObject;
static var MissileWeapon : GameObject;

static var Split : int = 0;
static var Spread : int = 0;
static var Burst : int = 0;
static var energyFireRate : float;
static var missileFireRate : float;
private var energyTime : float = 0.0;
private var missileTime : float = 0.0;

function Update () { //Checks if weapon is equipped depending on object tag. Spawns weapons if not unequipped.

    if (Input.GetButton("Fire")) {

        if (bottomGUI.GetComponent(itemStorage).energyEquip == 1) {

            if (energyTime < Time.time) {

                energyTime = Time.time + energyFireRate;
                
                if (Split == 0)
                    energySpawn();
                else 
                    SplitSpawn();
            } 
        }

        if (bottomGUI.GetComponent(itemStorage).missileEquip == 1) {

            if (missileTime < Time.time) {

                missileTime = Time.time + missileFireRate;
                if (Split == 0)
                    missileSpawn();
                else 
                    SplitSpawn();
            }
        }    
    }
}

function energySpawn () { //Makes a single bullet up from player.

    var rotation : Quaternion = PlayerObject.transform.rotation;
    Instantiate(EnergyWeapon, this.transform.position, rotation);
}

function missileSpawn () { //Makes a single bullet up from player.

    var rotation : Quaternion = PlayerObject.transform.rotation;
    Instantiate(MissileWeapon, this.transform.position, rotation);
}

function SplitSpawn () { //Reads how many splits there are, and spawns the bullets Spread degrees apart.

    var i : int;
    var rotation : Quaternion = PlayerObject.transform.rotation;

    if (Split == 1) {

        i = 2;

        while (i >= -2) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * Spread));

            if (bottomGUI.GetComponent(itemStorage).energyEquip == 1)
                Instantiate(EnergyWeapon, this.transform.position, rotation);
            if (bottomGUI.GetComponent(itemStorage).missileEquip == 1)
                Instantiate(MissileWeapon, this.transform.position, rotation);
            
            i -= 4;
        }
    }

    if (Split == 2) {

        i = 2;

        rotation = PlayerObject.transform.rotation;
        if (bottomGUI.GetComponent(itemStorage).energyEquip == 1)
            Instantiate(EnergyWeapon, this.transform.position, rotation);
        if (bottomGUI.GetComponent(itemStorage).missileEquip == 1)
            Instantiate(MissileWeapon, this.transform.position, rotation);

        while (i >= -2) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * Spread));

            if (bottomGUI.GetComponent(itemStorage).energyEquip == 1)
                Instantiate(EnergyWeapon, this.transform.position, rotation);
            if (bottomGUI.GetComponent(itemStorage).missileEquip == 1)
                Instantiate(MissileWeapon, this.transform.position, rotation);

            i -= 4;
        }
    }

    if (Split == 4) {

        i = 6;

        rotation = PlayerObject.transform.rotation;
        if (bottomGUI.GetComponent(itemStorage).energyEquip == 1)
            Instantiate(EnergyWeapon, this.transform.position, rotation);
        if (bottomGUI.GetComponent(itemStorage).missileEquip == 1)
            Instantiate(MissileWeapon, this.transform.position, rotation);

        while (i >= -6) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * Spread));

            if (bottomGUI.GetComponent(itemStorage).energyEquip == 1)
                Instantiate(EnergyWeapon, this.transform.position, rotation);
            if (bottomGUI.GetComponent(itemStorage).missileEquip == 1)
                Instantiate(MissileWeapon, this.transform.position, rotation);

            i -= 4;
        }
    }
}