<template>
  <DefaultLayout>
    <div>
      <div class="container">
        <h1>Edit Task</h1>
        <form @submit.prevent="save">
          <div>
            <label>Name</label>
            <input type="text" v-model="task.title" />
          </div>
          <div>
            <label for="complete">Completed</label>
            <input
              type="checkbox"
              id="complete"
              :checked="task.completed"
              @change="toggleCheckbox"
            />
          </div>
          <button>Edit</button>
        </form>
      </div>
      <router-link id="backButton" to="/">Back to tasks</router-link>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/default.vue";
import { onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const store = useStore();
const router = useRouter();
const route = useRoute();

let task = reactive({ title: "", completed: false });

onMounted(() => {
  const tmpTask = store.state.task.tasks.find(
    (task) => task.id == route.params.id
  );
  if (!task) {
    router.push("/");
  }
  Object.assign(task, tmpTask);
});

const save = () => {
  store.dispatch("task/updateTask", task);
  router.push("/");
};

const toggleCheckbox = (e) => {
  task.completed = e.target.checked;
};
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
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    & > div {
      display: flex;
      align-items: center;
      input[type="text"] {
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
      label {
        width: 20%;
        display: inline-block;
      }
    }

    button {
      border: none;
      background: #5634f4;
      color: white;
      font-weight: 600;
      font-size: 18px;
      border-radius: 5px;
      cursor: pointer;
      padding: 5px 0;
    }
  }
}
#backButton {
  background-color: #000;
  color: white;
  border: none;
  width: 200px;
  display: block;
  margin: 0 auto;
  margin-top: 30px;
  padding: 10px 0;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
}
</style>