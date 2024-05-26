import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home/index.vue'
import Activity from './views/Activity.vue'
import Promotion from './views/Promotion.vue'
import Wallet from './views/Wallet.vue'
import Account from './views/Account.vue'
import AllLonpmtteryGames from './views/Home/AllLotteryGames.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/activity', name: 'activity', component: Activity },
    { path: '/promotion', name: 'promotion', component: Promotion },
    { path: '/wallet', name: 'wallet', component: Wallet },
    { path: '/account', name: 'account', component: Account },
    { path: '/home/lotterygames', name: 'lotterygames', component: AllLonpmtteryGames}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')