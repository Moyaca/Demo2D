#pragma strict

public var damage = 10;
public var distance = 50.0f;
public var melee = 5.0f;

public var weaponType = 0;

public var armo = 100;

private var myLocation : Vector2;

public var machetePenetration=5;
public var gunPenetration=1;
public var shotgunPenetration=5;

function Start () {
 	myLocation = transform.position;
}

function Update () {

	if(Input.GetButtonUp("Fire1")){
		var enemies = GameObject.FindGameObjectsWithTag("Enemy");
		switch(weaponType){
		//Machete
		case 1:
			var maxPenetration1 = machetePenetration;
			MeleeHit(damage, maxPenetration1);			
			armo = armo - 1;
			break;
		//Pistola
		case 2:
			var maxPenetration2 = gunPenetration;
			maxPenetration2 = ShortHit(damage, maxPenetration2);
			if(maxPenetration2>0) maxPenetration2 = MediumHit(damage, maxPenetration2);
			if(maxPenetration2>0) LongHit(damage, maxPenetration2);
			armo = armo - 1;
			break;
		//Escopeta
		case 3:
			var maxPenetration3 = shotgunPenetration;
			maxPenetration3 = ShortHit(damage, maxPenetration3);
			if(maxPenetration3>0) MediumHit(damage, maxPenetration3);
			armo = armo - 1;
			break;
		default:
			Debug.Log("Miss?");
		 	break;
		}
	}
		/*
		for(var enemy : GameObject in enemies){
			if((gameObject.transform.position - enemy.transform.position).magnitude<distance){
				enemy.GetComponent(Healt).Damage(damage);
				Debug.DrawLine(gameObject.transform.position,enemy.transform.position, Color.green, 5);
				Debug.Log(enemy.name + " / D: " + damage + " / H: " + enemy.GetComponent(Healt).healt);
			}
		}
		*/
		
}
	
function MeleeHit(damage:int, penetration:int){
	//Melee Distance
	Debug.DrawLine(myLocation, (myLocation -  Vector2(melee, 0)), Color.green, 2);
	var hits = Physics2D.RaycastAll(myLocation, (myLocation -  Vector2(melee,0)), melee);
		System.Array.Sort(hits, Comparison);
	for( var hit : RaycastHit2D in hits){
		if(hit.collider.gameObject.tag == "Enemy"){
			var enemy = hit.collider.gameObject;
			enemy.GetComponent(Healt).Damage(damage);
			Debug.Log(enemy.name + " / D: " + damage + " / H: " + enemy.GetComponent(Healt).healt);
		}
	}
}

function ShortHit(damage:int, penetration:int) : int {
	//Short Distance
	Debug.DrawLine(myLocation, (myLocation -  Vector2(distance/4, 0)), Color.green, 2);
	var hits = Physics2D.RaycastAll(myLocation, (myLocation -  Vector2(distance/4, 0)), distance/4);
		System.Array.Sort(hits, Comparison);
	for( var hit : RaycastHit2D in hits){
	Debug.Log(hit);
		if(hit.collider.gameObject.tag == "Enemy"){
			var enemy = hit.collider.gameObject;		
			enemy.GetComponent(Healt).Damage(damage);
			penetration = penetration - 1;
			Debug.Log(enemy.name + " / D: " + damage + " / H: " + enemy.GetComponent(Healt).healt);
			if(penetration<=0){
				return penetration;			
			}
		}
	}
	return penetration;
}

function MediumHit(damage:int, penetration:int) : int {
	//Medium Distance
	Debug.DrawLine((myLocation - Vector2(distance/4, 0)), (myLocation -  Vector2(distance/2, 0)), Color.green, 2);
	var hits = Physics2D.RaycastAll((myLocation - Vector2(distance/4, 0)), (myLocation -  Vector2((distance/2), 0)), distance/4);
		System.Array.Sort(hits, Comparison);
	for( var hit : RaycastHit2D in hits){
		if(hit.collider.gameObject.tag == "Enemy"){
			var enemy = hit.collider.gameObject;
			enemy.GetComponent(Healt).Damage(damage);
			penetration = penetration - 1;
			Debug.Log(enemy.name + " / D: " + damage + " / H: " + enemy.GetComponent(Healt).healt);
			if(penetration<=0){
				return penetration;			
			}
		}
	}
	return penetration;
}

function LongHit(damage:int, penetration:int) : int {
	//Long Distance
	Debug.DrawLine((myLocation -  Vector2((distance/2), 0)), (myLocation -  Vector2(distance, 0)), Color.green, 2);
	var hits = Physics2D.RaycastAll((myLocation -  Vector2((distance/2), 0)), (myLocation -  Vector2(distance, 0)), distance/2);
	System.Array.Sort(hits, Comparison);
	for( var hit : RaycastHit2D in hits){
		if(hit.collider.gameObject.tag == "Enemy"){
			var enemy = hit.collider.gameObject;		
			enemy.GetComponent(Healt).Damage(damage);
			penetration = penetration - 1;
			Debug.Log(enemy.name + " / D: " + damage + " / H: " + enemy.GetComponent(Healt).healt);
			if(penetration<=0){
				return penetration;			
			}
		}
	}
	return penetration;
}

//Burbija
/*
function orderRaycast(hits[]){
	for( var i = 1;i <hits.legth; i++){
		var proximityI = (hits[i].transform.position - myLocation).magnitude;
		for( var h = 0; h<= hits.legth-1; h++){
			var proximityH = (hits[h].transform.position - myLocation).magnitude;
			if(proximityI>proximityH){
				proximityI = proximityH;
				var aux = hits[i];
				hits[i] = hits[h];
				hits[h] = aux;
			}
		}
	}
*/
//Para el Sort
function Comparison(i : RaycastHit2D, h : RaycastHit2D) : int {
    var proximityI = (i.collider.gameObject.transform.position - myLocation).magnitude;
    var proximityH = (h.collider.gameObject.transform.position - myLocation).magnitude;
    return proximityI - proximityH;
}



