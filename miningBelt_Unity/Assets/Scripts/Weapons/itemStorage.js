//File: itemStorage.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/18/2017

/*
--Holds all item states for sorting
*/

#pragma strict

static var itemArray : int[] = new int[8];
static var energyEquip : int;
static var missileEquip : int;

function Start () {

    energyEquip = 0;
    missileEquip = 0;

    var i : int = 0;
	
    while (7 >= i) {
        itemArray[i] = 0;
        i++;
    }
}

function setArray1(arrayLocation : int) {

    itemArray[arrayLocation] = 1;
}

function setArray0(arrayLocation : int) {

    itemArray[arrayLocation] = 0;
}

function openSlot() : int {

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