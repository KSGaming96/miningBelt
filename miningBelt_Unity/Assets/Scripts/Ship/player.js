//File: Player.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/27/2017

/*
--Player.js holds player stats and controls game movement.
*/

#pragma strict

//Player base stat count
static var Shield : int = 0;
static var Hull : int = 0;
static var Health : int = 100;
static var Speed : int = 1;
static var Attack : int = 1;
static var Mobility : int = 1;
static var Cargo : int = 5;
static var FireRate : int = 1;

//Player bonus stat count
static var ShieldBonus : int = 0;
static var HullBonus : int = 0;
static var HealthBonus : int = 0;
static var SpeedBonus : int = 0;
static var AttackBonus : int = 0;
static var MobilityBonus : int = 0;
static var CargoBonus : int = 0;
static var FireRateBonus : int = 0;

//Player total stats.
static var totalHealth : int = Health + (HealthBonus * 50);
static var totalShield : int = Shield + ShieldBonus;
static var totalAttack : int = Attack + AttackBonus;
static var totalMobility : int = Mobility + MobilityBonus;
static var totalHull : int = Hull + HullBonus;
static var totalSpeed : int = Speed + SpeedBonus;
static var totalCargo : int = Cargo + CargoBonus;
static var totalFireRate : int = FireRate + FireRateBonus;

//Ore count
static var Copper : int = 0;
static var Silver : int = 0;
static var Gold : int = 0;
static var Diamond : int = 0;
static var Uranium : int = 0;
static var Silicon : int = 0;
static var Crystal : int = 0;
static var Magnesium : int = 0;
static var Fluorite : int = 0;
static var heldOre : int; //How much ore you have in the cargo bay. Can't be more than totalCargo.

static var Kascade : int = 250; //Kascade count (in-game currency)
static var currentHealth : int = 100;
static var currentHull : int = totalHull;
static var currentShield : int = totalShield;

//Updated values for the prices written on GUI.
static var repairAllPrice : int = 0;
static var repairHealthPrice : int = 0;
static var repairHullPrice : int = 0;
static var repairShieldPrice : int = 0;

//Global variables for ship level.
static var level2Bought = 0;
static var level3Bought = 0;
static var selectedLevel : int = 1; //Lets objects read what level is currently selected.

static var persistance = 1; //Persistance. Edited by developerButton.

private var TempRB : Rigidbody2D;
static var despawn : int = 0; //Tells stars when to despawn so memory isn't leaking everywhere.
static var playerDirection : float; //Global direction for projectileMovement. Holds last known rotation for player thrust.
static var speedVector : Vector2; //Global speed for projectileMovement. Adjusts particle speed with player speed.
static var spawnRangeX : Vector2; //Global spawnRangeX for closeSpawn and despawnRange. Denotes square spawn area.
static var spawnRangeY : Vector2; //Global spawnRangeY for closeSpawn and despawnRange. Denotes square spawn area.

function Start () {

    TempRB = this.GetComponent(Rigidbody2D); //Assigns own Rigidbody2D for easy script assigning.
}

function Update () {

    despawn = 0; //Turns despawnRange script's memory off.
    totalHealth = Health + (HealthBonus * 50);
    totalShield = Shield + ShieldBonus;
    totalAttack = Attack + AttackBonus;
    totalMobility = Mobility + MobilityBonus;
    totalHull = Hull + HullBonus;
    totalSpeed = Speed + SpeedBonus;
    totalCargo = Cargo + CargoBonus;
    totalFireRate = FireRate + FireRateBonus;

    repairHealthPrice = totalHealth - currentHealth;
    repairHullPrice = 50 * (totalHull - currentHull);
    repairShieldPrice = 50 * (totalShield - currentShield);
    repairAllPrice = repairHealthPrice + repairHealthPrice + repairShieldPrice;
}

function OnDestroy () { //Resets player variables. Death = fresh start unless developer mode is on.

    //Base stats reset no matter what since they depend on equipped parts. As a developer ship parts will still be unlocked if they were purchased.
    Shield = 0;
    Hull = 0;
    Health = 100;
    Speed = 1;
    Attack = 1;
    Mobility = 1;
    Cargo = 5;
    FireRate = 1;

    if (persistance == 1) { //Normal reset. Sets you cank to total defaults.

        level2Bought = 0;
        level3Bought = 0;
        Kascade = 250;
        Copper = 0;
        Silver = 0;
        Gold = 0;
        Diamond = 0;
        Uranium = 0;
        Silicon = 0;
        Crystal = 0;
        Magnesium = 0;
        Fluorite = 0;
        heldOre = 0;

        ShieldBonus = 0;
        HullBonus = 0;
        HealthBonus = 0;
        SpeedBonus = 0;
        AttackBonus = 0;
        MobilityBonus = 0;
        CargoBonus = 0;
        FireRateBonus = 0;
    }
}