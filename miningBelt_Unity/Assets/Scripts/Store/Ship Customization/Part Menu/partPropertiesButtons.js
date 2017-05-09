#pragma strict

public var partPurchaseObject : GameObject;
public var partEquipObject : GameObject;
public var partDescriptionObject : GameObject;

static var totalPrice : int = 300;

function OnGUI () {

    var gui : GUI;

    if (name == "partPurchaseBorder" && partPurchaseObject.GetComponent(SpriteRenderer).sortingOrder == 7) {

        if (totalPrice > 100 && totalPrice < 1000)
            gui.Label (Rect (325, 261, 325, 261), "" + totalPrice);
        if (totalPrice >= 1000)
            gui.Label (Rect (319, 261, 319, 261), "" + totalPrice);
    }
}

function OnMouseDown () {
	
    if (name == "partPurchaseBorder") {

        partPurchaseObject.GetComponent(SpriteRenderer).sortingOrder = 7;
        partEquipObject.GetComponent(SpriteRenderer).sortingOrder = 6;
        partDescriptionObject.GetComponent(SpriteRenderer).sortingOrder = 6;
    }

    if (name == "partEquipBorder") {

        partPurchaseObject.GetComponent(SpriteRenderer).sortingOrder = 6;
        partEquipObject.GetComponent(SpriteRenderer).sortingOrder = 7;
        partDescriptionObject.GetComponent(SpriteRenderer).sortingOrder = 6;
    }

    if (name == "partDescription") {

        partPurchaseObject.GetComponent(SpriteRenderer).sortingOrder = 6;
        partEquipObject.GetComponent(SpriteRenderer).sortingOrder = 6;
        partDescriptionObject.GetComponent(SpriteRenderer).sortingOrder = 7;
    }
}