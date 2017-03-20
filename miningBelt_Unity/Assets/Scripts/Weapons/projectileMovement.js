//File: projectileMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/19/2017

/*
--Attaches to all bullet prefabs. The script moves bullets forward, then destroys them.
--
--Variables will be changed on item equip, depending on specs from weapon items, mods, and accessories.
*/

#pragma strict

public var PlayerObject : GameObject;
public var weaponDust : GameObject;
public var weaponParticle : GameObject;

public var Speed = 2;
public var Life = 1;
private var rand : Random;
private var Initiate : int = 1;

function Start () {
    
    var Player : Component = GetComponent("playerShip");
    
    if (Life > 0) {

        Destroy(gameObject, Life);
    }
}

function Update () { //Basic upwards movement until Destroy.

    if (Initiate == 1) {

        var tempVector : Vector3 = Vector3.up;
        Initiate = 0;
    }

    transform.Translate(Vector3.up * (Player.Speed + Speed) * Time.deltaTime);
}

function OnTriggerEnter2D (temp : Collider2D) { //Reads collisions with destructible objects. Spawns weapon particles here.

    var dustCount = 50;
    var particleCount = 10;

    if (temp.gameObject.tag == "Destructible") {

        while (dustCount >= 0) {

            dustCount--;

            Instantiate(weaponDust, transform.position, Quaternion.Euler(0, 0, (transform.rotation.z * 180.0) + rand.Range(-25.0, 25.0)));
        }

        while (particleCount >= 0) {

            particleCount--;

            Instantiate(weaponParticle, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
        }
    }
}