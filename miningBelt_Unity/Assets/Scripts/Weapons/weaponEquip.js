//File: energyEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/23/2017

/*
--Script with interaction to itemStorage for smart item stacking. Reads tag and assigns everything for weapon spawning and storage organization.
*/

#pragma strict

public var storage : GameObject[] = new GameObject[8];
public var weaponArray : GameObject[] = new GameObject[4];

public var PlayerObject : GameObject;
public var bottomGUI : GameObject;
public var weaponSpawner : GameObject;
public var energyItemHolder : GameObject;
public var missileItemHolder : GameObject;
private var weaponItemLocation : GameObject;

private var playerScript : player;
private var itemStorageScript : itemStorage;
private var projectileSpawnScript : projectileSpawn;

private var FireRate : int;
private var Split : int = 0;
private var Spread : int = 0;
private var state : int;

var equipped : int = 0;

function Start () { //Changes slot states to 1 when item is present.

    var temp : int;
    var change : int = 0;
    var i : int = 0;
    playerScript = bottomGUI.GetComponent(player);
    itemStorageScript = bottomGUI.GetComponent(itemStorage);
    projectileSpawnScript = weaponSpawner.GetComponent(projectileSpawn);
    

    while (i < storage.length) {

        if (this.transform.position == storage[i].transform.position && change == 0) {

            itemStorageScript.itemArray[i] = 1;
            change = 1;
        }
            
        i++;
    }
}

function OnMouseDown() { //Checks multiple variables to see where the item needs to be moved. Storage slots read either 0 or 1, depending on what objects are in storage. 

    var temp : int;
    var i : int = 0;
    var change : int = 0;

    if (gameObject.tag == "Energy")
        temp = itemStorageScript.energyEquip;
    if (gameObject.tag == "Missile") 
        temp = itemStorageScript.missileEquip;

    if (temp == 0) {

        while (i < itemStorageScript.itemArray.length && change == 0) {

            if (transform.position == storage[i].transform.position) {

                setWeapon();
                itemStorageScript.itemArray[i] = 0;
                change = 1;
            }
                
            i++;
        }
        
        this.transform.position = weaponItemLocation.transform.position;
        equipped = 1;
    }

    else if (temp == 1 && equipped == 1) {

        i = itemStorageScript.openSlot();

        transform.position = storage[i].transform.position;
        itemStorageScript.itemArray[i] = 1;

        if (gameObject.tag == "Energy")
            itemStorageScript.energyEquip = 0;
        else if (gameObject.tag == "Missile")
            itemStorageScript.missileEquip = 0;

        equipped = 0;
    }
}

function setWeapon() {

    if (gameObject.tag == "Energy") {

        weaponItemLocation = energyItemHolder;
        itemStorageScript.energyEquip = 1;

        if (gameObject.name == "singleBlastObject") {

            projectileSpawnScript.EnergyWeapon = weaponArray[0].gameObject;
            projectileSpawnScript.energyFireRate = playerScript.FireRate;
            projectileSpawnScript.energySplit = 0;
            projectileSpawnScript.energySpread = 0;
            state = 1;
        }

        else if (gameObject.name == "dualBlastObject") {

            projectileSpawnScript.EnergyWeapon = weaponArray[1].gameObject;
            projectileSpawnScript.energyFireRate = playerScript.FireRate / 2.0;
            projectileSpawnScript.energySplit = 2;
            projectileSpawnScript.energySpread = 4;
            state = 1;
        }

        else if (gameObject.name == "streamLaserObject") {

            projectileSpawnScript.EnergyWeapon = weaponArray[2].gameObject;
            projectileSpawnScript.energyFireRate = playerScript.FireRate / 10.0;
            projectileSpawnScript.energySplit = 0;
            projectileSpawnScript.energySpread = 0;
            state = 1;
        }
    }
        
    if (gameObject.tag == "Missile") {

        weaponItemLocation = missileItemHolder;
        itemStorageScript.missileEquip = 1;

        if (gameObject.name == "smallMissileObject") {

            projectileSpawnScript.MissileWeapon = weaponArray[3].gameObject;
            projectileSpawnScript.missileFireRate = playerScript.FireRate * 2.0;
            projectileSpawnScript.missileSplit = 0;
            projectileSpawnScript.missileSpread = 0;
            state = 2;
        }
    }
}