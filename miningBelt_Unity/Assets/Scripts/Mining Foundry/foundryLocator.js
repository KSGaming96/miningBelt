//File: foundryLocator.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/02/2017

/*
--Rotates foundryLocator so you never lose home.
*/

#pragma strict

public var PlayerObject : GameObject;
public var centerObject : GameObject;
public var foundryOreHolderObject : GameObject;

function Update () {
    
    if (PlayerObject != null) //Points to foundryCenter
        transform.up = centerObject.transform.position - PlayerObject.transform.position;
    else //Removes collider on PlayerObject destroy.
        transform.position = foundryOreHolderObject.transform.position;;
}