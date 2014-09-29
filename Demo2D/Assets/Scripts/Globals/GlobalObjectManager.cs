using UnityEngine;
using System.Collections;

public class GlobalObjectManager : MonoBehaviour {

	public Transform guiManagerPrefab;

	GameObject guiManager;
	GameObject soundManager;


	void Awake() {
		if (!(GameObject.FindWithTag("GUIMANAGER"))) {    
			Transform guiManagerInstance = (Transform)Instantiate(guiManagerPrefab, transform.position, transform.rotation);
			guiManagerInstance.name = "guiManager";
		}
	}

	void Start() {
		
		guiManager = GameObject.Find("guiManager");

	}
}
