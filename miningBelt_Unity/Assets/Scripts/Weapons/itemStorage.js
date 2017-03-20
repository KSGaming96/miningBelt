//File: itemStorage.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Holds all slot states for storage stacking.
*/

#pragma strict

static var itemArray : int[] = new int[8];
static var energyEquip : int;
static var missileEquip : int;

function Start () { //Initialize array for all 0 states.

    energyEquip = 0;
    missileEquip = 0;

    var i : int = 0;
	
    while (7 >= i) {
        itemArray[i] = 0;
        i++;
    }
}

function setArray1(arrayLocation : int) { //Array setter

    itemArray[arrayLocation] = 1;
}

function setArray0(arrayLocation : int) { //Array setter

    itemArray[arrayLocation] = 0;
}

function setEnergyEquip(temp : int) { //Equipped Setter

    energyEquip = temp;
}

function setMissileEquip(temp : int) { //Equipped setter

    missileEquip = temp;
}

function openSlot() : int { //Returns number of the first slot with an open 0 state. Always flows 1 to 8.

    var i : int;
    var location : int;
    var change : int = 0;

    while (i < itemArray.length && change == 0) {

        if (itemArray[i] == 0) {

            location = i;
            change = 1;
        }
        i++;
    }

    return location;
}