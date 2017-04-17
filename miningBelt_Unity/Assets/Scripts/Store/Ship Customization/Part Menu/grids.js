//File: grids.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/15/2017

/*
--
*/

#pragma strict

public var greenGrid : GameObject;

function OnTriggerEnter2D (temp : Collider2D) {
	
    if (temp.gameObject.tag == "shipPart") {


    }

    if (temp.gameObject.name == "shipEdge (Clone)") {

        gameObject.SetActive(false);
    }
}