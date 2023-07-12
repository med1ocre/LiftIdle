import { updateSkillUI } from './script.js';

export let player = {

	cash: 0,

	strength: 1,
	endurance: 1,
	agility: 1,

	totalReps: 0,
	muscleMass: 0,

	strMulti: 1

}

export let skill = {

	pushUp: {

		repSpeed: 3,
		strReward: 1,
		xPReward: 5,
		currentXP: 0,
		requiredXP: 50,
		level: 0,
		
		currentRep: 0,
		maxRep: 5

	}

}

export let gym = {


	one: {

		price: 0,
		income: 10,
		strMulti: 0.10,

		bought: false

	}

}


export function saveGame(){

	let gameSave = {

		player: player,
		skill: skill,
		gym: gym

	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
	console.log("Game saved");
}



export function loadGame(){

	let savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if(typeof savedGame.player !== "undefined") player = savedGame.player;
	if(typeof savedGame.skill !== "undefined") skill = savedGame.skill;
	if(typeof savedGame.gym !== "undefined") gym = savedGame.gym;

	updateSkillUI();

	console.log("Game loaded");
}



setInterval(function(){saveGame();},10000);


