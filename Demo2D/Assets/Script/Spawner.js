#pragma strict

public var preFab : GameObject;
public var wave = 1;
public var multiplier = 5;
private var zombieCount = 0;

public var maxTimer = 1.0f;
//public var minTimer = 0.1f;
private var timer = 0.0f; 
private var startWave = false;

public var preFav;

function Start () {
	timer = maxTimer;
	zombieCount = wave * multiplier;
}

function Update () {
	if(startWave){
		timer = timer - Time.deltaTime;
		if(timer<=0){
			timer = Random.value;
			var instans = Instantiate(preFab, Vector3 (Random.value * (-10), 2, 0), Quaternion.identity);
			zombieCount = zombieCount - 1;
			if(zombieCount == 0){
				startWave = false;
				wave = wave + 1;
			}
		}
	}
	
	if(GameObject.FindGameObjectsWithTag("Enemy").Length<=0 && !startWave){
		startWave = true;
		zombieCount = wave * multiplier;
	}
}