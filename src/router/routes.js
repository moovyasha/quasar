import Home from '/vue.js/quasar-project/src/views/Home.vue'
const routes = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [
  //     { path: '', component: () => import('pages/IndexPage.vue') }
  //   ]
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  },
  {
    path: '/', //первый обязательный параметр путь - главная страница, стартовая
    component: Home //второй обязательный параметр, Home создаем сами, то как будет выглядеть стартовая страница
  },
  {
    path: '/todos', //регистрируем еще 1 путь
    component: () => import('/vue.js/quasar-project/src/components/TodoList.vue') //это lazy loading
  },
]

export default routes
