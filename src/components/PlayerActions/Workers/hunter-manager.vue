<template>
    <!--THIS COMPONENT IS GOING TO HOUSE MANY COMPONENTS. IT WILL BE RESPONSIBLE FOR DISPLAYING I
    NFORMATION ABOUT SOLDIERS. TRAINING THEM, DECOMMISIONING THEM 
    AND THE COMPONENTS THAT WILL DO THOSE ACTIONS-->
    <div>
        <h4>Hunters Guild</h4>
        <hr/>
        <button @click="commisionHunter()" v-if="player && player.nonCommittedPersonnel > 0">Recruit a Hunter</button>
        <button @click="decommisionHunter()" v-if="player">Remove a Hunter</button>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { toRef } from 'vue';
import { ProfessionInitData } from '@/TS/DataInitialization/ProfessionInit';
import { Worker } from '@/TS/Workers';

const emit = defineEmits(['eventLogEmit']);
const props = defineProps({
    player: Player,
});
const refPlayer = toRef(props, 'player');

function decommisionHunter(){
    //@ts-ignore
    if(refPlayer.value && refPlayer.value?.workersList.length > 0){
        let removedHunter = false;
        for(let i = 0; i < refPlayer.value?.workersList.length; i++){
            if(refPlayer.value.workersList[i].profession.id === 1){
                refPlayer.value.workersList.splice(i,1);
                console.log(refPlayer.value.workersList);
                removedHunter = true;
                break;
            }
        }
        if(removedHunter){
            refPlayer.value.nonCommittedPersonnel += 1;
            emit('eventLogEmit', "1 Hunter is removed from the guild.");
        }
        else{
            emit('eventLogEmit', "There are no hunters in the guild to remove!.");
        }
        
    }
}

function commisionHunter(){
    if(refPlayer.value){
        const profInit = new ProfessionInitData();
        refPlayer.value.nonCommittedPersonnel -= 1;
        refPlayer.value?.workersList.push(new Worker(profInit.professions[0],profInit.professions[0].productionRateDays));
        emit('eventLogEmit', "1 Hunter is added to the guild.");
    }
    else{
        emit('eventLogEmit', "No hunter added to the guild. Player is not initialized.");
    }
}
</script>