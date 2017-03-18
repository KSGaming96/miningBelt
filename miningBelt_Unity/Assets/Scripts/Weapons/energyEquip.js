//File: energyEquip.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/15/2017

/*
--As of now just switches between slot 1 and energy equipment slot on mouse click
*/

#pragma strict

private var storage1 : GameObject;
private var energyEquip : GameObject;

var equipped : int = 0;

function Start () {

    storage1 = gameObject.Find("storage1");
    energyEquip = gameObject.Find("energyEquip");
}

function OnMouseDown() {

    if (equipped == 0) {

        if (this.transform.position.x == storage1.transform.position.x) {
            
            this.transform.position.x = energyEquip.transform.position.x;
            this.transform.position.y = energyEquip.transform.position.y;

            equipped = 1;
        }
    }

    else if (equipped == 1) {

        if (this.transform.position == energyEquip.transform.position){
            
            this.transform.position.x = storage1.transform.position.x;
            this.transform.position.y = storage1.transform.position.y;

            equipped = 0;
        }
    }
}