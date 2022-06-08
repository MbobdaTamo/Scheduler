import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import middleware from '@grafikri/vue-middleware'
import { facebookDate } from './plugins/facebookDate'
import 'mdb-vue-ui-kit/css/mdb.min.css';
import 'mdb-vue-ui-kit/css/mdb.rtl.min.css';


const app = createApp(App)
// Create a new store instance.
const store = createStore({
    state () {
      return {
        count: 0,
        login: {
          connected: false,
          checkSession: false,
          id: 0
        },
        baseUrl: 'http://localhost/projet/schedule_backend/',
        // baseUrl: 'https://leliberateurdumonde.000webhostapp.com/projet/blw_game_backend/',
      }
    },
    mutations: {
      increment (state) {
        state.count++
      },
      connected (state,playload) {
        state.login.connected = playload
      },
      checkingSession (state,playload) {
        state.login.checkSession = playload
      }
    }
  })

  app.mixin({
    methods: {
      facebookDate: facebookDate
    }
  })
  app.use(router)
  app.use(store)
  app.mount('#app')
  router.beforeEach(middleware({store}))

  

  
