#pragma strict

var menus : Hashtable;
var currentMenu : String;
var currentMenuName : String;
var playingScene : boolean;
var playing : boolean;

function Awake() {
  DontDestroyOnLoad(transform.gameObject);
  playingScene = false;
  playing = false;
  menus = new Hashtable ();
  menus.Add ("home_main_menu", "MainMenu");
  menus.Add ("scene_main_menu", "SceneMainMenu");
  menus.Add ("home_options_menu", "OptionMenu");
  menus.Add ("sound_options_menu", "SoundMenu");
  menus.Add ("video_options_menu", "VideoMenu");
}

function OnGUI() {
  DrawMenu ();
  DrawSceneButtons();
}

function SetPlaying( playing : boolean) {
  this.playing = playing;
}

function SetDrawSceneButtons(playingScene : boolean) {
  this.playingScene = playingScene;
}

function DrawSceneButtons() {
  
  if (playingScene){
    
    if (GUI.Button(Rect(10,10,50,50),"HOLA"))
      DrawSceneOptionMenu();
  } 
}

function DrawSceneOptionMenu() {
  Time.timeScale = 0.0;
  SetDrawSceneButtons(false);
  SetDrawMenu("scene_main_menu");
}

function DrawHomeMainMenu() {
	SetDrawMenu ("home_main_menu");
}

function SetDrawMenu(menu : String) {

  currentMenu = menus[menu]; 
  return;

}

function DrawMenu() {

  if (currentMenu != null ) {
    SendMessage (currentMenu);
  }
}

function MainMenu() {

  GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
    if (GUILayout.Button ("Nuevo Juego")) {
      SetDrawMenu("");
	  Application.LoadLevel("demo");
	}
	if (GUILayout.Button("Opciones")) {
	  SetDrawMenu("home_options_menu");
	}
	GUILayout.Button("Creditos");
	if (GUILayout.Button("Salir")) {
	  SetDrawMenu("");
	  Application.Quit();
	}
  GUILayout.EndArea();

}


function OptionMenu() {
			
  GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
    if (GUILayout.Button("Sonido")) {
      SetDrawMenu("sound_options_menu");
    }
    if (GUILayout.Button("Video")) {
      SetDrawMenu("video_options_menu");
    }
    if (GUILayout.Button("Volver")) {
      if (!playing)
	  	SetDrawMenu("home_main_menu");
	  else
	    SetDrawMenu("scene_main_menu");
    }
    GUILayout.EndArea();
			
}

function SceneMainMenu() {
  GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
    if (GUILayout.Button ("Continuar")) {
      SetDrawMenu("");
      SetDrawSceneButtons(true);
	  Time.timeScale = 1.0;
	}
	if (GUILayout.Button("Opciones")) {
	  SetDrawMenu("home_options_menu");
	}
	if (GUILayout.Button("Salir")) {
	  SetDrawMenu("");
	  SetDrawSceneButtons(false);
	  Application.LoadLevel("MainMenu");
	}
  GUILayout.EndArea();

}

function SoundMenu() {
  GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
    if (GUILayout.Button("Volver")) {
	    SetDrawMenu("home_options_menu");
	}
  GUILayout.EndArea();

}

function VideoMenu() {
  GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
    if (GUILayout.Button("Volver")) {
	  SetDrawMenu("home_options_menu");
	}
  GUILayout.EndArea();

}
