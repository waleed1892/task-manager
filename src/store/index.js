import { createStore } from 'vuex';
import task from './modules/task';
const store = createStore({
    modules: {
        task: task
    }
})

export default store