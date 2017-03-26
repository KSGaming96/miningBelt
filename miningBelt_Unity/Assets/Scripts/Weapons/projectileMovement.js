//File: projectileMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/26/2017

/*
--Attaches to all bullet prefabs. The script moves bullets forward, then destroys them.
--
--Variables will be changed on item equip, depending on specs from weapon items, mods, and accessories.
*/

#pragma strict

public var PlayerObject : GameObject;
public var DirectionObject : GameObject;
public var weaponDust : GameObject;
public var weaponParticle : GameObject;

private var playerScript : player;
private var rand : Random;

public var Speed : float;
public var Life : float;

private var overallSpeed : float; //Bullet speed x player velocity.
private var rotation : float; //The direction of the bullet.
private var relativeSpeed : float; //Player speed x rotationDifference. Slows bullets when not going in player direction. (beta)
private var rotationDifference : float; //Float between 0 and 1 that shows how far bullet's rotations are from player direction. (beta)

function Start () {

    playerScript = PlayerObject.GetComponent(player);
    rotation = transform.rotation.z;
    if (Life > 0)
        Destroy(gameObject, Life);
}

function Update () { //Complex movement for projectile speed adjusting to Player velocity until Destroy.

    rotationMath();
    
    if (gameObject.name == "streamLaser(Clone)")
        transform.Translate(PlayerObject.transform.up * (relativeSpeed * Time.deltaTime));
    else
        transform.Translate(PlayerObject.transform.up * ((overallSpeed + Speed) * Time.deltaTime));
}

function rotationMath () { //Beta. Running into so many issues with this.

    overallSpeed = playerScript.Speed * Mathf.Abs(playerScript.speedVector.y) + Mathf.Abs(playerScript.speedVector.x);
    rotationDifference = Mathf.Abs(1 - Mathf.Round(Mathf.Abs((playerScript.playerDirection - rotation) * 1000)) / 1000);
    relativeSpeed = (overallSpeed * rotationDifference) + Speed;
}

function OnTriggerEnter2D (temp : Collider2D) { //Reads collisions with destructible objects. Spawns weapon particles here.

    var dustCount = 50;
    var particleCount = 10;

    if (temp.gameObject.tag == "Destructible" || temp.gameObject.tag == "asteroidParticle") {

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