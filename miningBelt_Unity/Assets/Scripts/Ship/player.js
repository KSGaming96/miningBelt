//File: Player.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/14/2017

/*
--Player.js holds player stats and controls game movement.
--
--17;34-- All global variables. Will add more function as game progresses.
--36;43-- All referenced objects.
--
--Turns ore into a variable on collision.
*/

#pragma strict

//Player base stat count
static var Shield : int = 2;
static var Hull : int = 1;
static var Health : int = 120;
static var Speed : int = 1;
static var Attack : int = 1;
static var Mobility : int = 3;
static var Cargo : int = 7;
static var FireRate : int = 1;

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

static var Kascade : int = 0; //Kascade count (in-game currency)

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
}

function OnDestroy () { //Resets player variables. Death = fresh start.

    Kascade = 0;
    Copper = 0;
    Silver = 0;
    Gold = 0;
    Diamond = 0;
    Uranium = 0;
    Silicon = 0;
    Crystal = 0;
    Magnesium = 0;
    Fluorite = 0;
}

function OnGUI () { //Prints ore numbers and Kascades on GUI.

    var gui : GUI; 
    
    var x : int = transform.position.x;
    var y : int = transform.position.y;

    //Prints Kascade amount and offsets depending on size of number.
    if (Kascade < 10)
        gui.Label (Rect (185, 575, 185, 575), "" + Kascade);
    if (Kascade >= 10 && Kascade < 100)
        gui.Label (Rect (178, 575, 178, 575), "" + Kascade);
    if (Kascade >= 100 && Kascade < 1000)
        gui.Label (Rect (171, 575, 171, 575), "" + Kascade);
    if (Kascade >= 1000 && Kascade < 10000)
        gui.Label (Rect (164, 575, 164, 575), "" + Kascade);
    if (Kascade >= 10000 && Kascade < 100000)
        gui.Label (Rect (157, 575, 157, 575), "" + Kascade);
    if (Kascade >= 100000 && Kascade < 1000000)
        gui.Label (Rect (150, 575, 150, 575), "" + Kascade);
    if (Kascade >= 1000000 && Kascade < 10000000)
        gui.Label (Rect (143, 575, 143, 575), "" + Kascade);

    //Prints ore number and offsets at 10 or above.
    if (Copper < 10)
        gui.Label (Rect (468, 534, 468, 534), "0" + Copper);
    if (Copper >= 10)
        gui.Label (Rect (468, 534, 468, 534), "" + Copper);
    if (Silver < 10)
        gui.Label (Rect (468, 547, 468, 547), "0" + Silver);
    if (Silver >= 10)
        gui.Label (Rect (468, 547, 468, 547), "" + Silver);
    if (Gold < 10)
        gui.Label (Rect (468, 560, 468, 560), "0" + Gold);
    if (Gold >= 10)
        gui.Label (Rect (468, 560, 468, 560), "" + Gold);
    if (Diamond < 10)
        gui.Label (Rect (468, 573, 468, 573), "0" + Diamond);
    if (Diamond >= 10)
        gui.Label (Rect (468, 573, 468, 573), "" + Diamond);
    if (Uranium < 10)
        gui.Label (Rect (560, 521, 560, 521), "0" + Uranium);
    if (Uranium >= 10)
        gui.Label (Rect (560, 521, 560, 521), "" + Uranium);
    if (Silicon < 10)
        gui.Label (Rect (560, 534, 560, 534), "0" + Silicon);
    if (Silicon >= 10)
        gui.Label (Rect (560, 534, 560, 534), "" + Silicon);
    if (Crystal < 10)
        gui.Label (Rect (560, 547, 560, 534), "0" + Crystal);
    if (Crystal >= 10)
        gui.Label (Rect (560, 547, 560, 534), "" + Crystal);
    if (Magnesium < 10)
        gui.Label (Rect (560, 560, 560, 560), "0" + Magnesium);
    if (Magnesium >= 10)
        gui.Label (Rect (560, 560, 560, 560), "" + Magnesium);
    if (Fluorite < 10)
        gui.Label (Rect (560, 573, 560, 573), "0" + Fluorite);
    if (Fluorite >= 10)
        gui.Label (Rect (560, 573, 560, 573), "" + Fluorite);
}