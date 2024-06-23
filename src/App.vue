<template>
  <!--YEs I am aware this is dumb. It was throwing a stupid error about 
  player potentially being null and i didnt feel like fixing it so this is my temp solution-->
  <div v-if="player">
    <Header style="float:left; padding-right: 10px;" :player="player" :time="time"/>
    <button  @click="toggleTimer">
      {{ isTimerOn ? 'Stop Time' : 'Start Time' }}
    </button>
  </div>
  <div v-else>
    Throne Ascendant
  </div>
  
  
  <hr/>
  <NewPlayer v-if="isNew" @response="handlePlayerCreated"/>
  <br/>
  <div v-if="player">
    <PlayerInfoBox :player="player"/>
    <hr/>
    <ActionCard><SoldierManager :player="player" :time="time"/></ActionCard>
  </div>
</template>

<script setup lang="ts">

import Header from "./components/StaticPageComponents/header-bar.vue";
import NewPlayer from "./components/new-player.vue";
import ActionCard from "./components/RenderComponents/player-action-card.vue"
import SoldierManager from "./components/PlayerActions/soldier-manager.vue"
import PlayerInfoBox from "./components/PlayerInfoComponents/player-info-master.vue"
import { Player } from "./TS/player";
import { ref } from 'vue';
import { Time } from './TS/Time';

let isNew = ref(true);
const time = ref<Time>(new Time(0));
const isTimerOn = ref(false);
const player = ref<Player | null>(null);
const playerName = ref("");
let intervalId: number | undefined;

const handlePlayerCreated = (newPlayer: Player) => {
  isNew.value = false;
  player.value = newPlayer;
  playerName.value = player.value.name;
}
function incrementDays(){
  time.value.Days += 1;
}

function startIncrementing(){
  if (!intervalId) {
        intervalId = setInterval(incrementDays, 2000);
        isTimerOn.value = true;
  }
}

function stopIncrementing(){
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
        isTimerOn.value = false;
      }
}

function toggleTimer(){
      if (isTimerOn.value) {
        stopIncrementing();
      } else {
        startIncrementing();
      }
}

</script>