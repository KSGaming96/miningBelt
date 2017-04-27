//File: storeClose.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/27/2017

/*
--Closes all menus when the store is closed. The store opens up as the basic menu.
*/

#pragma strict

//Store Menu Objects.
public var weaponShopActiveObject : GameObject;
public var itemShopActiveObject : GameObject;
public var shipUpgradesActiveObject : GameObject;
public var shipCustomizationActiveObject : GameObject;

//Store tabs.
public var shipUpgradesObject : GameObject;
public var shipCustomizationObject : GameObject;

//Ship repair menu objects.
public var healthRepairObject : GameObject;
public var hullRepairObject : GameObject;
public var shieldRepairObject : GameObject;

function OnDisable () {
	
    //Ship Menu gets closed.
    weaponShopActiveObject.SetActive(false);
    itemShopActiveObject.SetActive(false);
    shipUpgradesActiveObject.SetActive(false);
    shipCustomizationActiveObject.SetActive(false);

    //Store tabs are closed.
    shipUpgradesObject.SetActive(false);
    shipCustomizationObject.SetActive(false);

    //Ship repair menu goes back to default.
    healthRepairObject.SetActive(false);
    hullRepairObject.SetActive(false);
    shieldRepairObject.SetActive(false);
}