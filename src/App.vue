<template>
  
  <Header :playerName="playerName"/>
  
  <hr/>
  <NewPlayer v-if="isNew" @response="handlePlayerCreated"/>
  <br/>
</template>

<script setup lang="ts">

import Header from "./components/StaticPageComponents/header-bar.vue"
import NewPlayer from "./components/new-player.vue"
import { Player } from "./TS/player"
import { ref } from 'vue'

let isNew = ref(true);
const player = ref<Player | null>(null);
const playerName = ref("")

const handlePlayerCreated = (newPlayerName: string) => {
  //isNew.value = false;
  playerName.value = newPlayerName;
}

</script>