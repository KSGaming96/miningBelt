//File: particleMovement.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 03/12/2017

/*
--Basic movement for particle system. Reads object tag and assigns movement needed.
*/

#pragma strict

public var RB : Rigidbody2D;

private var rand : Random;


function Start () {

    var Life : int;

    if (this.tag == "asteroidParticle") {

        RB.AddForce(transform.up * rand.Range(20.0, 40.0));
        RB.AddTorque(rand.Range(-200.0, 200.0));
        Life = rand.Range(2.0, 5.0);
    }

    if (this.tag == "shipParticle") {

        RB.AddForce(transform.up * rand.Range(30.0, 60.0));
        RB.AddTorque(rand.Range(-50.0, 50.0));
        Life = rand.Range(1.0, 5.0);
    }

    if (this.tag == "weaponParticle") {

        RB.AddForce(transform.up * rand.Range(10.0, 50.0));
        RB.AddTorque(rand.Range(-300.0, 300.0));
        Life = rand.Range(1.0, 3.0);
    }

    if (this.tag == "Ore") {

        RB.AddForce(transform.up * rand.Range(5.0, 20.0));
        RB.AddTorque(rand.Range(-3.0, 3.0));
    }

    if (Life > 0) {

        Destroy(gameObject, Life);
    }
}

function Update () {
    
}