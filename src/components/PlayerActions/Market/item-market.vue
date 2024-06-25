<template>
    <!--THIS COMPONENT IS GOING TO HOUSE MANY COMPONENTS. IT WILL BE RESPONSIBLE FOR DISPLAYING I
    NFORMATION ABOUT SOLDIERS. TRAINING THEM, DECOMMISIONING THEM 
    AND THE COMPONENTS THAT WILL DO THOSE ACTIONS-->
    <div>
        <h2>Tribal Market</h2>
        <hr/>
        <button @click="purchaseWeapon()" v-if="player">Buy one weapon (50 DB)</button>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { toRef } from 'vue';

const emit = defineEmits(['eventLogEmit']);
const props = defineProps({
    player: Player,
});
const refPlayer = toRef(props, 'player');

function purchaseWeapon(){
    if(refPlayer.value && refPlayer.value.treasury >= 50)
    {
        refPlayer.value.resources[4].amount += 1;
        refPlayer.value.treasury -= 50;
        emit('eventLogEmit', "You spend 50 doubloons on 1 weapon."); 
    }
    else{
        emit('eventLogEmit', "You don't have enough doubloons in the treasury for this!."); 
    }
    
}
</script>

<style>
.marketCard{
    padding: 5px;
    border-style: solid;
    width: 200px;
}
</style>