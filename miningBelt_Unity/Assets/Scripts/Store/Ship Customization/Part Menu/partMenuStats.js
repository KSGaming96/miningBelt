//File: partMenuStats.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 05/01/2017

/*
--Part stats switch indicator position.
*/

#pragma strict

public var statsIndicatorObject : GameObject;
public var extendedPartObject : GameObject;
public var extendedPartSprite : Sprite;

function OnMouseDown () {
	
    statsIndicatorObject.transform.position = gameObject.transform.position;
    statsIndicatorObject.gameObject.SetActive(true);
    extendedPartObject.GetComponent(SpriteRenderer).sprite = extendedPartSprite;
}