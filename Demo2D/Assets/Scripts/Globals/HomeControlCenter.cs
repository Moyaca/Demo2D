using UnityEngine;
using System.Collections;

public class HomeControlCenter : MonoBehaviour {

	private GameObject guimanager;

	// Use this for initialization
	void Start () {
		guimanager = GameObject.Find ("guiManager");
		GameControl gc = (GameControl)guimanager.GetComponent<GameControl>();
		gc.DrawHomeMainMenu();

	}
}
