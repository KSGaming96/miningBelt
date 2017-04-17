//File: partMenuButtons.js
//Program: miningBelt
//Author: Kaylan Stoering
//Last Modified: 04/16/2017

/*
--Part menu button interactions. Attached to store tabs.
*/

#pragma strict

public var PlayerObject : GameObject;
private var playerScript : player;

//Button Objects are used for indicator movement and tab switching.
public var buttonIndicatorObject : GameObject;
public var localPartLevel1Menu : GameObject; //Set to buttons menus. IE bodiesButton assigns bodiesLevel1 etc.
public var localPartLevel2Menu : GameObject; //
public var localPartLevel3Menu : GameObject; //

private var selectedButton : int = 0;

function Start () {

    playerScript = PlayerObject.GetComponent(player);
}

function Update () { //Resets all menus, then activates one.

    localPartLevel1Menu.SetActive(false);
    localPartLevel2Menu.SetActive(false);
    localPartLevel3Menu.SetActive(false);

    if (buttonIndicatorObject.transform.position == transform.position) { //Reads indicator positions and displays correct menu accordingly.

        if (playerScript.selectedLevel == 1)
            localPartLevel1Menu.SetActive(true);
        else if (playerScript.selectedLevel == 2)
            localPartLevel2Menu.SetActive(true);
        else if (playerScript.selectedLevel == 3)
            localPartLevel3Menu.SetActive(true);
    }
}

function OnMouseDown () { //Places buttonIndicator on pressed part button and tells what button is pressed.

    buttonIndicatorObject.transform.position = transform.position;
}