if(! Detector.webgl) Detector.addGetWebGLMessage();
var container;
var camera, scene, render;
var plane, cube;
var mouse, raycaster, isShiftDown = false;
var rollOverMesh, rollOverMaterial;
var cubeGeo, cubeMaterial;
var objects = [];
//add camera rotation
var clock = new THREE.Clock();
var controls;

var areas_cache = {};
var connect_cache = {};

// utility functions
function calcHeight() {
	// body...
	var maxHeight = 0;
	for (var i = 1; i< objects.length; i++) {
		var v = objects[i];
		var h = (v.position.y-25)/50+1;
		if(h>maxHeight){
			maxHeight = h
		}
	}
	return maxHeight;
}
