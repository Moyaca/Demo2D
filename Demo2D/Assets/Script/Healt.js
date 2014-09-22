#pragma strict

public var healt = 100;
function Start () {

}

function Update () {

}

public function Damage(damage : int){
	healt = healt - damage;
	if(healt <= 0){
		Destroy (gameObject);
	}
}