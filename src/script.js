import React from 'react';
import { player, skill, gym } from './data.js';
import { loadGame, saveGame } from './LocalStorage.js';
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery';


$(document).ready(function(){

  /*! Fades in page on load */
  $('body').css('display', 'none');
  $('body').fadeIn(1000);

  //loadgame function was here but is broken pls fix

});


export function updateSkillUI(){

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
  

  if (isRep) {
    return; // Exit the function if a timeout is already running
  }

  var progressBar = document.querySelector('.progress-bar');
  progressBar.style.transition = `${skill.pushUp.repSpeed}s width linear`;
  progressBar.style.width = '100%';
  progressBar.setAttribute('aria-valuenow', '100');

  isRep = true;

  setTimeout(function () {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';
    progressBar.setAttribute('aria-valuenow', '0');

    skill.pushUp.currentXP += skill.pushUp.xPReward;
    skill.pushUp.currentRep += 1;
    
    toast.warning('💪 +' + skill.pushUp.strReward, {

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