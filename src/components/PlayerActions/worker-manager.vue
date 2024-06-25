<template>
    <!--THIS COMPONENT IS GOING TO HOUSE MANY COMPONENTS. IT WILL BE RESPONSIBLE FOR DISPLAYING I
    NFORMATION ABOUT SOLDIERS. TRAINING THEM, DECOMMISIONING THEM 
    AND THE COMPONENTS THAT WILL DO THOSE ACTIONS-->
    <div>
        <h2>Guild Manager</h2>
        <hr/>
        <HunterManager style="float: right;" class="guildItem" @event-log-emit="AddMessageToEventLog" :player="player"/>
        <IronsmithManager class="guildItem" @event-log-emit="AddMessageToEventLog" :player="player"/>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import HunterManager from './Workers/hunter-manager.vue';
import IronsmithManager from './Workers/ironsmith-manager.vue';

const emit = defineEmits(['eventLogEmit']);
const props = defineProps({
    player: Player,
});

function AddMessageToEventLog(message: string){
    emit('eventLogEmit', message);
}

</script>

<style>
.guildItem{
    padding: 5px;
    border-style: solid;
    width: 200px;
}
</style>