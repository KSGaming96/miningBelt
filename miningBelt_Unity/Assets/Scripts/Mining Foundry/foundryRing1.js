//File: foundryRing1.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/02/2017

/*
--Spins foundryRing1
*/

#pragma strict

private var RB : Rigidbody2D;

function Start () {
	
    RB = this.GetComponent(Rigidbody2D);
    RB.AddTorque(-3);
}