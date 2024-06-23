<template>
    <div class="playerInfoBox">
        <ul>
            <li v-for="(count, profession) in professionCounts" :key="profession">
                {{ profession }}: {{ count }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { computed, ref, toRef } from 'vue';

const props = defineProps({
    player: Player,
});
const refPlayer = toRef(props, 'player');
const professionCountsRef = ref<Map<string, number>>(new Map());
const updateProfessionCounts = () => {
  const counts = countWorkersByProfession();
  professionCountsRef.value = counts;
};

function countWorkersByProfession(): Map<string, number> {
    const countMap = new Map<string, number>();

    refPlayer.value?.workersList.forEach(worker => {
        const professionName = worker.profession.name;
        if (countMap.has(professionName)) {
            countMap.set(professionName, countMap.get(professionName)! + 1);
        } else {
            countMap.set(professionName, 1);
        }
    });

    return countMap;
}

updateProfessionCounts();

// Create a computed object from the Map for easier use in v-for. Thanks chat-gpt!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const professionCounts = computed(() => {
  const counts: { [key: string]: number } = {};
  professionCountsRef.value.forEach((count, profession) => {
    counts[profession] = count;
  });
  return counts;
});

</script>

<style>
.playerInfoBox{
    padding: 5px;
    border-style: solid;
    width: 200px;
}
</style>