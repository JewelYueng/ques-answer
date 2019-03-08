import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import QuestionGroup from './components/QuestionGroup.vue'
import Result from './components/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcom',
      component: Welcome
    },
    {
      path: '/questions',
      name: 'questions',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: QuestionGroup
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
