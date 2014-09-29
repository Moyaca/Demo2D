using UnityEngine;
using System.Collections;

public class GameControl : MonoBehaviour {
	public Hashtable menus;
	public string currentMenu;
	public string currentMenuName;

	void Awake() {
		DontDestroyOnLoad(transform.gameObject);
		menus = new Hashtable ();
		menus.Add ("home_main_menu", "MainMenu");
		menus.Add ("home_options_menu", "OptionMenu");
		menus.Add ("sound_options_menu", "SoundsMenu");
		menus.Add ("video_options_menu", "VideoMenu");
	}

	public void OnGUI() {
		DrawMenu ();
	}

	public void DrawHomeMainMenu() {
		SetDrawMenu ("home_main_menu");
	}

	public void SetDrawMenu(string menu) {

		currentMenu = (string)menus[menu]; 

		return;

	}

	public void DrawMenu() {

		if (currentMenu != null ) {
			SendMessage (currentMenu);
		}
	}

	public void MainMenu() {

		GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
		if (GUILayout.Button ("Nuevo Juego")) {
			SetDrawMenu("");
			Application.LoadLevel("Dificultad");
		}
		if (GUILayout.Button("Opciones")) {
			SetDrawMenu("home_options_menu");
		}
		GUILayout.Button("Continuar");
		GUILayout.Button("Cargar");
		GUILayout.Button("Creditos");
		if (GUILayout.Button("Salir")) {
			SetDrawMenu("");
			Application.Quit();
		}
		GUILayout.EndArea();

	}


	public void OptionMenu() {
			
		GUILayout.BeginArea(new Rect (Screen.width * 5 / 100, Screen.height * 5 / 100, Screen.width * 90 / 100, Screen.height * 90 / 100));
		GUILayout.Button("Sonido");
		if (GUILayout.Button("Musica")) {
			SetDrawMenu("");
		}
		GUILayout.Button("Video");
		if (GUILayout.Button("Volver")) {
			SetDrawMenu("home_main_menu");
		}
		GUILayout.EndArea();
			
	}



}
