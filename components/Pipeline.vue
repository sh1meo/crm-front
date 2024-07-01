<script setup>
  const classPipeline = ref('pipeline');
  const classHeader = ref('header');
  const classStages = ref('stages');
  const classStage = ref('stage');
  // const pipelineStore = usePipelineStore();
  let id = 0;
  const stages = ref([
    { id: id++, title: 'Неразобранное' },
    { id: id++, title: 'Разобранное' },
    { id: id++, title: 'Пиво' },
  ]);
</script>

<template>
  <div v-bind:class="classPipeline">
    <div v-bind:class="classHeader">
      <h1>Pipeline title</h1>
    </div>
    <div v-bind:class="classStages">
      <div
        v-for="stage in stages"
        :key="stage.id"
        v-bind:class="classStage"
      >
        <div> {{ stage.title }} </div>
        <div>body</div>
      </div>
    </div>
  </div>
</template>

<style>
  .pipeline {
    color: pink;
    height: 100vh;
  }
  .header {
    width: 100%;
    height: 10%;
    top: 0;
  }
  .stages {
    display: flex;
    width: 1100px;
    height: 100%;
    overflow-x: scroll;
  }
  .stage {
    height: 100%;
    width: 500px;
    text-align: center;
  }
</style>