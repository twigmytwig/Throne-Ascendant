<template>
  <!--YEs I am aware this is dumb. It was throwing a stupid error about 
  player potentially being null and i didnt feel like fixing it so this is my temp solution-->
  <div v-if="player">
    <Header  :player="player" :time="time"/>
  </div>
  <div v-else>
    Throne Ascendant
  </div>
  
  
  <hr/>
  <NewPlayer v-if="isNew" @response="handlePlayerCreated"/>
  <br/>
</template>

<script setup lang="ts">

import Header from "./components/StaticPageComponents/header-bar.vue"
import NewPlayer from "./components/new-player.vue"
import { Player } from "./TS/player"
import { ref } from 'vue'
import { Time } from './TS/Time'

let isNew = ref(true);
const time = ref<Time>({Days: 0})
const player = ref<Player | null>(null);
const playerName = ref("")

const handlePlayerCreated = (newPlayer: Player) => {
  isNew.value = false;
  player.value = newPlayer;
  playerName.value = player.value.name;
  startIncrementing();
}

function incrementDays(){
  time.value.Days += 1;
}

function startIncrementing(){
  setInterval(incrementDays, 2000);
}

</script>