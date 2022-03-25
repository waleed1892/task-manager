<template>
  <div class="item-container">
    <div>
      <div class="completed-img-container">
        <img v-if="task.completed" src="/icons/completed.svg" alt="" />
      </div>
      <h4>{{ task.title }}</h4>
    </div>
    <div class="actions">
      <img
        src="/icons/edit.svg"
        @click="$router.push(`/task/${task.id}/edit`)"
        alt=""
      />
      <img @click="() => deleteTask(task.id)" src="/icons/delete.svg" alt="" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

defineProps(["task", "index"]);
const store = useStore();
const deleteTask = (id) => {
  store.dispatch("task/deleteTask", id);
};
</script>

<style lang="scss" scoped>
.item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #eee;
  box-shadow: 0 1px 2px rgba($color: #000, $alpha: 0.2);
  padding: 20px;

  & > div:first-child {
    display: flex;
    column-gap: 5px;
    align-items: center;
  }

  .completed-img-container {
    width: 30px;
    height: 20px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .actions {
    display: flex;
    column-gap: 10px;
    img {
      width: 20px;
      cursor: pointer;
    }
  }
}
</style>