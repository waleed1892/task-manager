const initalTasks = () => {
    const localStorageTasks = localStorage.getItem('tasks');
    if (localStorageTasks) {
        return JSON.parse(localStorageTasks);
    } else {
        return []
    }
}
export default {
    namespaced: true,
    state: () => ({
        tasks: initalTasks()
    }),
    mutations: {
        updateTasks(state, newTasks) {
            state.tasks = newTasks
            localStorage.setItem('tasks', JSON.stringify(newTasks))
        }
    },
    actions: {
        createTask({ commit, state }, payload) {
            const tasks = [...state.tasks]
            let id = 1;
            if (tasks.length) {
                id = tasks[tasks.length - 1].id + 1
            }
            tasks.push({ ...payload, id })
            commit('updateTasks', tasks)
        },
        deleteTask({ commit, state }, id) {
            const tasks = state.tasks.filter(task => task.id !== id);
            commit('updateTasks', tasks)
        },
        updateTask({ commit, state }, task) {
            const tasks = [...state.tasks]
            const taskIndex = tasks.findIndex(item => item.id === task.id)
            tasks[taskIndex] = task
            commit('updateTasks', tasks)
        }
    }
}