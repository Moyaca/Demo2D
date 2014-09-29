#pragma strict

public var damage = 0;
public var attackSpeed = 5.0f;
private var attacking : boolean;
private var timerAttack = 3f;
private var player : GameObject;

function Start () {
	//timerAttack = attackSpeed;
	player = GameObject.FindGameObjectWithTag("Player");
}

function Update () {
	timerAttack -= Time.deltaTime;
	if(attacking && timerAttack <= 0){			
		Attack();		
	}
}


function OnCollisionEnter2D(coll: Collision2D) {
    if(coll.gameObject.tag=="Player" && !attacking){
    	attacking = true;	
    	timerAttack = 0.0f;
    	gameObject.GetComponent(Move).muveSpeed=0;
    }
}

function Attack(){
	if(player){
		player.GetComponent(Healt).Damage(damage);  
    	Debug.Log("Enemy Attac: " + damage);  
    	timerAttack = attackSpeed;
    }else{
    	attacking = false;
    }
}