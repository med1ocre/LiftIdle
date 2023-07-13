import React from 'react';
import { player, skill, gym } from './data.js';
//import { loadGame, saveGame } from './LocalStorage.js';
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';
import { loadGame } from './data.js'


$(document).ready(function(){

  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

  //loadgame function was here but is broken pls fix
  loadGame();
});


export function updateSkillUI(){

  const homeContentDisplay = document.getElementById("homecontent");
  if (homeContentDisplay == null) {
    return;
  }

  const pushUpCurrentRepDisplay = document.getElementById("pushUpCurrentRep");
  const pushUpLevelDisplay = document.getElementById("pushupLevel");
  const pushUpCurrentXPDisplay = document.getElementById("pushupCurrentXP");
  const pushUpRequiredXPDisplay = document.getElementById("pushupRequiredXP");


	pushUpLevelDisplay.innerHTML = skill.pushUp.level;
	pushUpCurrentXPDisplay.innerHTML = skill.pushUp.currentXP;
	pushUpRequiredXPDisplay.innerHTML = skill.pushUp.requiredXP;
  pushUpCurrentRepDisplay.innerHTML = skill.pushUp.currentRep;

}

export function checkForLevelUp(skill) {
    if (skill.currentXP >= skill.requiredXP) {
        skill.level += 1;
        skill.currentXP -= skill.requiredXP;
        skill.requiredXP *= 1.5;
        updateSkillUI();

        console.log('Level up!');
    }
}

var isRep = false;

export function repPushup() {
  
  const homeContentDisplay = document.getElementById("homecontent");

  const pushUpProgressBar = document.querySelector('.pushUpProgress');

  if (isRep) {
    return; // Exit the function if a timeout is already running
  }

  if (homeContentDisplay !== null) {
    
    pushUpProgressBar.style.transition = `${skill.pushUp.repSpeed}s width linear`;
    pushUpProgressBar.style.width = '100%';
    pushUpProgressBar.setAttribute('aria-valuenow', '100');
  }

  isRep = true;

  setTimeout(function () {


    if (homeContentDisplay !== null) {
      pushUpProgressBar.style.transition = 'none';
      pushUpProgressBar.style.width = '0%';
      pushUpProgressBar.setAttribute('aria-valuenow', '0');
    }

    console.log("TEST")

    skill.pushUp.currentXP += skill.pushUp.xPReward;
    skill.pushUp.currentRep += 1;
    player.strength += skill.pushUp.strReward * player.strMulti;

    console.log("Multi: " + player.strMulti);
    console.log("Str: " + player.strength);

    toast.warning('💪 +' + skill.pushUp.strReward * player.strMulti, {

    });

    checkForLevelUp(skill.pushUp);
    updateSkillUI();

    if (skill.pushUp.currentRep < skill.pushUp.maxRep) {
        isRep = false;
        repPushup();
      } else {
        skill.pushUp.currentRep = 0;
        isRep = false;
        updateSkillUI();
      }
  }, skill.pushUp.repSpeed * 1000);
}

export function purchaseGym(gymid){


  const canAffordGymDisplay = document.getElementById("canAffordGym");
  const purchaseGymOneBtnDisplay = document.getElementById("purchaseGymOneBtn");
  const gymOneHrDisplay = document.getElementById("gymOneHr");

  switch(gymid) {
  case 1:
    if(player.cash < gym.one.price){
      return;
    }

    player.strMulti += 0.10;

    gym.one.bought = true;
    canAffordGymDisplay.innerHTML = "Purchased"
    canAffordGymDisplay.className = "gymBought"
    purchaseGymOneBtnDisplay.style.display = "none";

    $("#gymOneCard").find('hr').remove();
    break;
  case 2:
    // code block
    break;
}

}