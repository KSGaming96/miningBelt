//File: projectileSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/18/2017

/*
--Spawns weapon object. Instantiates according to tag and equip states in itemStorage. Attaches to weapon item.
--
--Prints weapon reload on status bars.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var bottomGUI : GameObject;
public var barScalerObject : GameObject;
private var statusBarScaleScript : statusBarScale;

static var EnergyWeapon : GameObject;
static var MissileWeapon : GameObject;

private var itemStorageScript : itemStorage;
private var weaponPartsParent : GameObject;

static var energySplit : int = 0;
static var missileSplit : int = 0;
static var energySpread : int = 0;
static var missileSpread : int = 0;
static var Burst : int = 0;
static var energyFireRate : float;
static var missileFireRate : float;

function Start () {
    
    weaponPartsParent = GameObject.Find("WeaponParts");
    playerScript = PlayerObject.GetComponent(player);
    statusBarScaleScript = barScalerObject.GetComponent(statusBarScale);
    itemStorageScript = bottomGUI.GetComponent(itemStorage);
}

function Update () { //Checks if weapon is equipped depending on object tag. Spawns weapons if not unequipped.

    if (Input.GetButton("Fire")) { //If reloading is finished fires bullet. If not waits until it's done.
        if (PlayerObject != null) {

            if (itemStorageScript.energyEquip == 1) {
                if (statusBarScaleScript.energyReloaded == 1) {
                    statusBarScaleScript.energyReloaded = 0;

                    if (energySplit == 0)
                        energySpawn();
                    else 
                        SplitSpawn();
                } 
            }

            if (itemStorageScript.missileEquip == 1) {
                if (statusBarScaleScript.missileReloaded == 1) {
                    statusBarScaleScript.missileReloaded = 0;
                    
                    if (missileSplit == 0)
                        missileSpawn();
                    else 
                        SplitSpawn();
                }
            }
        } 
    }
}

function energySpawn () { //Makes a single bullet up from player.

    var rotation : Quaternion = PlayerObject.transform.rotation;
    Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
}

function missileSpawn () { //Makes a single bullet up from player.

    var rotation : Quaternion = PlayerObject.transform.rotation;
    Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);
}

function SplitSpawn () { //Reads how many splits there are, and spawns the bullets Spread degrees apart.

    var i : int;
    var rotation : Quaternion = PlayerObject.transform.rotation;

    if (energySplit == 1 || missileSplit == 1) {

        i = 2;

        while (i >= -2) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * (energySpread + missileSpread)));

            if (itemStorageScript.energyEquip == 1 && energySplit == 1)
                Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
            if (itemStorageScript.missileEquip == 1 && missileSplit == 1)
                Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);
            
            i -= 4;
        }
    }

    if (energySplit == 2 || missileSplit == 2) {

        i = 2;

        rotation = PlayerObject.transform.rotation;
        if (itemStorageScript.energyEquip == 1 && energySplit == 2)
            Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
        if (itemStorageScript.missileEquip == 1 && missileSplit == 2)
            Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);

        while (i >= -2) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * (energySpread + missileSpread)));

            if (itemStorageScript.energyEquip == 1 && energySplit == 2)
                Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
            if (itemStorageScript.missileEquip == 1 && missileSplit == 2)
                Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);

            i -= 4;
        }
    }

    if (energySplit == 4 || missileSplit == 4) {

        i = 6;

        rotation = PlayerObject.transform.rotation;
        if (itemStorageScript.energyEquip == 1 && energySplit == 4)
            Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
        if (itemStorageScript.missileEquip == 1 && missileSplit == 4)
            Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);

        while (i >= -6) {

            rotation = PlayerObject.transform.rotation;
            rotation *= Quaternion.Euler(0, 0, 360 - (i * (energySpread + missileSpread)));

            if (itemStorageScript.energyEquip == 1 && energySplit == 4)
                Instantiate(EnergyWeapon, transform.position, rotation, weaponPartsParent.transform);
            if (itemStorageScript.missileEquip == 1 && missileSplit == 4)
                Instantiate(MissileWeapon, transform.position, rotation, weaponPartsParent.transform);

            i -= 4;
        }
    }
}