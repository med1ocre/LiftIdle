import { player, skill, gym } from './data.js';


export function saveGame(){

	let gameSave = {

		player: player,
		skill: skill,
		gym: gym

	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

export function loadGame(){

	let savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if(typeof savedGame.player !== "undefined") player = savedGame.player;
	if(typeof savedGame.skill !== "undefined") skill = savedGame.skill;
	if(typeof savedGame.gym !== "undefined") gym = savedGame.gym;

}

setInterval(function(){saveGame()},5000);