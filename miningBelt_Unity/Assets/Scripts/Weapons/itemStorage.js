//File: itemStorage.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/22/2017

/*
--Holds all slot states for storage stacking.
*/

#pragma strict

static var itemArray : int[] = new int[8];
static var energyEquip : int;
static var missileEquip : int;

function Awake () { //Initialize array for all 0 states.

    var i : int = 0;

    energyEquip = 0;
    missileEquip = 0;
	
    while (i <= 7) {

        itemArray[i] = 0;
        i++;
    }
}

function openSlot() : int { //Returns number of the first slot with an open 0 state. Always flows 1 to 8.

    var i : int = 0;
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