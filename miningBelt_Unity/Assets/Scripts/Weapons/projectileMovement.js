//File: projectileMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/22/2017

/*
--Attaches to all bullet prefabs. The script moves bullets forward, then destroys them.
--
--Variables will be changed on item equip, depending on specs from weapon items, mods, and accessories.
*/

#pragma strict

public var PlayerObject : GameObject;
public var weaponDust : GameObject;
public var weaponParticle : GameObject;

public var Speed : float;
public var Life : float;

private var rotation : float;
private var relativeSpeed : int;
private var rotationDifference : int;
private var floatRotation : int;
private var playerRotation : float;
private var overallSpeed : int;
private var rand : Random;
private var temp : int = 1;

function Start () {

    rotation = transform.rotation.z;
    if (Life > 0)
        Destroy(gameObject, Life);
}

function Update () { //Complex movement for projectile speed adjusting to Player velocity until Destroy.

     playerRotation = PlayerObject.transform.rotation.z;
     overallSpeed = (Mathf.Abs(PlayerObject.GetComponent(Player).speedVector.y) + Mathf.Abs(PlayerObject.GetComponent(Player).speedVector.x)) * PlayerObject.GetComponent(Player).Speed;

     if (Input.GetAxis("Vertical") == 1)
         rotation = transform.rotation.z;

    if (rotation >= 0.0 || rotation < 0.0) { //Checks all rotations from -180.0 to 180.0

        rotationDifference = Mathf.Abs((rotation * 180.0) - (playerRotation * 180.0)); //Rotation is stored in 180 to -180 floating. Getting distance between rotations as speed modifier.
        if (rotationDifference > 180.0) {
            rotationDifference = 360.0 - rotationDifference;
        }
    }

    floatRotation = 1.0 - Mathf.Abs(rotationDifference / 180);
    relativeSpeed = (overallSpeed * floatRotation) + Speed;
    transform.Translate(transform.position.up * relativeSpeed * Time.deltaTime);
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