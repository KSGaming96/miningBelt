//File: energyEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Script with interaction to itemStorage for smart item stacking. Reads tag and assigns everything for weapon spawning and storage organization.
*/

#pragma strict

public var storage : GameObject[] = new GameObject[8];
private var weaponEquip : GameObject;
public var bottomGUI : GameObject;

var equipped : int = 0;

function Start () { //Changes initial slot state to 1 and finds type of weapon.

    var temp : int;

    if (gameObject.tag == "Energy")
        weaponEquip = gameObject.Find("energyEquip");
    if (gameObject.tag == "Missile") 
        weaponEquip = gameObject.Find("missileEquip");

    var i : int = 0;
    var change : int = 0;

    while (i < storage.length) {

        if (transform.position == storage[i].transform.position && change == 0) {

            bottomGUI.GetComponent(itemStorage).setArray1(i);
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

                bottomGUI.GetComponent(itemStorage).itemArray[i] = 0;

                if (gameObject.tag == "Energy")
                    bottomGUI.GetComponent(itemStorage).setEnergyEquip(1);
                else if (gameObject.tag == "Missile")
                    bottomGUI.GetComponent(itemStorage).setMissileEquip(1);

                change = 1;
            }
                
            i++;
        }
        
        this.transform.position = weaponEquip.transform.position;
        equipped = 1;
    }

    else if (temp == 1 && equipped == 1) {

        transform.position = storage[bottomGUI.GetComponent(itemStorage).openSlot()].transform.position;
        bottomGUI.GetComponent(itemStorage).setArray1(bottomGUI.GetComponent(itemStorage).openSlot());

        if (gameObject.tag == "Energy")
            bottomGUI.GetComponent(itemStorage).setEnergyEquip(0);
        else if (gameObject.tag == "Missile")
            bottomGUI.GetComponent(itemStorage).setMissileEquip(0);

        equipped = 0;
    }
}