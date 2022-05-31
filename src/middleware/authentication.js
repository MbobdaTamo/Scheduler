export default ({ store, next }) => {

  if (!store.state.login.connected) {
    store.commit('checkingSession',true)
    const axios = require('axios')
    axios.get(store.state.baseUrl + 'isConnected.php')
      .then((response) => {
        if(response.data) {
          store.commit('connected',true)
        }
        store.commit('checkingSession',false)
      })
      .catch((error) => {
        console.log(error)
        store.commit('checkingSession',false)
      })
  }
  next()
}
