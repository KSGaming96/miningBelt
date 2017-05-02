//File: gridTraits.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/01/2017

/*
--Sets color of grids depending on collisions.
*/

#pragma strict

public var RedGrid : Sprite;
public var GreenGrid : Sprite;
public var MagentaGrid : Sprite;

function OnTriggerEnter2D (collider : Collider2D) { //Replaces red grid with green grid if an edge is connected. Grid turns magenta if part is present.

    if (collider.gameObject.tag == "shipPart")
        GetComponent(SpriteRenderer).sprite = MagentaGrid;

    if (collider.gameObject.tag == "shipEdge")
        GetComponent(SpriteRenderer).sprite = GreenGrid;
}

function OnTriggerExit2D (collider : Collider2D) { //Returns to a red grid if ship part or edge is removed.

    if (collider.gameObject.tag == "shipPart") {
        GetComponent(SpriteRenderer).sprite = RedGrid;
        if (name == "Grid4_4") //Center grid is always green.
            GetComponent(SpriteRenderer).sprite = GreenGrid;
    }
        

    if (collider.gameObject.tag == "shipEdge")
        GetComponent(SpriteRenderer).sprite = RedGrid;
}