#pragma strict

var guiManagerPrefab : Transform;
var guiManager : GameObject;
var soundManager : GameObject;


function Awake() {
  if (!(GameObject.FindWithTag("GUIMANAGER"))) {    
    var guiManagerInstance : Transform = Instantiate(guiManagerPrefab, transform.position, transform.rotation);
    guiManagerInstance.name = "guiManager";
  }
}

function Start() {
  guiManager = GameObject.Find("guiManager");
}