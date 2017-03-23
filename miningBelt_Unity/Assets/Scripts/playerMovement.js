#pragma strict

public var PlayerObject : GameObject;
public var TempRB : Rigidbody2D;

function Update () {

    if (Input.GetAxis("Vertical") == 1)
        TempRB.AddForce(transform.up * (50 * PlayerObject.GetComponent(Player).Speed) * Input.GetAxis("Vertical") * Time.deltaTime);
    if (Input.GetAxis("Horizontal") != 0)
        transform.RotateAround(PlayerObject.transform.position, Vector3.forward, (50 * PlayerObject.GetComponent(Player).Mobility) * -Input.GetAxis("Horizontal") * Time.deltaTime);
}
