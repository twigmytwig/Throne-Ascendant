<template>
    <div v-if="player">
        Throne Ascendant | {{ player?.entitySignifier }} {{ player?.name }} | {{ player?.treasury }} DB | {{ time?.Days }} days
    </div>
    <div v-else>
        Throne Ascendant
    </div>
    
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { Time } from '@/TS/Time'

const props = defineProps({
    player: Player,
    time: Time
});
</script>