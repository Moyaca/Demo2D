#pragma strict

public var tipeToSwap = 0; 
	
function Start () {

}

function Update () {

}

function OnMouseDown () {
		var shoot = GameObject.FindGameObjectWithTag("Player").GetComponent("Shoot2") as Shoot2;
		shoot.weaponType = tipeToSwap;
}