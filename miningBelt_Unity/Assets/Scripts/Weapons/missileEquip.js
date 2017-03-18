//File: missileEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/15/2017

/*
--As of now just switches between slot 2 and missile equipment slot on mouse click
*/

#pragma strict

private var missileEquip : GameObject;

private var storage2 : GameObject;

var equipped : int = 0;

function Start () {

    storage2 = gameObject.Find("storage2");
    missileEquip = gameObject.Find("missileEquip");
}

function OnMouseDown() {

    if (equipped == 0) {

        this.transform.position.x = missileEquip.transform.position.x;
        this.transform.position.y = missileEquip.transform.position.y;

        equipped = 1;
    }

    else if (equipped == 1) {

        if (this.transform.position == missileEquip.transform.position) {
            
            this.transform.position.x = storage2.transform.position.x;
            this.transform.position.y = storage2.transform.position.y;

            equipped = 0;
        }
    }
}