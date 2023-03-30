// import { store } from 'quasar/wrappers'
// import { createStore } from 'vuex'

// export default store(function (/* { ssrContext } */) {
//   const Store = createStore({
//     modules: {
      
//     },

    
//     strict: process.env.DEBUGGING
//   })

//   return Store
// })
import { createStore } from 'vuex'
import tasks from './modules/tasks'

const store = createStore({
  modules: {
    tasks
    
  }
})
export default store 