//File: missileEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/18/2017

/*
--
*/

#pragma strict

public var storage : GameObject[] = new GameObject[8];
private var missileEquip : GameObject;
public var bottomGUI : GameObject;

var equipped : int = 0;

function Start () {

    missileEquip = gameObject.Find("missileEquip");

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

function OnMouseDown() {

    var i : int = 0;
    var change : int = 0;

    if (bottomGUI.GetComponent(itemStorage).missileEquip == 0) {

        while (i < bottomGUI.GetComponent(itemStorage).itemArray.length && change == 0) {

            if (transform.position == storage[i].transform.position) {

                bottomGUI.GetComponent(itemStorage).itemArray[i] = 0;
                bottomGUI.GetComponent(itemStorage).missileEquip = 1;
                change = 1;
            }
                
            i++;
        }
            
        this.transform.position = missileEquip.transform.position;
        equipped = 1;
    }

    else if (bottomGUI.GetComponent(itemStorage).missileEquip == 1 && equipped == 1) {

        transform.position = storage[bottomGUI.GetComponent(itemStorage).openSlot()].transform.position;
        bottomGUI.GetComponent(itemStorage).setArray1(bottomGUI.GetComponent(itemStorage).openSlot());
        bottomGUI.GetComponent(itemStorage).missileEquip = 0;
        equipped = 0;
    }
}