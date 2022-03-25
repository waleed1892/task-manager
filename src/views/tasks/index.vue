<script setup>
import DefaultLayout from "@/layouts/default.vue";
import CreateTask from "@/components/tasks/CreateTask.vue";
import TaskList from "@/components/tasks/TaskList.vue";
</script>

<template>
  <DefaultLayout>
    <CreateTask />
    <TaskList />
  </DefaultLayout>
</template>