<template>
    <!--THIS COMPONENT IS GOING TO HOUSE MANY COMPONENTS. IT WILL BE RESPONSIBLE FOR DISPLAYING I
    NFORMATION ABOUT SOLDIERS. TRAINING THEM, DECOMMISIONING THEM 
    AND THE COMPONENTS THAT WILL DO THOSE ACTIONS-->
    <div>
        <h4>Ironsmith Guild</h4>
        <hr/>
        <button @click="commisionIronSmith()" v-if="player && player.nonCommittedPersonnel > 0">Recruit an Ironsmith</button>
        <button @click="decommisionIronsmith()" v-if="player">Remove an Ironsmith</button>
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

function decommisionIronsmith(){
    //@ts-ignore
    if(refPlayer.value && refPlayer.value?.workersList.length > 0){
        let removedIronsmith = false;
        for(let i = 0; i < refPlayer.value?.workersList.length; i++){
            if(refPlayer.value.workersList[i].profession.id === 2){
                refPlayer.value.workersList.splice(i,1);
                console.log(refPlayer.value.workersList);
                removedIronsmith = true;
                break;
            }
        }
        if(removedIronsmith){
            refPlayer.value.nonCommittedPersonnel += 1;
            emit('eventLogEmit', "1 Ironsmith is removed from the guild.");
        }
        else{
            emit('eventLogEmit', "There are no ironsmiths in the guild to remove!.");
        }
        
    }
}

function commisionIronSmith(){
    if(refPlayer.value){
        const profInit = new ProfessionInitData();
        refPlayer.value.nonCommittedPersonnel -= 1;
        refPlayer.value?.workersList.push(new Worker(profInit.professions[1],profInit.professions[1].productionRateDays));
        emit('eventLogEmit', "1 Ironsmith is added to the guild.");
    }
    else{
        emit('eventLogEmit', "No ironsmith added to the guild. Player is not initialized.");
    }
}
</script>