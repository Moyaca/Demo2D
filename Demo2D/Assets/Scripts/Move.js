#pragma strict
public var muveSpeed = 4;
function Start () {
	Physics2D.IgnoreLayerCollision(8,8);
}

function Update () {
	transform.Translate(Vector2.right * muveSpeed * Time.deltaTime);
}
