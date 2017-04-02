#pragma strict

public var foundryOreMenuObject : GameObject;

public var foundryGUIHolderObject : GameObject;
public var foundryOreHolderObject : GameObject;

function OnMouseDown () {

    if (name == "sellOreButton") {

        foundryOreMenuObject.transform.position = foundryGUIHolderObject.transform.position;
    }

    if (name == "oreBack") {

        foundryOreMenuObject.transform.position = foundryOreHolderObject.transform.position;
    }
}