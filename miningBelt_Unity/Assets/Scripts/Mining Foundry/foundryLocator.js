#pragma strict

public var PlayerObject : GameObject;
public var centerObject : GameObject;

function Update () {
    
    if (PlayerObject != null)
        transform.up = centerObject.transform.position - PlayerObject.transform.position;
}