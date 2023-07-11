export let player = {

	cash: 0,

	strength: 1,
	endurance: 1,
	agility: 1,

	totalReps: 0,
	muscleMass: 0,

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