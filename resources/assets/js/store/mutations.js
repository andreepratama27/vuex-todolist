export default {

  GET_TASK (state, data) {
    state.tasks = data
  },

  ADD_TASK (state, data) {
    state.tasks.unshift({task: data.task})
  },

  DEL_TASK (state, data) {
    state.tasks.splice(state.tasks.indexOf(data), 1)
  }
}