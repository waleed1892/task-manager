import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '@/views/tasks/index.vue';
import EditTask from '@/views/tasks/edit.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Tasks',
      component: TaskView
    },
    {
      path: '/task/:id/edit',
      name: 'Edit Task',
      component: EditTask
    }
  ]
})

export default router
