<template>
    <div class="container">
        <PlayerStatBox @event-log-emit="AddToEventLog" :time="time" :player="player"/>
        <PlayerResourceInfoBox :player="player"/>
    </div>
</template>

<script setup lang="ts">

import PlayerStatBox from "./player-stats.vue"
import PlayerResourceInfoBox from "./player-resources.vue"
import { Player } from '@/TS/player';
import { Time } from "@/TS/Time";
import { toRef } from "vue";

const emit = defineEmits(['eventLog'])

const props = defineProps({
    player: Player,
    time: Time
});
const refTime = toRef(props, 'time');

function AddToEventLog(message:string){
    emit("eventLog",message)
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row; /* Makes the children sit side by side */
  gap: 20px; /* Optional: Adds space between the components */
}
</style>