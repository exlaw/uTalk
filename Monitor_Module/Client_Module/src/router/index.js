import Vue from 'vue'
import Router from 'vue-router'
import Chatting from '../components/Chatting'
import Monitor from '../components/Monitor'
import GroupMonitor from '../components/GroupMonitor'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Monitor',
      component: Monitor
    },
    {
      path: '/group',
      name: 'GroupMonitor',
      component: GroupMonitor
    }
  ]
})
