#pragma strict

public var weaponType = 0;

private var myLocation : Vector2;

//Armo
public var gunArmo=100;
public var shotgunArmo=100;

//Damage
public var macheteDamage=100;
public var gunDamage=100;
public var shotgunDamage=100;

//Distance
public var macheteDistance=5;
public var gunDistance=30;
public var shotgunDistance=15;

//Penetration
public var machetePenetration=5;
public var gunPenetration=1;
public var shotgunPenetration=5;

public var shotgunLostPenetration=2;

function Start () {
 	myLocation = transform.position;
}

function Update () {
	if(Input.GetButtonUp("Fire1")){
		//Tomo todos los enemigos
		var enemies = GameObject.FindGameObjectsWithTag("Enemy");
		//Los ordeno
		System.Array.Sort(enemies, ComparisonByX);
		//Las declaro aca por que no me las toma de forma local, no se que honda ?!!??!??!!?
		var auxPenetration : int;
		var enemiesInRange : Array;
		var enemy : GameObject;
		var count : int;
		
		switch(weaponType){
		//Machete
		case 1:
			auxPenetration = machetePenetration;
			//Guardos los que se encuentran a cierta distancia
			enemiesInRange = getEnemiesWithDistance(enemies,macheteDistance);
			count = 0;
			//Al mismo tiempo que resto al penetration aplico daño a todos los zombies
			while(enemiesInRange.length>count && auxPenetration > 0){
				auxPenetration --;
				enemy = enemiesInRange[count];
				enemy.GetComponent(Healt).Damage(macheteDamage);
				count ++;
			}
			break;
		//Pistola
		case 2:
			if(gunArmo>0){
				auxPenetration = gunPenetration;
				gunArmo -= 1;
				//Guardos los que se encuentran a cierta distancia
				enemiesInRange = getEnemiesWithDistance(enemies,gunDistance);
				count = 0;
				//Al mismo tiempo que resto al penetration aplico daño a todos los zombies
				while(enemiesInRange.length>count && auxPenetration > 0){
					auxPenetration --;
					enemy = enemiesInRange[count];
					enemy.GetComponent(Healt).Damage(gunDamage);
					count ++;
				}
			}
			break;
		//Escopeta
		case 3:
			if(shotgunArmo>0){
				auxPenetration = shotgunPenetration;
				shotgunArmo -= 1;
				count = 0;
				//Guardos los que se encuentran a cierta distancia
				enemiesInRange = getEnemiesWithDistance(enemies,shotgunDistance/2,myLocation);
				//Al mismo tiempo que resto al penetration aplico daño a todos los zombies				
				while(enemiesInRange.length>count && auxPenetration > 0){
					auxPenetration --;
					enemy = enemiesInRange[count];
					enemy.GetComponent(Healt).Damage(shotgunDamage);
					count ++;
				}
				auxPenetration -= shotgunLostPenetration;
				if(auxPenetration>0){
					var aux = new Vector2(myLocation.x,myLocation.y);
					aux.x += shotgunDistance/2;
					Debug.Log(myLocation + " / " + aux);
					enemiesInRange = getEnemiesWithDistance(enemies,shotgunDistance/2,aux);
					count = 0;
					//Al mismo tiempo que resto al penetration aplico daño a todos los zombies
					while(enemiesInRange.length>count && auxPenetration > 0){
						auxPenetration --;
						enemy = enemiesInRange[count];
						enemy.GetComponent(Healt).Damage(shotgunDamage);
						count ++;
					}	
				}			
			}
			break;
		default:
			Debug.Log("Miss?");
		 	break;
		}
	}
}
//Toma a los enemigos que se encuentren a una distancia x, por defecto del jugador 
function getEnemiesWithDistance (enemies:GameObject[], distance:int) : Array{
	var enemiesInRange = new Array();
	for(var enemy : GameObject in enemies){
		if((enemy.transform.position - myLocation).magnitude<=distance){
			enemiesInRange.Add(enemy);
		}
	}
	return enemiesInRange;
}
//Toma a los enemigos que se encuentren a una distancia x desde un punto de inicio dado
function getEnemiesWithDistance (enemies:GameObject[], distance:int, startPoint:Vector2) : Array{
	var enemiesInRange = new Array();
	for(var enemy : GameObject in enemies){
		if((enemy.transform.position - startPoint).magnitude<=distance){
			enemiesInRange.Add(enemy);
		}
	}
	return enemiesInRange;
}
// El short utiliza internamente int para comparar, por ende aquellos que tengan valores similares no quedaran organizados
function Comparison(i : GameObject, h : GameObject) : int {
    var proximityI = (i.transform.position - myLocation).magnitude;
    var proximityH = (h.transform.position - myLocation).magnitude;
    return proximityI - proximityH;
}
//prueba para ves si funciona 
function ComparisonByX (i : GameObject, h : GameObject) : int {
    if (i.transform.position.x < h.transform.position.x) {
        return 1;
    }
    else if (i.transform.position.x > h.transform.position.x) {
        return -1;
    }
    return 0;
}
/*

function Comparison(i : RaycastHit2D, h : RaycastHit2D) : int {
    var proximityI = (i.collider.gameObject.transform.position - myLocation).magnitude;
    var proximityH = (h.collider.gameObject.transform.position - myLocation).magnitude;
    return proximityI - proximityH;
}*/




