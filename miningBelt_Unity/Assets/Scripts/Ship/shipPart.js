//File: shipPart.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/18/2017

/*
--Controls ship parts.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

public var shipEdgeObject : GameObject;
public var shipPartsParent : GameObject;

private var tempVector : Vector3;
private var tempObject : GameObject;

function Start () { //Set variables and spawn edges.

    playerScript = PlayerObject.GetComponent(player);
    tempVector = transform.position;
    shipPartsParent = GameObject.Find("ShipParts");

    //Register Bodies.

    //Level 1.
    if (name == "AcornPod") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.087;
        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "CrewPod") {

        playerScript.Hull += 1;
        playerScript.currentHull += 1;
        playerScript.Cargo += 1;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.087;
        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "DeltaPod") {

        playerScript.Attack += 2;

        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Phaser") {

        playerScript.FireRate += 2;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.087;
        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "SideSlinger") {

        playerScript.Hull += 1;
        playerScript.currentHull += 1;
        playerScript.Cargo += 1;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Vampire") {

        playerScript.Speed += 2;
        playerScript.Mobility += 2;

        tempVector.x -= 0.165;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.330;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Slimline") {

        playerScript.Cargo += 2;
        playerScript.Health += 100;
        playerScript.currentHealth += 100;

        tempVector.y -= 0.079;
        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.088;
        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    //Level 2.
    if (name == "Arachnid") {

        playerScript.Mobility += 4;
        playerScript.Speed -= 1;
        
        tempVector.y -= 0.087;
        tempVector.x -= 0.08;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        tempVector.x += 0.16;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Barb") {

        playerScript.Speed += 3;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Beast") {

        playerScript.Cargo += 3;
        playerScript.Health += 150;
        playerScript.currentHealth += 150;

        tempVector.y += 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.16;
        tempVector.x -= 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "CargoPod") {

        playerScript.Cargo += 5;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Cicada") {

        playerScript.Shield += 3;
        playerScript.currentShield += 3;
        playerScript.FireRate += 2;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "HawkTalon") {

        playerScript.Speed += 4;
        playerScript.Attack += 3;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "SliceDrone") {

        playerScript.Hull += 3;
        playerScript.currentHull += 3;
        playerScript.Shield += 3;
        playerScript.currentShield += 3;
        playerScript.Cargo += 2;

        tempVector.y += 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.16;
        tempVector.x -= 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    //Level 3.
    if (name == "MidgeFly") {

        playerScript.Speed += 10;
        playerScript.Mobility -= 3;

        tempVector.y -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        tempVector.x -= 0.16;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        tempVector.x += 0.32;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "BattleCry") {

        playerScript.Attack += 10;
        playerScript.Health += 250;
        playerScript.currentHealth += 250;

        tempVector.y -= 0.08;
        tempVector.x -= 0.166;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.332;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.086;
        tempVector.x -= 0.244;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        tempVector.x += 0.16;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Toadstool") {

        playerScript.Hull += 5;
        playerScript.currentHull += 5;
        playerScript.Cargo += 10;

        tempVector.y += 0.08;
        tempVector.x -= 0.166;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.332;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.16;
        tempVector.x -= 0.332;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.332;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y -= 0.086;
        tempVector.x -= 0.244;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        tempVector.x += 0.16;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "Vector") {

        playerScript.FireRate += 10;
        playerScript.Attack += 5;
        playerScript.Speed += 5;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "X_Factor") {

        playerScript.Shield += 10;
        playerScript.currentShield += 10;
        playerScript.Attack += 5;
        playerScript.FireRate += 5;

        tempVector.y -= 0.08;
        tempVector.x -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.17;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.085;
        tempVector.y -= 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    //Register Wings.

    //Level 1.
    if (name == "BatWing") {

        playerScript.Mobility += 1;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "HornWing") {

        playerScript.Cargo += 1;

        if (transform.rotation.y == 0) {

            tempVector.x -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
            tempVector.x += 0.087;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        }
        
        else {

            tempVector.x += 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
            tempVector.x -= 0.087;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        }
    }

    if (name == "Piper") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "SpikeWing") {

        playerScript.Attack += 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "StockWing") {

        playerScript.Mobility += 2;
        playerScript.Hull += 1;
        playerScript.currentHull += 1;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "TailFin") {

        playerScript.Speed += 2;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "V_Wing") {

        playerScript.Health += 50;
        playerScript.currentHealth += 50;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    //Level 2.
    if (name == "AngelWing") {

        playerScript.Health += 200;
        playerScript.currentHealth += 200;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.166;
        else
            tempVector.x += 0.166;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "BackSlash") {

        playerScript.Attack += 5;
        playerScript.Speed -= 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y -= 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "DeltaWing") {

        playerScript.Mobility += 6;

        if (transform.rotation.y == 0) {

            tempVector.y += 0.08;
            tempVector.x -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
            tempVector.y -= 0.16;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        }
        
        else {

            tempVector.y += 0.08;
            tempVector.x += 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
            tempVector.y += 0.16;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        }
    }

    if (name == "Machete") {

        playerScript.Cargo += 4;
        playerScript.Hull += 2;
        playerScript.currentHull += 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.166;
        else
            tempVector.x += 0.166;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "FangWing") {

        playerScript.Attack += 6;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y -= 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "RibbedWing") {

        playerScript.Shield += 8;
        playerScript.currentShield += 8;
        playerScript.Speed -= 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.166;
        else
            tempVector.x += 0.166;

        tempVector.y -= 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Cutlass") {

        playerScript.FireRate += 8;
        playerScript.Attack -= 2;

        if (transform.rotation.y == 0) {

            tempVector.x -= 0.08;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
            tempVector.x -= 0.086;
            tempVector.y += 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        }
        
        else {

            tempVector.x += 0.08;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
            tempVector.x += 0.086;
            tempVector.y += 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        }
    }

    if (name == "RazerWing") {

        playerScript.Speed += 2;
        playerScript.Cargo += 4;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.166;
        else
            tempVector.x += 0.166;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Tentacle") {

        playerScript.Mobility += 8;
        playerScript.Speed -= 4;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.166;
        else
            tempVector.x += 0.166;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    //Level 3.
    if (name == "CobraWing") {

        playerScript.Shield += 12;
        playerScript.currentShield += 12;
        playerScript.Hull -= 4;
        playerScript.currentHull -= 4;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Pulsar") {

        playerScript.Attack += 14;
        playerScript.Health -= 150;
        playerScript.currentHealth += 150;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "Armory") {

        playerScript.Attack += 10;

        if (transform.rotation.y == 0) {

            tempVector.x -= 0.244;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
            tempVector.x += 0.084;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
            tempVector.x += 0.32;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        }

        else {

            tempVector.x += 0.244;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
            tempVector.x -= 0.084;
            tempVector.y -= 0.087;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
            tempVector.x -= 0.32;
            Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
        }
    }

    if (name == "RathiaSling") {

        playerScript.Hull += 6;
        playerScript.currentHull += 6;
        playerScript.Health -= 150;
        playerScript.currentHealth -= 150;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y -= 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "FighterWing") {

        playerScript.Attack += 8;
        playerScript.FireRate += 6;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y -= 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "AncientSwoop") {

        playerScript.Cargo += 12;
        playerScript.Mobility -= 4;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y += 0.08;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "ContactClaw") {

        playerScript.Speed += 5;
        playerScript.Hull += 5;
        playerScript.currentHull += 5;
        playerScript.Shield += 4;
        playerScript.currentShield += 4;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y -= 0.1;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    //Register Engines.

    //Level 1.
    if (name == "AfterBurner") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "Corvette") {

        playerScript.Speed += 2;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "DualCore") {

        playerScript.Mobility += 2;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "Flammer") {

        playerScript.Speed += 2;
        playerScript.Mobility += 2;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "FlightEngine") {

        playerScript.Mobility += 3;

        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x -= 0.087;
        tempVector.y += 0.085;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 180), gameObject.transform);
    }

    if (name == "MicroBurst") {

        playerScript.Speed += 1;
        playerScript.Mobility += 1;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "SMPLBurner") {

        playerScript.Speed += 1;
        playerScript.Mobility += 2;

        tempVector.y += 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    //Level 2.
    if (name == "PintThrower") {

        playerScript.Mobility += 4;
        playerScript.Speed -= 1;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "MicroJoule") {

        playerScript.Speed += 5;
        playerScript.Shield -= 2;
        playerScript.currentShield -= 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "WarpCoil") {

        playerScript.Speed += 2;
        playerScript.Mobility += 3;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "SideBurner") {

        playerScript.Mobility += 5;
        playerScript.Speed -= 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "IonWing") {

        playerScript.Speed += 4;
        playerScript.Mobility += 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    if (name == "HyperDrive") {
        
        playerScript.Mobility += 6;
        playerScript.Speed += 2;

        if (transform.rotation.y == 0)
            tempVector.x -= 0.087;
        else
            tempVector.x += 0.087;

        tempVector.y += 0.08;

        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
    }

    //Level 3.
    if (name == "GigaDrive") {
        
        playerScript.Speed += 12;
        playerScript.Shield -= 5;
        playerScript.currentShield -= 5;

        tempVector.y += 0.166;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "Knockback") {
        
        playerScript.Mobility += 8;
        playerScript.Speed -= 2;

        tempVector.y += 0.166;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "OverDrive") {
        
        playerScript.Speed += 6;
        playerScript.Mobility += 6;
        playerScript.Cargo += 4;

        tempVector.y += 0.166;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }

    if (name == "TriThruster") {

        playerScript.Speed += 4;
        playerScript.Mobility += 4;
        playerScript.Hull += 4;
        playerScript.currentHull += 4;
        playerScript.Shield += 4;
        playerScript.currentShield += 4;

        tempVector.y += 0.08;
        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.x += 0.174;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, -90), gameObject.transform);
        tempVector.y += 0.086;
        tempVector.x -= 0.087;
        Instantiate(shipEdgeObject, tempVector, Quaternion.Euler(0, 0, 0), gameObject.transform);
    }
}

function Update () {

    if (playerScript.currentHealth <= 0)
        shipPartsParent.SetActive(false);
}

function OnTriggerEnter2D (temp : Collider2D) { //Collisions. Health is decremented when player hits a destructible object. Ore increments counts.

    if (temp.gameObject.tag == "Destructible" || temp.gameObject.tag == "asteroidParticle") { //Sets amount of health taken by object.

        var healthDecrement : int;
        if (temp.gameObject.name == "smallAsteroid(Clone)")
            healthDecrement = 100;
        if (temp.gameObject.name == "mediumAsteroid(Clone)")
            healthDecrement = 300;
        if (temp.gameObject.name == "largeAsteroid(Clone)")
            healthDecrement = 500;
        if (temp.gameObject.name == "asteroidPieceSmall1(Clone)" || temp.gameObject.name == "asteroidPieceSmall2(Clone)" || temp.gameObject.name == "asteroidPieceSmall3(Clone)")
            healthDecrement = 50;
        if (temp.gameObject.name == "asteroidPiece1(Clone)" || temp.gameObject.name == "asteroidPiece2(Clone)" || temp.gameObject.name == "asteroidPiece3(Clone)")
            healthDecrement = 80;
        if (temp.gameObject.name == "asteroidPieceLarge1(Clone)" || temp.gameObject.name == "asteroidPieceLarge2(Clone)" || temp.gameObject.name == "asteroidPieceLarge3(Clone)")
            healthDecrement = 200;

        if (playerScript.currentHull > 0) {
            healthDecrement = healthDecrement / 2;
            playerScript.currentHull--;
        }

        playerScript.currentHealth -= healthDecrement;
    }

    if (temp.gameObject.tag == "Ore") {
        if (playerScript.heldOre < playerScript.totalCargo) {
            if (temp.gameObject.name == "copperOre(Clone)")
                playerScript.Copper++;
            if (temp.gameObject.name == "silverOre(Clone)")
                playerScript.Silver++;
            if (temp.gameObject.name == "goldOre(Clone)")
                playerScript.Gold++;
            if (temp.gameObject.name == "diamondOre(Clone)")
                playerScript.Diamond++;
            if (temp.gameObject.name == "uraniumOre(Clone)")
                playerScript.Uranium++;
            if (temp.gameObject.name == "siliconOre(Clone)")
                playerScript.Silicon++;
            if (temp.gameObject.name == "crystalOre(Clone)")
                playerScript.Crystal++;
            if (temp.gameObject.name == "magnesiumOre(Clone)")
                playerScript.Magnesium++;
            if (temp.gameObject.name == "fluoriteOre(Clone)")
                playerScript.Fluorite++;
        
            playerScript.heldOre += 1;
            Destroy(temp.gameObject);
        }
    }
}

function OnTriggerStay2D (temp : Collider2D) {

    if (temp.gameObject.name == "shipEdge(Clone)") {

        temp.gameObject.SetActive(false);
    }
}