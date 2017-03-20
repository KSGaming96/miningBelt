//File: Player.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Player.js holds player stats and controls game movement.
--
--17;34-- All global variables. Will add more function as game progresses.
--36;43-- All referenced objects.
--
--Turns ore into a variable on collision.
*/

#pragma strict

static var Shield : int = 2;
static var Hull : int = 1;
static var Health : int = 120;
static var Speed : int = 1;
static var Attack : int = 1;
static var Mobility : int = 3;
static var Cargo : int = 7;
static var FireRate : int = 1;

static var Copper : int = 0;
static var Silver : int = 0;
static var Gold : int = 0;
static var Diamond : int = 0;
static var Uranium : int = 0;
static var Silicon : int = 0;
static var Crystal : int = 0;
static var Magnesium : int = 0;
static var Fluorite : int = 0;

public var CameraObject : GameObject;
public var GUI : GameObject;
public var Items : GameObject;

public var TempRB : Rigidbody2D;
public var GUIRB : Rigidbody2D;
public var ItemsRB : Rigidbody2D;
public var CameraRB : Rigidbody2D;

var fontStyle : GUIStyle;

function Start () {
	
    var Camera : Component = CameraObject.GetComponent("mainCamera");
}

function Update () { // Movement. Upward thrust and references RotateAround

    var RotationUpRange : Quaternion = Quaternion.Euler(0, 0, 4);
    var RotationDownRange : Quaternion = Quaternion.Euler(0, 0, -4);
	
    if (Input.GetAxis("Vertical") == 1) {

        TempRB.AddForce(transform.up * (50 * Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
        GUIRB.AddForce(transform.up * (50 * Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
        CameraRB.AddForce(transform.up * (50 * Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
        ItemsRB.AddForce(transform.up * (50 * Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
    
        if (Input.GetAxis("Horizontal") != 0) {

            RotateAround();
        }  
    }

    else {

        RotateAround();
    }   
} 

function RotateAround() { //Player rotation function.

    transform.RotateAround(transform.position, Vector3.forward, (50 * Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
    CameraObject.transform.RotateAround(transform.position, Vector3.forward, (50 * Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
    GUI.transform.RotateAround(transform.position, Vector3.forward, (50 * Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
    Items.transform.RotateAround(transform.position, Vector3.forward, (50 * Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
}

function OnTriggerEnter2D (temp : Collider2D) { //Increments ore on collision and destroys ore.

    if (temp.gameObject.tag == "Ore") {

        if (temp.gameObject.name == "copperOre(Clone)")
            Copper++;
        if (temp.gameObject.name == "silverOre(Clone)")
            Silver++;
        if (temp.gameObject.name == "goldOre(Clone)")
            Gold++;
        if (temp.gameObject.name == "diamondOre(Clone)")
            Diamond++;
        if (temp.gameObject.name == "uraniumOre(Clone)")
            Uranium++;
        if (temp.gameObject.name == "siliconOre(Clone)")
            Silicon++;
        if (temp.gameObject.name == "crystalOre(Clone)")
            Crystal++;
        if (temp.gameObject.name == "magnesiumOre(Clone)")
            Magnesium++;
        if (temp.gameObject.name == "fluoriteOre(Clone)")
            Fluorite++;
        
        Destroy(temp.gameObject);
    }
}

function OnGUI () { //Prints ore numbers on GUI

    var gui : GUI; 
    
    var x : int = transform.position.x;
    var y : int = transform.position.y;

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