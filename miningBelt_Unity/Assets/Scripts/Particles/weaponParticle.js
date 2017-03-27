//File: weaponParticle.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/24/2017

/*
--Attaches to bullets and spawn particles from them.
*/

#pragma strict

public var energyDust : GameObject;
public var energyTrail : GameObject;

private var dustTime : int;
private var trailTime : int;
private var rand : Random;
private var tempRotation : int;
private var spread : float;

function Start() {

    if (gameObject.name == "singleBlast(Clone)") {

        InvokeRepeating("dustSpawn", 0.2, 0.2);
        InvokeRepeating("trailSpawn", 0.05, 0.05);
        spread = 20.0;
    }
        
    if (gameObject.name == "dualBlast(Clone)") {

        InvokeRepeating("dustSpawn", 0.1, 0.1);
        InvokeRepeating("trailSpawn", 0.01, 0.01);
        spread = 40.0;
    }

    if (gameObject.name == "smallMissile(Clone)") {

        initialSpread();
        InvokeRepeating("dustSpawn", 0.05, 0.05);
        InvokeRepeating("trailSpawn", 0.1, 0.1);
        spread = 15.0;
    }
      
    tempRotation = transform.rotation.z;
    dustTime = 0.1;
    trailTime = 0.2;
}

function initialSpread () {

    var i : int = spread;
    var rotation : Quaternion = transform.rotation;

    while (i > 0) {

        rotation *= Quaternion.Euler(0, 0, 360 + rand.Range(-spread * 0.5, spread * 0.5));
        Instantiate(energyDust, transform.position, rotation);
        rotation = transform.rotation;
        i--;
    }
}

function dustSpawn () {

    var rotation : Quaternion = transform.rotation;
    rotation *= Quaternion.Euler(0, 0, 360 + rand.Range(-spread * 0.65, spread * 0.65));
    Instantiate(energyDust, transform.position, rotation);
}

function trailSpawn () {

    var rotation : Quaternion = transform.rotation;
    rotation *= Quaternion.Euler(0, 0, 360 + rand.Range(-spread * 0.25, spread * 0.25));

    Instantiate(energyTrail, transform.position, rotation);
}