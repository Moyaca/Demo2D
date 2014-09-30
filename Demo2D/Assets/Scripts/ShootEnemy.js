#pragma strict

function Start () {
	
}

function Update () {

}

function OnMouseDown () {
		var shoot = GameObject.FindGameObjectWithTag("Player").GetComponent("Shoot2") as Shoot2;
		shoot.Shoot();
}