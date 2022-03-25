<template>
  <div class="container">
    <h1>task manager</h1>
    <form @submit.prevent="save">
      <input type="text" placeholder="e.g. wash dishes" v-model="title" />
      <button>Submit</button>
    </form>
    <div v-if="titleError" class="error">Title field is required</div>
    <div v-else-if="successMessage" class="success">Task created successfully</div>
    <div v-else>&nbsp;</div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { reactive, ref, watch } from "vue";
const store = useStore();

const title = ref("");
const titleError = ref(false);
const successMessage = ref(false);

const save = () => {
  if (title.value === "") {
    titleError.value = true;
    return false;
  }
  const task = {
    title: title.value,
    completed: false,
  };
  store.dispatch("task/createTask", task);
  title.value = "";
  successMessage.value = true;
  setTimeout(() => {
    successMessage.value = false;
  }, 2000);
};

watch(title, (title, oldTitle) => {
  if (oldTitle !== title && title !== "") {
    titleError.value = false;
  }
});
</script>

<style lang="scss" scoped>
.container {
  background-color: #fff;
  padding: 40px;
  border: 1px solid #eee;
  box-shadow: 0 1px 6px rgba($color: #000, $alpha: 0.2);
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  form {
    display: flex;
    margin-top: 20px;
    input {
      width: 80%;
      border: none;
      background-color: #f0f2f6;
      padding: 12px 15px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      font-size: 16px;
      &:focus-visible {
        outline: none;
      }
    }
    button {
      width: 20%;
      border: none;
      background: #5634f4;
      color: white;
      font-weight: 600;
      font-size: 18px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      cursor: pointer;
    }
  }
  .error,
  .success {
    font-size: 14px;
    margin-top: 10px;
  }
  .error {
    color: red;
  }
  .success {
    color: green;
  }
}
</style>