//File: energyEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/22/2017

/*
--Script with interaction to itemStorage for smart item stacking. Reads tag and assigns everything for weapon spawning and storage organization.
*/

#pragma strict

public var storage : GameObject[] = new GameObject[8];
public var weaponArray : GameObject[] = new GameObject[4];

public var PlayerObject : GameObject;
public var bottomGUI : GameObject;
public var weaponSpawn : GameObject;
private var weaponSpawnLocation : GameObject;

private var FireRate : int;
private var Split : int = 0;
private var Spread : int = 0;
private var state : int;

var equipped : int = 0;

function Start () { //Changes slot states to 1 when item is present.

    var temp : int;
    var change : int = 0;
    var i : int = 0;

    while (i < storage.length) {

        if (this.transform.position == storage[i].transform.position && change == 0) {

            bottomGUI.GetComponent(itemStorage).itemArray[i] = 1;
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
        temp = bottomGUI.GetComponent(itemStorage).energyEquip;
    if (gameObject.tag == "Missile") 
        temp = bottomGUI.GetComponent(itemStorage).missileEquip;

    if (temp == 0) {

        while (i < bottomGUI.GetComponent(itemStorage).itemArray.length && change == 0) {

            if (transform.position == storage[i].transform.position) {

                setWeapon();
                bottomGUI.GetComponent(itemStorage).itemArray[i] = 0;
                change = 1;
            }
                
            i++;
        }
        
        this.transform.position = weaponSpawnLocation.transform.position;
        equipped = 1;
    }

    else if (temp == 1 && equipped == 1) {

        i = bottomGUI.GetComponent(itemStorage).openSlot();

        transform.position = storage[i].transform.position;
        bottomGUI.GetComponent(itemStorage).itemArray[i] = 1;

        if (gameObject.tag == "Energy")
            bottomGUI.GetComponent(itemStorage).energyEquip = 0;
        else if (gameObject.tag == "Missile")
            bottomGUI.GetComponent(itemStorage).missileEquip = 0;

        equipped = 0;
    }
}

function setWeapon() {

    if (gameObject.tag == "Energy") {

        weaponSpawnLocation = gameObject.Find("energyEquip");
        bottomGUI.GetComponent(itemStorage).energyEquip = 1;

        if (gameObject.name == "singleBlastObject") {

            weaponSpawn.GetComponent(projectileSpawn).EnergyWeapon = weaponArray[0].gameObject;
            weaponSpawn.GetComponent(projectileSpawn).energyFireRate = PlayerObject.GetComponent(Player).FireRate;
            state = 1;
        }

        else if (gameObject.name == "dualBlastObject") {

            weaponSpawn.GetComponent(projectileSpawn).EnergyWeapon = weaponArray[1].gameObject;
            weaponSpawn.GetComponent(projectileSpawn).energyFireRate = PlayerObject.GetComponent(Player).FireRate / 2.0;
            weaponSpawn.GetComponent(projectileSpawn).Burst = 2;
            state = 1;
        }

        else if (gameObject.name == "streamLaserObject") {

            weaponSpawn.GetComponent(projectileSpawn).EnergyWeapon = weaponArray[2].gameObject;
            weaponSpawn.GetComponent(projectileSpawn).energyFireRate = PlayerObject.GetComponent(Player).FireRate / 20.0;
            state = 1;
        }
    }
        
    if (gameObject.tag == "Missile") {

        weaponSpawnLocation = gameObject.Find("missileEquip");
        bottomGUI.GetComponent(itemStorage).missileEquip = 1;

        if (gameObject.name == "smallMissileObject") {

            weaponSpawn.GetComponent(projectileSpawn).MissileWeapon = weaponArray[3].gameObject;
            weaponSpawn.GetComponent(projectileSpawn).missileFireRate = PlayerObject.GetComponent(Player).FireRate * 2.0;
            state = 2;
        }
    }
}