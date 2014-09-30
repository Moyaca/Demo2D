#pragma strict

var guimanager : GameObject;

// Use this for initialization
function Start () {
	guimanager = GameObject.Find ("guiManager");
	var gc : GameControl = guimanager.GetComponent(GameControl); //guimanager.GetComponent('GameControl');
	gc.DrawHomeMainMenu();
	gc.SetPlaying(false);
}