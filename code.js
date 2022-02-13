// p5.js setup script
"use strict";

var code = "";
var consoleText = "";
var hint_count = 1;


var saveslot = {
	set: function(key, value) {
			let slotData = localStorage.getItem(slotName);
				slotData = JSON.parse(slotData);
			
			if (typeof slotData != 'object' || slotData === null) slotData = saveslot.init();
			slotData[key] = value;
			console.log('set;');
			console.log(slotData)
			localStorage.setItem(slotName, JSON.stringify(slotData));
	},
	get: function(key, def) {
			let slotData = localStorage.getItem(slotName);
				slotData = JSON.parse(slotData);
			

			if (typeof slotData != 'object' || slotData === null) slotData = saveslot.init();
			
			//alert(JSON.stringify(slotData));
			
			console.log(slotData)
			let value = slotData[key];
			console.log('get;');
			console.log(slotData);
			if (value === undefined && def !== undefined) return def;
			console.log(value);
			return value;
	},
	init: function (slotData) {
		console.log('saveslot_init');
		return {
			mission_index: 0,
			mission_latest_unlocked: 0
		};
	}
}

var slotName = localStorage.getItem('slotName');



if (typeof slotName != 'string' || slotName === '') slotName = "Default";

console.log(slotName);

var missions = null;
var missionIndex = saveslot.get('mission_index');
var missionLatestUnlocked = saveslot.get('mission_latest_unlocked');

var language = localStorage.getItem('language');
if (language === undefined) language = 'en';
changeLanguage(language, false)

var tabCurrent = 'desc';


function changeLanguage(lang) {
	var reset = (missions !== null);
	console.log('trying to change language to '+lang)
	switch(lang) {
		case 'fi':
			language = 'fi';
			missions = missions_fi;
			break;
		default:
			language = 'en';
			missions = missions_en;
		break;
	}
	console.log('resetted language to: ' + language)
	
	localStorage.setItem('language', language);
	if (reset) resetEverything();

}

console.log(missionIndex + ' ' + missionLatestUnlocked);


var mission = missions[missionIndex];



function setup() {
	var canvasDiv = document.getElementById('canvas');
	var width = canvasDiv.offsetWidth;
	
	console.log("setup");
	var canvas = createCanvas(width,width);
	canvas.parent("canvas");
	
	windowResized();
	resetEverything();
}


function missionGoto(dir) {
	if (typeof dir == 'string') {
		if (dir == "next") missionIndex++;
		else if (dir == "previous") missionIndex--;
		else return;
	}
	
	if (typeof dir == 'number') {
		console.log('number')
		if (dir >= missions.length) console.log('larget');
		if (dir < 0) return; console.log('smaller');
		
		missionIndex = dir;
	}
	
	if (missionIndex > missionLatestUnlocked) {
		//GameAnalytics("addProgressionEvent", "Start", "edu", "loops_intro", "Mission"+(missionIndex+1).toString());
		//GameAnalytics("addProgressionEvent", "Start", "edu", "loops_intro", "Mission"+(missionIndex+2).toString());
		
		missionLatestUnlocked = missionIndex;
		//pfUpdateLatestMission(missionLatestUnlocked);
	}
	
	saveslot.set("mission_index", missionIndex);
	saveslot.set("mission_latest_unlocked", missionLatestUnlocked ) ;
	
	resetEverything();
}

function resetEverything() {
	missionIndex = Math.min(missionIndex, missions.length-1)
	mission = missions[missionIndex];
	
	hint_count = (mission.hints && mission.hints.length > 0) ? 1 : 0;
	
	var example = mission.example;
	if (typeof example == "string") {
		if (example == "prev_func") example = missions[missionIndex-1].func;
		if (example == "prev_example") example = missions[missionIndex-1].example;
	}
	example = example.toString();
	
	example = example.substring(example.indexOf("\n") + 1); 			//Poistaa funktiomäärittelyn ja..
	example = example.substring(example.lastIndexOf("\n") + 1, -1 ); 	//..aaltosulut koodista
	example = example.replace(/\n\t\t\t/g, "\n");						//Poistaa ylimääräiset tabit
	example = example.replace(/^\t\t\t/g, "");
	
	
	var editor = ace.edit("editor");
		editor.setValue(example);
	
	hintButtonsUpdate();
	saveSlotsUpdateDropdown();
	
	buttonMode('normal');
	
	runCode();
	changeTab('desc');
}

function hintButtonsUpdate() {
	
	$('.hint').each(function() {
		this.style.visibility = "visible";
		
		var hint_index = this.dataset.hint_index;
		if (hint_index > hint_count || (mission.hints && mission.hints.length < hint_index)) {
			this.style.visibility = 'hidden';
		}
	});
}

function buttonMode(mode) {
	console.log("buttonMode: " + mode)
	var done = document.getElementById("done");
	var run = document.getElementById("run");

	switch(mode) {
		case "normal":
			done.style.display = 'none';
			done.style.visibility = 'hidden';
			
			run.style.width = "100%";
			done.style.width = "0%";
			break;
		case "done":
			done.style.display = 'inline';
			done.style.visibility = 'visible';
			
			done.style.width = "50%";
			run.style.width = "50%";
			break;
		default:
			console.log("Unknown buttonMode!!!");
			break;
	}
}



function windowResized() {
  var h = $(window).height();
  var canvasDiv = document.getElementById('canvas');
  
  var width = 400;
  
  resizeCanvas(width, width);
  runCode();
}
	
function runCode() {
	
	progressionBarUpdate();
	
	beatify();
	
	var editor = ace.edit("editor");
	var code = editor.getValue();
	
	var size = 7;
	var draw_coordinates = (!mission.hide_coordinates);
	size = (mission.size) ? mission.size : 7;
	
	var func = mission.func;
	for( var i = 1; typeof func == 'string'; i++) {
		if (func == 'func_prev') func = missions[missionIndex-i].func;
		else if (func == 'example_prev') func = missions[missionIndex-i].example;
	}
	
	ruudukko(size, draw_coordinates);
	execution_mode = EXECUTION_MODE.SHADOW;
	func();
	
	
	if (code == "") return;
	
	consoleClear();
	
	try {
		execution_mode = EXECUTION_MODE.NORMAL;
		var userFunc = new Function(code);
		userFunc();
	}
	catch(e) {
		consolePrint(e);
		changeTab('console');
		return;
	}
	console.log(_cell_count)
	var outcomeDifferent = compareFunctions(userFunc, func);
	if (outcomeDifferent) {
		consolePrint('Some cells are still missing!');
	}
	else {
		consoleClear();
		consolePrint("Mission complete!");
		changeTab('console');
		if (missionIndex < missions.length-1) buttonMode("done");
	}
}

function consolePrint(msg) {
	consoleText = consoleText + " " + msg
	
	if (tabCurrent == 'console') {
		var palkki = document.getElementById("alapalkki");
		palkki.innerHTML = consoleText;
	}
	
}

function consoleClear() {
	consoleText = "";
}

function changeTab(tab, dom) {
	
	var palkki = document.getElementById("alapalkki");
	
	var teksti = "";
	switch(tab) {
		case "console":
			palkki.innerHTML = consoleText;
			break;
		case "desc":
			var desc = mission.desc;
			var slug = mission.slug;
			palkki.innerHTML = desc;
			break;
		case "hint1":
		case "hint2":
		case "hint3":
			let hint_index = dom.dataset.hint_index;
			palkki.innerHTML = mission.hints[hint_index-1];
			if (hint_count == hint_index && hint_count < mission.hints.length ) hint_count++;
			hintButtonsUpdate();
			break;
	}
	
	tabCurrent = tab;
	
	console.log(tab);
	$('.tabi').each(function(i,nappi) {
		nappi.style.borderStyle = "none";
	})
	document.getElementById(tab).style.borderStyle = "solid";
}

/*
function resetAllProgress() {
	if (confirm("Are you sure you want to reset everything and start from the first level?")) {
		if (confirm("You really sure about this?")) {
			localStorage.clear();
			location.reload();
		}
	}
}
*/

// Creates the old buttons and loads the new ones.
function progressionBarUpdate() {
	$('.mission-level').each(function() {
		this.remove();
	});
	
	
	var bar_width = $(".level-progress").width() / missions.length;
	for(var i = 0; i < missions.length; i++) {
		var bar = $(".level-progress").append(
			'<button type="button" data-bar_index="'+i+'" onclick="progressBarPressed(this)" class="mission-level btn btn-success">'+(i+1)+'</button>'
		);
	}
	
	$(".mission-level").each(function() {
		this.style.width = bar_width;

		var bar_index = this.dataset.bar_index;
		bar_index = parseInt(bar_index, 10);
		
		var bar = $(this);
		
		if (bar_index == missionIndex)  		{bar.css('border', '3px white solid')}
		if (bar_index <= missionLatestUnlocked)  {bar.addClass('btn-success');}
		else 								     {bar.addClass('btn-dark');}
	});
}

// Auto-Indentation
function beatify() {
    var val = editor.session.getValue();
    var array = val.split(/\n/);
    array[0] = array[0].trim();
    val = array.join("\n"); 
    
    val = js_beautify(val);
    editor.session.setValue(val);
}


// When a mission is pressed in progress bar we move there.
function progressBarPressed(bar) {
	console.log('pressed')
	var bar_index = bar.dataset.bar_index;
		bar_index = parseInt(bar_index);
	
	if (bar_index <= missionLatestUnlocked) missionGoto(bar_index);
}


// Creates a new saveslot, inserts it to saveslot list and saves it.
function saveSlotCreate() {
	let slotList = saveSlotsLoad();
	
	var name = prompt("Please enter your name:", "");
	if (name === null || name === '') {
		//name = "default";
	} else {
		if (slotList.includes(name)) { alert('Save slot with name '+name+' already created.'); return; }
		slotList.unshift(name);
		
		slotName = name;
		
		saveSlotsSave(slotList);
		saveSlotsUpdateDropdown();
		
		
		localStorage.setItem('slotName', slotName);
		location.reload();
		
	}
	
}

// Loads the list of saveslots
function saveSlotsLoad() {
	var slotList = localStorage.getItem('slot_list');
	try 	{ slotList = JSON.parse(slotList); if (!slotList) throw 'no slotlist found'}
	catch(e) { console.log('catch'); slotList = ['Default']; }
	
	return slotList;
}

// Saves the list of saveslots
function saveSlotsSave(slotList) {
	slotList = JSON.stringify(slotList);
	localStorage.setItem('slot_list', slotList);
}

// Updates buttons indside saveslot dropdown
function saveSlotsUpdateDropdown() {
	$('.slot').each(function() {
		this.remove();
	});
	
	let dropdown = $('#saveslots');
	
	let dom = document.getElementById('slotsButton');
	if (dom !== null) dom.innerHTML = "Save Slot: " + slotName;
	
	let slotList = saveSlotsLoad();
	slotList.forEach(function(slot) {
		let dom = dropdown.append(
			'<a class="dropdown-item slot" data-slot="'+slot+'", onclick="saveSlotSelect(this)">'+slot+'</a>'
		);
		dom.addClass('active');
	})
	dropdown.append('<a class="dropdown-item slot" onclick="saveSlotCreate()"><i>Create New</i></a>');
};

function saveSlotSelect(dom) {
	var slotName = dom.dataset.slot;
	localStorage.setItem('slotName', slotName);
	location.reload();
}



/*
Kun uusi sessio aloitetaan:
 - Ladataan viimeisin saveslotti, oli se sitten Default tai Jeppe
 - Tallennetaan slotin nimi sessionDataan
 - 
*/

/*
	- Aina kirjataan viimeisin pelaaja sisään Vs. Kirjataan aina defaulttiin
	
	- Defaultista vaihtamisessa pitäisi aina kysyä 'Haluatko jatkaa uudessa slotissa tästä kohtaa vai aloittaa alusta?'
	- Uusi slotti alkaa aina alusta ja siihen ei voi siirtää edellistä edistymistä.
	- Lataa aina Generalin (normaalilla käyttäjällä ei syytä tehdä uusia slotteja).
	
*/