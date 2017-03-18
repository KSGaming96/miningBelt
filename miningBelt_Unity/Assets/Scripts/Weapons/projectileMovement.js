//File: projectileMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/12/2017

/*
--projectileMovement.js attaches to all bullet prefabs. The script moves them forward, then destroys them.
--
--Variables will be changed by projectileSpawner, depending on specs from energy weapon item, mods, and accessories.
--
--Spawns particles when collision with Destructible tagged object occurs.
*/

#pragma strict

public var PlayerObject : GameObject;
public var Collision : GameObject;
public var TempRB : Rigidbody2D;

public var weaponDust : GameObject;
public var weaponParticle : GameObject;

public var Speed = 2;
public var Life = 1;

private var rand : Random;
private var i : int = 1;
private var Initiate : int = 1;

function Start () {
    
    var Player : Component = GetComponent("playerShip");
    

    if (Life > 0) {

        Destroy(gameObject, Life);
    }
}

function Update () {

    if (Initiate == 1) {

        var tempVector : Vector3 = Vector3.up;
        Initiate = 0;
    }

    transform.Translate(Vector3.up * (Player.Speed + Speed) * Time.deltaTime);
}

function OnTriggerEnter2D (temp : Collider2D) {

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