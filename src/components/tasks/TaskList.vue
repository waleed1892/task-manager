<template>
  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <Task :task="task" />
    </li>
  </ul>
</template>
<script setup>
import Task from "@/components/tasks/Task.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const tasks = computed(() => store.state.task.tasks);
</script>
<style lang="scss" scoped>
ul {
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  list-style: none;
  padding-left: 0;
  margin-top: 40px;
  li {
    flex-grow: 1;
  }
}
</style>