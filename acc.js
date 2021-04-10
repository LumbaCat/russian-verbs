class Mot {
  constructor(fr, ru) {
  	this.fr = fr;
	this.ru = ru;
	
  }
}

var sections = new Array(9);
for (var i = 0; i < 9; i++)
{
	sections[i] = new Array();
}


function construireListes(){
	sections[0].push(new Mot("accompagner","проводить"));
	sections[0].push(new Mot("adorer","обожать"));
	sections[0].push(new Mot("aller dormir","ложиться спать"));
	sections[0].push(new Mot("allumer","включать"));
	sections[0].push(new Mot("améliorer","улучшать"));
	sections[0].push(new Mot("appartenir","принадлежать"));
	sections[0].push(new Mot("appuyer","нажимать"));
	sections[0].push(new Mot("attacher","связать"));
	sections[0].push(new Mot("attaquer","нападать"));
	sections[0].push(new Mot("attendre lgtps","дождаться"));
	sections[0].push(new Mot("avouer","признаться"));
	sections[0].push(new Mot("bouger","двигаться"));	

	sections[1].push(new Mot("casser","ломать"));
	sections[1].push(new Mot("construire","строить"));
	sections[1].push(new Mot("croire","верить"));
	sections[1].push(new Mot("descendre","спускаться"));
	sections[1].push(new Mot("dessiner","рисовать"));
	sections[1].push(new Mot("détester","ненавидеть"));
	sections[1].push(new Mot("embarrass","смущать"));
	sections[1].push(new Mot("envoyer","Отправить"));
	sections[1].push(new Mot("épargner","беречь"));
	sections[1].push(new Mot("éteindre","выключить"));
	sections[1].push(new Mot("exister","существовать"));
	sections[1].push(new Mot("expliquer","объяснять"));

	sections[2].push(new Mot("faire de son mieux","стараться"));
	sections[2].push(new Mot("gagner (earn)","зарабатывать"));
	sections[2].push(new Mot("garder","держать"));
	sections[2].push(new Mot("give up","сдаваться"));
	sections[2].push(new Mot("glisser","скользить"));
	sections[2].push(new Mot("grimper","взбираться"));
	sections[2].push(new Mot("hug","Обнять / обнимать"));
	sections[2].push(new Mot("insérer","вставлять"));
	sections[2].push(new Mot("jeter","бросать/бросить"));
	sections[2].push(new Mot("laisser","оставлять"));
	sections[2].push(new Mot("laisser (permettre)","позволять"));
	sections[2].push(new Mot("laver","мыть"));

	sections[3].push(new Mot("mélanger","смешивать"));
	sections[3].push(new Mot("mériter","заслуживать"));
	sections[3].push(new Mot("mettre, poser","класть/положить"));
	sections[3].push(new Mot("monter","Подниматься / поднимитесь"));
	sections[3].push(new Mot("paint","рисовать"));
	sections[3].push(new Mot("paraître, sembler","казаться/показаться"));
	sections[3].push(new Mot("partager","делиться"));
	sections[3].push(new Mot("pousser","толкать"));
	sections[3].push(new Mot("prendre (le bus)","садитесь (на автобус)"));
	sections[3].push(new Mot("prouver","доказывать"));
	sections[3].push(new Mot("rappeler","напомнить"));
	sections[3].push(new Mot("recevoir","получать/получить"));

	sections[4].push(new Mot("répéter","повторить"));
	sections[4].push(new Mot("rester","оставаться/остаться"));
	sections[4].push(new Mot("retenir","запомнить"));
	sections[4].push(new Mot("rire","смеяться"));
	sections[4].push(new Mot("sauter","прыгать"));
	sections[4].push(new Mot("se décider","надумать"));
	sections[4].push(new Mot("se dépécher","поторопиться"));
	sections[4].push(new Mot("se lever (le matin)","вставать"));
	sections[4].push(new Mot("se perdre","заблудиться"));
	sections[4].push(new Mot("se plaindre","жаловаться"));
	sections[4].push(new Mot("se révéler être","получиться"));
	sections[4].push(new Mot("se situer","находиться"));
	
	sections[5].push(new Mot("se trouver (visiter)","бывать/побывать"));
	sections[5].push(new Mot("soigner/guerrir","Лечить / вылечить"));
	sections[5].push(new Mot("souffrir","страдать"));
	sections[5].push(new Mot("suffire","хватить"));
	sections[5].push(new Mot("terminer","заканчивать/закончить"));
	sections[5].push(new Mot("tirer","тянуть"));
	sections[5].push(new Mot("to have fun","развлекаться"));
	sections[5].push(new Mot("to overpower","пересилить"));
	sections[5].push(new Mot("trouver le temps de faire","успевать/успеть"));
	sections[5].push(new Mot("utiliser","использовать"));
	sections[5].push(new Mot("vérifier","проверять"));
	sections[5].push(new Mot("visiter","посетить"));
	
	sections[6].push(new Mot("aller à pied (déterminé)","идти/пойти"));
	sections[6].push(new Mot("aller en voiture (déterminé)","eхaть/eзжать"));
	sections[6].push(new Mot("courir (déterminé)","бежать/побежать"));
	sections[6].push(new Mot("voler (déterminé)","лететь/полететь"));
	sections[6].push(new Mot("nager (déterminé)","плыть/поплыть"));
	sections[6].push(new Mot("porter (déterminé)","нести/понести"));
	sections[6].push(new Mot("aller à pied (indéterminé)","ходить"));
	sections[6].push(new Mot("aller en voiture (indéterminé)","ездить"));
	sections[6].push(new Mot("courir (indéterminé)","бегать"));
	sections[6].push(new Mot("voler (indéterminé)","летать"));
	sections[6].push(new Mot("nager (indéterminé)","плавать"));
	sections[6].push(new Mot("porter (indéterminé)","носить"));
	
	sections[7].push(new Mot("arriver","при- идти / eхaть"));
	sections[7].push(new Mot("approcher","под- идти / eхaть"));
	sections[7].push(new Mot("déménager","пере- идти / eхaть"));
	sections[7].push(new Mot("autour","об-  идти / eхaть"));
	sections[7].push(new Mot("entrer","в-  идти / eхaть"));
	sections[7].push(new Mot("atteindre","до-  идти / eхaть"));
	sections[7].push(new Mot("passer","про- идти / eхaть"));
	sections[7].push(new Mot("partir","у- идти / eхaть"));
	sections[7].push(new Mot("sortir","вы- идти / eхaть"));
	sections[7].push(new Mot("s'arrêter","за-  идти / eхaть"));
	sections[7].push(new Mot("away","от-  идти / eхaть"));
	sections[7].push(new Mot("descendre","с-  идти / eхaть"));
	
	sections[8].push(new Mot("habiller","о- девать / деть"));
	sections[8].push(new Mot("s'habiller","о- девать / деть -ся"));
	sections[8].push(new Mot("mettre (un vêtmt)","на- девать / деть"));
	sections[8].push(new Mot("changer (de vêtmt)","Перео- девать / деть -ся"));
	sections[8].push(new Mot("désabiller","раз- девать / деть"));
	sections[8].push(new Mot("se désabiller","Раз- девать / деть -ся"));
	
}

construireListes()



//afficher(mots);
var ops = new Array(sections.length);
var opInner = ["section 1", "section 2", "section 3",
				"section 4", "section 5", "section 6",
				"section 7", "section 8", "section 9"];            

for (var i=0; i<ops.length; i++){
	ops[i] = document.createElement("option");
    ops[i].value = i;
    ops[i].innerHTML  = opInner[i];
    document.getElementById("sections").appendChild(ops[i]);
}

var ops2 = new Array(2);
var op2Inner = ["Français", "Russe"];           

for (var i=0; i<ops2.length; i++){
    ops2[i] = document.createElement("option");
    ops2[i].value = i+1;
    ops2[i].innerHTML  = op2Inner[i];
    document.getElementById("mode").appendChild(ops2[i]);
}



function nbAlea(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min +1)) + min;
  }

function condition(tableau){
	var result = 1;
	for(var i=0; i<tableau.length; i++){
		for(var j=0; j<tableau.length; j++){
			if(i != j){
				if(tableau[i] == tableau[j]){
					result = 0;
				}
			}	
		}
	}
	return result;
}

var ks = new Array();
function unicite(k, ks){
	var retour = 0;
	var indic = 0;
	for (var i = 0; i<ks.length; i++){
		if (k == ks[i]){
			indic++;
		}
	}
	if(indic > 0){
		retour = 1;
	}
	return retour;
}

var marche = 0
function commencer(){
	if (marche == 0){
		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		

		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

		// empêcher de rajouter des radiobox
		marche = 1;
	}else{
		var start = document.getElementById("start");
		var suppr = document.getElementById("coeur");
		start.removeChild(suppr); 

		// ajout <coeur>
		var coeur = document.createElement("ul");
		coeur.setAttribute("id", "coeur");
		document.getElementById("start").appendChild(coeur);

		// récupère données
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		// nb aleatoire
		do{
			var k = nbAlea(0, sections[section].length-1);
		}while(unicite(k, ks)&&(ks.length<12));
		if(ks.length>11){
			ks=[];
		}
		ks.push(k);
		
		document.getElementById('reponse').innerHTML = k;
		// ajout "mot"
		var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;
		
		document.getElementById("mot").innerHTML = mot;

		radioboxes(section, mode, k);

	}
}


function rootCommencer(){
	// ajout <p>
	var p = document.getElementById('consignes')
	p.innerHTML  = "<i> Selectionnez la bonne traduction et changez de section après 20 bonnes réponses.</i>";

	document.getElementById('sol').innerHTML = "";
	document.getElementById('score').innerHTML = "";
	document.getElementById('reponse').innerHTML = "";
	document.getElementById('points').innerHTML = 0;
	document.getElementById('tour').innerHTML = 0;

	commencer();
}


function radioboxes(section, mode, k){

	// récupération mot
	var mot = (mode == 1)?  sections[section][k].fr :  sections[section][k].ru;

	// 5 nb aleatoires entre 1 et 5
	var radioValue = new Array(5);

	//defini la place de la trad correcte
	var bonneRep = nbAlea(0, 4);
	radioValue[bonneRep] = k;
	
	do{
		for(var i=0; i<radioValue.length; i++){
			if(i != bonneRep){
				radioValue[i] = nbAlea(0, sections[section].length-1);
			}
		}
		
	}while (condition(radioValue) == 0);
		// ajout <radio>
		var radios = new Array(5);
		var radioId = ["a", "b", "c", "d", "e"];  
		var radioLabel = new Array(5); 

		for(var i=0; i<radioLabel.length; i++){
			radioLabel[i] = (mode == 1)?  sections[section][radioValue[i]].ru : sections[section][radioValue[i]].fr;
		}


		
		var divs = new Array(5);

		for (var i=0; i<radios.length; i++){
			radios[i] = document.createElement("button");
			radios[i].setAttribute("class", "styled");
			radios[i].setAttribute("onclick", "verifier(this.id)");

			radios[i].setAttribute("id", radioId[i]);
			radios[i].setAttribute("value", radioValue[i]);
			radios[i].setAttribute("name", "selection");

			
			radios[i].innerHTML  = radioLabel[i];

			divs[i] = document.createElement("div");
			divs[i].setAttribute("class", "formu");
			divs[i].appendChild(radios[i]);
			

			document.getElementById("coeur").appendChild(divs[i]);
		}

		// ajout <button>
		arreter= document.createElement("button");
		arreter.setAttribute("onclick", "document.location.reload(false)");
		arreter.setAttribute("class", "styledArret");
		arreter.innerHTML  = "Arrêter";
		document.getElementById("coeur").appendChild(arreter);

}


function verifier(id) {
		var bouton = document.getElementById(id);
		var tour = document.getElementById('tour').innerHTML;
		var points = document.getElementById('points').innerHTML;
		var k = document.getElementById('reponse').innerHTML;
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;
		var valeur = bouton.value;
		
		var motFr = sections[section][k].fr;
		var motRu = sections[section][k].ru;

		tour++;
		document.getElementById('tour').innerHTML = tour;
		document.getElementById('sol').innerHTML = (mode == 1)? `${motFr} = ${motRu}.` : `${motRu} = ${motFr}.`;
		if(k == valeur){
			document.getElementById('sol').setAttribute("class", "vert");
			points++;
			document.getElementById('points').innerHTML = points;
		}else{
			document.getElementById('sol').setAttribute("class", "rouge");
		}
		document.getElementById('score').innerHTML = `${points} / ${tour} essais`;

		if(points > 19){
			if(points == tour){
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Félicitation! Vous avez le<br>score parfait!`;
				if(points == 20){
					alert("Félicitation! Vous avez otenu 20/20 !");
				}
			}else{
				document.getElementById('score').innerHTML = `${points} / ${tour} essais <br><br>Bravo! Votre score est <br>supérieur à 20.`;
				if(points == 20){
					alert("Bravo! Vous avez otenu 20 points!");
				}
			}
		}
		
		commencer();
}

var voir = 0;
function voirMots(){
	if(voir%2 == 0){
		var section = document.getElementById('sections').value;
		var mode = document.getElementById('mode').value;

		if(section == 6){
			construireTab7();
		}else{
		var tableauFr = new Array(sections[section].length+1);
		var tableauRu = new Array(sections[section].length+1);

		tableauFr[0]="Français";
		tableauRu[0]="Russe";
		for(var i=1; i<sections[section].length+1; i++){
			tableauFr[i]=sections[section][i-1].fr;
			tableauRu[i]=sections[section][i-1].ru;
		}
		
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		for (var i = 0; i<sections[section].length+1; i++){
			var tr = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");

			construireTab();
			
			tr.appendChild(td1);
			
			tr.appendChild(td2);

			table.appendChild(tr);
		}
		document.getElementById("table").appendChild(table);
		}

		var v = document.getElementById("voir");
		v.innerHTML = "Cacher";

	}else{
		var tb = document.getElementById("tb");
		document.getElementById("table").removeChild(tb);

		var v = document.getElementById("voir");
		v.innerHTML = "Voir mots";
	}
	voir++;

	function construireTab() {
		if (i == 0) {
			if (mode == 1) {
				td1.innerHTML = tableauFr[i];
				td1.setAttribute("class", "francaisTitre");
				td2.innerHTML = tableauRu[i];
				td2.setAttribute("class", "russeTitre");
			}
			else {
				td1.innerHTML = tableauRu[i];
				td1.setAttribute("class", "russeTitre");
				td2.innerHTML = tableauFr[i];
				td2.setAttribute("class", "francaisTitre");
			}
		}
		else if (mode == 1) {
			td1.innerHTML = tableauFr[i];
			td1.setAttribute("class", "francais");
			td2.innerHTML = tableauRu[i];
			td2.setAttribute("class", "russe");
		}
		else {
			td1.innerHTML = tableauRu[i];
			td1.setAttribute("class", "russe");
			td2.innerHTML = tableauFr[i];
			td2.setAttribute("class", "francais");
		}
	}

	function construireTab7() {
		var table = document.createElement("table");
		table.setAttribute("id", "tb");

		var trs = new Array(8);
		for(var i = 0; i<8; i++){
			trs[i] = document.createElement("tr");
		}

		var tds = new Array(24);
		for(var i = 0; i<24; i++){
			tds[i] = document.createElement("td");
			if(i != 0){
				tds[i].setAttribute("class", "bord");
			}
		}

		for(var i = 0; i<8; i++){
			trs[i].appendChild(tds[3*i]);
			trs[i].appendChild(tds[3*i+1]);
			trs[i].appendChild(tds[3*i+2]);

			table.appendChild(trs[i]);
		}

		document.getElementById("table").appendChild(table);

		tds[0].innerHTML = " ";
		tds[1].innerHTML = "Déterminé";
		tds[2].innerHTML = "Indéterminé";
		tds[3].innerHTML = "aller à pied";
		tds[4].innerHTML = "идти / пойти";
		tds[5].innerHTML = "ходить";
		tds[6].innerHTML = "aller en voiture";
		tds[7].innerHTML = "eхaть / eзжать";
		tds[8].innerHTML = "ездить";
		tds[9].innerHTML = "courir";
		tds[10].innerHTML = "бежать / побежать";
		tds[11].innerHTML = "бегать";
		tds[12].innerHTML = "escalader";
		tds[13].innerHTML = "лезть / полезть";
		tds[14].innerHTML = "лазить";
		tds[15].innerHTML = "voler";
		tds[16].innerHTML = "лететь / полететь";
		tds[17].innerHTML = "летать";
		tds[18].innerHTML = "nager";
		tds[19].innerHTML = "плыть / поплыть";
		tds[20].innerHTML = "плавать";
		tds[21].innerHTML = "porter";
		tds[22].innerHTML = "нести / понести";
		tds[23].innerHTML = "носить";

		for(var i = 0; i<3; i++){
			tds[i].setAttribute("class", "russeTitre");
		}
		for(var i = 3; i<24; i+=3){
			tds[i].setAttribute("class", "francais");
		}
		for(var i = 4; i<24; i+=3){
			tds[i].setAttribute("class", "russe");
			tds[i+1].setAttribute("class", "russe");
		}
	}



}