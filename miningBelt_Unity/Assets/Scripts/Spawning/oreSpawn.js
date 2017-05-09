//File: oreSpawn.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/03/2017

/*
--Attached to asteroids. Spawns ore on collision with projectiles.
*/

#pragma strict

//Ore Prefabs
public var copperOre : GameObject;
public var silverOre : GameObject;
public var goldOre : GameObject;
public var diamondOre : GameObject;
public var uraniumOre : GameObject;
public var siliconOre : GameObject;
public var crystalOre : GameObject;
public var magnesiumOre : GameObject;
public var fluoriteOre : GameObject;

private var rand : Random;

function oreSpawner () {
    
    var oreChance : float = rand.Range(1.0, 100.0);

    if (oreChance <= 40) //40% spawn rate
        Instantiate(copperOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 40 && oreChance <= 60)//20% spawn rate
        Instantiate(silverOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 60 && oreChance <= 72) //12% spawn rate
        Instantiate(goldOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 72 && oreChance <= 81) //9% spawn rate
        Instantiate(diamondOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 81 && oreChance <= 89) //8% spawn rate
        Instantiate(uraniumOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 89 && oreChance <= 94) //5% spawn rate
        Instantiate(siliconOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 94 && oreChance <= 97) //3% spawn rate
        Instantiate(crystalOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 97 && oreChance <= 99) //2% spawn rate
        Instantiate(magnesiumOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
    if (oreChance > 99 && oreChance <= 100) //1% spawn rate
            Instantiate(fluoriteOre, transform.position, Quaternion.Euler(0, 0, rand.Range(0.0, 360.0)));
}