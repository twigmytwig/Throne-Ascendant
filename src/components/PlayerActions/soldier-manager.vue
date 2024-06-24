<template>
    <!--THIS COMPONENT IS GOING TO HOUSE MANY COMPONENTS. IT WILL BE RESPONSIBLE FOR DISPLAYING I
    NFORMATION ABOUT SOLDIERS. TRAINING THEM, DECOMMISIONING THEM 
    AND THE COMPONENTS THAT WILL DO THOSE ACTIONS-->
    <div>
        <h4>Barracks</h4>
        <h5>{{ soldierQueue.length }} soldiers in training</h5>
        <hr/>
        <button @click="commisionSoldier()" v-if="player && player.nonCommittedPersonnel > 0">Train Soldier (5 Days)</button>
        <button @click="decommisionSoldier()" v-if="player && player.soldiers > 0">Decommision Soldier</button>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { toRef, watch, ref } from 'vue';
import { Time } from '@/TS/Time';

class TrainingSoldiers{
    startDate: number;
    endDate: number;
    constructor(startDate: number){
        this.startDate = startDate;
        this.endDate = startDate + 5; //Takes 5 days to train a soldier
    }
}

const emit = defineEmits(['eventLogEmit']);
const soldierQueue = ref<TrainingSoldiers[]>([]);

//const emit = defineEmits(['soldierResponse'])

const props = defineProps({
    player: Player,
    time: Time
});
const refPlayer = toRef(props, 'player');
const refTime = toRef(props, 'time');

//Watch the time change so we can get all of the ready to ship soldiers into the ranks SIR YES SIR
watch(refTime, () => {
    let tempLen = soldierQueue.value.length;
    //@ts-ignore these warning are ignored because this method would never be run if these values were null.
    soldierQueue.value = soldierQueue.value.filter(soldier => soldier.endDate > refTime.value.Days);
    let soldiersTrained = tempLen - soldierQueue.value.length;
    //@ts-ignore
    if(soldiersTrained > 0){
        refPlayer.value.soldiers += soldiersTrained;
        emit('eventLogEmit', `${soldiersTrained} soldiers trained.`)
    }
},{deep:true});



function decommisionSoldier(){
    if(refPlayer.value){
        //It seems that when i manipulate this ref it updates the object in App.vue which was a nice discovery of mine
        refPlayer.value.soldiers -= 1;
        refPlayer.value.nonCommittedPersonnel += 1;
    }
    
}

function commisionSoldier(){
    if(refPlayer.value && refPlayer.value?.nonCommittedPersonnel > 0){
        if(refTime.value){
            soldierQueue.value.push(new TrainingSoldiers(refTime.value.Days));
        }
        //refPlayer.value.soldiers += 1;
        refPlayer.value.nonCommittedPersonnel -= 1;
    }
}
</script>