function Viking(name, strength, health, age){
	this.name = name || "viking" + Math.floor(Math.random() * 100); 
	this.strength = strength || Math.floor(Math.random() * 10)+20 ;
	this.health = health || Math.floor(Math.random() * 170)+30;
	this.age = age || Math.floor(Math.random() * 50)+15;
}

function fight(viking1, viking2){
		while (viking1.health >= 10 || viking2.health >= 10){ 
		viking1.health = viking1.health - viking2.strength;
		viking2.health = viking2.health - viking1.strength;
		if (viking1.health > 0 && viking2.health > 0){
			alert ("la salud de " + viking1.name + " es de " + viking1.health);
			alert ("la salud de " + viking2.name + " es de " + viking2.health);
		}
	}
	if (viking1.health < 0){
			viking1.health = viking1.health + viking2.strength;
		}
	if (viking2.health < 0){
			viking2.health = viking2.health + viking1.strength;
		}
	alert ("el entrenamiento ha terminado, la salud de cada vikingo es la siguiente");
	alert ("la salud de " + viking1.name + " es de " + viking1.health);
	alert ("la salud de " + viking2.name + " es de " + viking2.health);
}

var Jofrey = new Viking("jofrey", 20, 80, 45);
var Ragnar = new Viking("ragnar", 15, 90, 25);

function Saxon(){
    this.strength = Math.floor(Math.random() * 5) + 20;
    this.health = Math.floor(Math.random() * 150) + 40;
}

var teamVk = [];

function createdVk(){
	var numVk = Math.floor(Math.random() * 500)+100;
	for (i = 0; i < numVk; i++){
		teamVk.push(new Viking);
	}
}

var teamSx = [];
function createdSx(){
	var numSx = Math.floor(Math.random() * 500)+100;
	for (i = 0; i < numSx; i++){
		teamSx.push(new Saxon);
	}
}
var deadVikings = 0;
var deadSaxons = 0;

function battle(){
	if (teamSx.length < 100 || teamVk.length < 100){
			alert("el juego ha terminado, todos los sajones están muertos");
			alert("han sobrevivido" + teamVk.length + "vikingos");
	} else {
	teamVk.forEach(function(vkMember){
			var positionSaxon = Math.floor(Math.random() * teamSx.length);
			var sxMember = teamSx[positionSaxon];
			sxMember.health = sxMember.health - vkMember.strength;
			vkMember.health = vkMember.health - sxMember.strength;
			if (vkMember.health <= 0){
				teamVk.splice(teamVk.indexOf(vkMember),1);
				deadVikings+=1;
			}
			if (sxMember.health <= 0){
				teamSx.splice(positionSaxon,1);
				deadSaxons+=1;
			}
		})
	}
}

function war(){
	teamSx = [];
	teamVk = [];
	createdVk();
	createdSx();
	var turns = 5
	//Math.floor(Math.random()* 8)+4;
	for (i = 0; i <= turns; i++){
		battle();
	}
	var deadsPercentVikings = (deadVikings / (deadVikings + teamVk.length)) * 100;
	var deadsPercentSaxons = (deadSaxons / (deadSaxons + teamSx.length)) * 100;  
	alert ('porcentaje de vikingos muertos : ' + deadsPercentVikings + '%');
	alert ('porcentaje de Sajones muertos : ' + deadsPercentSaxons + '%');
	alert(teamSx.length);
}