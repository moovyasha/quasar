import taskApi from '/vue.js/quasar-project/src/api/tasksFromSite'

export default {
  namespaced: true,
  actions: {
    async fetchTasks({commit}) {
      try {
        const { data } = await taskApi.getTasks()
        commit('updateTasks', data)
        // console.log(data)
      } catch (e) {
        console.log(e)
      }

      console.log(taskApi) 
      // в taskApi передается функция getTasks()
    }
  },
  mutations: {
    updateTasks(state, data) {
      state.taskList = data
    },
    addTask (state, newTask) {
      state.taskList.push(newTask)
    },
    editTask (state, editedItem) {
      const indexEditedTask = state.taskList.findIndex((item) => item.id === editedItem.id)
      console.log(indexEditedTask)
      state.taskList.splice(indexEditedTask, 1, editedItem)
    },
    removeTask (state, index) {
      const deleteTask = state.taskList.findIndex((item) => item.id === index)
      console.log(deleteTask)
      state.taskList.splice(deleteTask, 1)
    },
    statusTask (state, index) {
      const complete = state.taskList.findIndex((item) => item.id === index)
      state.taskList[complete].completed = !state.taskList[complete].completed
    }
  },
  state: {
    taskList: []
  },
  getters: {
    // allTasks(state) {
    //   return state.taskList
    // }
  }
}
