<template>
    <div class="playerInfoBox">
        <ul>
            <li v-for="(count, profession) in professionCounts" :key="profession">
                {{ profession }}: {{ count }}
            </li>
            <li>
                Soldiers: {{ player?.soldiers }}
            </li>
            <li>
                Unemployed: {{ player?.nonCommittedPersonnel }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { Player } from '@/TS/player';
import { computed, ref, toRef, watch } from 'vue';
import { Time } from '@/TS/Time';

const props = defineProps({
    player: Player,
    time: Time
});
const emit = defineEmits(['eventLogEmit']);

//REFS
const refPlayer = toRef(props, 'player');
const refTime = toRef(props, 'time');
const professionCountsRef = ref<Map<string, number>>(new Map());

//Watch the time change so we can get all of the ready to ship soldiers into the ranks SIR YES SIR
watch(refTime, () => {
    //1) filter out the workers who arent ready to produce their resource
    //2) add the resource to the total
    //3) recalculate the next produce date
    //TODO: FIND A MORE EFFICIENT SOLUTION AS THIS IS GOING TO BE BAD AS THE LIST GROWS
    refPlayer.value?.workersList.forEach(worker =>{
        //@ts-ignore
        if(worker.productionDate <= refTime.value?.Days){
            worker.profession.resources.forEach(resource => {
                const playerResource = refPlayer.value?.resources.find(x => x.id === resource);
                if(playerResource){
                    playerResource.amount += worker.profession.productionAmount;
                    emit('eventLogEmit', `${worker.profession.productionAmount} units of ${playerResource.name} created.`)
                }
            });
            worker.productionDate += worker.profession.productionRateDays
        }
    });
},{deep:true});

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