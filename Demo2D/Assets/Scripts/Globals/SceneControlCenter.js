#pragma strict

var guimanager : GameObject;

// Use this for initialization
function Start () {
	guimanager = GameObject.Find ("guiManager");
	Time.timeScale = 1.0;
	var gc : GameControl = guimanager.GetComponent(GameControl); //
	gc.SetDrawSceneButtons(true);
	gc.SetPlaying(true);
}