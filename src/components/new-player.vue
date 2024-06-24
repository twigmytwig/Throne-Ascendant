<template>
    <label>You awake to the pounding of drums and a note stating your tribal councel is awaiting your arrival for an urgent meeting...</label>
    <br/>
    <div v-if="!hasName">
        <input  placeholder="Tribe Name Here" v-model="tribeName" type="text"/>
        <button @click="confirmName">Confirm Tribe Name</button>
    </div>
    <div v-if="hasName && !setAllegiance">
        <p>A council member informs you that the king is demanding a tax from all tribes, keeps, and great houses in the realm. "Should we bend the knee to the new king and submit to this taxation or refuse to serve?"</p>
        <br/>
        <button @click="confirmAllegiance(true)">Bend the knee and submit to taxation</button>
        <button @click="confirmAllegiance(false)">Refuse to accept the new king</button>
        <button v-if="!displayAdviceMsg" @click="displayAdvice()">Ask tribal council members</button>
    </div>
    <div v-if="displayAdviceMsg">
        <p>Your master of coin heeds you to bend the knee. "While the taxation will be harsh on our treasury, surely it cannot be worse than the cost of the lives of good men. 
            We have 1,000 doubloons currently and the tax rate is set to 400DB a month."</p>
        <p>Your master of war heeds you against bending the knee. "This taxation is a disgrace! If this 'king' wants to take our resources then he will have to pay for it in blood. 
            We have 10 trained soilders ready to fend off any attack from the crown!"</p>
        <p>Your second in command has no opinion on the matter. "Each choice has its folleys. Choose the option that leads to us surviving."</p>
    </div>
    <div v-if="setAllegiance">
        <div v-if="hasBentKnee">
            <p>You have bent the knee to the new king.</p>
        </div>
        <div v-else>
            You have refused to bend the knee to the new king. You are free of his taxes but not of his wrath...
        </div>
    </div>
    <div v-if="setAllegiance">
        <button @click="startGame()">Begin Journey</button>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player'
import { ref } from 'vue'
import { Worker } from '@/TS/Workers';
import { ProfessionInitData } from '@/TS/DataInitialization/ProfessionInit';
const emit = defineEmits(['response'])
const tribeName = ref("")
const hasName = ref(false)
const setAllegiance = ref(false)
const hasBentKnee = ref(false);
const displayAdviceMsg = ref(false);

function confirmName() {
    hasName.value = true;
}

function confirmAllegiance(bentKnee: boolean){
    if(bentKnee){
        hasBentKnee.value = true;
    }
    setAllegiance.value = true;
    
}

function displayAdvice(){
    displayAdviceMsg.value = true;
}

function startGame(){
    const profInit = new ProfessionInitData();
    const workersList: Worker[] = [
        new Worker(profInit.professions[0],profInit.professions[0].productionRateDays), //Since the game starts at day 0, we can add the rate to 0 to find the day it should produce
        new Worker(profInit.professions[1],profInit.professions[1].productionRateDays),
    ];
    const newPlayer = new Player(tribeName.value,hasBentKnee.value,"Tribe",1000,10,2,0,1,0,0, workersList);
    emit('response', newPlayer)
}
</script>